export function apenasAdmin(req, res, next) {
  if (req.usuarioTipo !== 'ADMIN') {
    return res.status(403).json({ mensagem: 'Acesso negado' })
  }

  return next()
}