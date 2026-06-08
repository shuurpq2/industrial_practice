import ProductRepo from "../repos/product.js";

export default class ProductService {
    constructor(db) {
        this.repo = new ProductRepo(db)
    }

    /**
     * 
     * @param {string} name 
     * @param {number} price 
     * @returns {null}
     */
    create(name, price) {
        return this.repo.create(name, price)
    }

    /**
     * 
     * @param {object | void} pairs
     * @returns {Array}
     */
    get(pairs = {}) {
        return this.repo.get(pairs)
    }

    /**
     * 
     * @param {number} id 
     * @param {object} pairs 
     * @returns {null}
     */
    update(id, pairs) {
        return this.repo.update(id, pairs)
    }

    /**
     * 
     * @param {number} id 
     * @returns 
     */
    delete(id) {
        return this.repo.delete(id)
    }
}