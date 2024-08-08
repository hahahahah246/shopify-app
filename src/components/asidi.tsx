"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Carousel as CarouselComponent, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export default function Carousel() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background border-b px-4 md:px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="font-semibold text-lg">Printify</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 max-w-full">
          <Input />
        </nav>
        <Button variant="outline" size="sm" className="md:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <CarouselComponent className="py-12 md:py-16 lg:py-20">
          <CarouselContent>
            <CarouselItem>
              <div className="container grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                <div className="flex flex-col items-start bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl w-full max-w-[300px]">
                  <Link href="#" className="flex-1 block" prefetch={false}>
                    <img
                      src="https://placehold.co/500"
                      width={600}
                      height={400}
                      alt="Product 1"
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-4 md:p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Acme Prism Tee</h3>
                    <p className="text-muted-foreground">
                      A stylish and comfortable t-shirt with a unique prism design.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <Button size="sm">Buy Now</Button>
                      <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl w-full max-w-[300px]">
                  <Link href="#" className="flex-1 block" prefetch={false}>
                    <img
                      src="https://placehold.co/500"
                      width={600}
                      height={400}
                      alt="Product 2"
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-4 md:p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Acme Wireless Earbuds</h3>
                    <p className="text-muted-foreground">
                      Experience crystal clear audio with our latest wireless earbuds.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <Button size="sm">Buy Now</Button>
                      <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl w-full max-w-[300px]">
                  <Link href="#" className="flex-1 block" prefetch={false}>
                    <img
                      src="https://placehold.co/500"
                      width={600}
                      height={400}
                      alt="Product 3"
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-4 md:p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Acme Smart Lamp</h3>
                    <p className="text-muted-foreground">
                      Elevate your home decor with our intelligent and energy-efficient smart lamp.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <Button size="sm">Buy Now</Button>
                      <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="container grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                <div className="flex flex-col items-start bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl w-full max-w-[300px]">
                  <Link href="#" className="flex-1 block" prefetch={false}>
                    <img
                      src="https://placehold.co/500"
                      width={600}
                      height={400}
                      alt="Product 4"
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-4 md:p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Acme Backpack</h3>
                    <p className="text-muted-foreground">A durable and stylish backpack for all your adventures.</p>
                    <div className="flex items-center gap-2 mt-auto">
                      <Button size="sm">Buy Now</Button>
                      <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl w-full max-w-[300px]">
                  <Link href="#" className="flex-1 block" prefetch={false}>
                    <img
                      src="https://placehold.co/500"
                      width={600}
                      height={400}
                      alt="Product 5"
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-4 md:p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Acme Wireless Charger</h3>
                    <p className="text-muted-foreground">
                      Charge your devices effortlessly with our sleek wireless charger.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <Button size="sm">Buy Now</Button>
                      <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl w-full max-w-[300px]">
                  <Link href="#" className="flex-1 block" prefetch={false}>
                    <img
                      src="https://placehold.co/500"
                      width={600}
                      height={400}
                      alt="Product 6"
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-4 md:p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Acme Smart Speaker</h3>
                    <p className="text-muted-foreground">
                      Experience high-quality audio with our voice-controlled smart speaker.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <Button size="sm">Buy Now</Button>
                      <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="container grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                <div className="flex flex-col items-start bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl w-full max-w-[300px]">
                  <Link href="#" className="flex-1 block" prefetch={false}>
                    <img
                      src="https://placehold.co/500"
                      width={600}
                      height={400}
                      alt="Product 7"
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-4 md:p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Acme Fitness Tracker</h3>
                    <p className="text-muted-foreground">
                      Stay on top of your fitness goals with our advanced fitness tracker.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <Button size="sm">Buy Now</Button>
                      <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl w-full max-w-[300px]">
                  <Link href="#" className="flex-1 block" prefetch={false}>
                    <img
                      src="https://placehold.co/500"
                      width={600}
                      height={400}
                      alt="Product 8"
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-4 md:p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Acme Portable Speaker</h3>
                    <p className="text-muted-foreground">
                      Enjoy your music anywhere with our compact and high-quality portable speaker.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <Button size="sm">Buy Now</Button>
                      <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start bg-background rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl w-full max-w-[300px]">
                  <Link href="#" className="flex-1 block" prefetch={false}>
                    <img
                      src="https://placehold.co/500"
                      width={600}
                      height={400}
                      alt="Product 9"
                      className="w-full h-64 object-cover"
                    />
                  </Link>
                  <div className="p-4 md:p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Acme Smart Watch</h3>
                    <p className="text-muted-foreground">
                      Stay connected and on top of your health with our feature-packed smart watch.
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                      <Button size="sm">Buy Now</Button>
                      <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </CarouselComponent>
      </main>
      <footer className="bg-muted border-t px-4 md:px-6 py-6 text-sm text-muted-foreground">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; 2024 Acme Inc. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground" prefetch={false}>
              Cookie Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
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
