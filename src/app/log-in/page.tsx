/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0kV8sciDy08
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function login() {
  return (
    <div className="relative min-h-[100dvh] w-full">
     
      <img src="/rainbow.png" alt="Background" className="absolute inset-0 h-full w-full object-cover" />
      <div className="grid min-h-[100dvh] grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-center justify-center p-6 lg:p-12">
          <div className="relative z-10 max-w-xl space-y-4 text-left text-primary-foreground">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"></h1>
            <p className="text-lg font-medium leading-relaxed lg:text-xl">
              
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center p-6 lg:p-12">
          <div className="relative z-10 mx-auto w-full max-w-md space-y-4">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold text-primary-foreground">Sign in to your account</h2>
              <p className="text-primary-foreground">Enter your email and password below to access your account.</p>
            </div>
            <form className="grid gap-4 bg-white p-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-primary-foreground">
                  Email
                </Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-primary-foreground">
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium underline underline-offset-4 hover:text-primary"
                    prefetch={false}
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>
          </div>
        </div>

      </div>
      <div className="absolute top-4 right-4 flex items-center gap-2">
      <a href="/sign-up"> <Button variant="outline">SignUp</Button></a> 
        <a href="/log-in"><Button>Login</Button></a>
      </div>
    </div>
  )
}