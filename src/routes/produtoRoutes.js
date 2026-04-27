import { Router } from 'express'
import { criarProduto, listarProdutos } from '../controllers/produtoController.js'
import { autenticarUsuario } from '../middlewares/authMiddleware.js'
import { apenasAdmin } from '../middlewares/adminMiddleware.js'

const router = Router()

router.post('/produtos', autenticarUsuario, apenasAdmin, criarProduto)
router.get('/produtos', listarProdutos)

export default router