import prisma from '../database/prisma.js'

export async function criarProduto(req, res) {
  const { nome, descricao, preco } = req.body

  const produto = await prisma.produto.create({
    data: {
      nome,
      descricao,
      preco
    }
  })

  return res.status(201).json(produto)
}

export async function listarProdutos(req, res) {
  const produtos = await prisma.produto.findMany({
    where: {
      ativo: true
    }
  })

  return res.json(produtos)
}