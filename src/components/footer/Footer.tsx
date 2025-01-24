export default function Footer() {
  return (
    <footer className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Funiro.</h2>
            <address className="not-italic text-gray-600">
              <p className="text-[#9F9F9F]">
                400 University Drive Suite 200 Coral
              </p>
              <p className="text-[#9F9F9F]">Gables,</p>
              <p className="text-[#9F9F9F]">FL 33134 USA</p>
            </address>
          </div>
          <div className="space-y-8">
            <h3 className="text-gray-500">Links</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/shop" className="hover:underline">
                Shop
              </a>
              <a href="/about" className="hover:underline">
                About
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>
          <div className="space-y-8">
            <h3 className="text-gray-500">Help</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/paynet-options" className="hover:underline">
                Payment Options
              </a>
              <a href="/returns" className="hover:underline">
                Returns
              </a>
              <a href="/privacy-policies" className="hover:underline">
                Privacy Policies
              </a>
            </nav>
          </div>
          <div className="space-y-8">
            <h3 className="text-gray-500">Newsletter</h3>
            <form className="flex flex-wrap gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 border-b border-gray-300 p-1 focus:border-gray-900 focus:outline-none rounded-md"
              />
              <button
                type="submit"
                className="whitespace-nowrap border-b border-gray-900 pb-1 text-sm font-semibold hover:border-gray-600"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-8">
          <p className="text-center md:text-left">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
