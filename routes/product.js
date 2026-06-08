import express from 'express'
import { db } from '../database.js'
import ProductService from '../services/product.js'

let router = express.Router()

let productService = new ProductService(db)

router.get("/", (req, res) => {
    res.send(productService.getAll())
})

export default router