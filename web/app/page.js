import EmailCapture from "../components/EmailCapture";

// TODO: when a cohort date is confirmed, change CTA to "Reserve your seat — [date]" and
// update the hero sub-CTA accordingly. See docs/round_29_PROMPT.md scope notes.
const COHORT_STATUS = "pending"; // "pending" | { date: "2026-09-12" }

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        id="top"
        className="relative min-h-[88svh] flex items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(122,15,20,0.07), transparent 70%)",
          }}
        />
        <div className="relative max-w-[960px] mx-auto text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-kairo-red font-semibold mb-7 animate-fade-up animate-fade-up-delay-1">
            Kairo by Anansi · Executive AI Education
          </p>
          <h1 className="font-display text-[clamp(44px,7vw,86px)] leading-[1.02] text-kairo-black animate-fade-up animate-fade-up-delay-1">
            Stop reading about AI.
            <br />
            <span className="italic text-kairo-red">Start using it.</span>
          </h1>
          <p className="mt-8 text-[17px] sm:text-[19px] text-kairo-black/75 leading-[1.6] max-w-[680px] mx-auto animate-fade-up animate-fade-up-delay-2">
            A 2-day hands-on workshop for working professionals. Open your laptop, learn from
            someone who actually builds with AI, leave with working tools in your real job by Monday morning.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-fade-up-delay-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-kairo-red text-kairo-cream
                         text-[13px] tracking-[0.1em] uppercase font-semibold rounded-sm
                         hover:bg-kairo-black transition-colors min-w-[260px] justify-center"
            >
              Get notified about the next cohort →
            </a>
            <a
              href="#what-you-learn"
              className="text-[13px] tracking-[0.1em] uppercase text-kairo-black/65
                         hover:text-kairo-red transition-colors"
            >
              See what you learn
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU LEARN ===== */}
      <section
        id="what-you-learn"
        className="py-24 md:py-28 px-6 md:px-12 border-t border-kairo-black/10"
      >
        <div className="max-w-[1200px] mx-auto reveal">
          <Eyebrow>What you learn</Eyebrow>
          <h2 className="font-display text-[clamp(32px,4.5vw,56px)] leading-[1.1] text-kairo-black max-w-[700px]">
            Two days. <span className="italic text-kairo-red">Real tools, real work.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-14">
            <DayCard
              num="Day 1"
              title="Foundations + your first working AI"
              items={[
                "What AI actually is, in plain language",
                "Hands-on with Claude, ChatGPT, and Gemini against your real work",
                "Prompt engineering that produces useful outputs (5 patterns)",
                "Working with documents — uploading, summarizing, extracting",
                "First working automation built before you leave for dinner",
              ]}
            />
            <DayCard
              num="Day 2"
              title="Custom tools + bringing it back to your team"
              items={[
                "Custom GPTs and Claude Projects for your specific job",
                "Connecting AI to your other tools — sheets, email, calendar",
                "When AI fails — and what to do about it (the block most workshops skip)",
                "Bringing what you learned back to your team",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ===== WHO IT'S FOR ===== */}
      <section
        id="who-its-for"
        className="py-24 md:py-28 px-6 md:px-12 border-t border-kairo-black/10 bg-kairo-cream"
      >
        <div className="max-w-[1200px] mx-auto reveal">
          <Eyebrow>Who it's for</Eyebrow>
          <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.15] text-kairo-black max-w-[820px]">
            Working professionals who&apos;ve heard about AI everywhere — and are quietly worried
            they don&apos;t actually know how to use it.
          </h2>
          <p className="mt-7 text-[17px] text-kairo-black/75 leading-[1.75] max-w-[760px]">
            You don&apos;t need a technical background. You don&apos;t need to &ldquo;be good at
            computers.&rdquo; You just need a laptop and a job where AI could probably help, if you
            only knew where to start.
          </p>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-14">
            <Persona
              role="Director, financial firm"
              quote="My team uses ChatGPT but I don&rsquo;t really. I want to lead, not lag."
            />
            <Persona
              role="Senior manager, operations"
              quote="AI is on every quarterly slide deck. I need to know what&rsquo;s real."
            />
            <Persona
              role="20-year IC"
              quote="I&rsquo;ve watched a junior employee do my report in 5 minutes. I&rsquo;m catching up — fast."
            />
          </div>
        </div>
      </section>

      {/* ===== WHAT MAKES IT DIFFERENT ===== */}
      <section className="py-24 md:py-28 px-6 md:px-12 border-t border-kairo-black/10">
        <div className="max-w-[1200px] mx-auto reveal">
          <Eyebrow>What makes it different</Eyebrow>
          <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.15] text-kairo-black max-w-[760px]">
            Not another deck. Not another &ldquo;framework.&rdquo;
            <br />
            <span className="italic text-kairo-red">Built by an operator.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-12 mt-14">
            <Moat title="Operator-taught">
              David doesn&apos;t just teach AI. He builds production AI safety systems at American
              Express, classifying prompts for 75,000 colleagues. Most AI educators have read about
              this work. David does it.
            </Moat>
            <Moat title="Hands-on, not lecture">
              Day 1 hour 1: laptops open. Every concept is followed by 15-20 minutes of &ldquo;now
              try it in your context.&rdquo; You leave with working AI in your actual job, not
              notes about working AI in someone else&apos;s case study.
            </Moat>
            <Moat title="Backed by a real company">
              Kairo is part of Anansi, an AI-first technology company. The same instructor who
              teaches the workshop is shipping AI to production every day. The curriculum is
              current because the practice is current.
            </Moat>
            <Moat title="Academic credibility">
              CS adjunct at Nova Southeastern University, PhD dissertation committee member. Real
              teaching, real students, real research oversight.
            </Moat>
          </div>
        </div>
      </section>

      {/* ===== FORMAT & PRICING ===== */}
      <section className="py-24 md:py-28 px-6 md:px-12 border-t border-kairo-black/10 bg-kairo-black text-kairo-cream">
        <div className="max-w-[1200px] mx-auto reveal">
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-8 h-px bg-kairo-gold" />
            <p className="text-[10px] tracking-[0.25em] uppercase text-kairo-gold font-semibold">
              Format &amp; pricing
            </p>
          </div>
          <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.15] max-w-[700px]">
            Small cohorts. <span className="italic text-kairo-gold">Premium price.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-kairo-cream/10 mt-14">
            <Stat label="Duration" value="2 days" sub="intensive" />
            <Stat label="Cohort size" value="15" sub="seats max" />
            <Stat label="Location" value="Miami" sub="venue at registration" />
            <Stat label="Format" value="2-day intensive" sub="Miami in-person + virtual cohorts" />
          </div>

          <div className="mt-10 md:mt-12 grid sm:grid-cols-3 gap-5 md:gap-6">
            <PriceTile primary="$3,000" label="per seat · in-person" />
            <PriceTile primary="$1,500" label="virtual · two 4-hr days, one week apart" />
            <PriceTile primary="from $30K" label="B2B engagements · private cohorts" />
          </div>

          <p className="mt-8 text-sm text-kairo-cream/70 max-w-[640px] mx-auto leading-[1.6] text-center">
            Two-day virtual cohorts run as two 4-hour sessions one week apart — humane pacing
            that protects momentum without consuming your week. Same curriculum as in-person,
            adapted for remote delivery.
          </p>
        </div>
      </section>

      {/* ===== INSTRUCTOR ===== */}
      <section
        id="about"
        className="py-24 md:py-28 px-6 md:px-12 border-t border-kairo-black/10"
      >
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[280px_minmax(0,1fr)] gap-12 md:gap-16 items-start reveal">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full bg-kairo-cream border-2 border-kairo-red shadow-[0_24px_48px_rgba(14,14,14,0.18)] flex items-center justify-center">
              {/* TODO: replace with David's headshot when provided. */}
              <span className="font-display text-[64px] md:text-[80px] text-kairo-red leading-none">
                DN
              </span>
            </div>
            <p className="mt-5 text-[12px] tracking-[0.18em] uppercase text-kairo-black/60">
              Your instructor
            </p>
          </div>

          <div>
            <Eyebrow>About David</Eyebrow>
            <h2 className="font-display text-[clamp(28px,3.6vw,44px)] leading-[1.15] text-kairo-black">
              Dr. David Noel
            </h2>
            <p className="mt-5 text-[16px] text-kairo-black/80 leading-[1.8]">
              Dr. David Noel is the founder of Anansi Technology LLC, an AI-first technology company
              building products at the intersection of AI and financial infrastructure. He is a
              Senior Cybersecurity Engineer at American Express, where he leads enterprise AI
              safety initiatives including production LLM-as-judge classifiers, prompt injection
              detection systems, and AI vulnerability assessment frameworks. He is an adjunct
              professor of computer science at Nova Southeastern University and serves on PhD
              dissertation committees for AI-related research.
            </p>
            <p className="mt-5 text-[16px] text-kairo-black/80 leading-[1.8]">
              Before Anansi, David was a software engineer at Schlumberger and American Express. He
              is a builder first and a teacher second — Kairo exists because the people he teaches
              in his university classes kept asking how to apply AI to their actual jobs, and most
              existing programs weren&apos;t answering that question.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA / EMAIL CAPTURE ===== */}
      <section
        id="cta"
        className="py-28 md:py-32 px-6 md:px-12 border-t border-kairo-black/10 bg-kairo-cream relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(122,15,20,0.07), transparent 70%)",
          }}
        />
        <div className="max-w-[760px] mx-auto text-center relative reveal">
          <Eyebrow center>Next cohort</Eyebrow>
          <h2 className="font-display text-[clamp(32px,4.5vw,56px)] leading-[1.1] text-kairo-black">
            Get notified when the next cohort opens.
          </h2>
          <p className="mt-6 text-[17px] text-kairo-black/75 leading-[1.7] max-w-[580px] mx-auto">
            Cohorts are small and fill quickly. Add your email and we&apos;ll let you know when the
            next one opens — usually 4-6 weeks before the workshop date.
          </p>
          <EmailCapture />
        </div>
      </section>
    </>
  );
}

function Eyebrow({ children, center }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${center ? "justify-center" : ""}`}>
      <span className="block w-8 h-px bg-kairo-red" />
      <p className="text-[10px] tracking-[0.25em] uppercase text-kairo-red font-semibold">
        {children}
      </p>
    </div>
  );
}

function DayCard({ num, title, items }) {
  return (
    <div className="border-t border-kairo-black/15 pt-7">
      <p className="text-[11px] tracking-[0.2em] uppercase text-kairo-red font-semibold">
        {num}
      </p>
      <h3 className="font-display text-[26px] md:text-[30px] leading-[1.2] text-kairo-black mt-3">
        {title}
      </h3>
      <ul className="mt-7 space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-baseline">
            <span className="text-kairo-red text-[11px] font-mono shrink-0 mt-[3px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[15px] text-kairo-black/85 leading-[1.65]">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Persona({ role, quote }) {
  return (
    <div className="border border-kairo-black/12 bg-kairo-cream p-7 rounded-sm">
      <p className="text-[10px] tracking-[0.18em] uppercase text-kairo-red font-semibold mb-4">
        {role}
      </p>
      <p className="text-[15px] text-kairo-black/85 leading-[1.65] italic">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

function Moat({ title, children }) {
  return (
    <div>
      <h3 className="font-display text-[22px] md:text-[24px] text-kairo-black italic">
        {title}
      </h3>
      <p className="mt-3 text-[15px] text-kairo-black/80 leading-[1.75]">{children}</p>
    </div>
  );
}

function Stat({ label, value, sub }) {
  return (
    <div className="bg-kairo-black p-6 md:p-7">
      <p className="text-[10px] tracking-[0.18em] uppercase text-kairo-gold/80 mb-3">{label}</p>
      <p className="font-display text-[clamp(28px,3.4vw,40px)] leading-none text-kairo-cream">
        {value}
      </p>
      <p className="text-[11px] tracking-[0.1em] uppercase text-kairo-cream/55 mt-3">{sub}</p>
    </div>
  );
}

function PriceTile({ primary, label }) {
  return (
    <div className="border border-kairo-cream/15 px-6 py-6 rounded-sm">
      <p className="font-display text-[28px] md:text-[32px] text-kairo-gold leading-none">
        {primary}
      </p>
      <p className="text-[12px] tracking-[0.08em] uppercase text-kairo-cream/70 mt-3">{label}</p>
    </div>
  );
}
