const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')
// o que vem depois do ponto em ProductController é o nome da função usada 
router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)
router.get('/:id', ProductController.getProduct)
router.get('/', ProductController.showProducts)

module.exports = router