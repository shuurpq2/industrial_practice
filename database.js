import Database from "better-sqlite3"
import Product from "./models/product.js"

export let db = new Database("./db.sqlite", {verbose: console.log})

let models = [Product]

for (let model of models) {
    let fields = []

    Object.entries(model.schema).forEach(([key, value]) => {
        fields.push(`${key} ${value}`)
    })

    db.prepare(`CREATE TABLE IF NOT EXISTS ${model.tablename} (${fields.join(", ")})`).run()
}