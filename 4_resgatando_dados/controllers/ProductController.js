const Product = require('../models/Product') // o controller esta pegando a classe de como o produto sera criado

module.exports = class ProductController {
    static async showProducts(req, res) { // O async vai tornar a função assincrona
        const products = await Product.getProducts()/* o await vai esperar o retorno do banco*/

        res.render('products/all', { products})
    }

    static createProduct(req, res) {
        res.render('products/create') // função para estar renderizando primeiro a view
    }
    
    static createProductPost(req, res) {
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description

        const product = new Product(name, image, price, description) // os valores acima vão receber o input da tela e aqui vai criar um objeto
    
        product.save() // salvo o procuto no banco

        res.redirect('/products')

    }
}