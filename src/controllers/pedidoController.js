import prisma from '../database/prisma.js'

export async function criarPedido(req, res) {
  const usuarioId = req.usuarioId
  const { tipo, formaPagamento, trocoPara, itens } = req.body

  if (!itens || itens.length === 0) {
    return res.status(400).json({ mensagem: 'O pedido precisa ter pelo menos um item' })
  }

  let total = 0

  const itensPedido = []

  for (const item of itens) {
    const produto = await prisma.produto.findUnique({
      where: { id: item.produtoId }
    })

    if (!produto || !produto.ativo) {
      return res.status(400).json({
        mensagem: `Produto inválido: ${item.produtoId}`
      })
    }

    const subtotal = produto.preco * item.quantidade

    total += subtotal

    itensPedido.push({
      produtoId: produto.id,
      quantidade: item.quantidade,
      precoUnitario: produto.preco
    })
  }

  const pedido = await prisma.pedido.create({
    data: {
      usuarioId,
      tipo,
      formaPagamento,
      trocoPara,
      total,
      itens: {
        create: itensPedido
      }
    },
    include: {
      itens: {
        include: {
          produto: true
        }
      }
    }
  })

  return res.status(201).json(pedido)
}

export async function listarPedidos(req, res) {
  const usuarioId = req.usuarioId

  const pedidos = await prisma.pedido.findMany({
    where: {
      usuarioId
    },
    include: {
      itens: {
        include: {
          produto: true
        }
      }
    },
    orderBy: {
      criadoEm: 'desc'
    }
  })

  return res.json(pedidos)
}