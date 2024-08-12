/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hWtMbElY8ZL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Link } from "lucide-react"

export default function Component() {
  const [showProductOptions, setShowProductOptions] = useState(false)
  const [showNotificationOptions, setShowNotificationOptions] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white border-r">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-purple-600">ShopifyPOD</h1>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          <Button variant="ghost" className="justify-start">
            <LayoutDashboardIcon className="w-5 h-5 mr-2" />
            Dashboard
          </Button>
          <Button
            
            className="justify-between"
            onClick={() => setShowProductOptions(!showProductOptions)}
          >
            <div className="flex items-center">
              <ShoppingCartIcon className="w-5 h-5 mr-2" />
              Product Catalog
            </div>
            <ChevronDownIcon className="w-5 h-5" />
          </Button>
          {showProductOptions && (
            <div className="pl-8 space-y-2">
              <Button variant="ghost" className="justify-start text-sm">
                <ArrowRightIcon className="w-4 h-4 mr-2" />
                New Products
              </Button>
              <Button variant="ghost" className="justify-start text-sm">
                <ArrowRightIcon className="w-4 h-4 mr-2" />
                Featured Products
              </Button>
              <a href="/page-3">       
                <Button variant="ghost" className="justify-start text-sm">
                  <ArrowRightIcon className="w-4 h-4 mr-2" />
                  Best Sellers
                </Button>
              </a>
            </div>
          )}
          <Button variant="ghost" className="justify-start">
            <a href="https://testing-shopify11.netlify.app/">
            <PenToolIcon className="w-5 h-5 mr-2" />
            Design Tool
            </a>
          </Button>
          <Button variant="ghost" className="justify-start">
            <CommandIcon className="w-5 h-5 mr-2" />
            Orders Editor
          </Button>
          <Button variant="ghost" className="justify-start">
            <SettingsIcon className="w-5 h-5 mr-2" />
            Settings
          </Button>
          <Button variant="ghost" className="justify-start">
            <HandHelpingIcon className="w-5 h-5 mr-2" />
            Help
          </Button>
          <Button variant="ghost" className="justify-start">
            <LogInIcon className="w-5 h-5 mr-2" />
         <a href="/subscription">Subscription</a>
          </Button>
           </nav>
      </aside>
      <main className="flex-1 p-6 space-y-6">
        <header className="flex justify-between">
          <h2 className="text-2xl font-semibold">Hello HaMi,</h2>
          <Input type="search" placeholder="Search" className="w-64" />
        </header>
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Activity</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>Time Elapsed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <img src="https://placehold.co/10" alt="Landscape" width={48} height={48} className="rounded-full" />
                      </div>
                      <div>
                        <p className="font-medium">Design Created - Untitled(1)</p>
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>Product#45214</TableCell>
                  <TableCell>2 hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <img src="https://placehold.co/10" alt="Landscape" width={48} height={48} className="rounded-full" />
                      </div>
                      <div>
                        <p className="font-medium">Order Placed</p>
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>Order#74186</TableCell>
                  <TableCell>4 hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <img src="https://placehold.co/10" alt="Landscape" width={48} height={48} className="rounded-full" />
                      </div>
                      <div>
                        <p className="font-medium">Design Created - Shirt Design</p>
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>Levi&apos;s T-Shirt</TableCell>
                  <TableCell>17 hours</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <img src="https://placehold.co/10" alt="Landscape" width={48} height={48} className="rounded-full" />
                      </div>
                      <div>
                        <p className="font-medium">Subscription Renewed</p>
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>Pro Plan</TableCell>
                  <TableCell>1 day</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="grid grid-cols-5 gap-2.5">
          <Card className="flex col-span-1 bg-purple-600 text-white rounded-2xl">
            <CardContent className="flex flex-col items-center justify-center h-full">
              <div className="text-center">
                <p className="text-lg font-semibold">See What&apos;s New</p>
                <Button variant="ghost" className="mt-4 bg-white text-purple-600">
                  Get template
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="flex col-span-1 bg-purple-600 text-white rounded-2xl">
            <CardContent className="flex flex-col items-center justify-center h-full">
              <div className="text-center">
                <p className="text-lg font-semibold">Latest Design Templates</p>
                <Button variant="ghost" className="mt-4 bg-white text-purple-600">
                  Get template
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-3 grid grid-cols-3 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Designs (7)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Untitled(1)</p>
                      <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">T-Shirt Design</p>
                      <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Test Design</p>
                      <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Orders (1)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Order#74186</p>
                      <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
              </CardHeader>
              <CardContent>
                <Input type="search" placeholder="Search" className="mb-4" />
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Speed Force - Knit</p>
                      <p className="text-sm text-gray-500">Women</p>
                    </div>
                    <Badge >+30%</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Assorted Cross Bag</p>
                      <p className="text-sm text-gray-500">Well</p>
                    </div>
                    <Badge >+25%</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Fur Pom Pom Gloves</p>
                      <p className="text-sm text-gray-500">Men</p>
                    </div>
                    <Badge >+20%</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Card>
        </div>
      </main>
    </div>
  )
}
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function CommandIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  )
}

function HandHelpingIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 13 6 6" />
    </svg>
  )
}

function LayoutDashboardIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}

function LogInIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}

function MailsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="16" height="13" x="6" y="4" rx="2" />
      <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
      <path d="M2 8v11c0 1.1.9 2 2 2h14" />
    </svg>
  )
}

function PenToolIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  )
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
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