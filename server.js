const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")))

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 45000, inStock: true },
  { id: 2, name: "Office Chair", category: "Furniture", price: 12000, inStock: false },
  { id: 3, name: "Headphones", category: "Accessories", price: 3000, inStock: true },
  { id: 4, name: "Smartphone", category: "Electronics", price: 25000, inStock: true },
  { id: 5, name: "Desk Lamp", category: "Furniture", price: 1500, inStock: false }
];

app.get('/products',(req,res)=>{
    res.json(products);
});

app.get('/products/categories',(req,res)=>{
    const categories = [...new Set(products.map(p=>p.category))];
    res.json({categories});
});

app.get('/products/instock',(req,res)=>{
    const inStock = products.filter(i=>i.inStock);
    res.json(inStock);
})

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});