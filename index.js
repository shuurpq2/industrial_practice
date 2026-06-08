import express from "express"
import apiRouter from "./api.js"
import settings from "./config.js"
import path from "path"

let app = express()

app.use(express.json())

app.use(express.static(path.join(settings.PATH_TO_DIR, "templates")))

app.use(apiRouter)

app.listen(settings.PORT, settings.HOST, () => {
  console.log(`Server launched on http://${settings.HOST}:${settings.PORT}`)
})