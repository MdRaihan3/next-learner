import { NextResponse } from "next/server"

const user = false
const coo = 'raihanbossishere'

export const middleware = (request) => {
   
    // 5no
    let cookies = request.cookies.get('token')
    if (!cookies || cookies.value !== coo) return NextResponse.redirect(new URL('/login', request.url))

    // 4no
    // if (!user) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    // 3no
    // if(request.nextUrl.pathname.startsWith('/blogs')){
    //     return NextResponse.redirect(new URL('/about/history', request.url))

    // }
    // 2no
    // return NextResponse.rewrite(new URL('/about/history', request.url))
    // 1no
    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard', '/services']
}