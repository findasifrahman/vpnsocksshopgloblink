import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add paths that don't require authentication
const publicPaths = [
  '/',
  '/login',
  '/api/auth/login',
  '/api/auth/check',
  '/api/auth/register'
];

// Add paths that require specific roles
const adminOnlyPaths = ['/add-user', '/api/admin/add-user'];
const superAdminOnlyPaths = ['/admin', '/api/admin'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public paths without checking session
  if (publicPaths.some(path => pathname === path || pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check for session cookie
  const session = request.cookies.get('session');
  const role = request.cookies.get('role')?.value;
  
  // If no session and not on a public path, redirect to login
  if (!session) {
    const url = new URL('/login', request.url);
    return NextResponse.redirect(url);
  }

  // Check role-based access
  if (superAdminOnlyPaths.some(path => pathname.startsWith(path))) {
    if (role !== 'super_admin') {
      const url = new URL('/add-user', request.url);
      return NextResponse.redirect(url);
    }
  }

  if (adminOnlyPaths.some(path => pathname.startsWith(path))) {
    if (role !== 'admin' && role !== 'super_admin') {
      const url = new URL('/login', request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 