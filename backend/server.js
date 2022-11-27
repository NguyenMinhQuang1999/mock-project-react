import  express from "express";
import  products from "./data/products.js";
import  dotevn  from 'dotenv';
import connectDB from "./config/db.js";
import productRoutes from './routers/productRoutes.js';
import userRoutes from './routers/userRoutes.js';
import uploadRoutes from './routers/uploadRoutes.js';
import path from 'path'


import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const app = express();

dotevn.config();

connectDB();
app.use(express.json());
// app.use(notFound);
app.use(errorHandler);
app.use("/api/products", productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/upload', uploadRoutes)
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.get("/", (req, res) => {
    res.send("Api...");
})
// app.get("/api/products", (req,res) => {
//     res.json(products);
// })

// app.get("/api/products/:id", (req, res) => {
//     const product = products.find(p => p._id === req.params.id);
//     res.json(product);
// })



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Serve is listening on port ${PORT}`));



// const express = require('express')
// const app = express()
// const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })