import { db } from "../database.js"
import Product from "../models/product.js"

export default class ProductRepo {
    constructor(db) {
        this.model = Product
        this.db = db
    }

    create(name, price) {
        this.db.prepare(`INSERT INTO ${this.model.tablename} (name, price) VALUES (:name, :price)`).run({
            name: name, 
            price: price
        })
    }

    get(column, value) {
        let res = this.db.prepare(`SELECT * FROM ${this.model.tablename} WHERE ${column} = :value`).get({
            value: value
        })

        return res
    }

    getMulti(column, value) {
        let res = this.db.prepare(`SELECT * FROM ${this.model.tablename} WHERE ${column} = :value`).all({
            value: value
        })

        return res
    }

    getAll() {
        let res = this.db.prepare(`SELECT * FROM ${this.model.tablename}`).all()

        return res
    }

    update(id, pairs) {
        let string_pairs = ""
        Object.entries(pairs).forEach(([key, value]) => {
            string_pairs += `${key} = '${value}', `
        })
        string_pairs = string_pairs.substring(0, string_pairs.length-2)
        
        this.db.prepare(`UPDATE ${this.model.tablename} SET ${string_pairs} WHERE id = :id`).run({id: id})
    }

    delete(id) {
        this.db.prepare(`DELETE FROM ${this.model.tablename} WHERE id = :id`).run({id: id})
    }
}