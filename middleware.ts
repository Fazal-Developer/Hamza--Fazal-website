import { NextRequest, NextResponse } from 'next/server'

// The admin panel is a local-only content editor. It must never do
// anything on a deployed/production build, so this guard runs first,
// before any cookie/session check.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  const session = request.cookies.get('admin_session')?.value
  if (!session) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
