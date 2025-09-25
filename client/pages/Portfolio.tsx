import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section className="container py-14 md:py-20">
      <header className="max-w-3xl">
        <h1 className="font-pixel text-2xl md:text-3xl neon-text">Portfolio</h1>
        <p className="mt-4 text-foreground/70">
          A curated collection of retro pixel art, tilesets, sprites, and UI
          crafted with a modern touch. Full case studies and interactive
          galleries are coming soon.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="relative rounded-lg border bg-card/60 backdrop-blur p-4 overflow-hidden group"
          >
            <div
              className="h-40 rounded-md mb-4 border pixel-border"
              style={{
                background:
                  "repeating-linear-gradient(45deg, hsl(var(--accent)/0.2) 0 8px, hsl(var(--secondary)/0.2) 8px 16px)",
                imageRendering: "pixelated",
              }}
            />
            <h3 className="font-pixel text-xs">PIXEL PROJECT {i + 1}</h3>
            <p className="text-xs text-foreground/60 mt-2">
              Placeholder preview. Ask to populate with your real projects.
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-4">
        <Link
          to="/"
          className="px-4 py-2 bg-accent text-accent-foreground rounded md:text-sm text-xs shadow-neon"
        >
          Back Home
        </Link>
        <a
          href="mailto:hello@saadpixels.dev"
          className="px-4 py-2 border rounded text-xs md:text-sm hover:bg-accent/10"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
