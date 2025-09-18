# Research papers analysis 

## Agentic Workflow for Education: Concepts and Applications

### Citation and Link

@misc{jiang2025agenticworkfloweducationconcepts,

      title={Agentic Workflow for Education: Concepts and Applications}, 

      author={Yuan-Hao Jiang and Yijie Lu and Ling Dai and Jiatong Wang and Ruijia Li and Bo Jiang},

      year={2025},

      eprint={2509.01517},

      archivePrefix={arXiv},

      primaryClass={cs.CY},

      url={https://arxiv.org/abs/2509.01517},

}

[https://arxiv.org/abs/2509.01517](https://arxiv.org/abs/2509.01517)

### Summary

The paper argues that today’s LLM use in education is too linear (prompt → answer) and proposes an Agentic Workflow for Education (AWE) with four components: self-reflection, tool invocation, task planning, and multi-agent collaboration. It grounds AWE in a von Neumann–style multi-agent framework that maps processor/memory/controller/I-O to educational task decomposition, reflection/memory, control, and tools. The authors outline four application domains—integrated learning environments, personalized AI-assisted learning, simulation-based experimentation, and data-driven decision-making. A case study on automated math test generation finds AWE-generated items statistically comparable to real exam questions and better than GPT-4 on some dimensions (e.g., option rationality, stem coherence). Overall, they claim AWE can reduce teacher workload while improving instructional quality.
  

### Key Insights

“Agentic” ≠ longer prompts: it’s non-linear orchestration where agents plan, act with tools, and self-critique—a different interaction paradigm than Q&A.


The vN-MAS mapping is a nice mental model to design systems: processor→task decomposition, memory→reflection, controller→planning, I/O→tool calls. 
  

Multi-agent “division of labor” + reflective loops can yield human-comparable assessment items and beat single-model baselines on specific metrics. 

  

### Critical Limitations and Risks

Evidence leans on a single primary case study (math item generation); there’s limited classroom learning-outcome validation and external replication. [](https://www.arxiv.org/pdf/2509.01517)

  

Complexity & governance risk: multi-agent + tool-calling stacks increase cost/latency and create more surfaces for privacy/safety/control failures (inference for deployment, not directly tested here).

  

### Application to Our Project

CP2 4-Agent Micro-Pipeline. Step 1: Break down the problem into steps and create a checklist for final verification. Step 2: Gather resources: Extract key points and example problems from our knowledge graph/notes. Step 3: Solve + self-check: Provide the answer and quickly verify (substitute values, check units, etc.). If errors occur, only modify that specific part. Step 4: Explain: Write the process as clear, step-by-step instructions while providing 3 distractors that “look like real answers,” addressing common pitfalls. We'll evaluate this pipeline across three tasks—problem-solving, question-writing (including distractors), and explanation-writing—handling dozens to hundreds of examples per category. Evaluation criteria: Accuracy, clarity of explanation, and whether distractors are “confusing but not misleading.” Also note approximate time and resource costs. The goal is straightforward: achieve a modest accuracy boost (around 8–12 percentage points), deliver clearer explanations with more professional distractors, while keeping speed and costs under control.

  


  

## TutorGym: A Testbed for Evaluating AI Agents as Tutors and Students

### Citation and Link

@misc{weitekamp2025tutorgymtestbedevaluatingai,

      title={TutorGym: A Testbed for Evaluating AI Agents as Tutors and Students},

      author={Daniel Weitekamp and Momin N. Siddiqui and Christopher J. MacLellan},

      year={2025},

      eprint={2505.01563},

      archivePrefix={arXiv},

      primaryClass={cs.AI},

      url={https://arxiv.org/abs/2505.01563},

}

[https://arxiv.org/abs/2505.01563](https://arxiv.org/abs/2505.01563)

### Summary

This paper introduces TutorGym: an evaluation platform that directly integrates AI (LLMs, RL, learning models) into established intelligent tutoring systems (CTAT, Apprentice, OATutor). Its core innovation lies in assessing “tutor/student” capabilities at the “step-level” rather than solely judging final answers. It currently covers 223 tutoring domains. Unlike benchmarks (GSM8K/MATH) that evaluate only final solutions, TutorGym tests within authentic ITS interfaces: identifying student errors at each step, providing next-move guidance, and generating prompts/feedback—mirroring classroom adaptive tutoring logic. Initial experiments reveal that LLMs perform poorly as tutors—their accuracy in labeling “incorrect actions” is low (no better than random), and their “next action” suggestions are only correct 52–70% of the time. However, when simulating students using in-context learning, they produce learning curves similar to humans. The authors also provide a unified API and three interface types (symbolic/LLM/RL) to facilitate cross-platform replication and expansion.

### Key Insights

Focusing solely on “final answers” overestimates AI's practicality in teaching; step-by-step evaluation better reveals instructional shortcomings (error correction, next-step guidance, targeted prompts).

The current observation that “LLMs are unreliable as tutors but perform better as learners” offers valuable insight: teaching scenarios require greater caution when directly providing step-by-step guidance via LLM.

Integrating AI into authentic Intelligent Tutoring System interfaces (featuring buttons, drag-and-drop elements, widgets, etc.) better replicates classroom workflows than text-based Q&A, while also more effectively measuring “strategic diversity” and adaptability.

### Critical Limitations and Risks

Current evidence primarily stems from platform beta testing and initial experiments, falling short of external validation against “real classroom learning outcomes”; it may not represent the capabilities of all AI tutors.

Replicating this approach involves significant engineering hurdles: connecting multiple AI systems/interfaces to different ITS platforms requires additional design and monitoring for integration and governance costs (latency, privacy, security, controllability).

### Application to Our Project

Add a step-level mini-test: Given a problem's “intermediate state,” have our Tutor agent perform two tasks—(1) determine whether the student's current step is correct/incorrect; (2) provide a single “correct next action/hint.” Conduct A/B testing against “single large prompt,” aligning metrics with TutorGym: error cause identification rate, next-step accuracy rate, supplemented by human evaluation of “whether hints are adequate/non-misleading.” This directly addresses the blind spot of “only evaluating the final solution.”
