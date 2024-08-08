import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
import { Button } from '@/components/ui/button'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
           <div className='p-4'>
            <UserButton />
           </div>
           
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}