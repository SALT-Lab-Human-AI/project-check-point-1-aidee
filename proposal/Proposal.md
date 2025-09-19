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

### Initial Processing and Orchestration

The workflow begins when the system receives user input, which typically consists of a student's question or learning request. This input immediately flows to the Orchestral Agent, which serves as the primary conductor of the entire system. The Orchestral Agent performs task classification to understand the nature of the query, determining whether it requires mathematical computation, conceptual explanation, code generation, or other educational support. Based on this classification, the Orchestral Agent makes intelligent routing decisions to engage the appropriate specialized agents.

### Multi-Agent Processing Layer

Following classification, the Orchestral Agent distributes the task to a suite of specialized agents, shown in the diagram as Agent₁, Agent₂, and Agent₃. Each agent possesses distinct capabilities and domain expertise. For instance, one agent might specialize in mathematical reasoning, another in natural language explanation, and a third in code generation or scientific concepts. These agents operate in parallel or sequence depending on the task requirements, allowing the system to leverage multiple perspectives and approaches simultaneously.

### Memory Integration and Context Management

A critical enhancement in this workflow is the introduction of the Memory Agent, which maintains both Working Memory and Long-term Memory components. The Working Memory stores immediate context about the current conversation, including recent exchanges, partial solutions, and temporary computational results. The Long-term Memory preserves important learning patterns, student preferences, common misconceptions, and successful teaching strategies from previous interactions. This memory system enables the tutor to maintain coherence across extended dialogues and adapt its responses based on accumulated knowledge about effective teaching methods.

### Reasoning and Action Generation

The core reasoning occurs within the Thought component, which synthesizes inputs from the specialized agents and memory systems. This reasoning engine evaluates multiple solution pathways and teaching approaches, considering both the immediate query and the broader educational context. Based on this analysis, the system generates specific actions, which might involve querying external tools for computation, retrieving information from the knowledge base, or formulating explanatory content.

### Tool Integration and Knowledge Retrieval

When specialized computation or data retrieval is required, the system engages its Tools component, which includes access to mathematical engines, code interpreters, and scientific calculators. Concurrently, the system can query the Neo4j Graph Database through its ME-GraphRAG interface, which stores structured educational knowledge as an interconnected graph of concepts, prerequisites, and relationships. This graph structure enables the system to understand conceptual dependencies and provide contextually appropriate explanations that build upon the student's existing knowledge.

### Observation and Answer Formation

The Observation component collects and synthesizes results from tool executions and database queries, formatting this information into coherent educational content. These observations feed into the Possible Answer generation phase, where the system constructs candidate responses that address the student's query while adhering to pedagogical best practices.

### Quality Evaluation and Response Validation

The DEANLLM component represents a unified evaluation system that combines deep educational assessment with large language model capabilities. This evaluator examines each possible answer for accuracy, clarity, pedagogical effectiveness, and appropriateness for the student's level. The evaluation process produces a binary classification, routing responses to either Good Answer or Bad Answer categories. Good answers proceed to the output stage, while bad answers trigger a feedback mechanism that returns to the reasoning phase for refinement.

### Feedback Loops and Continuous Improvement

The system incorporates two primary feedback mechanisms. The LLM Feedback loop enables rapid iteration on answer quality, allowing the system to refine responses that initially fail quality checks. The User Feedback loop, indicated by the dashed line from the bottom of the diagram, captures student reactions and learning outcomes, feeding this information back into the Thought component for future interactions. This creates a continuous learning cycle where the system improves its teaching effectiveness over time.

### Final Output Generation

Successfully validated responses proceed to the Output stage, where they are formatted for presentation to the student. The output formatting considers the optimal presentation method for the content type, whether that involves mathematical notation, code blocks, visual diagrams, or structured explanations. The system ensures that the final output maintains consistency with previous interactions stored in the memory system, creating a coherent and personalized learning experience.

###


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
