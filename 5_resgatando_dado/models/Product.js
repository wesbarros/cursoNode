const conn = require('../db/conn') // chamo a conexão com o banco
const {ObjectId} = require('mongodb')

class Product { // vou criar uma class em javaScript para poder criar os objetos que serão armazenados
    
    constructor(name, image, price, description){ // crio o construtor para os objetos
        this.name = name
        this.image = image
        this.price = price
        this.description = description
    }// terei um objeto com as 3 propriedades preenchidas.

    //Preciso usar o objeto acima para fazer operação com o banco
    save(){ // crio a função para salvar no banco
        // invoco os métodos

        const product = conn.db().collection('products').insertOne({ // a colection products é criada no momento que o objeto for inserido
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description
        })

        return product
    }

    static getProducts() {
        const products = conn.db().collection('products').find().toArray() // Chamo a conexão, indico o banco, a colection e depois uso o find(indico o que sera feito)
        
        return products // Vai n o banco em cima e retornar os dados localizad os
    }

    static async getProductById(id) {

        const product = conn.db.collection('products').findOne({_id: ObjectId(id)}) // digo qual o campo que quero resgatar

        return product
    }
}

module.exports = Product // exporto a classe para poder ser acessada em outros pontos do sistema


// Com isso o model fica pronto.