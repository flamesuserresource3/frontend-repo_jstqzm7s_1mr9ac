export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-semibold">CL</span>
              <span className="text-lg font-semibold tracking-tight">CaseFlow</span>
            </div>
            <p className="mt-3 text-sm text-neutral-600 max-w-md">
              Streamlined practice management software built for attorneys who value clarity and craft.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-medium">Product</p>
              <ul className="mt-3 space-y-2 text-neutral-600">
                <li><a href="#features" className="hover:text-black">Features</a></li>
                <li><a href="#pricing" className="hover:text-black">Pricing</a></li>
                <li><a href="#" className="hover:text-black">Security</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Company</p>
              <ul className="mt-3 space-y-2 text-neutral-600">
                <li><a href="#clients" className="hover:text-black">Clients</a></li>
                <li><a href="#" className="hover:text-black">Careers</a></li>
                <li><a href="#" className="hover:text-black">Press</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <ul className="mt-3 space-y-2 text-neutral-600">
                <li><a href="#" className="hover:text-black">Privacy</a></li>
                <li><a href="#" className="hover:text-black">Terms</a></li>
                <li><a href="#" className="hover:text-black">Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} CaseFlow, Inc. All rights reserved.</p>
          <p>Made with care for law professionals worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
