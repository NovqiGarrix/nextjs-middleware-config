import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
    matcher: ["/dashboard/:path*", "/login/:path*"]
}

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
        // Do something

        return NextResponse.next();

    } else if (req.nextUrl.pathname.startsWith("/login")) {
        // Do something 

        return NextResponse.next();
    }

    return NextResponse.next();
}