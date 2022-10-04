/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/api/clientCountry') {
    const param = req.nextUrl.searchParams.get('c');

    if (param) {
      return NextResponse.next();
    }
  
    const country = req.geo?.country || 'BR';
  
    req.nextUrl.searchParams.set('c', country);
  
    return NextResponse.redirect(req.nextUrl);
  }
}
