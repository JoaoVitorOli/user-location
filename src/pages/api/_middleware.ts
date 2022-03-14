import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (req.url === "https://user-location-xi.vercel.app/api/clientCountry") {
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
