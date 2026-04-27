import { Router } from 'express'
import { criarPedido, listarPedidos, listarTodosPedidos, atualizarStatusPedido  } from '../controllers/pedidoController.js'
import { autenticarUsuario } from '../middlewares/authMiddleware.js'
import { apenasAdmin } from '../middlewares/adminMiddleware.js'

const router = Router()

router.post('/pedidos', autenticarUsuario, criarPedido)
router.get('/pedidos', autenticarUsuario, listarPedidos)
router.get('/admin/pedidos', autenticarUsuario, apenasAdmin, listarTodosPedidos)
router.patch('/pedidos/:id/status', autenticarUsuario, apenasAdmin, atualizarStatusPedido)

export default router