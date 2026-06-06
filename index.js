import express from "express"
import apiRouter from "./api.js"
import settings from "./config.js"

let app = express()

app.listen(settings.PORT, () => {
  console.log(`Server launched on http://localhost:${settings.PORT}`)
})

app.use(apiRouter)