import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-bakery.jpg";
import cakesImg from "@/assets/cakes.jpg";
import sausageRollsImg from "@/assets/sausage-rolls.jpg";
import breadImg from "@/assets/bread.jpg";
import sandwichImg from "@/assets/sandwich.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Skinners Bakery — Fresh Bread, Buns & Cakes in Holywood" },
      { name: "description", content: "Family-loved bakery on Holywood High Street. Freshly baked bread, buns, sausage rolls, cakes and made-to-order sandwiches. Open from 8am Mon–Sat." },
    ],
  }),
  component: Home,
});

const PHONE = "02890426672";
const PHONE_DISPLAY = "028 9042 6672";
const ADDRESS = "58 High St, Holywood BT18 9AE";
const DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=Skinners+Bakery+58+High+St+Holywood+BT18+9AE";

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
      <path strokeLinejoin="round" d="M12 2.5l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21.1l1.4-6.8L2.2 9.6l6.9-.8z" />
    </svg>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight">Skinners</span>
            <span className="font-script text-lg text-[var(--ember)]">bakery</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#counter" className="hover:text-[var(--ember)]">From the Counter</a>
            <a href="#story" className="hover:text-[var(--ember)]">Our Story</a>
            <a href="#reviews" className="hover:text-[var(--ember)]">Reviews</a>
            <a href="#visit" className="hover:text-[var(--ember)]">Visit</a>
          </nav>
          <a
            href={`tel:${PHONE}`}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90"
          >
            Call to order
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-12 md:grid-cols-2 md:gap-12 md:pt-20">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1 text-[var(--ember)]">
                <Star /><Star /><Star /><Star /><Star />
              </span>
              <span>4.5 · 108 Google reviews</span>
            </div>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Baked fresh on{" "}
              <span className="italic text-[var(--ember)]">High Street</span>,
              every single morning.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              A wee Holywood institution for bread, buns, sausage rolls, traybakes
              and proper made-to-order sandwiches. Pop in from 8am — we'll have the
              kettle on.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE}`}
                className="rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-[var(--shadow-warm)] transition hover:translate-y-[-1px]"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card px-6 py-3 text-base font-medium text-foreground transition hover:border-[var(--ember)]"
              >
                Get directions →
              </a>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
              <div>
                <dt className="text-muted-foreground">Open</dt>
                <dd className="mt-1 font-medium">8am Mon–Sat</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Per person</dt>
                <dd className="mt-1 font-medium">£1–£10</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Distance</dt>
                <dd className="mt-1 font-medium">Holywood centre</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full bg-[var(--accent)] opacity-60 blur-2xl md:block" />
            <img
              src={heroImg}
              alt="Freshly baked bread, iced buns and sausage rolls at Skinners Bakery"
              width={1600}
              height={1100}
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-[var(--shadow-warm)]"
            />
            <div className="absolute -bottom-6 left-6 hidden rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur sm:block">
              <p className="font-script text-2xl text-[var(--ember)] leading-none">"Lovely, friendly staff"</p>
              <p className="mt-1 text-xs text-muted-foreground">— A regular, on Google</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-border bg-[var(--cream)] py-4 overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-2 px-5 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          <span>Sourdough</span><span className="text-[var(--ember)]">✿</span>
          <span>Iced Buns</span><span className="text-[var(--ember)]">✿</span>
          <span>Sausage Rolls</span><span className="text-[var(--ember)]">✿</span>
          <span>Traybakes</span><span className="text-[var(--ember)]">✿</span>
          <span>Fresh Sandwiches</span>
        </div>
      </div>

      {/* From the counter */}
      <section id="counter" className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-script text-2xl text-[var(--ember)]">From the counter</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">What's good today</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            A rotating selection — call ahead to reserve the favourites before
            they're gone.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          <article className="group md:col-span-7 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
            <div className="overflow-hidden">
              <img src={breadImg} alt="Crusty sourdough loaves" width={900} height={900} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="flex items-end justify-between gap-6 p-6">
              <div>
                <h3 className="font-display text-2xl">Breads & Loaves</h3>
                <p className="mt-1 text-sm text-muted-foreground">Soda, wheaten, sourdough and the morning bake. In before lunch.</p>
              </div>
              <span className="text-sm font-medium text-[var(--ember)]">from £2</span>
            </div>
          </article>

          <article className="group md:col-span-5 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
            <div className="overflow-hidden">
              <img src={cakesImg} alt="Iced buns and cream cakes" width={900} height={1100} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="flex items-end justify-between gap-6 p-6">
              <div>
                <h3 className="font-display text-2xl">Buns & Cakes</h3>
                <p className="mt-1 text-sm text-muted-foreground">Iced fingers, cream buns, gravy rings & a daily traybake.</p>
              </div>
              <span className="text-sm font-medium text-[var(--ember)]">from £1.50</span>
            </div>
          </article>

          <article className="group md:col-span-5 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
            <div className="overflow-hidden">
              <img src={sausageRollsImg} alt="Golden flaky sausage rolls" width={900} height={900} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="flex items-end justify-between gap-6 p-6">
              <div>
                <h3 className="font-display text-2xl">Sausage Rolls</h3>
                <p className="mt-1 text-sm text-muted-foreground">The reason people pop in twice. Best warm, straight out the tray.</p>
              </div>
              <span className="text-sm font-medium text-[var(--ember)]">£2.20</span>
            </div>
          </article>

          <article className="group md:col-span-7 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
            <div className="overflow-hidden">
              <img src={sandwichImg} alt="Made-to-order sandwich on fresh bakery bread" width={900} height={900} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="flex items-end justify-between gap-6 p-6">
              <div>
                <h3 className="font-display text-2xl">Sandwiches, Made Fresh</h3>
                <p className="mt-1 text-sm text-muted-foreground">Built on our own bread. Order ahead for the lunch rush.</p>
              </div>
              <span className="text-sm font-medium text-[var(--ember)]">from £4</span>
            </div>
          </article>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="bg-[var(--cream)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-script text-2xl text-[var(--ember)]">Our story</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">A neighbourhood bakery, the way it should be.</h2>
          </div>
          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              Skinners has been a fixture of Holywood High Street for years —
              the kind of place where the staff know your order before you
              reach the counter.
            </p>
            <p>
              We bake in small batches through the morning, so what you take
              home is what came out of our ovens hours earlier. Nothing
              clever. Just proper bread, proper cakes, and a proper welcome.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="font-display text-4xl text-foreground">108+</div>
                <div className="text-sm">5★ leaning reviews</div>
              </div>
              <div>
                <div className="font-display text-4xl text-foreground">8am</div>
                <div className="text-sm">Doors open daily</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-col items-center text-center">
          <p className="font-script text-2xl text-[var(--ember)]">Kind words</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">Loved by locals</h2>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1 text-[var(--ember)]">
              <Star /><Star /><Star /><Star /><Star />
            </span>
            4.5 average · 108 reviews on Google
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { q: "Great for buns, bread, cakes, sausage rolls and sandwiches.", a: "Holywood local" },
            { q: "Lovely friendly staff, great food, great service ❤️", a: "Verified Google review" },
            { q: "Great selection of home cooked options.", a: "Regular customer" },
          ].map((r) => (
            <figure key={r.q} className="flex flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <div className="text-[var(--ember)]">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <blockquote className="mt-4 font-display text-xl leading-snug text-foreground">
                "{r.q}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {r.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Visit / CTA */}
      <section id="visit" className="relative overflow-hidden bg-[var(--crust)] text-[var(--cream)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2">
          <div>
            <p className="font-script text-2xl text-[var(--accent)]">Come see us</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-[var(--cream)]">Pop in, or call ahead.</h2>
            <p className="mt-5 max-w-md text-base text-[var(--cream)]/75">
              Order sandwiches, traybakes or a celebration cake by phone —
              we'll have it boxed and ready when you arrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} className="rounded-full bg-[var(--accent)] px-6 py-3 text-base font-medium text-[var(--crust)] transition hover:opacity-90">
                Call {PHONE_DISPLAY}
              </a>
              <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[var(--cream)]/30 px-6 py-3 text-base font-medium text-[var(--cream)] transition hover:border-[var(--accent)]">
                Get directions →
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--cream)]/15 bg-[var(--cream)]/5 p-6">
              <h3 className="font-display text-xl text-[var(--cream)]">Find us</h3>
              <p className="mt-2 text-sm text-[var(--cream)]/75">{ADDRESS}</p>
              <p className="mt-1 text-sm text-[var(--cream)]/60">1.1 miles from town centre</p>
            </div>
            <div className="rounded-2xl border border-[var(--cream)]/15 bg-[var(--cream)]/5 p-6">
              <h3 className="font-display text-xl text-[var(--cream)]">Opening hours</h3>
              <ul className="mt-2 space-y-1 text-sm text-[var(--cream)]/75">
                <li className="flex justify-between"><span>Mon–Fri</span><span>8am – 5pm</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>8am – 5pm</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--cream)]/15 bg-[var(--cream)]/5 p-6 sm:col-span-2">
              <h3 className="font-display text-xl text-[var(--cream)]">Phone</h3>
              <a href={`tel:${PHONE}`} className="mt-2 block font-display text-2xl text-[var(--accent)]">{PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg text-foreground">Skinners Bakery</span>
            <span className="font-script text-[var(--ember)]">est. on High Street</span>
          </div>
          <p>© {new Date().getFullYear()} Skinners Bakery, Holywood. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
