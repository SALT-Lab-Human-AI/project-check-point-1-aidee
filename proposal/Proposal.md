## Problem & Importance

American education is in trouble. When [less than half of kids can read at grade level,](https://caaspp-elpac.ets.org/caaspp/DashViewReportSB?ps=true&lstTestYear=2024&lstTestType=B&lstGroup=1&lstSubGroup=1&lstSchoolType=A&lstGrade=13&lstCounty=00&lstDistrict=00000&lstSchool=0000000) and even fewer can handle basic math, we have a serious problem. It's not just about test scores either. As a nation, there are over 400,000 teaching positions [either unfulfilled or employing teachers without full certifications.](https://learningpolicyinstitute.org/product/state-teacher-shortages-vacancy-resource-tool-2024)

Although places like [Two By Two Learning Center](https://www.twobytwolearningcenters.com) are doing incredible work to support kids after school, [over 60%](https://nces.ed.gov/surveys/spp/results.asp) of public schools nationally offer academically focused after-school programming. Kids are falling further behind, tutors are burning out, and everyone is frustrated. We desperately need tools that can exemplify the impact of the educators and help kids learn.

---

## Prior Systems & Gaps

### Khanmigo (Khan Academy)

[Khanmigo](https://www.khanmigo.ai/) is an AI tutor tightly integrated with Khan Academy’s content and tools, offered at $4/month for learners and parents (free for teachers), and [powered by GPT-4](https://www.khanmigo.ai/parents?utm_source=chatgpt.com). Its focus on Khan’s curriculum and classroom workflows is a strength for alignment with assignments and teacher dashboards, but it also means limited cross-platform generalization and restricted long-term, cross-session personalization relative to a purpose-built memory layer. Like other LLM-based tutors, it can also inherit general hallucination risks, so upstream validation/guardrails remain important. 

### General LLM conversational tutors (ChatGPT, Gemini, etc.)

General LLMs are great at quickly producing step-by-step explanations across many topics, but evaluations that only check the final answer tend to overstate their tutoring utility (Weitekamp, Siddiqui, & MacLellan, 2025). In step-level classroom tasks—flagging an incorrect action, giving the next correct step, and providing targeted hints—LLMs remain unstable (incorrect-action labeling ~chance; next-step accuracy ≈ 52–70%) (Weitekamp et al., 2025). They can also exhibit sycophancy—agreeing with a user’s mistaken belief rather than correcting it—documented across RLHF-trained assistants and measured in multiple studies (Sharma et al., 2023; Malmqvist, 2024).  
  
### Duolingo (Max and Core App)
Duolingo is a gamified learning platform (now expanded into math/music/chess domains) featuring a powerful user retention loop and spaced repetition functionality. Its strengths lie in incentive mechanisms and polished user experience, but it remains domain-specific (language-first), requires payment to unlock AI features, and is not designed for step-by-step math tutoring or cross-session concept modeling. For our application scenario (K-12 math), Duolingo lacks the required foundational knowledge graph and validated step-checking capabilities. (Gap: Domain adaptability and pedagogical depth)

### Perplexity (Retrieval-Enhanced Chat Engine)
Perplexity returns answers with embedded citations and enables rapid web verification. This excels in research retrieval and quick synthesis but is unsuitable for tutoring workflows: it lacks persistent student models, step-by-step “next action” guidance, and has limited control over the flattery-based behavior common in reinforcement learning-based tools (Sharma et al., 2023). 

---

## Our Proposed Approach and Why It Will Improve On Prior Systems

We keep a main context with three parts: system rules, a small working pad, and an adaptive queue that holds recent turns.

The queue is not FIFO: it ranks items by relevance to the current problem, importance (grades, goals), freshness, and diversity (don’t keep four near-duplicates); low-score items decay and get compressed first. When the queue nears its limit, the tutor gets a warning, writes short summaries to the working pad, and distills stable knowledge to long-term storage.

Archival memory lives in Neo4j: nodes for students, skills, concepts, problems, attempts, errors, and hints; edges track “practiced”, “blocked-by”, “helps-with”, etc. Retrieval is hybrid: fast graph queries (path patterns, neighbors) plus embedding search for similar problems; results are re-inserted into the queue by priority.

We split memory by type: Fact Memory (stable facts like formulas and the student’s profile), Process Memory (plans and next steps) and Case Memory (worked examples and mistakes).

Functions let the tutor promote items (queue → working pad), archive distilled notes (to Neo4j), or recall exact logs when needed. Each session starts by loading a tiny profile summary from Fact/Process Memory, and ends by updating Neo4j with mastered skills, open gaps, and one clear next action.

We combine mathematical concept maps (Neo4j) with retrieval mechanisms to ensure each prompt follows authentic prerequisite paths (rather than random guesswork). A dual-memory architecture (long-term retention + conversational context) maintains consistency across sessions while enabling real-time responses. A lightweight step validator (substitution/units/range) filters incorrect answers before students see them, then the tutoring layer transforms validated solutions into child-friendly steps and precise distractors. 

vs. Khanmigo: Unconstrained by single-curriculum systems; offers stronger cross-session personalization and foundational knowledge building. 

vs. Chat tutoring tools: Designed specifically for step-by-step guidance (prompting next actions, pinpointing error roots) rather than merely providing final answers. 

vs. Early graph RAG demos: Optimized for after-school scenarios—supports high-speed queries, caching mechanisms, and provides weekly mastery reports for parents and educators.

---

## Plan For Checkpoint 2

### Tools to include (Tentative)
ChatGPT (GPT-5) 
Microsoft Copilot 
Perplexity
Duolingo
### Scope (what we will validate)
Do current tools handle step-level tutoring (spot a mistake, give the next step, give a short hint) well?
Do they hallucinate/agree with wrong student claims?
Where are the UX/cost/latency pain points that our design fixes?

### Tasks (3 scenarios, ~12 items each)
T1 Homework help (typical): ask for one next step + one-sentence hint.
T2 Item generation (edge): 1 MCQ + 3 distractors targeting a specific misconception.
T3 Step fix (failure): given a wrong intermediate step → (a) flag wrong, (b) give one correct next action.

### Prompts (stable across tools)
Single “tutor” role prompt per task; fixed output format (short plain text or minimal JSON).
No retries beyond 1; record both attempts.
Keep wording constant to make results comparable.

---

## Initial Risks & Mitigation

Safety: We as a team have to be very careful with how we design our AI tutor, especially because our app will be utilized by children. Our audience is very susceptible to misinformation or distractions. Nothing the AI outputs should be unrelated to the specific academic question at hand. 

Privacy: Any conversations with the AI tutor will need to be held in a secure database or not stored at all so that conversations from the underage users are not broadcasted to the public. 

Bias: Our app needs to remain unbiased in how it answers questions, and feel like a real tutor encouraging the student as they work. We do not want the AI tutor to give any sort of biased result to students, nor for the tutor to be biased towards one student over another (e.g. the model giving more positive feedback to students who respond positively to said feedback).

Reliability: The AI tutor model we create needs to be reliable. It cannot afford to get answers or hints to students incorrect or be vague in its wording. The AI has to be relied upon to give factual information every single time it is prompted. 

---
