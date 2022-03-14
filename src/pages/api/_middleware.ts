import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse;

  const country = req.geo?.country;

  if (country) {
    console.log("country: " + country);

    return response.json({ test: country });
  }
}
