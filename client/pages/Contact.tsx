import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, DollarSign, Clock, Mail, Layers, Joystick, Wand2 } from "lucide-react";

type ProjectType = "sprites" | "tileset" | "ui";

type Quote = {
  tier: "Starter" | "Indie" | "Pro";
  priceRange: string;
  timeline: string;
  includes: string[];
};

const complexityFactor = { simple: 1, standard: 1.5, advanced: 2 } as const;
const typeFactor = { sprites: 1.2, tileset: 1.1, ui: 1 } as const;

function calcQuote(budget: number, type: ProjectType, complexity: keyof typeof complexityFactor): Quote {
  const base = 500 * complexityFactor[complexity] * typeFactor[type];
  const target = Math.max(base, Math.min(budget, 6000));
  let tier: Quote["tier"] = "Starter";
  if (target >= 2500) tier = "Pro";
  else if (target >= 1200) tier = "Indie";

  const priceMin = Math.round(target * 0.9 / 50) * 50;
  const priceMax = Math.round(target * 1.2 / 50) * 50;

  const timeline = tier === "Pro" ? "2–5 weeks" : tier === "Indie" ? "1–3 weeks" : "3–7 days";

  const baseIncludes = ["Source PNG/WEBP", "Engine‑ready spritesheets", "1 revision round"];
  const indieExtras = ["Palette & tile guide", "Up to 2 revision rounds"];
  const proExtras = ["Animation polish", "Design doc alignment", "Up to 3 revision rounds"];

  const includes = tier === "Pro" ? [...baseIncludes, ...indieExtras, ...proExtras] : tier === "Indie" ? [...baseIncludes, ...indieExtras] : baseIncludes;

  return { tier, priceRange: `$${priceMin}–$${priceMax}`, timeline, includes };
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState<ProjectType>("sprites");
  const [complexity, setComplexity] = useState<"simple" | "standard" | "advanced">("standard");
  const [budget, setBudget] = useState(1500);
  const [details, setDetails] = useState("");

  const quote = useMemo(() => calcQuote(budget, type, complexity), [budget, type, complexity]);

  return (
    <section className="container py-14 md:py-20">
      <header className="max-w-3xl">
        <h1 className="font-pixel text-2xl md:text-3xl neon-text">Get in Touch</h1>
        <p className="mt-3 text-foreground/70 max-w-prose">Tell me about your game. I’ll reply with a precise quote and timeline. Use the budget slider to preview a ballpark estimate instantly.</p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Form */}
        <form
          className="rounded-xl border bg-card/60 p-6 backdrop-blur space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! I’ll email you shortly with details.");
          }}
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/60">Name</label>
            <input
              className="mt-2 w-full rounded border bg-background/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/60">Email</label>
            <input
              type="email"
              className="mt-2 w-full rounded border bg-background/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/60">Project Type</label>
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                <button type="button" onClick={() => setType("sprites")} className={`rounded border px-3 py-2 flex items-center justify-center gap-2 ${type === "sprites" ? "bg-accent text-accent-foreground" : "hover:bg-accent/10"}`}>
                  <Joystick className="h-4 w-4" /> Sprites
                </button>
                <button type="button" onClick={() => setType("tileset")} className={`rounded border px-3 py-2 flex items-center justify-center gap-2 ${type === "tileset" ? "bg-accent text-accent-foreground" : "hover:bg-accent/10"}`}>
                  <Layers className="h-4 w-4" /> Tileset
                </button>
                <button type="button" onClick={() => setType("ui")} className={`rounded border px-3 py-2 flex items-center justify-center gap-2 ${type === "ui" ? "bg-accent text-accent-foreground" : "hover:bg-accent/10"}`}>
                  <Wand2 className="h-4 w-4" /> UI
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-foreground/60">Complexity</label>
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                {(["simple","standard","advanced"] as const).map((c) => (
                  <button key={c} type="button" onClick={() => setComplexity(c)} className={`rounded border px-3 py-2 ${complexity === c ? "bg-secondary text-secondary-foreground" : "hover:bg-accent/10"}`}>{c}</button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/60">Budget: <span className="text-accent font-medium">${'{'}budget{'}'}</span></label>
            <input
              type="range"
              min={300}
              max={6000}
              step={50}
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="mt-2 w-full accent-[hsl(var(--accent))]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/60">Details</label>
            <textarea
              className="mt-2 w-full rounded border bg-background/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent min-h-28"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Game genre, platforms, resolution, deliverables, references..."
            />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 rounded bg-accent text-accent-foreground shadow-neon inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> Send Request
            </button>
            <Link to="/" className="px-4 py-2 rounded border hover:bg-accent/10">Cancel</Link>
          </div>
        </form>

        {/* Live Quote */}
        <div className="rounded-xl border bg-card/60 p-6 pixel-border">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-foreground/60">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Live Quote Preview
          </div>
          <h3 className="mt-3 font-pixel text-base">{quote.tier} Package</h3>
          <div className="mt-3 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-md border p-3 bg-background/50">
              <DollarSign className="h-5 w-5 mx-auto text-accent" />
              <p className="mt-2 text-[10px] uppercase tracking-widest">Price</p>
              <p className="text-sm">{quote.priceRange}</p>
            </div>
            <div className="rounded-md border p-3 bg-background/50">
              <Clock className="h-5 w-5 mx-auto text-secondary" />
              <p className="mt-2 text-[10px] uppercase tracking-widest">Timeline</p>
              <p className="text-sm">{quote.timeline}</p>
            </div>
            <div className="rounded-md border p-3 bg-background/50">
              <p className="text-[10px] uppercase tracking-widest">Type</p>
              <p className="text-sm capitalize">{type}</p>
            </div>
          </div>
          <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
            {quote.includes.map((it) => (
              <li key={it} className="rounded border bg-background/40 px-3 py-2">{it}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-foreground/60">This is an estimate. Final quote varies with scope and references.</p>
        </div>
      </div>
    </section>
  );
}
