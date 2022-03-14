import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log(req.body);

  const response = NextResponse;

  const country = req.geo?.country;

  if (country) {
    console.log("country: " + country);

    return response.json({ country });
  }

  // response.next();
}
