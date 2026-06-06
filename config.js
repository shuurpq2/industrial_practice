import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

class Settings {
  constructor() {
    this.PORT = process.env.PORT
  
    let pathToFile = fileURLToPath(import.meta.url)
    let pathToDir = path.dirname(pathToFile)
  
    this.PATH_TO_DIR = pathToDir
  }
}

let settings = new Settings()

export default settings