import ProductRepo from "../repos/product";

export default class ProductService {
    constructor(db) {
        this.repo = ProductRepo(db)
    }

    create(name, price) {
        this.repo.create(name, price)
    }

    get(column, value) {
        this.repo.get(column, value)
    }

    getMulti(column, value) {
        this.repo.getMulti(column, value)
    }

    update(id, pairs) {
        this.repo.update(id, pairs)
    }

    delete(id) {
        this.repo.delete(id)
    }
}