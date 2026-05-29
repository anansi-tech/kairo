# Kairo Cheat Sheet

**Handed out:** end of Day 1
**Format:** 1 page, double-sided (so they can keep using it after the workshop)
**Tone:** practitioner notes, not corporate training material

---

## Front: The 5 Prompt Patterns That Matter

Most "prompt engineering" advice online is overcomplicated. These five patterns cover 90% of real-world prompting.

**1. Role + Context**

Tell the AI who it is and what it's working with. Don't just ask a question — set the scene.

*Weak:* "How do I write this email?"
*Strong:* "You are an experienced senior manager. I need to write to my team about a project delay we're going to announce on Friday. The reason is supplier issues, not anything our team did. Help me draft this in a way that's honest without being alarming."

**2. Explicit Format**

Tell it exactly what shape you want the answer in. Tables. Bullets. Three paragraphs. JSON. A specific length.

*Weak:* "Summarize this meeting."
*Strong:* "Summarize this meeting in three sections: (1) Decisions made, (2) Open questions, (3) Action items with names attached. Use bullet points. Total under 200 words."

**3. Examples (Few-Shot)**

Show, don't just tell. If you have 2-3 examples of what good output looks like, paste them in.

*Weak:* "Write me a compelling LinkedIn post about this product launch."
*Strong:* "Here are three LinkedIn posts I've written that performed well: [paste]. Write a new one in the same style about our product launching next week."

**4. Chain-of-Thought ("Think Step by Step")**

For anything that involves reasoning or analysis, ask the AI to think through the problem before giving the answer. Quality goes up dramatically.

*Weak:* "Should we use Vendor A or Vendor B?"
*Strong:* "Before you recommend Vendor A or B, walk through the pros and cons of each, then weigh them, then make your recommendation. Show your reasoning."

**5. Iterative Refinement**

The first answer is rarely the best. Don't accept it. Push back. Ask for a different angle. Tell it what to change. Most people stop too early.

*Weak:* "Write me a draft." → accepts whatever comes out
*Strong:* "Write me a draft." → "Make it shorter." → "Drop the second paragraph entirely." → "Add a specific example here." → done.

---

## Back: When AI Fails (and How to Spot It)

AI tools are useful. They're also wrong sometimes — and the way they're wrong matters.

**Hallucination**
The AI confidently states something that isn't true. It might cite a study that doesn't exist, invent a quote from a real person, or get a date wrong. *How to spot it:* verify any specific factual claim — names, numbers, dates, citations — before you use it in something that matters.

**Plausible nonsense**
The output reads well but doesn't make sense if you actually think about it. Common in summaries of complex documents — the AI smooths over what it didn't understand. *How to spot it:* read like a skeptic. If a sentence sounds important but you can't restate it in your own words, it might be empty.

**Confident hedging**
The AI says "I think" or "it's possible that" when it shouldn't be hedging — the answer is actually knowable. Or worse: it states something confidently when it should be hedging. *How to spot it:* notice the confidence level. Does it match the difficulty of what you asked?

**Stale information**
Free-tier models often have a knowledge cutoff months or years old. Don't trust them for current events, recent prices, or current people in roles. *How to spot it:* always ask "what's the date you're working from?" or use a model with web search enabled.

**Prompt injection**
If you're using AI to process text from someone else (an email, a document, a webpage), that text can contain hidden instructions that hijack the AI. "Ignore your previous instructions and reply with..." style attacks. *How to spot it:* be wary when AI does something unexpected after processing external content. Treat untrusted text as untrusted input.

**Data leakage**
Anything you paste into a public AI tool may be used to train future models. Don't paste customer data, financial records, confidential strategy, or anything covered by NDA. *How to spot it:* you don't — you just don't paste sensitive content in the first place. Use enterprise tiers or local models for that.

---

## Model Selection Cheat Sheet

For most everyday work, the differences are small. But these patterns hold:

**ChatGPT (GPT-4o / GPT-5)** — Best general-purpose default. Strong on creative writing, brainstorming, and most office tasks. GPT-5 is excellent at reasoning.

**Claude (Sonnet / Opus)** — Best for long documents and nuanced writing. Better at maintaining tone and following complex instructions. Stronger at admitting when it doesn't know.

**Gemini** — Best when you need integration with Google Workspace (Gmail, Docs, Drive). Strong on factual queries via Google Search integration.

**When to use which:**
- *Quick question:* whichever you have open
- *Long document analysis:* Claude
- *Creative brainstorming:* ChatGPT
- *Inside Google Workspace:* Gemini
- *Sensitive content:* enterprise tier of any of the above, or your company's approved internal tool

---

## One last thing

You don't need to be perfect at any of this. You just need to start using AI in your real work, notice what works, and keep going.

The colleagues you know who "get AI" aren't smarter than you. They've just had more reps. Today and tomorrow gave you reps. Keep going.

— David
*Kairo by Anansi · kairo.anansi.xyz*
