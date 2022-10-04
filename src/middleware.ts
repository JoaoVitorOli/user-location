/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/api/clientCountry') {
    const country = req.geo?.country || 'BR';
    
    if (country === 'JP') {
      const url = req.nextUrl.clone();

      url.searchParams.set('frommiddleware', country);

      return NextResponse.redirect(url);
    }
  }
}
