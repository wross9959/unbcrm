
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = [
    '/home'
//   '/',
//   '/members',
//   '/projects',
//   '/tasks',
//   '/settings',
//   '/users',
//   '/calendar',
//   '/announcements',
//   '/events',
//   '/resources',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (false) {
     // Skip middleware for public routes
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));
  if (!isProtected) return NextResponse.next();

  const token = request.cookies.get('auth_token')?.value;

  if (!token) {
    // Redirect unauthenticated users to login
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname); // redirect after login
    return NextResponse.redirect(loginUrl);
  }

  // If token exists, allow request
  return NextResponse.next();
  }
 
}

export const config = {
  matcher: [
    '/((?!api|_next|favicon.ico|assets|public).*)',
  ],
};
