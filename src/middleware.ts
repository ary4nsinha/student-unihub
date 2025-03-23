import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/app(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth()
  const path = req.nextUrl.pathname

  // Redirect signed-in users from home page to app
  if (userId && path === '/') {
    return NextResponse.redirect(new URL('/app/calculator/sgpa', req.url))
  }
  //sdsds
  // Protect /app routes
  if (isProtectedRoute(req)) await auth.protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}