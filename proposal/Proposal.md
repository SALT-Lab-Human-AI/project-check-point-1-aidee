## Problem & Importance

American education is in trouble. When [less than half of kids can read at grade level,](https://caaspp-elpac.ets.org/caaspp/DashViewReportSB?ps=true&lstTestYear=2024&lstTestType=B&lstGroup=1&lstSubGroup=1&lstSchoolType=A&lstGrade=13&lstCounty=00&lstDistrict=00000&lstSchool=0000000) and even fewer can handle basic math, we have a serious problem. It's not just about test scores either. As a nation, there are over 400,000 teaching positions [either unfulfilled or employing teachers without full certifications.](https://learningpolicyinstitute.org/product/state-teacher-shortages-vacancy-resource-tool-2024)

Although places like [Two By Two Learning Center](https://www.twobytwolearningcenters.com) are doing incredible work to support kids after school, [over 60%](https://nces.ed.gov/surveys/spp/results.asp) of public schools nationally offer academically focused after-school programming. Kids are falling further behind, tutors are burning out, and everyone is frustrated. We desperately need tools that can exemplify the impact of the educators and help kids learn.

---

## Prior Systems & Gaps

### Khanmigo (Khan Academy)

Khanmigo is an AI tutor tightly integrated with Khan Academy’s content and tools, offered at $4/month for learners and parents (free for teachers), and [powered by GPT-4](https://www.khanmigo.ai/parents?utm_source=chatgpt.com). Its focus on Khan’s curriculum and classroom workflows is a strength for alignment with assignments and teacher dashboards, but it also means limited cross-platform generalization and restricted long-term, cross-session personalization relative to a purpose-built memory layer. Like other LLM-based tutors, it can also inherit general hallucination risks, so upstream validation/guardrails remain important. 

https://www.khanmigo.ai/

### General LLM conversational tutors (ChatGPT, Gemini, etc.)

General LLMs are great at quickly producing step-by-step explanations across many topics, but evaluations that only check the final answer tend to overstate their tutoring utility (Weitekamp, Siddiqui, & MacLellan, 2025). In step-level classroom tasks—flagging an incorrect action, giving the next correct step, and providing targeted hints—LLMs remain unstable (incorrect-action labeling ~chance; next-step accuracy ≈ 52–70%) (Weitekamp et al., 2025). They can also exhibit sycophancy—agreeing with a user’s mistaken belief rather than correcting it—documented across RLHF-trained assistants and measured in multiple studies (Sharma et al., 2023; Malmqvist, 2024).  
  
### Graph-RAG for tutoring:

These systems plug a knowledge graph into retrieval so the tutor follows real prerequisite paths (e.g., multiplication → division → fractions) instead of guessing. Early demos (like CourseMapper) look promising for targeted questions and explanations, but most tests are small and lab-style—so real classroom gains are still unclear (Abdelmagied et al., 2025). 


@misc{sharma2025understandingsycophancylanguagemodels,

      title={Towards Understanding Sycophancy in Language Models}, 

      author={Mrinank Sharma and Meg Tong and Tomasz Korbak and David Duvenaud and Amanda Askell and Samuel R. Bowman and Newton Cheng and Esin Durmus and Zac Hatfield-Dodds and Scott R. Johnston and Shauna Kravec and Timothy Maxwell and Sam McCandlish and Kamal Ndousse and Oliver Rausch and Nicholas Schiefer and Da Yan and Miranda Zhang and Ethan Perez},

      year={2025},

      eprint={2310.13548},

      archivePrefix={arXiv},

      primaryClass={cs.CL},

      url={https://arxiv.org/abs/2310.13548}, 

}

  

@misc{weitekamp2025tutorgymtestbedevaluatingai,

      title={TutorGym: A Testbed for Evaluating AI Agents as Tutors and Students}, 

      author={Daniel Weitekamp and Momin N. Siddiqui and Christopher J. MacLellan},

      year={2025},

      eprint={2505.01563},

      archivePrefix={arXiv},

      primaryClass={cs.AI},

      url={https://arxiv.org/abs/2505.01563}, 

}

  

@misc{abdelmagied2025leveraginggraphretrievalaugmentedgeneration,

      title={Leveraging Graph Retrieval-Augmented Generation to Support Learners' Understanding of Knowledge Concepts in MOOCs}, 

      author={Mohamed Abdelmagied and Mohamed Amine Chatti and Shoeb Joarder and Qurat Ul Ain and Rawaa Alatrash},

      year={2025},

      eprint={2505.10074},

      archivePrefix={arXiv},

      primaryClass={cs.AI},

      url={https://arxiv.org/abs/2505.10074}, 

}

---

## Our Proposed Approach and Why It Will Improve On Prior Systems

We combine mathematical concept maps (Neo4j) with retrieval mechanisms to ensure each prompt follows authentic prerequisite paths (rather than random guesswork). A dual-memory architecture (long-term retention + conversational context) maintains consistency across sessions while enabling real-time responses. A lightweight step validator (substitution/units/range) filters incorrect answers before students see them, then the tutoring layer transforms validated solutions into child-friendly steps and precise distractors. 

vs. Khanmigo: Unconstrained by single-curriculum systems; offers stronger cross-session personalization and foundational knowledge building. 

vs. Chat tutoring tools: Designed specifically for step-by-step guidance (prompting next actions, pinpointing error roots) rather than merely providing final answers. 

vs. Early graph RAG demos: Optimized for after-school scenarios—supports high-speed queries, caching mechanisms, and provides weekly mastery reports for parents and educators.

---

## Plan For Checkpoint 2

### Tools to include Tentative
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
