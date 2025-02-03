import { NextResponse } from 'next/server'

export function middleware(req: Request) {
  const host = req.headers.get('host') || ''
  if (host === 'suncoastpatios.co.nz') {
    return NextResponse.redirect('https://www.suncoastpatios.co.nz' + req.url, 301)
  }
}