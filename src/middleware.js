'use server'
import { NextResponse } from 'next/server';
import { validateToken } from './app/functions/validateToken';

const restrictURLs = ['/pages/dashboard', '/pages/dashboard/register', '/pages/dashboard/alter']

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlDashboard = new URL('/pages/dashboard', request.url);
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (restrictURLs.includes(request.nextUrl.pathname)) {
            return NextResponse.redirect(urlLogin);
        }
    }else{
        if(request.nextUrl.pathname === '/'){
            return NextResponse.redirect(urlDashboard);
        }
    }
    NextResponse.next();
};

export const config = {
    matcher: [...restrictURLs, '/']
};