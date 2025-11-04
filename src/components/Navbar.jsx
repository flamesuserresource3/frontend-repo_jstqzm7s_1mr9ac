import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Product', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-semibold">CL</span>
          <span className="text-lg font-semibold tracking-tight">CaseFlow</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-neutral-600 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition-all"
          >
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition-all"
          >
            Get started
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-neutral-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
