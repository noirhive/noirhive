import { NextResponse } from 'next/server'

// Set your username & password
const username = process.env.BASIC_AUTH_USER || 'admin'
const password = process.env.BASIC_AUTH_PASS || 'secret'

export function middleware(req) {
  const authHeader = req.headers.get('authorization')

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(' ')

    if (scheme === 'Basic') {
      const decoded = Buffer.from(encoded, 'base64').toString('utf-8')
      const [user, pass] = decoded.split(':')

      if (user === username && pass === password) {
        // ✅ Credentials match, allow request
        return NextResponse.next()
      }
    }
  }

  // ❌ Unauthorized
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}
