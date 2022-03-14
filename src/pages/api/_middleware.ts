import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (req.method === "GET") {
    console.log("---middleware---");
    console.log(req.url);
    console.log(req.nextUrl);
    console.log("-----");
    // console.log(req.body);

    // const response = NextResponse;

    // const country = req.geo?.country;
  
    // if (country) {
    //   return response.json({ response: country });
    // }
  
    // response.next();
  }
}
