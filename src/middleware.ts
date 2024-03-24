import { NextRequest, NextResponse } from 'next/server';
import { ROUTES } from './constants/routes';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const authenticatedRoutes = [ROUTES.home];
  const restrictedRoutes = [ROUTES.signIn, ROUTES.signUp, ROUTES.forgotPassword];

  try {
    // Get the cookie and check if the cookie has exists
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
    request.cookies.delete('JWT-session');

    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }
}

export const config = {
  matcher: ['/auth/:path*', '/', '/products'],
};
