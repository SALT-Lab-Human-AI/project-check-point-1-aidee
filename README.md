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
6. [Frontend Application](#-frontend-application)
7. [Contributions](#-contributions)  
8. [License](#-license)  

---

## 🆘 Problem Statement and Why It Matters

American education is in trouble. When [less than half of kids can read at grade level,](https://caaspp-elpac.ets.org/caaspp/DashViewReportSB?ps=true&lstTestYear=2024&lstTestType=B&lstGroup=1&lstSubGroup=1&lstSchoolType=A&lstGrade=13&lstCounty=00&lstDistrict=00000&lstSchool=0000000) and even fewer can handle basic math, we have a serious problem. It's not just about test scores either. As a nation, there are over 400,000 teaching positions [either unfulfilled or employing teachers without full certifications.](https://learningpolicyinstitute.org/product/state-teacher-shortages-vacancy-resource-tool-2024)

Although places like [Two By Two Learning Center](https://www.twobytwolearningcenters.com) are doing incredible work to support kids after school, [over 60%](https://nces.ed.gov/surveys/spp/results.asp) of public schools nationally offer academically focused after-school programming. Kids are falling further behind, tutors are burning out, and everyone is frustrated. We desperately need tools that can exemplify the impact of the educators and help kids learn.

---

## 🎯 Target Users and Core Tasks

Our tool needs to work for four very different stakeholders, each with their own challenges. 

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

Khanmigo is a $4-per-month GPT-4 tutoring tool with content integrated from Khan Academy. While it fits in classroom settings, it has limited cross-platform usability and lacks long-term personalization. 

Meanwhile, general large language model chat tutors (ChatGPT, Gemini) can quickly and somewhat accurately explain answers, but struggle with step-by-step instructions. They fail to identify errors, provide follow-up guidance, and may even agree with students' incorrect answers.

Duolingo does a good job at motivating their users through fun games and a leveling system, but its core focus is on language learning, not math. Duolingo has not been adapted for math tutoring. It also lacks knowledge graphs and verification step-checking. 

Lastly, Perplexity is good at citing sources, but it's not a true tutor: it doesn't have a student model or provide step-by-step guidance.

## 📚 Literature Review Highlights

### Qiran Hu

[AI-Powered Math Tutoring Platform Research](https://arxiv.org/abs/2507.12484)

Chudziak, J. A., & Kostka, A. (2025). AI-Powered Math Tutoring: Platform for Personalized and Adaptive Education. arXiv [Cs.AI]. Retrieved from http://arxiv.org/abs/2507.12484

- This research addresses a critical gap in current AI tutoring systems where the AI systems tend to provide direct answers rather than showing step by step solutions. With dual memory architecture, this sophisticated approach provides both strategically informed guidance based on historical patterns and detailed responsive support based on context.

- By implementing a hybrid memory architecture, the knowledge graph could serve as the long term memory component where each concept node has specific attributes such as historical error patterns and identified misconceptions. Since graph relationships naturally represents prerequisite chains and conceptual dependencies, this enables sophisticated reasoning about learning paths.

### Tony Yu

[MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560)

Packer, C., Wooders, S., Lin, K., Fang, V., Patil, S. G., Stoica, I., & Gonzalez, J. E. (2024). MemGPT: Towards LLMs as Operating Systems. arXiv [Cs.AI]. Retrieved from http://arxiv.org/abs/2310.08560

- The paper tackles LLMs’ short memory by adding an OS-style, tiered memory: a small main context (system rules, working pad, FIFO queue) plus external recall and archival stores, managed by a queue manager and function executor that move/condense information via function calls and summaries.

- Use Archival as a compact student profile while keeping full transcripts in Recall; have the tutor auto-summarize to Archival when memory pressure warnings appear and reload from these notes at the start of each session.


### Ryan Pearlman

[Generative AI Can Harm Learning](http://dx.doi.org/10.2139/ssrn.4895486)

Bastani, Hamsa and Bastani, Osbert and Sungu, Alp and Ge, Haosen and Kabakcı, Özge and Mariman, Rei, Generative AI Can Harm Learning (July 15, 2024). The Wharton School Research Paper. http://dx.doi.org/10.2139/ssrn.4895486 

- Researchers who put an AI, an AI tutor with special prompts, and no AIs into three math classrooms and compared test results to each other. 

- The results show students learned much better with a tutor who guides them instead of giving the answers, but students without a special AI tutor performed the same on standardized tests than ones with the specialized tutor. We will make sure that our AI tutor does not give answers away as that seems to make students use the AI as a crutch and perform worse overall.

### Rosie Xu

[Agentic Workflow for Education: Concepts and Applications](https://arxiv.org/abs/2509.01517)

Jiang, Y.-H., Lu, Y., Dai, L., Wang, J., Li, R., & Jiang, B. (2025). Agentic Workflow for Education: Concepts and Applications. arXiv [Cs.CY]. Retrieved from http://arxiv.org/abs/2509.01517

- The paper redefines agentic AI as something beyond simple Q&A interactions. It is a fundamental shift to a nonlinear cooperative systems where agents plan, use tools, and self-critique.

- By adopting this multi-agent with division of labor, we aim to implement a muti-agent system for problem solving, question writing, and explanation generation and we hope to achieve an increase in accuracy and explanation quality.

## 🚀 Initial Concept and Value Proposition

### Core Concept Overview

The personalized AI tutor represents a fundamental reimagining of educational technology through the integration of orchestrated multi-agent systems with memory-enhanced graph retrieval augmented generation . This system transcends traditional digital learning tools by creating an adaptive educational companion that maintains persistent awareness of individual learning patterns, dynamically adjusts teaching strategies based on accumulated experience, and delivers consistently high-quality educational support across diverse subject domains. The platform operates as an intelligent educational ecosystem rather than a static question-answering service, fundamentally transforming how students engage with complex learning materials.

### Primary Value Proposition

The primary value proposition emerges from the system's ability to provide genuinely personalized education at scale and maintaining the pedagogical sophistication typically associated with expert human tutors. Unlike conventional educational software that delivers uniform content regardless of individual needs, this system creates unique learning pathways for each student based on their specific knowledge gaps. Through its sophisticated memory architecture and continuous adaptation mechanisms, the platform delivers educational experiences that evolve with each student's progress, creating compound improvements in learning efficiency over time. This translates directly into reduced time-to-mastery for complex subjects and improved retention rates for learned material.

### Proposed Muti-Agent Workflow

This is our proposed muti-agent workflow 

<img width = "850px" alt = "Proposed workflow" src = "./additional items/workflow.png">

#### Workflow Overview

This enhanced muti-agent workflow provides several advantages over simpler tutoring systems. The multi-agent approach allows for specialized agent to assist students with specific needs. The memory system enables personalized responses that fit into individual learning patterns. The comprehensive evaluation framework ensures high quality outputs, which significantly reduces the hallucinations. With the integration of structured knowledge graphs, this muti-agent workflow creates a personalized AI tutoring platform.

### Proposed MEGRAG Architecture

**M**emory
**E**nhanced
**G**raph
**R**etrieval
**A**ugmented
**G**eneration

This is our proposed MEGRAG architecture

$$\boxed{\mathrm{Score_{memory}} = S(1 - r_{\mathrm{semantic}})^{t_{\mathrm{semantic}}} + E(1 - r_{\mathrm{episodic}})^{t_{\mathrm{episodic}}} + P(1 - r_{\mathrm{procedural}})^{t_{\mathrm{procedural}}}}$$

where $S$ is the semantic memory, $r_{\text{semantic}}$ is the decay rate for semantic memory, $t_{\text{semantic}}$ is the hours passed since the semantic memory in the retriever was last accessed rather than created, $E$ is the episodic memory, $r_{\text{episodic}}$ is the decay rate for episodic memory, $t_{\text{episodic}}$ is the hours passed since the episodic memory in the retriever was last accessed rather than created, $P$ is procedural memory, $r_{\text{procedural}}$ is the decay rate for procedural memory, and $t_{\text{procedural}}$ is the hours passed since the procedural memory in the retriever was last accessed rather than created.

| Memory Type | What is Stored | Human Example              | Agent Example       |
| ----------- | -------------- | -------------------------- | ------------------- |
| Semantic    | Facts          | Things I learned in school | Facts about a user  |
| Episodic    | Experiences    | Things I did               | Past agent actions  |
| Procedural  | Instructions   | Instincts or motor skills  | Agent system prompt |

#### Architecture Overview

The proposed scoring function contains three types of memory, which are semantic, episodic, and procedural. Similar to human memory system, each memory has its own exponential time decay rate. By assigning a faster decay to episodic memory with slower decays to semantic and procedural memory prioritizes recent student struggles without rapidly discarding current knowledge, which creates more personalized RAG pipelines.

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

## 🖥️ Frontend Application

We've developed a sophisticated AI Assistant UI with a modern chat interface, built with Next.js and React.

### 🌐 Live Demo
**Visit the live application:** [https://[your-username].github.io/project-check-point-1-aidee](https://[your-username].github.io/project-check-point-1-aidee)

*Replace `[your-username]` with your GitHub username after deployment*

### Features
- 💬 **Minimalistic Chat Interface** - Clean, focused messaging system
- 🎨 **Modern UI Components** - Built with Radix UI and shadcn/ui components
- 🌓 **Dark Mode Support** - Seamless theme switching between light and dark modes
- 💾 **Conversation History** - Manage multiple chat sessions
- ⚡ **Real-time Updates** - Responsive UI with thinking indicators
- 📱 **Fully Responsive** - Optimized for desktop and mobile devices

### Quick Start

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies (use legacy peer deps for React 19 compatibility):
```bash
npm install --legacy-peer-deps
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

### Tech Stack
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI components
- **shadcn/ui** - Beautifully designed component library
- **Lucide Icons** - Beautiful & consistent icons

### Troubleshooting

If you encounter dependency conflicts during installation:
- Use `npm install --legacy-peer-deps` to resolve React 19 compatibility issues
- Some packages may not officially support React 19 yet, but work fine in practice

### Project Structure
```
frontend/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── ui/                # Reusable UI components (shadcn/ui)
│   └── ...                # Feature components
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── styles/                # Global styles
└── public/                # Static assets
```

### 🚀 GitHub Pages Deployment

The frontend is configured for automatic deployment to GitHub Pages.

#### Setup Instructions:
1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Source: GitHub Actions

2. **The deployment will trigger automatically when you:**
   - Push to the `main` branch
   - Or manually trigger the workflow from Actions tab

3. **Access your deployed site at:**
   ```
   https://[your-username].github.io/project-check-point-1-aidee
   ```

#### Manual Deployment:
```bash
# Build the static site
cd frontend
NODE_ENV=production npm run build

# The static files will be in frontend/out/
```

For more details, see the [frontend README](./frontend/README.md).

---

## Inspiration 

The logo image is inspired by [FREEP!K](https://www.freepik.com/premium-vector/tree-with-lines-dots-vector-design-ai-generate_328598955.htm)

## 📝 License

Distributed under the **Apache 2.0** License. 

<div align="right">

[⬆️ Back to top](#readme-top)

</div>
