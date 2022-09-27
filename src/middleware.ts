/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const AUTHORIZED_URLS = [
  'https://user-location-xi.vercel.app/api/clientCountry'
]

export function middleware(req: NextRequest) {
  if (req.url === AUTHORIZED_URLS[0] || req.url === AUTHORIZED_URLS[1]) {
    console.log(req.url);

    const response = NextResponse;

    const country = req.geo?.country;
  
    if (country) {
      return response.json({ 
        countryCode: country,
      });
    }
  
    response.next();
  }
}
