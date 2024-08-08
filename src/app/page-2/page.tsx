/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cZU5gz7xYsu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
export default function Component() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[200px_280px_1fr]">
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-4">
          <div className="flex h-[60px] items-center border-b px-6">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 font-semibold">
               </div>
              <div className="flex items-center gap-2">
              <span className=" flexfont-semibold text-center">Random Shirt Name</span>
                     
               </div>
            </div>
          </div>
          <div className="flex-1 overflow-auto py-4">
            <nav className="grid gap-4 px-4">
              <Link
                href="#"
                className="flex flex-col items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <HomeIcon className="h-6 w-6" />
                <span className="text-xs">Home</span>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="text-xs">Shop</span>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <PackageIcon className="h-6 w-6" />
                <span className="text-xs">Products</span>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <UsersIcon className="h-6 w-6" />
                <span className="text-xs">About</span>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <LineChartIcon className="h-6 w-6" />
                <span className="text-xs">Contact</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="hidden border-r bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 font-semibold">
                 </div>
              <div className="flex items-center mr-10">
              <Button className="flex items-center gap-2 justify-between">Save Changes</Button>

                 </div>
            </div>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-2 text-sm font-medium">
              <div className="grid grid-cols-4 gap-1 mr-10">
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <div className="aspect-square rounded-md flex justify-center items-center bg-gray-400 animate-pulse" />
                <h3 className="col-span-4 text-lg font-semibold">Sizes</h3>                                                                                
  
  
  
  
  <div className="flex items-center gap-2">
    <Checkbox id="size-xs" />
    <Label htmlFor="size-xs">XS</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="size-s" />
    <Label htmlFor="size-s">S</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="size-m" />
    <Label htmlFor="size-m">M</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="size-l" />
    <Label htmlFor="size-l">L</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="size-xl" />
    <Label htmlFor="size-xl">XL</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="size-2xl" />
    <Label htmlFor="size-2xl">2XL</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="size-3xl" />
    <Label htmlFor="size-3xl">3XL</Label>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="size-4xl" />
    <Label htmlFor="size-4xl">4XL</Label>
              </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center justify-between gap-4 border-b bg-muted/40 px-6">
          <div className="flex items-center gap-4">
            </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <UndoIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <RedoIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <XIcon className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <header className="flex h-14 lg:h-[60px] items-center justify-center gap-4 border-b bg-muted/40 px-6">
          <nav className="flex gap-4">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-purple-500 text-white"
              prefetch={false}
            >
              Design
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-purple-500 text-white"
              prefetch={false}
            >
              Text
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-purple-500 text-white"
              prefetch={false}
            >
              Upload
            </Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 bg-purple-500 text-white"
              prefetch={false}
            >
              Settings
            </Link>
          </nav>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-[url('/placeholder.svg')] bg-cover bg-center">
          <div className="grid gap-4 md:grid-cols-[200px_1fr]">
            <div className="grid gap-4">
              <div className="grid gap-2 rounded-lg border p-4 bg-[#f5f5f5] flex justify-center items-center h-[90%] w-[90%] animate-pulse" />
            </div>
          </div>
        </main>
        <footer className="bg-gray-100 p-4 flex justify-between items-center z-10">
      <div>
        <p>Shirt</p>
        <p className="font-bold">Price:22.83</p>
      </div>
      <Button>Unsave Template</Button>
    </footer>
     
      </div>
      
    </div>
    
  )
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LineChartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}


function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function RedoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  )
}


function ShirtIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}


function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UndoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 7v6h6" />
      <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </svg>
  )
}


function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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