import bcrypt from 'bcrypt'
import prisma from '../database/prisma.js'
import jwt from 'jsonwebtoken'


export async function criarUsuario(req, res) {
  const { nome, email, senha } = req.body

  const usuarioExiste = await prisma.usuario.findUnique({
    where: { email }
  })

  if (usuarioExiste) {
    return res.status(400).json({ mensagem: 'E-mail já cadastrado' })
  }

  const senhaCriptografada = await bcrypt.hash(senha, 10)

  const usuario = await prisma.usuario.create({
    data: {
      nome,
      email,
      senha: senhaCriptografada
    }
  })

  const { senha: _, ...usuarioSemSenha } = usuario

  return res.status(201).json(usuarioSemSenha)
}

export async function login(req, res) {
  const { email, senha } = req.body

  const usuario = await prisma.usuario.findUnique({
    where: { email }
  })

  if (!usuario) {
    return res.status(400).json({ mensagem: 'Usuário não encontrado' })
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha)

  if (!senhaValida) {
    return res.status(400).json({ mensagem: 'Senha inválida' })
  }

  const token = jwt.sign(
  { id: usuario.id },
  process.env.JWT_SECRET,
  { expiresIn: '1d' }
)

  return res.json({
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email
    },
    token
  })
}