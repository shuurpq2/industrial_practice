import express from "express"
import apiRouter from "./api.js"


let app = express()
const PORT = 3000


app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`)
})


app.use(apiRouter)