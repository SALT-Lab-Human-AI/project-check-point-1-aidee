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

This paper criticizes the linear prompt to answer model in educational AI and introduces the Agentic Workflow for Education (AWE), which is a framework built on self-reflection, tool use, task planning, and multi-agent collaboration. The authors ground AWE in a von Neumann-style architecture, mapping computational components to educational functions like task decomposition and reflection. A case study on automated math test generation demonstrates that AWE can produce items comparable to real exam questions and superior to GPT-4 on metrics like option rationality, suggesting it can enhance instructional quality while reducing teacher workload.

### Key Insights

The paper redefines the term agentic as a paradigm shift toward a non-linear orchestration in which agents autonomously plan, utilize tools, and engage in self-critique, thereby transcending simplistic question and answer interactions.

It introduces the von Neumann-style Multi-Agent System (vN-MAS) as a powerful mental model for designing educational AI, mapping the processor to task decomposition, memory to reflection, the controller to planning, and I/O to tool calls.

The research provides evidence that a multi-agent with reflective loops can produce assessment items that are comparable to human-created ones and outperform single-model baselines on specific quality metrics.

### Critical Limitations and Risks

The primary limitation is the study's reliance on a single case study (math item generation) for evidence, with no validation of its impact on actual classroom learning outcomes or external replication.

A significant risk lies in the increased complexity and governance challenges of multi-agent, tool-calling systems. These architectures introduce higher costs and latency and expand the potential for privacy, safety, and control failures, which were not directly tested in the study.

### Application to Our Project

Inspired by the AWE framework, we will implement a four-agent micro-pipeline for problem-solving, question-writing, and explanation generation. This pipeline will explicitly separate tasks: one agent for planning, one for resource gathering from our knowledge graph, one for solving and self-checking, and a final one for explaining the solution and generating distractors. By adopting this multi-agent with division of labor, we aim to achieve an increase in accuracy and explanation quality while controlling for cost and speed.

  


  

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
