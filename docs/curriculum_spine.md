# Kairo Curriculum Spine — v1

**Version 1.0 — May 2026**
**Internal planning document. Working draft.**

**Format:** 2-day in-person workshop, Miami.
**Class size:** 15 working professionals (managers, directors, senior ICs).
**Pre-work:** ~30 minutes — short intake form (job context, current AI usage 0-5, one workflow they want fixed).
**What they bring:** laptop, accounts already created on ChatGPT, Claude, and Gemini (free tiers fine; instructions in pre-work).
**What they leave with:** at least 3 working AI integrations they're using in their job by the following Monday.

---

## Pedagogical foundation

The arc follows the Kolb experiential learning cycle (concrete experience → reflection → conceptualization → application) combined with Knowles' andragogy principle (anchor material to learner context before introducing concepts).

The day breaks into approximately 90-minute blocks separated by short breaks. Each block has a similar shape:
- 5-10 min: brief frame ("here's why we're doing this next")
- 15-20 min: demo by instructor
- 30-45 min: hands-on participant work
- 10-15 min: round-the-room share-outs + targeted Q&A

This is deliberate. Workshops where the instructor lectures for an hour and then says "now try it" produce poor outcomes. Workshops where instruction and practice alternate every 30-45 minutes produce skill retention. Research backs this consistently (Kolb, Knowles, also CLO100 2026 cohort+coaching findings).

---

## Day 1 — "AI is a tool. Today you become a user."

### Block 1: Opening (60 minutes)

| Time | Activity |
|---|---|
| 0:00-0:05 | Instructor intro — name, why Kairo exists, brief credentials (Amex senior security engineer running production AI safety systems, CS adjunct, Anansi founder), why this room matters |
| 0:05-0:15 | **Structured participant intros.** Prompt: "30 seconds each. First name, what you do in a sentence, and one specific thing in your job this week that AI should have made easier but didn't — or that you didn't even try because you didn't know how." Instructor writes the "one thing" answers on a board/flipchart visible all day. These become the spine of the demos. |
| 0:15-0:35 | **Hook demo.** Live, instructor's laptop on screen. Pick the most universally-relatable item from the intro flipchart (long email, document summary, meeting notes, data analysis). Solve it end-to-end in 15-20 minutes with Claude or ChatGPT, narrating as you go. Show the parts that work and the parts that don't (early honesty). |
| 0:35-0:50 | **"What AI actually is."** 15-minute frame talk. No slides, or minimal. Cover: what's a model, what's a token, why does it hallucinate, what's the difference between Claude / ChatGPT / Gemini / Grok / open-source. When NOT to use it. **This is where the Amex work shines** — "in my day job I run a system that classifies prompts as safe/unsafe for 75,000 colleagues' AI usage, and here's what I've learned about how these models actually behave under real load." |
| 0:50-1:00 | Break |

### Block 2: Getting hands on the tools (90 minutes)

| Time | Activity |
|---|---|
| 1:00-1:10 | **Frame.** "By end of this block, every one of you has used Claude, ChatGPT, and Gemini productively on something from your real job." |
| 1:10-1:30 | **Side-by-side demo.** Take a single task (e.g., turn this messy 800-word email into a clear 3-paragraph summary). Run it in all three tools. Show the differences. Discuss when you'd choose each. |
| 1:30-2:15 | **Hands-on work.** Each participant picks one task from their own job — same flipchart from intros — and runs it through all three tools. Instructor walks the room, helping with model selection, login issues, and basic prompting. |
| 2:15-2:30 | **Share-outs.** 3-4 volunteers walk through what they tried, what worked, what didn't. Instructor adds tactical advice in real time. |

### Block 3: Prompting that actually works (90 minutes)

| Time | Activity |
|---|---|
| 2:30-2:45 | **The honest truth about prompt engineering.** Most "prompt engineering" content online is overcomplicated. Cover the 4-5 patterns that actually matter: (1) role + context, (2) explicit format/structure, (3) examples (few-shot), (4) chain-of-thought ("think step by step before answering"), (5) iterative refinement (don't expect first answer to be best). |
| 2:45-3:00 | **Demo: same prompt, five ways.** Take one task and show how the output changes as you refine the prompt with each technique. Side-by-side comparison. |
| 3:00-3:45 | **Hands-on practice.** Each participant takes a job task and applies all 5 patterns. They keep iterating until they get an output they'd actually use. Instructor walks the room. |
| 3:45-4:00 | **Reflection round.** What surprised you? What pattern shifted your output most? Brief share-outs. |

### Block 4: Working with documents (75 minutes)

| Time | Activity |
|---|---|
| 4:00-4:15 | **Frame and demo.** Document upload is where many participants will get their biggest immediate wins. Show: uploading a PDF and getting a summary, uploading meeting notes and extracting action items, uploading a CSV and asking for analysis, uploading a contract and asking for risk flags. Show Claude Projects for persistent context across multiple chats on the same topic. |
| 4:15-5:00 | **Hands-on.** Participants pull a real document from their work — anonymized if needed — and work through 3-4 document tasks. Instructor walks the room. |
| 5:00-5:15 | **Wrap Day 1.** What did you accomplish today? Quick round-the-room: each person names one specific thing they got working that they couldn't do before this morning. Build the energy for tomorrow. |

### Day 1 homework

- Use Claude or ChatGPT or Gemini for at least one real work task tonight or tomorrow morning.
- Note one thing that worked and one thing that didn't.
- Bring one work task or workflow tomorrow that you want to *automate* (not just complete once — automate as a recurring thing).

---

## Day 2 — "AI is also a builder. Today you start building."

### Block 5: Recap and momentum (45 minutes)

| Time | Activity |
|---|---|
| 0:00-0:30 | **Homework share-outs.** Round-the-room: what did you use AI for between yesterday and today? What worked, what didn't? Instructor weaves the surfaced problems into the rest of the day. |
| 0:30-0:45 | **Frame Day 2.** "Yesterday you became users. Today we go a level deeper. Custom GPTs, projects, custom instructions, and then we connect AI to your other tools — sheets, calendars, email." |

### Block 6: Custom AIs for your job (90 minutes)

| Time | Activity |
|---|---|
| 0:45-1:00 | **Custom GPTs and Claude Projects.** What they are. When you'd build one. Where their limits are. Instructor demonstrates one they've built (e.g., a writing assistant trained on a specific tone, or a research assistant scoped to a specific domain). |
| 1:00-1:20 | **Building one live.** Instructor builds a custom GPT or Claude Project from scratch on screen for a job context volunteered by a participant. Shows the system prompt iteration, the knowledge upload, the instruction tuning. |
| 1:20-2:15 | **Hands-on.** Each participant builds their own custom assistant for one specific recurring task in their job. Instructor walks the room, helping with system prompts and scoping. |

### Block 7: AI + your other tools (75 minutes)

| Time | Activity |
|---|---|
| 2:15-2:30 | **Frame.** The biggest leap isn't in the AI tool itself — it's connecting AI to the rest of your work. Email, sheets, calendar, CRM. Cover what's possible (a lot), what's overhyped (agents that "do everything"), and what's reliable today. |
| 2:30-2:50 | **Live build.** Show how to connect Claude or ChatGPT to a Google Sheet (via Apps Script + API, or via tools like Zapier/Make if they exist in 2026 form). Show how to wire an AI into Gmail or Outlook for draft generation. |
| 2:50-3:30 | **Hands-on.** Participants pick one connection point — sheets, email, or calendar — and try it. Instructor floats, helping with API keys and basic JavaScript or scripting. **Note:** this block requires participants of varying technical comfort. The instructor's job is to meet each person where they are — some will build real integrations, others will get a basic email draft working. Both are wins. |

### Block 8: When AI fails — and what to do about it (60 minutes)

| Time | Activity |
|---|---|
| 3:30-3:50 | **Failure modes that matter.** This is **the high-value block** because it's where the Amex safety work directly informs the curriculum. Cover: hallucination patterns and how to spot them, prompt injection (with live demo of how it works), data leakage risk, model confidence vs accuracy, when models hedge vs when they should hedge. |
| 3:50-4:10 | **Live demo: jailbreaks and prompt injection.** Show how a malicious user could try to manipulate an AI assistant. Show defenses. This is rare content — most workshops don't cover it because the instructor doesn't know it. Yours does. |
| 4:10-4:30 | **Group discussion.** What's the highest-risk way you might use AI in your job? How do you mitigate it? What guardrails would you put in place? |

### Block 9: Bringing it back to your team (45 minutes)

| Time | Activity |
|---|---|
| 4:30-4:50 | **Frame.** You're going to leave this room and someone on your team is going to ask "what did you learn?" Or worse: your manager is going to ask "should we be using AI?" Here's how to answer that without overselling or underselling. |
| 4:50-5:10 | **The "starting brief" template.** Walk through a one-page document each participant fills out: "Here are the 3 AI use cases I'd pilot in my team in the next 30 days, the time-savings I expect, the risks I see, and the next steps." This is what they'll actually use Monday morning. |
| 5:10-5:30 | **Final round.** Each participant shares one specific thing they're going to do in their job within 7 days. Public commitment matters — it triples follow-through. Instructor closes with what's next: a 30-day check-in email, optional 1:1 office hours, alumni group invite. |

---

## Materials checklist

**Pre-workshop (sent 2 weeks before):**
- Intake form (job role, current AI usage 0-5, one workflow to fix, biggest curiosity, biggest concern)
- Account setup instructions for ChatGPT, Claude, Gemini (free tiers OK)
- Optional: short reading list (1-2 articles, not assigned)
- Calendar block for the workshop dates
- Venue logistics + what to bring (laptop, charger)

**At the workshop:**
- Printed name placards (handwritten gold-ink on cream cardstock if you want to match brand)
- Flipchart for the "one thing" intro answers
- Markers
- Backup laptops (1-2 spares for the inevitable participant whose laptop fails)
- Power strips for every table
- Backup hotspot in case venue wifi fails
- A USB stick with sample documents (long emails, sample CSVs, meeting transcripts, PDFs) for participants who don't bring their own
- Single-page "cheat sheet" handed out at end of Day 1 — the 5 prompt patterns + the failure modes + the model selection guide

**After the workshop:**
- "Starting brief" template (one-page)
- 30-day follow-up email
- Invitation to alumni Slack or LinkedIn group
- Office hours signup (optional 1:1, 30 min each, limited slots)

---

## What's NOT in the curriculum (deliberately)

- **Building AI agents from scratch.** Too technical for the audience; would lose 60% of the room. If asked, point to a future advanced workshop.
- **Fine-tuning models.** Same reason.
- **Detailed math of how transformers work.** Curiosity-driven only. Optional reading for those who want it.
- **Vendor/tool deep dives.** Show the major tools, don't get into endless comparison.
- **Detailed enterprise AI governance/policy.** That's Track A territory if it ever exists.
- **Strategy frameworks for AI adoption.** Same.

---

## Risk factors and mitigations

| Risk | Mitigation |
|---|---|
| Wide skill variance in the room | Pre-work intake surfaces this; pair stronger participants with weaker ones in hands-on blocks; have advanced "stretch" tasks ready for fast finishers |
| Demo fails live | Always have a pre-recorded backup of the same workflow ready to show. Frame the failure: "this is what real AI usage looks like — let me show you what to do when it fails" |
| Time blow-out on intros | Visible timer; instructor cuts politely at 30 seconds; pre-set norm |
| One participant dominates Q&A | "Let's hear from someone we haven't heard from yet" — pre-set as a norm |
| Wifi fails | Backup hotspot; some demos work offline (Claude desktop app); fall back to instructor's laptop on projector |
| Confidentiality concerns about Amex work | Frame as methodology, not specifics: "I work on enterprise AI safety; here's what I've learned about model behavior." Never reference Amex internal data, dashboards, or systems. |
| One participant gets stuck on technical setup | Instructor or assistant pairs with them privately for 5 minutes; meanwhile other participants continue |

---

## Year-1 evolution plan

After cohorts 1-3, expect to revise:
- The hook demo (find what consistently lands best)
- The "what AI is" frame (clarity over completeness)
- The custom GPT/Project block (which examples resonate most)
- The integrations block (which tools the audience actually uses — Outlook vs Gmail, Google Sheets vs Excel)
- The failure modes content (calibrate depth to audience reaction)

The curriculum should be treated as version-controlled. Each cohort's debrief notes feed v1.1, v1.2, etc. By v2.0 (around cohort 6-7), the curriculum should be stable enough to hand off to a co-instructor with confidence.

---

## Logistics framing — what's included, what isn't

Participants pay $3,000/seat for the workshop itself. Set expectations clearly and early on what that does and doesn't include.

**Included:**
- 2 full days of instruction
- Pre-work intake + tailored demos
- Printed materials (cheat sheet, starting brief template, name placard)
- Coffee/tea/water at the venue throughout
- 30-day post-workshop check-in email
- Optional 30-min 1:1 office hours (limited slots)
- Alumni group access (Slack or LinkedIn)

**Not included:**
- Meals — lunch is on participants' own time and budget. Frame as feature, not absence.
- Travel and accommodation
- AI tool subscriptions (free tiers used during workshop; participants may want paid tiers afterward)

**Lunch framing in confirmation + logistics emails:**

> "We've deliberately kept lunch open so you can use the break to recharge however suits you. There are several quality options within a 5-minute walk of the venue — we'll send a curated list ~3 days before the workshop."

Compile the lunch list once (8-10 nearby spots, mix of quick/sit-down, range of price points and cuisines). 20 minutes of work, paid off across every cohort.

**Where to communicate logistics:**

| Touchpoint | Content |
|---|---|
| Registration confirmation email | Workshop dates, venue address, what to expect, what's included, what isn't (with lunch framing) |
| 2-week-out email | Link to intake form + reminder to set up Claude/ChatGPT/Gemini accounts |
| 3-days-out email | Final logistics, parking info, what to bring, the curated lunch list |
| At venue | Printed welcome card on each seat with wifi password + lunch list + agenda |

---

*This spine is the foundation for site copy, outreach material, and first-cohort delivery. It will be tested and revised iteratively — first against 2-3 colleagues who give honest feedback before the first paid cohort, then refined after each delivery.*
