import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import usuarioRoutes from './routes/usuarioRoutes.js'
import produtoRoutes from './routes/produtoRoutes.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use(usuarioRoutes)
app.use(produtoRoutes)

app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando 🚀' })
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})