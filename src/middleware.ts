/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/api/clientCountry') {
    const country = req.geo?.country || 'BR';

    if (country === 'JP') {
      req.nextUrl.searchParams.set('c', country!);

      return NextResponse.redirect(req.nextUrl);
    }
  }
}
