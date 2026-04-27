import jwt from 'jsonwebtoken'

export function autenticarUsuario(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ mensagem: 'Token não informado' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.usuarioId = decoded.id

    return next()
  } catch {
    return res.status(401).json({ mensagem: 'Token inválido' })
  }
}