import { Link, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function SiteLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground relative">
      {/* Decorative background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)/0.35) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)/0.35) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Scanlines */}
      <div aria-hidden className={cn("crt-overlay")}></div>

      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="h-8 w-8 rounded-sm bg-accent/20 grid place-items-center border border-accent/40 shadow-neon">
            <span className="block h-3 w-3 bg-accent" />
          </span>
          <span className="font-pixel text-sm tracking-wider text-foreground neon-text">
            SAAD PIXELS
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <a
            href="mailto:hello@saadpixels.dev"
            className="text-accent hover:underline underline-offset-4"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-foreground/80 hover:text-accent transition-colors"
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-foreground/60">
          © {new Date().getFullYear()} Saad Ahmed. Retro pixels, modern web.
        </p>
        <p className="text-foreground/60">
          Built with <span className="text-accent">Fusion</span>
        </p>
      </div>
    </footer>
  );
}
