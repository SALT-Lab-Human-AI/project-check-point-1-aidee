<div align="center">

<a name="readme-top"></a>

<!-- Project banner -->
<img width = "220px" alt = "AI Tutor Logo" src = "./additional items/logo.png">

# ✨ **NOODEIA**  

**N**ode
**O**ptimized
**O**rchestration
**D**esign for 
**E**ducational 
**I**ntelligence 
**A**rchitecture

*Making learning addictive in the best possible way*

[![License](https://img.shields.io/badge/license-Apache_2.0-red?style=for-the-badge)](#) 
[![Made with Love](https://img.shields.io/badge/Made%20with-💙_for%20students-ff69b4?style=for-the-badge)](#)
[![Neo4j](https://img.shields.io/badge/Neo4j-4479A1?logo=neo4j&logoColor=white&style=for-the-badge)](#)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge)](#)

</div>

---

## 📑 Table of Contents
1. [Problem Statement and Why It Matters](#-problem-statement-and-why-it-matters)  
2. [Target Users and Core Tasks](#-target-users-and-core-tasks)  
3. [Competitive Landscape and AI Limitations](#-competitive-landscape-and-ai-limitations)
4. [Literature Review](#-literature-review)
5. [Initial Concept and Value Proposition](#-initial-concept-and-value-proposition)  
6. [Contributions](#-contributions)  
7. [License](#-license)  

---

## 🆘 Problem Statement and Why It Matters

American education is in trouble. When [less than half of kids can read at grade level,](https://caaspp-elpac.ets.org/caaspp/DashViewReportSB?ps=true&lstTestYear=2024&lstTestType=B&lstGroup=1&lstSubGroup=1&lstSchoolType=A&lstGrade=13&lstCounty=00&lstDistrict=00000&lstSchool=0000000) and even fewer can handle basic math, we have a serious problem. It's not just about test scores either. As a nation, there are over 400,000 teaching positions [either unfulfilled or employing teachers without full certifications.](https://learningpolicyinstitute.org/product/state-teacher-shortages-vacancy-resource-tool-2024)

Although places like [Two By Two Learning Center](https://www.twobytwolearningcenters.com) are doing incredible work to support kids after school, [over 60%](https://nces.ed.gov/surveys/spp/results.asp) of public schools nationally offer academically focused after-school programming. Kids are falling further behind, tutors are burning out, and everyone is frustrated. We desperately need tools that can exemplify the impact of the educators and help kids learn.

---

## 🎯 Target Users and Core Tasks

Our tool needs to work for four very different groups, each with their own challenges. 

* **Middle school students** are old enough to use technology but still need guidance. They're mainly looking for homework help and confidence boosters, which an AI tutor can provide. 

* **High school students** are generally more knowledgeable than their younger peers, being able to ask more complex questions. An AI tutor for this student group will need to be engaging, responsive, and comprehensive. 

**Parents** pay for their child's education, even though it's possible that their children are cheating with AI. Parents want to see real progress and results, understand what their kids are learning, and be shown how an AI tool is actually helping their kid, rather than doing the student's work for them. 

**After-school staff** have a lot on their plate. They need a tool that will help efficiency and simplify their jobs. An AI tutoring tool should help staff track individual student progress, communicate with parents, and give in-depth reports of what was learned each session. An AI may even be able to help create practice lessons and/or quizzes.

| 👥 **User** | 🏆 **Primary Goal** | 🔧 **What We Provide** |
|-------------|--------------------|------------------------|
| **Middle schoolers** | Homework help, improving confidence | Socratic hints and Streak bonuses |
| **High schoolers** | Engaging learning | Challenge modes with boss battles |
| **Parents** | Demonstrate real progress | Weekly achievement reports |
| **Afterschool staff** | Easier tutoring & tracking | Dashboards and auto-grading |

---

## 🏁 Competitive Landscape and AI Limitations

...


Khanmigo is a $4-per-month GPT-4 tutoring tool with content integrated from Khan Academy. While it fits in classroom settings, it has limited cross-platform usability and lacks long-term personalization. 

General large language model chat tutors (ChatGPT, Gemini) can quickly explain answer, but struggle with step-by-step instruction—they fail to identify errors, provide follow-up guidance, and may even agree with students' incorrect answers.

Duolingo has good motivation through game-like loops, but it's core focus is language learning. It hasn't been adapted for math tutoring—lacking knowledge graphs and verification step-checking. 

Perplexity is good at citing sources, but it's not a true tutor: it doesn't have a student model or provide “next steps” guidance.

## 📚 Literature Review Highlights

Qiran Hu 

- 
- 

Tony Yu:
- 
- 

Ryan Pearlman: I read a paper about researchers who put an AI, an AI tutor with special prompts, and no AIs into three math classrooms and compared test results to each other. The results showed students learned much better with a tutor who guides them instead of giving the answers, but students without a special AI tutor performed the same on standardized tests than ones with the specialized tutor. We will make sure that our AI tutor does not give answers away as that seems to make students use the AI as a crutch and perform worse overall.

Rosie Xu:

[Agentic Workflow for Education: Concepts and Applications](https://arxiv.org/abs/2509.01517)

Jiang, Y.-H., Lu, Y., Dai, L., Wang, J., Li, R., & Jiang, B. (2025). Agentic Workflow for Education: Concepts and Applications. arXiv [Cs.CY]. Retrieved from http://arxiv.org/abs/2509.01517

- The paper redefines agentic AI as something beyond simple Q&A interactions. It is a fundamental shift to a non-linear orchestration where agents plan, use tools, and self-critique.

- By adopting this multi-agent with division of labor, we aim to implement a muti-agent system for problem solving, question writing, and explanation generation and we hope to achieve an increase in accuracy and explanation quality.

## 🚀 Initial Concept and Value Proposition

Our platform represents a fundamental shift from generic AI tutoring systems to a specialized, educationally-grounded architecture designed specifically for K-12 mathematics learning. Rather than deploying monolithic language models that treat educational interactions as general conversations, we are developing a heterogeneous system where specialized small language models handle distinct educational tasks with greater efficiency and accuracy.

The foundation of our approach rests on three interconnected innovations. First, we employ a Neo4j knowledge graph that encodes the structural relationships between mathematical concepts, prerequisite dependencies, and learning progressions. This graph architecture ensures that the system understands not merely that fractions exist as a topic, but that mastery requires prior understanding of division, which itself builds upon multiplication and addition fundamentals. This structural knowledge enables pedagogically sound instruction sequencing that adapts to each student's actual conceptual foundation.

Second, we implement a dual-memory personalization system that distinguishes between persistent student characteristics and session-specific learning context. The long-term memory component, integrated with our Neo4j graph, maintains comprehensive profiles of topic mastery levels, identified misconceptions, and successful learning strategies for each student. The working memory tracks immediate problem-solving states, recent hints provided, and emotional indicators, enabling real-time adaptation without losing sight of broader learning objectives.

Third, our gamification framework transforms routine practice into engaging progression systems modeled after successful educational game design principles. Students earn Knowledge Crystals for concept mastery, unlock Learning Worlds as they advance through curriculum sequences, and customize their AI tutor avatars using earned points. The system implements streak bonuses for consistent practice, collaborative challenges for study groups, and complex boss battles that require synthesis of multiple concepts. These mechanics create intrinsic motivation while maintaining educational integrity through careful alignment with learning objectives.

For Two By Two Learning Center, this architecture delivers measurable operational advantages. Tutors receive an AI assistant with institutional memory that builds upon previous sessions rather than approaching each interaction as isolated events. The system provides real-time diagnostic dashboards identifying specific conceptual gaps across student cohorts, enabling proactive intervention before misconceptions solidify. Parents receive achievement reports formatted as engaging progress narratives rather than traditional grade summaries, increasing engagement with their children's learning journey.

The platform addresses critical limitations identified in current AI tutoring systems through multiple quality assurance mechanisms. We employ specialized evaluation models to assess feedback quality across pedagogical dimensions before delivery to students, preventing the propagation of hallucinations or incorrect mathematical guidance. The GraphRAG architecture ensures that explanations remain grounded in verified educational content while maintaining conceptual coherence across related topics. This multi-layered validation approach protects educational integrity while enabling the personalized, adaptive instruction that makes AI tutoring transformative rather than merely supplemental.

**Proposed architecture**

This is our proposed muti-agent workflow 

<img width="800px" alt="AI Tutor Logo" src="./additional items/workflow.png">

---

## 🤝 Team Contributions

### Qiran Hu

Completed the following tasks

- 4 research papers and reflections
- Github README page
- Open Issues for milestones; assign owners; use Projects/Boards 

Upcoming tasks

- Developing the new architecture for the AI tutor
- Designing the muti-agent workflow and developing graph-based structure for better retrieval system
- Maintaining the Github page and fixing minor issues

### Tony Yu

Completed the following tasks

- 2 research papers and reflections
- Your proposed approach and why it will improve on prior art
- Initial concept and value proposition

Upcoming tasks

- Creating a new memory framework for the AI tutor

### Ryan Pearlman

Completed the following tasks

- 2 research papers and reflections
- Problem statement and why it matters
- Target users and core tasks
- Initial risks & mitigation (privacy, bias, safety, reliability)

Upcoming tasks

- Enhancing the design and workflow of app in coming checkpoints

### Rosie Xu

Completed the following tasks

- 2 research papers and reflections
- Competitive landscape: existing systems/tools and their shortcomings
- Plan for Checkpoint 2 validation via prompting (see CP2)

Upcoming tasks

- Analyzing different existing tools and their limitations

---

## 📝 License

Distributed under the **Apache 2.0** License. 

<div align="right">

[⬆️ Back to top](#readme-top)

</div>
