import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (req.method === "GET") {
    console.log(req.body);

    const response = NextResponse;

    const country = req.geo?.country;
  
    if (country) {
      console.log("country: " + country);
  
      return response.json({ response: country });
    }
  
    response.next();
  }
}
