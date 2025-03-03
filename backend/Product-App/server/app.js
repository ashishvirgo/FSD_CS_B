const express = require("express");
const cors = require("cors");
const port = 3001;
const app = express();
const products = [{
    id: 1001,
    title: "LAPTOP",
    price: 55000.50,
    quantity: 10
}];
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5174'
}))
app.get("/products", (req, res) => {
    res.status(200);
    res.json(products);
})

app.get("/product/:id", (req, res) => {
    const pid = parseInt(req.params.id);
    console.log('pid=', pid)
    let index = products.findIndex((ind) => (ind.id == pid));
    let foundProduct = {};
    if (index == -1) {
        res.status(400);
        res.json({ status: "fail", message: "Product id not found" });
    }
    else {
        foundProduct = products[index];
        res.status(200);
        res.json({ status: "success", message: "Product found", foundProduct });
    }
})

app.post("/product", (req, res) => {
    const { title, price, quantity } = req.body;
    if (!title || !price || !quantity) {
        res.status(400);
        res.json({ status: "fail", message: "all fields are required" })
    }
    else {
        const newid=products.length>0 ? products[products.length-1].id+1: 1001;
        const newProduct = {
            id: newid, title, price, quantity
        }
        products.push(newProduct);
        res.status(201);
        res.json({ status: "success", message: "product created successfully", newProduct });
    }
})

app.listen(port, (err) => {
    try {
        if (err) throw err;
        else
            console.log(`Server is running on port ${port}`)
    }
    catch (err) {
        console.log("Server Error:", err.message)
    }
})