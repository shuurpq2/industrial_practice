import ProductRepo from "../repos/product";

export default class ProductService {
    constructor(db) {
        this.repo = ProductRepo(db)
    }

    create(name, price) {
        return this.repo.create(name, price)
    }

    get(column, value) {
        return this.repo.get(column, value)
    }

    getMulti(column, value) {
        return this.repo.getMulti(column, value)
    }

    getAll() {
        return this.repo.getAll()
    }

    update(id, pairs) {
        return this.repo.update(id, pairs)
    }

    delete(id) {
        return this.repo.delete(id)
    }
}