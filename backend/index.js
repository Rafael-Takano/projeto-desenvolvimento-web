const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

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


const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', userSchema);
const Product = mongoose.model("Product", productSchema)
const Category = mongoose.model("Category", categorySchema)

app.use(express.json());
app.use(express.static('public'))
app.use(cors({
  origin: '127.0.0.1:5173'
}));


app.get("/users", async (request, response) => {
  const users = await User.find({});
  users.map(user => user['password'] = '')
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/users", async (request, response) => {
  const user = new User(request.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/users", async (request, response) => {
  let usr = request.body;
  try {
    console.log(usr);
    let newUsr = await User.findOneAndUpdate({_id: usr._id},{ name: usr.name, email: usr.email, phone: usr.phone, address: usr.address }, {new: true});
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
  let users = await Admin.find({});
  users.map(user => user['password'] = '')
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/admins", async (request, response) => {
  let adm = request.body;
  try {
    await Admin.updateOne({_id: adm._id },{ name: adm.name, email: adm.email, phone: adm.phone, address: adm.address });
    response.status(200);
  } catch (error) {
    response.status(500).send(error);
  }
}); 

app.get('/categories', async (request, response) => {
  const Categories = await Category.find({})
  try {
    response.send(Categories);
  } catch (error) {
    response.status(500).send(error)
  }
});

app.get('/products', async (request, response) => {
  const products = await Product.find({})
  try {
    response.send(products);
  } catch (error) {
    response.status(500).send(error)
  }
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});