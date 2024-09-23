// import { NextResponse } from "next/server";

//  CUSTOMR: Without using auth.js
// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "@/app/_lib/auth.js";
export const middleware = auth;

// to specify the routes the middleware should run
export const config = {
  matcher: ["/account"],
};
