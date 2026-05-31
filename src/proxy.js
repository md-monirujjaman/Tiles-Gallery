import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'
import { headers } from "next/headers";

 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session){
        return NextResponse.redirect(new URL('/signin', request.url))
    }
  
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/profile','/all-tiles/:path'],
}