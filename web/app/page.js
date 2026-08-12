import Image from "next/image";
import EmailCapture from "../components/EmailCapture";

// TODO: when a cohort date is confirmed, change CTA to "Reserve your seat — [date]" and
// update the hero sub-CTA accordingly. See docs/round_29_PROMPT.md scope notes.
const COHORT_STATUS = "pending"; // "pending" | { date: "2026-09-12" }

const RAIL_ROWS = [
  { label: "Duration", value: "2 days", sub: "Friday–Saturday" },
  { label: "Cohort size", value: "15", sub: "seats max" },
  { label: "Founding rate", value: "$1,995", sub: "was $3,000" },
  { label: "Location", value: "Ft. Lauderdale", sub: "founding cohort" },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        id="top"
        className="relative z-[1] pt-[clamp(120px,17vh,180px)] pb-[clamp(56px,8vh,88px)] px-[clamp(20px,5vw,72px)] overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--wash-hero)" }}
        />
        <div className="relative max-w-[1240px] mx-auto grid grid-cols-1 min-[1040px]:grid-cols-[minmax(0,1fr)_300px] gap-11 min-[1040px]:gap-[clamp(32px,6vw,80px)] items-end">
          <div>
            <div className="flex items-center gap-3 animate-fade-up animate-fade-up-delay-1">
              <span className="block w-[30px] h-px bg-kairo-red shrink-0" />
              <p className="text-[10.5px] tracking-[0.26em] uppercase text-kairo-red font-bold">
                Kairo by Anansi · Executive AI Education
              </p>
            </div>
            <h1 className="font-display text-[clamp(46px,7.4vw,94px)] leading-[0.98] tracking-[-0.018em] text-kairo-black mt-[26px] animate-fade-up animate-fade-up-delay-1">
              Stop reading about&nbsp;AI.
              <br />
              <span className="italic text-kairo-red">Start using it.</span>
            </h1>
            <p className="mt-[26px] text-[clamp(16px,1.35vw,19px)] text-kairo-black/75 leading-[1.62] max-w-[53ch] animate-fade-up animate-fade-up-delay-2">
              A 2-day hands-on workshop for working professionals, Friday&ndash;Saturday &mdash; one
              day of PTO, not two. Open your laptop, learn from someone who actually builds with AI,
              leave with working tools in your real job by Monday morning.
            </p>
            <div className="mt-[34px] flex flex-wrap items-center gap-[14px] animate-fade-up animate-fade-up-delay-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 px-[22px] py-[13px] min-h-[44px]
                           bg-kairo-red text-kairo-cream text-[12px] tracking-[0.11em] uppercase font-bold
                           rounded-sm hover:bg-kairo-black transition-colors"
              >
                Reserve your seat — $500 refundable deposit →
              </a>
              <a
                href="#what-you-learn"
                className="inline-flex items-center justify-center gap-2 px-[22px] py-[13px] min-h-[44px]
                           border border-kairo-black/25 text-kairo-black text-[12px] tracking-[0.11em]
                           uppercase font-bold rounded-sm hover:border-kairo-red hover:text-kairo-red
                           transition-colors"
              >
                See what you learn
              </a>
            </div>
            <p className="mt-[26px] flex items-center gap-[9px] text-[11.5px] tracking-[0.13em] uppercase text-kairo-muted animate-fade-up animate-fade-up-delay-4">
              <span className="pulse-dot w-[6px] h-[6px] rounded-full bg-kairo-red shrink-0" />
              Founding cohort · Fort Lauderdale · 15 seats
            </p>
          </div>

          {/* Data rail — the whole offer above the fold */}
          <div className="border-t-2 border-kairo-black pt-[18px] max-w-[420px] min-[1040px]:max-w-none animate-fade-up animate-fade-up-delay-3">
            {RAIL_ROWS.map((row) => (
              <dl
                key={row.label}
                className="grid grid-cols-[1fr_auto] gap-x-4 items-baseline py-[13px] border-b border-kairo-border m-0"
              >
                <dt className="text-[10px] tracking-[0.2em] uppercase text-kairo-muted">
                  {row.label}
                </dt>
                <dd className="m-0 font-display text-[22px] leading-none text-right text-kairo-black">
                  {row.value}
                  <span className="block mt-[5px] font-body text-[10.5px] tracking-[0.1em] uppercase text-kairo-muted">
                    {row.sub}
                  </span>
                </dd>
              </dl>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSTRUCTOR ATTRIBUTION ===== */}
      {/* Face + one sentence only. No employer names, no credential strip — see design brief.
          Reserved slot: when testimonials exist, they belong here. */}
      <div className="relative z-[1] border-y border-kairo-border bg-kairo-black/[0.015]">
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-5 flex flex-wrap items-center gap-[18px]">
          <Image
            src="/profilepic.jpg"
            alt="Dr. David Noel"
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover object-top border-[1.5px] border-kairo-red shrink-0"
          />
          <p className="text-[15px] leading-[1.6] text-kairo-black/[0.78] max-w-[64ch]">
            Taught by <b className="font-medium text-kairo-black">Dr. David Noel</b> — PhD in
            Computer Science, Adjunct Professor at Nova Southeastern, and a working AI safety
            engineer.
          </p>
        </div>
      </div>

      {/* ===== WHAT YOU LEARN (01) ===== */}
      <section
        id="what-you-learn"
        className="relative z-[1] py-[clamp(72px,10vw,116px)] px-6 md:px-12"
      >
        <div className="max-w-[1240px] mx-auto reveal">
          <SectionHead num="01" eyebrow="What you learn">
            <h2 className="font-display text-[clamp(32px,4.5vw,56px)] leading-[1.08] text-kairo-black max-w-[19ch]">
              Two days, Friday&ndash;Saturday.{" "}
              <span className="italic text-kairo-red">Real tools, real work.</span>
            </h2>
          </SectionHead>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-[clamp(40px,5vw,64px)]">
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

      {/* ===== WHO IT'S FOR (02) ===== */}
      <section
        id="who-its-for"
        className="relative z-[1] py-[clamp(72px,10vw,116px)] px-6 md:px-12 border-t border-kairo-border"
      >
        <div className="max-w-[1240px] mx-auto reveal">
          <SectionHead num="02" eyebrow="Who it's for">
            <h2 className="font-display text-[clamp(27px,3.5vw,44px)] leading-[1.15] text-kairo-black max-w-[22ch]">
              Working professionals who&apos;ve heard about AI everywhere — and are quietly worried
              they don&apos;t actually know how to use it.
            </h2>
            <p className="mt-[22px] text-[17px] text-kairo-black/75 leading-[1.75] max-w-[66ch]">
              You don&apos;t need a technical background. You don&apos;t need to &ldquo;be good at
              computers.&rdquo; You just need a laptop and a job where AI could probably help, if
              you only knew where to start.
            </p>
          </SectionHead>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-[clamp(40px,5vw,60px)]">
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

      {/* ===== WHAT MAKES IT DIFFERENT (03) ===== */}
      <section className="relative z-[1] py-[clamp(72px,10vw,116px)] px-6 md:px-12 border-t border-kairo-border">
        <div className="max-w-[1240px] mx-auto reveal">
          <SectionHead num="03" eyebrow="What makes it different">
            <h2 className="font-display text-[clamp(27px,3.5vw,44px)] leading-[1.15] text-kairo-black max-w-[22ch]">
              Not another deck. Not another &ldquo;framework.&rdquo;
              <br />
              <span className="italic text-kairo-red">Built by an operator.</span>
            </h2>
          </SectionHead>

          <div className="grid md:grid-cols-2 gap-y-[clamp(30px,4vw,56px)] gap-x-[clamp(30px,5vw,72px)] mt-[clamp(40px,5vw,64px)]">
            <Moat num="01" title="Operator-taught">
              David doesn&apos;t just teach AI. He builds production AI safety systems at American
              Express, classifying prompts for 75,000 colleagues. Most AI educators have read about
              this work. David does it.
            </Moat>
            <Moat num="02" title="Hands-on, not lecture">
              Day 1 hour 1: laptops open. Every concept is followed by 15-20 minutes of &ldquo;now
              try it in your context.&rdquo; You leave with working AI in your actual job, not notes
              about working AI in someone else&apos;s case study.
            </Moat>
            <Moat num="03" title="Backed by a real company">
              Kairo is part of Anansi, an AI-first technology company. The same instructor who
              teaches the workshop is shipping AI to production every day. The curriculum is current
              because the practice is current.
            </Moat>
            <Moat num="04" title="Credentialed and current">
              David holds a PhD in Computer Science and is an Adjunct Professor at Nova Southeastern
              University — and a working AI safety engineer shipping production systems every day.
              Real teaching, real research, real practice.
            </Moat>
          </div>
        </div>
      </section>

      {/* ===== FORMAT & PRICING (04) ===== */}
      <section
        id="pricing"
        className="relative z-[1] py-[clamp(72px,10vw,116px)] px-6 md:px-12 bg-kairo-black text-kairo-cream"
      >
        <div className="max-w-[1240px] mx-auto reveal">
          <SectionHead num="04" eyebrow="Format &amp; pricing">
            <h2 className="font-display text-[clamp(27px,3.5vw,44px)] leading-[1.15] max-w-[22ch]">
              Small&nbsp;cohorts. <span className="italic text-kairo-red">Premium&nbsp;price.</span>
            </h2>
          </SectionHead>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-kairo-cream/[0.14] border border-kairo-cream/[0.14] mt-[clamp(40px,5vw,60px)]">
            <Stat label="Duration" value="2 days" sub="Friday–Saturday" />
            <Stat label="Cohort size" value="15" sub="seats max" />
            <Stat label="Location" value="Fort Lauderdale" sub="founding cohort" />
            <Stat label="Format" value="Fri–Sat" sub="one day of PTO, not two" />
          </div>

          <p className="mt-[18px] text-[11.5px] tracking-[0.13em] uppercase text-kairo-cream/55">
            Founding cohort: Fort Lauderdale &middot; Future cohorts: Miami &amp; virtual
          </p>

          <div className="mt-[clamp(30px,4vw,44px)] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            <PriceTile
              featured
              flag="Founding"
              primary="$1,995"
              strike="$3,000 standard"
              label="founding cohort rate · in-person"
            />
            <PriceTile primary="$1,500" label="virtual · two 4-hr days, one week apart" />
            <PriceTile primary="from $30K" label="B2B engagements · private cohorts" />
          </div>

          {/* Risk-reversal fine print — parallel columns, not a centered stack */}
          <div className="mt-[clamp(30px,4vw,44px)] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-y-[22px] gap-x-10 pt-[26px] border-t border-kairo-cream/[0.14]">
            <p className="text-[14px] leading-[1.65] text-kairo-cream/[0.66]">
              Founding cohort pricing in exchange for honest feedback and a testimonial. 15 seats.
            </p>
            <p className="text-[14px] leading-[1.65] text-kairo-cream/[0.66]">
              Most attendees expense this through their professional development budget — manager
              justification letter provided.
            </p>
            <p className="text-[14px] leading-[1.65] text-kairo-cream/[0.66]">
              In-person cohorts run Friday&ndash;Saturday — one day of PTO, not two. Virtual
              cohorts run as two 4-hour sessions one week apart — humane pacing that protects
              momentum without consuming your week. Same curriculum, adapted for remote delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BRING IT TO YOUR MANAGER ===== */}
      <section className="relative z-[1] py-[clamp(56px,7vw,84px)] px-6 md:px-12 border-t border-kairo-border">
        <div className="max-w-[1240px] mx-auto reveal grid min-[900px]:grid-cols-[minmax(0,1fr)_auto] gap-7 min-[900px]:gap-[clamp(28px,5vw,64px)] items-center">
          <div>
            <Eyebrow>Bring it to your manager</Eyebrow>
            <h2 className="font-display text-[clamp(27px,3.5vw,44px)] leading-[1.15] text-kairo-black max-w-[22ch]">
              Need sign-off? <span className="italic text-kairo-red">We wrote the letter.</span>
            </h2>
            <p className="mt-[22px] text-[16px] text-kairo-black/75 leading-[1.75] max-w-[66ch]">
              Most attendees expense Kairo through their professional development budget. We&apos;ve
              drafted a one-page justification letter that explains the format, the outcomes, and
              the return in language your manager will recognize. Download it, add your name, and
              send it.
            </p>
          </div>
          <a
            href="/manager-letter.pdf"
            className="inline-flex items-center justify-center gap-2 px-[22px] py-[13px] min-h-[44px]
                       min-[900px]:whitespace-nowrap border border-kairo-black/25 text-kairo-black text-[12px]
                       tracking-[0.11em] uppercase font-bold rounded-sm justify-self-start
                       hover:border-kairo-red hover:text-kairo-red transition-colors"
          >
            Download the manager letter (PDF) ↓
          </a>
        </div>
      </section>

      {/* ===== INSTRUCTOR (05) ===== */}
      <section
        id="about"
        className="relative z-[1] py-[clamp(72px,10vw,116px)] px-6 md:px-12 border-t border-kairo-border"
      >
        <div className="max-w-[1240px] mx-auto reveal">
          <SectionHead num="05" eyebrow="The instructor">
            <h2 className="font-display text-[clamp(27px,3.5vw,44px)] leading-[1.15] text-kairo-black">
              Dr. David Noel
            </h2>
            <p className="mt-[14px] text-[13px] tracking-[0.05em] text-kairo-red font-bold uppercase leading-[1.6]">
              PhD, Computer Science · Adjunct Professor · Founder, Anansi
            </p>
          </SectionHead>

          <div className="grid min-[900px]:grid-cols-[280px_minmax(0,1fr)] gap-12 min-[900px]:gap-[clamp(32px,6vw,72px)] items-start mt-[clamp(36px,4vw,52px)]">
            <div className="w-[240px] max-w-full mx-auto min-[900px]:mx-0">
              <div className="w-full aspect-square rounded-full overflow-hidden border-2 border-kairo-red shadow-[0_24px_48px_rgba(5,5,5,0.18)] relative">
                <Image
                  src="/profilepic.jpg"
                  alt="Dr. David Noel"
                  fill
                  sizes="240px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <p className="mt-[18px] text-center text-[11px] tracking-[0.18em] uppercase text-kairo-muted">
                Dr. David Noel · PhD
              </p>
            </div>

            <div>
              <p className="text-[16px] text-kairo-black/80 leading-[1.8] max-w-[70ch]">
                David holds a PhD in Computer Science and is an Adjunct Professor at Nova
                Southeastern University, where he teaches AI and serves on the university’s Computer
                Science dissertation committee for AI-focused doctoral research. He is the founder
                of Anansi Technology LLC, an AI-first technology company building at the
                intersection of AI and financial infrastructure.
              </p>
              <p className="mt-5 text-[16px] text-kairo-black/80 leading-[1.8] max-w-[70ch]">
                In his day job, David is a Senior Cybersecurity Engineer at American Express, where
                he leads enterprise AI safety — building production LLM-as-judge classifiers,
                prompt-injection detection systems, and AI vulnerability assessment frameworks that
                protect tens of thousands of colleagues across the firm&apos;s AI tools. His
                evaluations directly inform which AI systems the enterprise trusts in production.
              </p>
              <p className="mt-5 text-[16px] text-kairo-black/80 leading-[1.8] max-w-[70ch]">
                His path to AI ran through hardware. David began his career as a chip design
                engineer at Intel, building the silicon that computing runs on, before moving into
                software and financial technology. That full-stack perspective — from transistors
                to large language models — is what makes his teaching different: he doesn&apos;t
                just show you which buttons to press, he explains what&apos;s actually happening
                underneath.
              </p>
              <p className="mt-5 text-[16px] text-kairo-black/80 leading-[1.8] max-w-[70ch]">
                David is a builder first and a teacher second. Kairo exists because the
                professionals he meets — in his classroom, at work, in his network — keep asking
                the same question: not &ldquo;what is AI,&rdquo; but &ldquo;how do I actually use
                it in my job?&rdquo; Most programs don&apos;t answer that. Kairo does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA / EMAIL CAPTURE ===== */}
      <section
        id="cta"
        className="relative z-[1] py-[clamp(80px,11vw,128px)] px-6 md:px-12 border-t border-kairo-border overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--wash-cta)" }}
        />
        <div className="max-w-[1240px] mx-auto text-center relative reveal">
          <Eyebrow center>Founding cohort</Eyebrow>
          <h2 className="font-display text-[clamp(32px,4.5vw,56px)] leading-[1.08] text-kairo-black max-w-[16ch] mx-auto">
            Reserve your seat in the founding cohort.
          </h2>
          <p className="mt-6 text-[17px] text-kairo-black/75 leading-[1.7] max-w-[58ch] mx-auto">
            Request a seat — we&apos;ll follow up within 24 hours with deposit details. A $500
            refundable deposit holds your place. 15 seats.
          </p>
          <div className="max-w-[560px] mx-auto">
            <EmailCapture />
          </div>
        </div>
      </section>
    </>
  );
}

function Eyebrow({ children, center }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${center ? "justify-center" : ""}`}>
      <span className="block w-[30px] h-px bg-kairo-red shrink-0" />
      <p className="text-[10.5px] tracking-[0.26em] uppercase text-kairo-red font-bold">
        {children}
      </p>
    </div>
  );
}

/* Section spine: DM Mono number in a narrow left column, eyebrow + heading right.
   Collapses to one column under 900px. */
function SectionHead({ num, eyebrow, children }) {
  return (
    <div className="grid min-[900px]:grid-cols-[auto_minmax(0,1fr)] gap-[14px] min-[900px]:gap-[clamp(24px,5vw,64px)] items-start">
      <p className="font-mono text-[11px] tracking-[0.14em] text-kairo-red min-[900px]:pt-[10px]">
        {num}
      </p>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        {children}
      </div>
    </div>
  );
}

function DayCard({ num, title, items }) {
  return (
    <div className="border-t-2 border-kairo-black pt-[22px]">
      <p className="text-[11px] tracking-[0.2em] uppercase text-kairo-red font-bold">{num}</p>
      <h3 className="font-display text-[clamp(23px,2.3vw,30px)] leading-[1.2] text-kairo-black mt-3">
        {title}
      </h3>
      <ul className="mt-[26px]">
        {items.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[34px_minmax(0,1fr)] gap-[14px] items-baseline py-[14px] border-b border-kairo-border"
          >
            <span className="font-mono text-[11px] text-kairo-red">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[15px] text-kairo-black/85 leading-[1.6]">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Persona({ role, quote }) {
  return (
    <div className="border border-kairo-border bg-white px-[26px] py-[30px] rounded-sm transition-[border-color,transform] duration-200 hover:border-kairo-red/45 hover:-translate-y-[2px]">
      <p className="text-[10px] tracking-[0.18em] uppercase text-kairo-red font-bold mb-4">
        {role}
      </p>
      <p className="font-display italic text-[19px] text-kairo-black leading-[1.45]">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

function Moat({ num, title, children }) {
  return (
    <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-[18px] items-start">
      <p className="font-mono text-[11px] tracking-[0.14em] text-kairo-red pt-[7px]">{num}</p>
      <div>
        <h3 className="font-display text-[clamp(21px,2vw,25px)] leading-[1.25] text-kairo-black italic">
          {title}
        </h3>
        <p className="mt-[11px] text-[15px] text-kairo-black/80 leading-[1.75]">{children}</p>
      </div>
    </div>
  );
}

function Stat({ label, value, sub }) {
  return (
    <div className="bg-kairo-black px-6 py-7">
      <p className="text-[10px] tracking-[0.18em] uppercase text-kairo-red/95 mb-4">{label}</p>
      <p className="font-display text-[clamp(22px,3vw,40px)] leading-[0.95] text-kairo-cream break-words">
        {value}
      </p>
      <p className="text-[10.5px] tracking-[0.1em] uppercase text-kairo-cream/50 mt-[14px]">
        {sub}
      </p>
    </div>
  );
}

function PriceTile({ primary, strike, label, featured, flag }) {
  return (
    <div
      className={`relative px-[26px] py-7 rounded-sm border transition-[border-color,background-color] duration-200 ${
        featured
          ? "border-kairo-red bg-kairo-red/[0.07]"
          : "border-kairo-cream/[0.16] hover:border-kairo-red/60 hover:bg-kairo-red/5"
      }`}
    >
      {featured && flag && (
        <span className="absolute -top-px -right-px bg-kairo-red text-kairo-cream text-[9px] tracking-[0.16em] uppercase font-bold px-[11px] py-[6px]">
          {flag}
        </span>
      )}
      <p className="font-display text-[clamp(30px,3.4vw,40px)] text-kairo-red leading-none flex items-baseline flex-wrap gap-3">
        {primary}
        {strike && (
          <s className="font-body text-[15px] text-kairo-cream/40 line-through font-normal">
            {strike}
          </s>
        )}
      </p>
      <p className="text-[11.5px] tracking-[0.09em] uppercase text-kairo-cream/[0.68] mt-4 leading-[1.5]">
        {label}
      </p>
    </div>
  );
}
