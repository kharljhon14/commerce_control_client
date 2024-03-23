import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const authenticatedRoutes = ['/'];
  const restrictedRoutes = ['/auth/sign-in', '/auth/sign-up', '/auth/forgot-password'];

  try {
    const jwtSession = request.cookies.get('JWT-session');

    if (authenticatedRoutes.includes(pathname)) {
      if (!jwtSession || !jwtSession.value)
        return NextResponse.redirect(new URL('/auth/sign-in', request.url));
    }

    if (restrictedRoutes.includes(pathname)) {
      if (jwtSession && jwtSession.value) return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  } catch (err) {
    // Todo: Handle error handling
  }
}

export const config = {
  matcher: ['/auth/:path*', '/'],
};
