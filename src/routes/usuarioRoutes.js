import { Router } from 'express'
import { criarUsuario, login } from '../controllers/usuarioController.js'
import { autenticarUsuario } from '../middlewares/authMiddleware.js'

const router = Router()

router.post('/usuarios', criarUsuario)
router.post('/login', login)
router.get('/perfil', autenticarUsuario, (req, res) => {
  return res.json({
    mensagem: 'Rota protegida acessada com sucesso',
    usuarioId: req.usuarioId
  })
})

export default router