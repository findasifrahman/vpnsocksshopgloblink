import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');
  const { pathname } = request.nextUrl;

  // Debug logging
  console.log('Middleware:', { pathname, hasSession: !!session });

  // Public paths that don't require authentication
  const publicPaths = [
    '/',
    '/login',
    '/api/auth/login',
    '/api/auth/check',
    '/register',
    '/api/auth/logout'
  ];

  // Allow all public paths
  if (publicPaths.includes(pathname)) {
    console.log('Allowing public path:', pathname);
    return NextResponse.next();
  }

  // Allow static files and images
  if (
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/_next/image') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // If not authenticated, redirect to login
  if (!session) {
    console.log('No session, redirecting to login');
    const url = new URL('/login', request.url);
    return NextResponse.redirect(url);
  }

  // For API routes, return 401 if not authenticated
  if (pathname.startsWith('/api/')) {
    if (!session) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      );
    }
  }

  // Authenticated users can access all other routes
  console.log('Allowing authenticated access to:', pathname);
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 