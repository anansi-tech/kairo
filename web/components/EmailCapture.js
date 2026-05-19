"use client";

import { useState } from "react";

// TODO(Task 4): Swap this stub for a real mailto handler or Tally embed.
export default function EmailCapture() {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // wired in Task 4
  };

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
        className="flex-1 px-5 py-4 bg-anansi-cream border border-anansi-espresso/15
                   text-anansi-espresso placeholder:text-anansi-espresso/40
                   focus:outline-none focus:border-anansi-bronze rounded-sm"
      />
      <button
        type="submit"
        className="px-7 py-4 bg-anansi-bronze text-anansi-cream
                   text-[12px] tracking-[0.12em] uppercase font-semibold rounded-sm
                   hover:bg-anansi-espresso transition-colors whitespace-nowrap"
      >
        Get notified →
      </button>
    </form>
  );
}
