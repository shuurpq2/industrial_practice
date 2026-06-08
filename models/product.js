import BaseModel from "./base.js"

export default class Product extends BaseModel {
    static tablename = "products"

    static schema = {
        id: "INTEGER PRIMARY KEY AUTOINCREMENT",
        name: "VARCHAR(50)",
        price: "REAL"
    }
}