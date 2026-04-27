import { Router } from 'express'
import { criarPedido, listarPedidos } from '../controllers/pedidoController.js'
import { autenticarUsuario } from '../middlewares/authMiddleware.js'

const router = Router()

router.post('/pedidos', autenticarUsuario, criarPedido)
router.get('/pedidos', autenticarUsuario, listarPedidos)

export default router