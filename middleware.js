import { NextResponse } from 'next/server'

const username = process.env.BASIC_AUTH_USER || 'admin'
const password = process.env.BASIC_AUTH_PASS || 'secret'

export function middleware(req) {
  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const [scheme, encoded] = basicAuth.split(' ')
    if (scheme === 'Basic') {
      const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
      const [user, pass] = decoded.split(':')

      if (user === username && pass === password) {
        return NextResponse.next()
      }
    }
  }

  return new NextResponse('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

export const config = {
  matcher: ['/:path*'],
}
