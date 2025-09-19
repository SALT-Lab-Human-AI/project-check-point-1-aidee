<div align="center">

<a name="readme-top"></a>

<!-- Project banner -->
<img width="220px" alt="AI Tutor Logo" src="https://raw.githubusercontent.com/your-org/your-repo/main/.github/images/aitutor-logo.svg">

# ✨ **AI Tutor**  
*Making learning addictive in the best possible way*

[![License](https://img.shields.io/badge/license-Apache_2.0-red?style=for-the-badge)](LICENSE) 
[![Made with Love](https://img.shields.io/badge/Made%20with-💙_for%20students-ff69b4?style=for-the-badge)](#)
[![Neo4j](https://img.shields.io/badge/Neo4j-4479A1?logo=neo4j&logoColor=white&style=for-the-badge)](#)
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=for-the-badge)](#)

</div>

---

## 📑 Table of Contents
1. [Problem Statement and Why It Matters](#problem-statement-and-why-it-matters)  
2. [Target Users and Core Tasks](#target-users-and-core-tasks)  
3. [Competitive Landscape and AI Limitations](#competitive-landscape-and-ai-limitations)  
4. [Initial Concept and Value Proposition](#initial-concept-and-value-proposition)  
5. [Contributions](#contributions)  
6. [Getting Started](#getting-started)  
7. [License](#license)  

---

## 🆘 Problem Statement and Why It Matters

American education is in trouble. When [less than half of kids can read at grade level,](https://caaspp-elpac.ets.org/caaspp/DashViewReportSB?ps=true&lstTestYear=2024&lstTestType=B&lstGroup=1&lstSubGroup=1&lstSchoolType=A&lstGrade=13&lstCounty=00&lstDistrict=00000&lstSchool=0000000) and even fewer can handle basic math, we have a serious problem. It's not just about test scores either. As a nation, there are over 400,000 teaching positions [either unfulfilled or employing teachers without full certifications.](https://learningpolicyinstitute.org/product/state-teacher-shortages-vacancy-resource-tool-2024)

Although places like [Two By Two Learning Center](https://www.twobytwolearningcenters.com) are doing incredible work to support kids after school, [over 60%](https://nces.ed.gov/surveys/spp/results.asp) of public schools nationally offer academically focused after-school programming. Kids are falling further behind, tutors are burning out, and everyone is frustrated. We desperately need tools that can exemplify the impact of the educators and help kids learn.

---

## 🎯 Target Users and Core Tasks

Our tool needs to work for four very different groups, each with their own challenges. 

* **Elementary school students** are often not the target audience of AI tutors. It's harder to make a practical tool for this group due to their lower abilities in typing and prompting with good questions. Perhaps a tutor that turns everything into a sort of game would better suit this group. 

* **Middle school students** are old enough to use technology but still need guidance. They're mainly looking for homework help and confidence boosters, which an AI tutor can provide. 

* **High school students** are generally more knowledgeable than their younger peers, being able to ask more complex questions. An AI tutor for this student group will need to be engaging, responsive, and comprehensive. 

**Parents** pay for their child's education, even though it's possible that their children are cheating with AI. Parents want to see real progress and results, understand what their kids are learning, and be shown how an AI tool is actually helping their kid, rather than doing the student's work for them. 

**After-school staff** have a lot on their plate. They need a tool that will help efficiency and simplify their jobs. An AI tutoring tool should help staff track individual student progress, communicate with parents, and give in-depth reports of what was learned each session. An AI may even be able to help create practice lessons and/or quizzes.

| 👥 **User** | 🏆 **Primary Goal** | 🔧 **What We Provide** |
|-------------|--------------------|------------------------|
| **Young kids (K-5)** | Fun, guided learning | Game-like interface with voice input |
| **Middle schoolers** | Homework help, improving confidence | Socratic hints and Streak bonuses |
| **High schoolers** | Engaging learning | Challenge modes with boss battles |
| **Parents** | Demonstrate real progress | Weekly achievement reports |
| **Afterschool staff** | Easier tutoring & tracking | Dashboards and auto-grading |

---

## 🏁 Competitive Landscape and AI Limitations

We've found that current AI tutoring tools aren't always as effective as needed, or have other flaws. For example, Khan Academy's Khanmigo costs $4/month, and can solve many complex equations. However, many AIs lack long-term memory and recall, making it difficult to bring up past lessons and integrate them into current ones.

Another problem with AI tutors is AI hallucination. An AI hallucination involves an AI tutor confidently giving a student an incorrect answer. In a disagreement, this may lead to the student believing their own correct work is wrong, decreasing confidence. A [July 2024 research paper](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4895486) showed that students who were given an AI tutor to study with and proceeded to have that tutor taken away actually did worse on tests than students who never had an AI tutor at all.

---

## 🚀 Initial Concept and Value Proposition

Our platform represents a fundamental shift from generic AI tutoring systems to a specialized, educationally-grounded architecture designed specifically for K-12 mathematics learning. Rather than deploying monolithic language models that treat educational interactions as general conversations, we are developing a heterogeneous system where specialized small language models handle distinct educational tasks with greater efficiency and accuracy.

The foundation of our approach rests on three interconnected innovations. First, we employ a Neo4j knowledge graph that encodes the structural relationships between mathematical concepts, prerequisite dependencies, and learning progressions. This graph architecture ensures that the system understands not merely that fractions exist as a topic, but that mastery requires prior understanding of division, which itself builds upon multiplication and addition fundamentals. This structural knowledge enables pedagogically sound instruction sequencing that adapts to each student's actual conceptual foundation.

Second, we implement a dual-memory personalization system that distinguishes between persistent student characteristics and session-specific learning context. The long-term memory component, integrated with our Neo4j graph, maintains comprehensive profiles of topic mastery levels, identified misconceptions, and successful learning strategies for each student. The working memory tracks immediate problem-solving states, recent hints provided, and emotional indicators, enabling real-time adaptation without losing sight of broader learning objectives.

Third, our gamification framework transforms routine practice into engaging progression systems modeled after successful educational game design principles. Students earn Knowledge Crystals for concept mastery, unlock Learning Worlds as they advance through curriculum sequences, and customize their AI tutor avatars using earned points. The system implements streak bonuses for consistent practice, collaborative challenges for study groups, and complex boss battles that require synthesis of multiple concepts. These mechanics create intrinsic motivation while maintaining educational integrity through careful alignment with learning objectives.

For Two By Two Learning Center, this architecture delivers measurable operational advantages. Tutors receive an AI assistant with institutional memory that builds upon previous sessions rather than approaching each interaction as isolated events. The system provides real-time diagnostic dashboards identifying specific conceptual gaps across student cohorts, enabling proactive intervention before misconceptions solidify. Parents receive achievement reports formatted as engaging progress narratives rather than traditional grade summaries, increasing engagement with their children's learning journey.

The platform addresses critical limitations identified in current AI tutoring systems through multiple quality assurance mechanisms. We employ specialized evaluation models to assess feedback quality across pedagogical dimensions before delivery to students, preventing the propagation of hallucinations or incorrect mathematical guidance. The GraphRAG architecture ensures that explanations remain grounded in verified educational content while maintaining conceptual coherence across related topics. This multi-layered validation approach protects educational integrity while enabling the personalized, adaptive instruction that makes AI tutoring transformative rather than merely supplemental.

---

## 🤝 Contributions

Qiran Hu will be working on developing the new architecture of the AI tutor
- Designing the muti-agent workflow and developing graph-based structure
- Maintaining the Github page and fixing minor issues

Tony Yu will be working on 
- 
- 

Ryan Pearlman will be working on 
- 
- 

Rosie Xu will be working on 
- 
- 
---

## 📝 License

Distributed under the **Apache 2.0** License. See [`LICENSE`](LICENSE) for more information.

<div align="right">

[⬆️ Back to top](#readme-top)

</div>
