"use client";

import { useState } from "react";

// Email capture for the Kairo cohort interest list.
//
// v1 uses a mailto: handoff: submit opens the user's default mail client with
// a pre-filled message to david@anansi.xyz. Zero backend, ships day one.
//
// TODO: swap this for a Tally embed when one is set up. Create a "Kairo Cohort
// Interest" form at tally.so (fields: name, email, job title, company, role,
// anything else), then replace the body of this component with their embed
// snippet. The visual register (input + bronze button) should stay the same.
const CONTACT_EMAIL = "david@anansi.xyz";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = "Kairo cohort interest";
    const body = `Hi David,\n\nI'd like to be notified when the next Kairo cohort opens.\n\nEmail: ${email}\n\nA little about me / my role:\n`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="mt-10 max-w-[560px] mx-auto px-6 py-5 border border-kairo-bronze/40 bg-kairo-bronze/8 rounded-sm text-center">
        <p className="text-[14px] text-kairo-navy/85 leading-[1.6]">
          Your mail client should have opened. If it didn&apos;t, email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Kairo%20cohort%20interest`}
            className="text-kairo-bronze underline underline-offset-2 hover:text-kairo-navy"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          directly and we&apos;ll add you to the list.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-[560px] mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-5 py-4 bg-kairo-paper border border-kairo-navy/15
                   text-kairo-navy placeholder:text-kairo-navy/40
                   focus:outline-none focus:border-kairo-bronze rounded-sm"
      />
      <button
        type="submit"
        className="px-7 py-4 bg-kairo-bronze text-kairo-paper
                   text-[12px] tracking-[0.12em] uppercase font-semibold rounded-sm
                   hover:bg-kairo-navy transition-colors whitespace-nowrap"
      >
        Get notified →
      </button>
    </form>
  );
}
