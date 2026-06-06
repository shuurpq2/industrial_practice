import settings from "./config.js"
import express from "express"
import path from "path"

let apiRouter = express.Router()

apiRouter.get("/ping", (req, res) => {
  res.send("pong")
})

export default apiRouter