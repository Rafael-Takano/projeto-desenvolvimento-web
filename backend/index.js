const express = require('express');
const app = express();
const port = 8000; 

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
const Product = mongoose.model("Product",productSchema)
const Category = mongoose.model("Category",categorySchema)

const fs = require('fs');

// Path to the JSON file
const filePath = 'Categories.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Parse the JSON data
    jsonData=JSON.parse(data)
    for(let i = 0;i<jsonData.length;i++){
      newCategory = new Category({
        category: jsonData[i]
      })
    
      newCategory.save()
    }
    

  } catch (err) {
    console.error('Error parsing JSON data:', err);
  }
});

app.use(express.json());


app.post("/user", async (request, response) => {
    console.log(request.body);
    const user = new User(request.body);
    try {
        await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await User.find({});
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.use((req, res, next) => {
    console.log("Foi");
    next();
});

app.get('/', function(req, res){
    res.send("Hello world!");
 }); 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});