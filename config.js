import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

class Settings {
  constructor() {
    this.HOST = process.env.HOST || "localhost"
    this.PORT = process.env.PORT || 3001
  
    let pathToFile = fileURLToPath(import.meta.url)
    let pathToDir = path.dirname(pathToFile)
  
    this.PATH_TO_DIR = pathToDir
  }
}

let settings = new Settings()

export default settings