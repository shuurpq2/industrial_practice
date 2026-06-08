import BaseModel from "./base.js"

export default class Product extends BaseModel {
    static tablename = "products"

    static id = "INTEGER PRIMARY KEY AUTOINCREMENT"
    static name = "VARCHAR(50)"
    static price = "FLOAT"
}