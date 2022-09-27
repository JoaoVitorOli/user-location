/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const response = NextResponse;

  const country = req.geo?.country;

  if (country) {
    return response.json({ 
      countryCode: country,
    });
  }

  response.next();
}

export const config = {
  matcher: '/api/clientCountry',
}