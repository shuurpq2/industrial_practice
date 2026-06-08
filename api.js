import settings from "./config.js"
import express from "express"
import path from "path"
import productRouter from "./routes/product.js"

let apiRouter = express.Router()

apiRouter.use("/products", productRouter)

apiRouter.get("/", (req, res) => {
  res.sendFile(path.join(settings.PATH_TO_DIR, "templates/index/index.html"))
})

apiRouter.get("/ping", (req, res) => {
  res.send("pong")
})

export default apiRouter