/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const AUTHORIZED_URLS = [
  'https://user-location-xi.vercel.app/api/clientCountry'
]

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === AUTHORIZED_URLS[0]) {
    console.log(req.url);

    const country = req.geo?.country;

    console.log(country);

    if (country === 'JP') {
      req.nextUrl.searchParams.set('c', country!);

      return NextResponse.redirect(req.nextUrl);
    }
  }
}
