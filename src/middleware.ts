/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const country = req.geo?.country || 'BR';

  req.nextUrl.searchParams.set('c', country);

  return NextResponse.redirect(req.nextUrl);
}

export const config = {
  matcher: ['/api/clientCountry']
}
