/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  console.log(req.nextUrl.pathname);

  if (req.nextUrl.pathname === '/api/clientCountry') {
    const country = req.geo?.country;
  
    if (country) {
      return NextResponse.json({ 
        countryCode: country,
      });
    }
  
    NextResponse.next();
  }
}