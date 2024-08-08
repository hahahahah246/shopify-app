/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QVtlUoymiCL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Create() {
  return (
    <div className="w-full">
      <header className="flex items-center justify-between p-4 bg-gray-100">
        <div className="flex items-center space-x-4">
          <input type="search" placeholder="Search Templates" className="p-2 border rounded-md" />
          <BellIcon className="w-6 h-6 text-gray-600" />
          <UserIcon className="w-6 h-6 text-gray-600" />
        </div>
        <div className="flex items-center space-x-2">
          <span>F201121</span>
          <ChevronDownIcon className="w-6 h-6 text-gray-600" />
        </div>
      </header>
      <main className="p-4 space-y-8">
        <section className="bg-white p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-bold">Product Templates</h1>
          <p className="text-gray-600">Organize your products, explore more</p>
          <p className="text-gray-600">Keep track of your collections</p>
          <div className="flex items-center space-x-4 mt-4">
            <Button variant="outline">Create Collection</Button>
            <Button variant="outline">Existing Collections</Button>
            <a href="https://canva-clone-ali.vercel.app"><Button variant="default" className="ml-auto bg-red-500 text-white">
              Create Product +
            </Button>
            </a>
          </div>
        </section>
        <section className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold">How it works?</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <img src="https://placehold.co/50" alt="Step 1" />
              <p className="mt-2 text-center">Create or edit a template</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://placehold.co/50" alt="Step 2" />
              <p className="mt-2 text-center">Pick a product & add design</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://placehold.co/50" alt="Step 3" />
              <p className="mt-2 text-center">Order the product or share your template!</p>
            </div>
          </div>
        </section>
        <footer className="bg-white p-6 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-purple-700">ShopifyPOD</h3>
              <p className="text-gray-600">Fulfilling your ideas on demand</p>
              <p className="text-gray-600">Trusted to deliver 85.9M items since 2013</p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-600">
                Services
              </a>
              <a href="#" className="text-gray-600">
                Integrations
              </a>
              <a href="#" className="text-gray-600">
                Shipping
              </a>
              <a href="#" className="text-gray-600">
                Pricing
              </a>
              <a href="#" className="text-gray-600">
                Feature requests
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
function BellIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
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

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
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