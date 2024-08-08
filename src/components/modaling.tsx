/**
 * v0 by Vercel.
 * @see https://v0.dev/t/r0pCZdbaokA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Subscription() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container text-center p-8">
        <h2 className="text-3xl font-bold text-black">Choose your plan</h2>
      </div>
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-3 lg:gap-8">
        <div className="grid gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md sm:p-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Starter</h3>
            <p className="text-muted-foreground">Perfect for individuals or small teams just getting started.</p>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold">$9</div>
            <div className="text-sm text-muted-foreground">per month</div>
          </div>
          <ul className="grid gap-2 text-sm">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 fill-primary" />
              1 user
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 fill-primary" />
              5 GB storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 fill-primary" />
              Basic features
            </li>
          </ul>
          <Button variant="outline" className="w-full">
            Get Started
          </Button>
        </div>
        <div className="relative grid gap-4 rounded-lg border-[30px] border-primary bg-primary p-6 shadow-sm transition-all hover:shadow-md sm:p-8 lg:scale-105 lg:p-8 border-8 border-purple">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary p-2 text-primary-foreground border-2">
            <StarIcon className="h-5 w-5" />
          </div>
          <div className="space-y-2 ">
            <h3 className="text-2xl font-bold text-primary-foreground">Pro</h3>
            <p className="text-primary-foreground">Ideal for teams and businesses that need more features.</p>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold text-primary-foreground">$29</div>
            <div className="text-sm text-primary-foreground">per month</div>
          </div>
          <ul className="grid gap-2 text-sm text-primary-foreground">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 fill-primary-foreground" />
              5 users
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 fill-primary-foreground" />
              50 GB storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 fill-primary-foreground" />
              Advanced features
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 fill-primary-foreground" />
              Priority support
            </li>
          </ul>
          <Button className="w-full border-2">Get Started</Button>
        </div>
        <div className="grid gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md sm:p-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-muted-foreground">Tailored solutions for large teams and complex businesses.</p>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-bold">$99</div>
            <div className="text-sm text-muted-foreground">per month</div>
          </div>
          <ul className="grid gap-2 text-sm">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 fill-primary" />
              Unlimited users
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 fill-primary" />
              Unlimited storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 fill-primary" />
              Enterprise-grade features
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 fill-primary" />
              Dedicated support
            </li>
          </ul>
          <Button variant="outline" className="w-full">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}