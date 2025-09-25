import { Link } from "react-router-dom";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 rounded border text-[10px] tracking-wider uppercase bg-card/60">
      {children}
    </span>
  );
}

function ProjectCard({ title, tag, accent }: { title: string; tag: string; accent: string }) {
  return (
    <div className="group relative rounded-xl border bg-card/60 backdrop-blur overflow-hidden">
      <div
        className="h-44 sm:h-52 border-b pixel-border"
        style={{
          background:
            `
            linear-gradient(0deg, hsl(var(--background) / 0.4), hsl(var(--background) / 0.2)),
            repeating-linear-gradient(0deg, ${accent} 0 2px, transparent 2px 4px),
            repeating-linear-gradient(90deg, ${accent} 0 2px, transparent 2px 4px)
          `,
          imageRendering: "pixelated",
        }}
      />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-pixel text-xs">{title}</h3>
          <Badge>{tag}</Badge>
        </div>
        <p className="mt-2 text-sm text-foreground/70">
          Retro pixels with a modern glow — sprites, tilesets, UI kits and more.
        </p>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="container pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-foreground/60">
          <span className="h-1.5 w-1.5 bg-accent inline-block" />
          Saad Ahmed — Pixel Artist & Game Designer
        </div>
        <h1 className="mt-6 font-pixel text-2xl sm:text-3xl md:text-4xl leading-relaxed neon-text">
          Retro gaming pixel art with a modern dark aesthetic.
        </h1>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Showcasing handcrafted sprites, immersive tilesets, and UI with neon
          glow. Built for modern screens, inspired by 8-bit classics.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/portfolio"
            className="px-4 py-2 rounded bg-accent text-accent-foreground shadow-neon text-xs md:text-sm"
          >
            View Portfolio
          </Link>
          <a
            href="mailto:hello@saadpixels.dev"
            className="px-4 py-2 rounded border hover:bg-accent/10 text-xs md:text-sm"
          >
            Contact
          </a>
        </div>
      </section>

      {/* Marquee style tech tags */}
      <section className="border-y bg-background/60">
        <div className="container py-5 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-widest text-foreground/60">
          <Badge>Sprites</Badge>
          <Badge>Tilesets</Badge>
          <Badge>Game UI</Badge>
          <Badge>Logotypes</Badge>
          <Badge>Cover Art</Badge>
          <Badge>Animation</Badge>
        </div>
      </section>

      {/* Featured */}
      <section className="container py-12 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-pixel text-xl md:text-2xl">Featured Work</h2>
          <Link
            to="/portfolio"
            className="text-xs md:text-sm text-accent hover:underline underline-offset-4"
          >
            See all →
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard title="NEON KNIGHT" tag="Sprite Sheet" accent="hsl(var(--accent) / 0.5)" />
          <ProjectCard title="CYBER CITY" tag="Tileset" accent="hsl(var(--secondary) / 0.5)" />
          <ProjectCard title="RETRO UI KIT" tag="UI" accent="hsl(var(--accent) / 0.4)" />
          <ProjectCard title="SPACE RUNNER" tag="Sprite Sheet" accent="hsl(var(--secondary) / 0.45)" />
          <ProjectCard title="DUNGEON MAPS" tag="Tileset" accent="hsl(var(--accent) / 0.35)" />
          <ProjectCard title="ARCADE BADGES" tag="Icons" accent="hsl(var(--secondary) / 0.35)" />
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-16">
        <div className="rounded-xl border bg-card/60 backdrop-blur p-6 md:p-8 grid md:grid-cols-2 items-center gap-6">
          <div>
            <h3 className="font-pixel text-base md:text-lg">Have a project in mind?</h3>
            <p className="mt-3 text-foreground/70 text-sm">
              Commissions open for indie games, stream overlays, and brand kits.
              Let's build something memorable.
            </p>
          </div>
          <div className="flex md:justify-end gap-4">
            <a
              href="mailto:hello@saadpixels.dev"
              className="px-4 py-2 rounded bg-accent text-accent-foreground shadow-neon text-xs md:text-sm"
            >
              Get in touch
            </a>
            <Link
              to="/portfolio"
              className="px-4 py-2 rounded border hover:bg-accent/10 text-xs md:text-sm"
            >
              Explore work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
