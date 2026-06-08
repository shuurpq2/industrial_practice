import express from 'express'
import { db } from '../database.js'
import ProductService from '../services/product.js'

let router = express.Router()

let productService = new ProductService(db)

router.post("/", (req, res) => {
    res.send(productService.create(req.body.name, req.body.price))
})

router.patch("/:id", (req, res) => {
    res.send(productService.update(req.params.id, req.body))
})

router.get("/", (req, res) => {
    res.send(productService.get(req.query))
})

router.delete("/:id", (req, res) => {
    res.send(productService.delete(req.params.id))
})

export default router