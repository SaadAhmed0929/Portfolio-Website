import { Link } from "react-router-dom";
import { Gamepad2, Sparkles, Mail } from "lucide-react";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 rounded border text-[10px] tracking-wider uppercase bg-card/60">
      {children}
    </span>
  );
}

function PixelOrb({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={
        "absolute block rounded-sm border image-pixelated shadow-neon " +
        (className ?? "")
      }
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function ProjectCard({ title, tag, accent }: { title: string; tag: string; accent: string }) {
  return (
    <div className="group relative rounded-xl border bg-card/60 backdrop-blur overflow-hidden tilt-hover">
      <div
        className="h-44 sm:h-52 border-b pixel-border transform-gpu transition-transform group-hover:rotate-1 group-hover:scale-[1.02]"
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
      <section className="container pt-14 md:pt-20 pb-10 md:pb-14">
        <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2 md:[grid-template-columns:1.1fr_0.9fr]">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-foreground/60">
              <span className="h-1.5 w-1.5 bg-accent inline-block" />
              Saad Ahmed — Pixel Artist & Game Designer
              <span className="ml-3 px-2 py-0.5 rounded border text-[9px] text-accent animate-flicker">Open for commissions</span>
            </div>
            <h1 className="mt-5 font-pixel text-3xl sm:text-4xl md:text-5xl leading-[1.25] neon-text neon-pulse glitch-hover max-w-[36ch]">
              Retro Pixel Art. Modern Dark.
            </h1>
            <p className="mt-4 max-w-md text-foreground/70">
              Sprites, tilesets, and UI with neon glow.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/portfolio"
                className="px-4 py-2 rounded bg-accent text-accent-foreground shadow-neon text-xs md:text-sm inline-flex items-center gap-2 btn-sheen"
              >
                <Gamepad2 className="h-4 w-4" /> View Portfolio
              </Link>
              <a
                href="mailto:hello@saadpixels.dev"
                className="px-4 py-2 rounded border hover:bg-accent/10 text-xs md:text-sm inline-flex items-center gap-2 btn-sheen"
              >
                <Mail className="h-4 w-4" /> Hire Me
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-[11px] text-foreground/60">
              <span className="inline-flex items-center gap-1"><Sparkles className="h-3.5 w-3.5 text-accent"/> 8-bit • 16-bit • UI</span>
              <span className="opacity-40">|</span>
              <span>10+ shipped projects</span>
              <span className="opacity-40">|</span>
              <span>Worldwide</span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative rounded-xl border pixel-border overflow-hidden bg-card/70 w-full max-w-[420px] md:max-w-[460px] mx-auto tilt-hover">
              <div className="flex items-center justify-between px-3 py-2 border-b bg-background/60">
                <span className="font-pixel text-[10px] tracking-wider">PRESS START</span>
                <div className="flex gap-2">
                  <span className="h-2 w-2 bg-accent/70" />
                  <span className="h-2 w-2 bg-secondary/70" />
                  <span className="h-2 w-2 bg-foreground/40" />
                </div>
              </div>
              <div
                className="relative aspect-[4/3] grid place-items-center"
                style={{
                  background:
                    `radial-gradient(circle at 50% 40%, hsl(var(--accent)/0.15), transparent 60%),
                     radial-gradient(circle at 80% 60%, hsl(var(--secondary)/0.15), transparent 55%),
                     repeating-linear-gradient(0deg, hsl(var(--foreground)/0.06) 0 2px, transparent 2px 4px),
                     repeating-linear-gradient(90deg, hsl(var(--foreground)/0.06) 0 2px, transparent 2px 4px)`,
                  imageRendering: "pixelated",
                }}
              >
                <div className="stars slow" aria-hidden />
                <div className="stars fast" aria-hidden />
                <div className="relative">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 bg-accent border animate-float" style={{ imageRendering: "pixelated" }} />
                  <PixelOrb className="size-3 bg-secondary border-secondary/60 -top-4 -left-5 animate-float" />
                  <PixelOrb className="size-2 bg-accent border-accent/60 top-3 -right-4 animate-float" />
                  <PixelOrb className="size-2.5 bg-foreground/50 border-foreground/30 -bottom-5 left-6 animate-float" />
                </div>
                <div className="absolute inset-0 crt-overlay" aria-hidden />
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t bg-background/60">
                <span className="text-[10px] uppercase tracking-widest text-foreground/60">Pixel Density: High</span>
                <span className="font-pixel text-[10px]">▲ ▲ ▼ ▶ ▶ ◀ ◀</span>
              </div>
            </div>
          </div>
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
