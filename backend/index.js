const express = require('express');
const app = express();
const port = 8000;
const fs = require('fs')

const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'ExpressMarket';
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}

module.exports = new Database();

const productSchema = new mongoose.Schema({
  name: String,
  id: Number,
  price: Number,
  description: String,
  QtdStock: Number,
  QtdSold: Number,
  Category: String,
  Image: String
});

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
  phone: String,
  address: String
});

const categorySchema = new mongoose.Schema({
  category: String
});

function base64ToImage(base64String, outputPath) {
  // Remove the data URL prefix (e.g., 'data:image/png;base64,')
  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');

  // Create a buffer from the Base64 string
  const imageBuffer = Buffer.from(base64Data, 'base64');

  // Write the buffer to the output file
  fs.writeFile(outputPath, imageBuffer, err => console.log(err));  
}

const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', userSchema);
const Product = mongoose.model("Product", productSchema)
const Category = mongoose.model("Category", categorySchema)

app.use(express.json());
app.use(express.static('public'))

app.get('/login', async function (req, res) {
  console.log("Verificando Login");
  try {
    aux = await Admin.find({ email: req.body.email, password: req.body.password }).then();
    if (aux.length > 0) {
      res.status(200).send("Admin logado");
    } else {
      aux = await User.find({ email: req.body.email, password: req.body.password }).then();
      if (aux.length > 0) {
        res.status(200).send("Usuário Comum logado");
      } else {
        res.status(404).send("Não encontrado");
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({});
  }
});

app.get("/users", async (request, response) => {
  const users = await User.find({}, { password: 0 }).sort({name:1});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/users", async (request, response) => {
  const newUser = new User(request.body);
  try {
    users = await User.find({ email: newUser.email });
    if (users.length > 0) {
      response.status(409).send({});
    } else {
      await newUser.save()
      response.status(200).send(newUser);
    }
  } catch (error) {
    console.log(error)
    response.status(500).send(error);
  }
});

app.put("/users", async (request, response) => {
  let usr = request.body;
  try {
    console.log(usr);
    let newUsr = await User.findOneAndUpdate({ _id: usr._id }, { name: usr.name, email: usr.email, phone: usr.phone, address: usr.address }, { new: true });
    response.status(200).send(newUsr);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/users", async (request, response) => {
  let usr = request.body;
  try {
    await User.deleteOne({ _id: usr._id })
    response.status(200).send(`user ${usr._id} was delete`)
  } catch (err) {
    response.status(500).send(err);
  }
})

app.get("/admins", async (request, response) => {
  let users = await Admin.find({}).sort({name:1});
  users.map(user => user['password'] = '')
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/admins", async (request, response) => {
  let newAdmin = new Admin(request.body);
  try {
    admins = await Admin.find({ email: newAdmin.email });
    if (admins.length > 0) {
      response.status(409).send({});
    } else {
      await newAdmin.save()
      response.status(200).send(newAdmin);
    }
  } catch (error) {
    console.log(error)
    response.status(500).send(error);
  }
});

app.put("/admins", async (request, response) => {
  let adm = request.body;
  try {
    await Admin.updateOne({ _id: adm._id }, { name: adm.name, email: adm.email, phone: adm.phone, address: adm.address });
    response.status(200);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/categories', async (request, response) => {
  const Categories = await Category.find({}).sort({name:1})
  try {
    response.send(Categories);
  } catch (error) {
    response.status(500).send(error)
  }
});

app.get('/categories/:category', async (request, response) => {
  try {
    const produtos = await Product.find({ Category: request.params.category }).sort({name:1});
    if (produtos.length == 0) {
      response.status(404).send(produtos);
    } else {
      response.status(200).send(produtos);
    }
  } catch (error) {
    console.log(error)
    response.status(500).send(error)
  }
});

app.get('/products', async (request, response) => {
  const products = await Product.find({}).sort({name:1});
  try {
    response.send(products);
  } catch (error) {
    response.status(500).send(error)
  }
});

app.post('/products', async (request, response) => {
  let newProduct = new Product(request.body)

  try {
    base64ToImage(request.body.imageBlob,'./public' + request.body.Image)
    newProduct.save()
    response.status(200).send(newProduct);
  } catch (error) {
    console.log(error)
    response.status(500).send(error)
  }
});

app.put('/products', async (request, response) => {
  console.log("requisição put para products")
  let newProduct = request.body;
  try {
    if (request.body.imageBlob) {
      base64ToImage(request.body.imageBlob,'./public' + request.body.Image)
    }
    await Product.findByIdAndUpdate({ _id: newProduct._id}, { name: newProduct.name, id: newProduct.id, price: newProduct.price, description: newProduct.description, QtdStock: newProduct.QtdStock, QtdSold: newProduct.QtdSold, Category: newProduct.Category, Image: newProduct.Image }, { new: true });
    response.status(200);
    response.send(newProduct)
  } catch (error) {
    console.log(error)
    response.status(500).send(error);
  }
});

app.delete('/products', async (request, response) => {
  let product = request.body;
  console.log(product);
  try {
    await Product.deleteOne({ _id: product._id })
    response.status(200).send(`product ${product._id} was delete`)
  } catch (err) {
    response.status(500).send(err);
  }
})

app.get('/search/:str', async (request, response) => {
  console.log(request.params.str)
  const regex = new RegExp(request.params.str, 'i');
  const products = await Product.find({ $or: [{ name: regex }, { description: regex }, { Category: regex }] }).sort({name:1});
  try {
    response.send(products);
  } catch (error) {
    response.status(500).send(error)
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});