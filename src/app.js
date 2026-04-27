import express from 'express'
import cors from 'cors'

import usuarioRoutes from './routes/usuarioRoutes.js'
import produtoRoutes from './routes/produtoRoutes.js'
import pedidoRoutes from './routes/pedidoRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ mensagem: 'API de pedidos funcionando 🚀' })
})

app.use(usuarioRoutes)
app.use(produtoRoutes)
app.use(pedidoRoutes)

export default app