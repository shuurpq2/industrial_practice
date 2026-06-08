import { db } from "../database.js"
import Product from "../models/product.js"

export default class ProductRepo {
    constructor(db) {
        this.model = Product
        this.db = db
    }

    /**
     * 
     * @param {string} name 
     * @param {number} price 
     */
    create(name, price) {
        let stmt = `INSERT INTO ${this.model.tablename} (name, price) VALUES (:name, :price)`

        this.db.prepare(stmt).run({
            name: name, 
            price: price
        })
    }

    /**
     * 
     * @param {object | void} pairs 
     * @returns {Array}
     */
    get(pairs = {}) {
        let stmt = `SELECT * FROM ${this.model.tablename}`
        let pairsEntries = Object.entries(pairs)

        if (pairsEntries.length > 0) {
            stmt += " WHERE "

            for (let item of pairsEntries) {
                stmt += `${item[0]} = '${item[1]}' AND `
            }

            stmt = stmt.substring(0, stmt.length-5)
        }

        let res = this.db.prepare(stmt).all()

        return res
    }

    /**
     * 
     * @param {number} id 
     * @param {object} pairs 
     */
    update(id, pairs) {
        let string_pairs = ""
        Object.entries(pairs).forEach(([key, value]) => {
            string_pairs += `${key} = '${value}', `
        })
        string_pairs = string_pairs.substring(0, string_pairs.length-2)

        let stmt = `UPDATE ${this.model.tablename} SET ${string_pairs} WHERE id = :id`
        
        this.db.prepare(stmt).run({id: id})
    }

    /**
     * 
     * @param {number} id 
     */
    delete(id) {
        let stmt = `DELETE FROM ${this.model.tablename} WHERE id = :id`

        this.db.prepare(stmt).run({id: id})
    }
}

let a = new ProductRepo(db)