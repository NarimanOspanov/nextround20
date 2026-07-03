# NextRound — Minimal Cool Product (MCP)

> **Minimal Cool Product** = the smallest version of NextRound that is genuinely useful *and* feels good to use.
> One sentence: **an interviewer can run a fair, monitored live interview in the browser and score the candidate — and the candidate can join in one click.**

- **Product:** NextRound — the interview room that verifies real skills
- **Status:** MVP scope · draft
- **Last updated:** 2026-07-03

---

## 1. Goal

Replace gamed take-home tests with a **live, structured, monitored** interview that both sides trust.
If the MVP does nothing else, it must let a team **invite → interview → score** a candidate without installs.

## 2. Scope

**In scope (MVP)**
- Create an interview room for a role, with a fixed question plan
- Invite a candidate via a browser link (no account, no install)
- Live video interview with a **panel of multiple interviewers** in the same room
- **Shared live code editor** and a **shared whiteboard** inside the room
- Live integrity signals (tab switch, paste, second person)
- **AI question generation** and **AI-assisted (draft) auto-scoring**
- Recording + criteria-based scorecard + hire/no-hire decision
- A simple dashboard of interviews

**Out of scope (later)**
- ATS integrations, calendar sync, billing
- Mobile native apps

---

## 3. Functional requirements (user stories)

> Format: *As a **role**, I want **something**, so that **benefit**.*
> Priority: **M** = Must-have · **S** = Should-have.

### Epic A — Set up an interview *(Recruiter)*
| # | User story | Priority | Screen |
|---|------------|----------|--------|
| US-1 | As a **recruiter**, I want to **create an interview room for a role**, so that I can invite a candidate to a live session. | M | [Dashboard](/demo/dashboard.html) |
| US-2 | As a **recruiter**, I want to **add a fixed list of questions**, so that every candidate for the role is asked the same things. | M | [Live room](/demo/room.html) |
| US-3 | As a **recruiter**, I want to **send the candidate a join link**, so that they can enter without installing anything. | M | [Invite](/demo/candidate-invite.html) |
| US-14 | As a **recruiter**, I want **AI to suggest role-specific questions** for the plan, so that I can build a fair, thorough interview faster. | S | [Live room](/demo/room.html) |

### Epic B — Run the live interview *(Interviewer)*
| # | User story | Priority | Screen |
|---|------------|----------|--------|
| US-4 | As an **interviewer**, I want to **talk to the candidate over live video**, so that I can assess them in real time. | M | [Live room](/demo/room.html) |
| US-5 | As an **interviewer**, I want to **follow and check off the question plan**, so that I stay on track and cover everything. | S | [Live room](/demo/room.html) |
| US-6 | As an **interviewer**, I want to **see integrity signals as they happen**, so that I can trust what I'm seeing. | M | [Live room](/demo/room.html) |
| US-15 | As an **interviewer**, I want to **invite co-interviewers into the same room** as a panel, so that we can assess the candidate together live. | M | [Live room](/demo/room.html) |
| US-16 | As an **interviewer and candidate**, we want a **shared live code editor** in the room, so that we can write and run code together in real time. | M | [Live room](/demo/room.html) |
| US-17 | As an **interviewer and candidate**, we want a **shared whiteboard** in the room, so that we can sketch system designs and diagrams together. | S | [Live room](/demo/room.html) |

### Epic C — Join as a candidate *(Candidate)*
| # | User story | Priority | Screen |
|---|------------|----------|--------|
| US-7 | As a **candidate**, I want to **join from a browser link**, so that I don't have to download software or make an account. | M | [Invite](/demo/candidate-invite.html) |
| US-8 | As a **candidate**, I want to **check my camera, mic, and connection first**, so that I'm not caught off guard. | S | [Invite / Lobby](/demo/candidate-invite.html) |
| US-9 | As a **candidate**, I want to **see what's recorded and monitored and give consent**, so that the process feels fair and transparent. | M | [In-room](/demo/candidate-room.html) |

### Epic D — Review & decide *(Interviewer / Panel)*
| # | User story | Priority | Screen |
|---|------------|----------|--------|
| US-10 | As an **interviewer**, I want to **score the candidate against fixed criteria**, so that decisions are consistent and comparable. | M | [Review](/demo/review.html) |
| US-11 | As an **interviewer**, I want to **replay the recording and jump to flagged moments**, so that I can judge them in context. | S | [Review](/demo/review.html) |
| US-12 | As a **hiring panel**, I want to **record a hire / no-hire decision**, so that we close the loop on the candidate. | M | [Review](/demo/review.html) |
| US-18 | As an **interviewer**, I want **AI-assisted draft scores and a transcript summary** after the call, so that scoring is faster — with the human making the final call. | S | [Review](/demo/review.html) |

### Epic E — See the pipeline *(Recruiter)*
| # | User story | Priority | Screen |
|---|------------|----------|--------|
| US-13 | As a **recruiter**, I want a **dashboard of upcoming and completed interviews**, so that I know what needs my attention. | M | [Dashboard](/demo/dashboard.html) |

---

## 4. Non-functional requirements

| # | Category | Requirement |
|---|----------|-------------|
| NFR-1 | **Performance** | A candidate joins the room in under 3 seconds; live video latency stays under ~300 ms; the dashboard loads in under 1 second. |
| NFR-2 | **Usability** | A candidate can join in ≤ 2 clicks with no account. Interviewer actions (start, next question, score) are reachable in one click. |
| NFR-3 | **Accessibility** | Meets WCAG 2.1 AA: full keyboard navigation, visible focus, sufficient contrast, and live captions available. |
| NFR-4 | **Security** | All traffic encrypted in transit (TLS); recordings encrypted at rest and visible only to the hiring team. |
| NFR-5 | **Privacy & compliance** | Explicit candidate consent before recording; clear retention window and a one-click deletion path (GDPR-friendly). |
| NFR-6 | **Reliability** | 99.9% uptime target; automatic reconnect on brief network drops; recording survives a refresh. |
| NFR-7 | **Compatibility** | Works on current Chrome, Edge, Safari, and Firefox, on desktop and tablet — no plugins. |
| NFR-8 | **Scalability** | Handles many concurrent interview rooms without quality loss. |
| NFR-9 | **Fairness / integrity** | Every candidate for a role gets the same questions and scoring criteria; integrity flags and AI draft scores are surfaced as *signals/suggestions*, never automatic verdicts — a human always makes the final call. |
| NFR-10 | **Observability** | A health endpoint and basic logging so uptime and errors can be monitored. |

---

## 5. Definition of Done (MVP)

- [ ] A recruiter can create a room, add questions, and share a link.
- [ ] A candidate can join in a browser, pass a device check, and consent.
- [ ] Interviewer(s) and candidate can see and hear each other live, with a panel able to join the same room.
- [ ] The room has a working shared code editor and a shared whiteboard.
- [ ] AI can suggest questions when building the plan.
- [ ] Integrity signals appear during the call.
- [ ] The interview is recorded and can be scored on fixed criteria, with AI draft scores as a starting point.
- [ ] A hire / no-hire decision is captured.
- [ ] All screens meet NFR-2 (usability) and NFR-3 (accessibility) basics.

*This document drives the HTML pages under `/mvp/` (a rendered spec) and the working demo screens under `/demo/`.*
