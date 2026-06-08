import Database from "better-sqlite3"
import Product from "./models/product.js"

let db = new Database("./db.sqlite", {verbose: console.log})

let models = [Product]

for (let model of models) {
    let fields = []

    Object.entries(model).forEach(([key, value]) => {
        if (key != "tablename") {
            fields.push(`${key} ${value}`)
        }
    })

    db.prepare(`CREATE TABLE IF NOT EXISTS ${model.tablename} (${fields.join(", ")})`).run()
}