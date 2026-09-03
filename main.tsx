import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import './styles.css'

const Section = ({id, eyebrow, title, children}:{id?:string; eyebrow?:string; title?:string; children:React.ReactNode}) => (
  <section id={id} className="section">
    <div className="container">
      {(eyebrow || title) && <div className="section-head">{eyebrow && <p className="eyebrow">{eyebrow}</p>}{title && <h2>{title}</h2>}</div>}
      {children}
    </div>
  </section>
)

const Placeholder = ({label, title, note}:{label:string; title:string; note?:string}) => (
  <div className="placeholder"><p className="eyebrow">{label}</p><h3>{title}</h3>{note && <p>{note}</p>}<span>Replace with final project artifact</span></div>
)

function Nav(){
  return <header className="nav"><div className="container nav-inner"><a className="brand" href="/">TUAN MINH <span>/ BUSINESS ANALYST</span></a><nav><a href="/#about">About</a><a href="/#experience">Experience</a><a href="/#work">Case Study</a><a href="/#skills">Skills</a><a href="/#contact">Contact</a></nav></div></header>
}

const capabilityItems = [
  ['Requirements','Elicitation, analysis and structured specifications that connect business needs to delivery.'],
  ['Process Analysis','As-Is / To-Be thinking, business rules and workflow modeling for operational processes.'],
  ['System Modeling','BPMN, UML, wireframes and data-oriented analysis to make behaviour and scope explicit.'],
  ['Delivery Support','Collaboration with Development and QA through clarification, SIT/UAT and implementation support.']
]

function ProjectVisual(){
  return <div className="project-visual" aria-label="Recruitment management case study overview">
    <div className="project-visual-top"><span>RECRUITMENT MANAGEMENT</span><span>CASE STUDY 01</span></div>
    <div className="project-visual-grid">
      <div className="visual-panel">
        <p className="eyebrow">Candidate</p>
        <strong>Discover → Apply → Track</strong>
        <div className="mini-lines"><span/><span/><span/></div>
      </div>
      <div className="visual-panel">
        <p className="eyebrow">HR</p>
        <strong>Post → Review → Evaluate</strong>
        <div className="mini-score"><b>Fit</b><span>86</span></div>
      </div>
      <div className="visual-panel wide-panel">
        <p className="eyebrow">BA Artifacts</p>
        <div className="artifact-tags"><span>BPMN</span><span>Use Case</span><span>Activity</span><span>Sequence</span><span>ERD</span></div>
      </div>
    </div>
  </div>
}

function Home(){
  return <><Nav/><main>
    <section className="hero"><div className="container hero-grid"><div className="hero-main"><p className="eyebrow">BUSINESS ANALYST · ERP / HRM</p><h1>Tuan Minh</h1><p className="hero-copy">Turning business processes into clear, practical system solutions.</p><p className="value">Business Analyst with hands-on experience across ERP and HRM, working from requirement analysis and process modeling to system specification, SIT/UAT and implementation support.</p><div className="actions"><a className="btn primary" href="/projects/recruitment-management">View Case Study <ArrowRight size={16}/></a><a className="btn" href="#experience">Explore Experience <ArrowRight size={16}/></a></div></div><aside className="profile-card"><p className="eyebrow">BA PROFILE</p><div className="profile-row"><span>Domain</span><b>ERP · HRM</b></div><div className="profile-row"><span>Analysis</span><b>Requirements · Process</b></div><div className="profile-row"><span>Modeling</span><b>BPMN · UML · Wireframe</b></div><div className="profile-row"><span>Delivery</span><b>SIT/UAT · Implementation</b></div><div className="profile-focus">From business problem<br/>to system behaviour.</div></aside></div></section>

    <Section id="about" eyebrow="01 / ABOUT" title="I start with how the business works — then define what the system should do."><div className="about-intro"><p className="lead-paragraph">My work sits between business stakeholders and delivery teams. I investigate workflows, clarify requirements and translate business needs into documentation, models and interfaces that Development and QA can build and validate.</p><p className="about-note">My current focus is becoming a well-rounded Business Analyst with deeper expertise in ERP and HRM, while strengthening end-to-end analysis from discovery through delivery.</p></div><div className="capability-grid">{capabilityItems.map(([title,description])=><article key={title}><span className="cap-number">0{capabilityItems.findIndex(x=>x[0]===title)+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></Section>

    <Section id="experience" eyebrow="02 / EXPERIENCE" title="Experience across enterprise processes and system delivery"><div className="experience-list">
      <article className="experience-item"><div className="experience-meta"><p className="eyebrow">MATTECH</p><h3>Business Analyst</h3><p>ERP · HRM</p></div><div className="experience-body"><p>Analyzed and improved ERP workflows across Sales/Business, Transportation, Warehouse–Accounting, Sales Operations and Human Resources, translating operational needs into practical system changes.</p><p>Participated in the analysis and design of HRM functions with a focus on <b>Recruitment</b> and <b>Payroll</b>, working from business requirements through functional behaviour and interface design.</p><p>Produced requirements and system specifications, wireframes/mockups, and coordinated with Development and QA during clarification, SIT/UAT, issue handling and implementation support.</p><div className="chips">{['ERP','HRM','Requirements','BRD','SRS/FSD','Wireframe','SIT/UAT'].map(x=><span key={x}>{x}</span>)}</div></div></article>
      <article className="experience-item secondary-exp"><div className="experience-meta"><p className="eyebrow">BRAVO</p><h3>ERP Implementation / SQL</h3><p>Enterprise Software</p></div><div className="experience-body"><p>Built a foundation in ERP operations by working with SQL for data checking and reconciliation, learning accounting principles and understanding how enterprise processes are operated through an ERP system.</p><p>This experience strengthened the business and data perspective later applied to Business Analysis work and the recruitment-management graduation case study.</p><div className="chips">{['ERP','SQL','Business Process','Accounting Process','Data Reconciliation'].map(x=><span key={x}>{x}</span>)}</div></div></article>
    </div></Section>

    <Section id="work" eyebrow="03 / FEATURED CASE STUDY" title="One project, shown from problem discovery to system design"><div className="project-card"><div className="project-copy"><p className="eyebrow">PROJECT / 01 · HRM / RECRUITMENT</p><h3>Recruitment Management & Online Application System</h3><p>A Business Analysis and System Design case study based on my graduation thesis. The project investigates a fragmented recruitment process, translates findings into requirements, and designs a centralized solution for candidate management, application tracking and candidate evaluation.</p><div className="project-path"><span>Research</span><b>→</b><span>Requirements</span><b>→</b><span>Modeling</span><b>→</b><span>Prototype</span></div><div className="chips">{['Business Analysis','HRM','BPMN / UML','System Design','Prototype'].map(x=><span key={x}>{x}</span>)}</div><a className="text-link" href="/projects/recruitment-management">Explore Full Case Study <ArrowRight size={16}/></a></div><ProjectVisual/></div></Section>

    <Section id="skills" eyebrow="04 / SKILLS & TOOLS" title="A practical BA toolkit for analysis, modeling and delivery"><div className="skill-groups">{[
      ['Analysis',['Requirement Elicitation','Requirement Analysis','Business Process Analysis','As-Is / To-Be','Business Rules']],
      ['Specification',['BRD','SRS/FSD','User Story','Acceptance Criteria','Use Case','Test Case']],
      ['Modeling & UI',['BPMN','UML','Use Case','Activity','Sequence','ERD','Wireframe / Mockup']],
      ['Delivery & Tools',['SIT/UAT','Jira','SQL','Figma','Draw.io','Lucidchart','Canva']]
    ].map(([h,items],index)=><article key={h as string}><span className="skill-index">0{index+1}</span><p className="eyebrow">{h as string}</p><div className="skill-list">{(items as string[]).map(i=><span key={i}>{i}</span>)}</div></article>)}</div></Section>

    <Section id="contact" eyebrow="05 / CONTACT" title="Interested in Business Analysis, ERP and HRM opportunities."><div className="contact-grid"><div><p className="contact-copy">I’m building my career around end-to-end Business Analysis: understanding business processes, defining clear requirements and working with delivery teams to turn them into usable systems.</p></div><div className="contact-list"><a href="https://github.com/khongnhoten2677-afk" target="_blank" rel="noreferrer"><span>GitHub</span><ArrowUpRight size={17}/></a><a href="/projects/recruitment-management"><span>Recruitment Case Study</span><ArrowRight size={17}/></a></div></div></Section>
  </main><footer><div className="container"><span>Tuan Minh · Business Analyst Portfolio</span><span>ERP · HRM · Business Analysis</span></div></footer></>
}

const metrics = [
  ['66.7%','Current Process','20 of 30 respondents evaluated the current recruitment process as ineffective.'],
  ['76.7%','Application Tracking','Respondents reported difficulty related to the lack of application-status tracking.'],
  ['50%','Candidate Management','Half considered candidate-application management and tracking difficult or relatively difficult.']
]

function CaseStudy(){
  return <><Nav/><main>
    <section className="case-hero"><div className="container"><p className="eyebrow">PROJECT / 01</p><h1>Recruitment Management System</h1><p className="hero-copy small">From fragmented recruitment data to a centralized candidate-management experience.</p><div className="meta"><div><span>Role</span>Business Analyst / System Designer</div><div><span>Domain</span>Recruitment / HRM</div><div><span>Type</span>Graduation Thesis / Academic Project</div></div><div className="meta secondary"><div><span>Methods</span>Interview · Observation · Survey · Document Analysis</div><div><span>Artifacts</span>Requirements · Use Case · Activity · Sequence · ERD · UI</div></div></div></section>
    <div className="container"><Placeholder label="Hero visual" title="Recruitment Management System — project cover" /></div>
    <nav className="case-nav"><div className="container">{['Overview','Research','Requirements','Solution','Deep Dive','Analysis','Prototype','Outcome'].map(x=><a key={x} href={`#${x.toLowerCase().replace(' ','-')}`}>{x}</a>)}</div></nav>
    <Section id="overview" eyebrow="01 / CONTEXT" title="Understanding the recruitment management problem"><div className="two-col"><p>The existing recruitment website supports publishing recruitment information and receiving candidate applications, but candidate information is handled through multiple channels and supporting tools, creating challenges for centralized management and application tracking.</p><p>The project explores a centralized recruitment-management solution supporting candidate data management, recruitment tracking and candidate evaluation.</p></div></Section>
    <Section id="research" eyebrow="02 / DISCOVERY" title="Understanding the problem before designing the solution"><div className="four-col">{[['Interview','Discussed recruitment activities and management challenges.'],['Observation','Observed recruitment-related workflows during internship.'],['Survey','30 responses related to the current recruitment process.'],['Document Analysis','Reviewed recruitment information, website functionality and supporting materials.']].map(([a,b])=><div key={a}><p className="eyebrow">{a}</p><p>{b}</p></div>)}</div><div className="artifact-gap"><Placeholder label="AS-IS / BPMN" title="Current Recruitment Process" note="Department · Management · HR · Candidate"/></div><div className="metrics">{metrics.map(([v,l,d])=><div key={v}><strong>{v}</strong><p className="eyebrow">{l}</p><p>{d}</p></div>)}</div></Section>
    <Section id="requirements" eyebrow="03 / PROBLEM → REQUIREMENT" title="Translating problems into requirements"><div className="mapping">{[
      ['Fragmented candidate data','Centralize recruitment information','Candidate & Application Management'],
      ['Manual tracking','Standardize recruitment lifecycle','Application Status Management'],
      ['Limited candidate visibility','Improve transparency','Application Tracking'],
      ['Limited evaluation support','Support HR screening','Candidate–Job Matching'],
      ['Distributed recruitment management','Control organizational access','Role / Branch-based Management']
    ].map(r=><div className="map-row" key={r[0]}><span>{r[0]}</span><b>→</b><span>{r[1]}</span><b>→</b><span className="accent">{r[2]}</span></div>)}</div><div className="three-col scope">{[['Candidate',['Search Jobs','View Job Details','Manage Profile','Apply for Jobs','Track Applications']],['HR',['Manage Job Postings','Manage Candidates','Manage Applications','Filter / Evaluate Candidates','Configure Evaluation Criteria']],['Admin',['Manage Accounts','Manage Categories','Manage Branch / System Data','Manage Access']]].map(([h,it])=><div key={h as string}><p className="eyebrow">{h as string}</p><ul>{(it as string[]).map(i=><li key={i}>{i}</li>)}</ul></div>)}</div><div className="artifact-gap"><Placeholder label="USE CASE" title="Use Case Overview"/></div></Section>
    <Section id="solution" eyebrow="04 / SOLUTION" title="A single platform for recruitment data"><div className="solution-flow"><div>Candidate Portal</div><div>HR Portal</div><div>Admin Portal</div><strong>↓</strong><div className="wide">Recruitment Management Platform</div><strong>↓</strong><div className="wide accent-box">Centralized Recruitment Data</div></div><div className="four-col">{[['Centralize','Bring recruitment and candidate information together.'],['Track','Make application status visible across the lifecycle.'],['Evaluate','Support consistent review of candidate–job fit.'],['Control','Manage access according to organizational scope.']].map(([a,b])=><div key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></Section>
    <Section id="deep-dive" eyebrow="05 / FEATURE DEEP DIVE" title="Candidate–Job Matching"><p className="lead">How can HR identify candidates who better align with job requirements?</p><div className="matching"><div><p className="eyebrow">Job Requirements</p><div className="chips">{['Major','Location','Gender','Age','Language','Qualification'].map(x=><span key={x}>{x}</span>)}</div></div><strong>+</strong><div><p className="eyebrow">Priority Weights</p><p>Configured per recruitment posting</p></div><strong>+</strong><div><p className="eyebrow">Candidate Profile</p><p>Profile data used for fit evaluation</p></div><strong>↓</strong><div className="wide accent-box">Matching Evaluation → Fit Score → Candidate Ranking → HR Review</div></div><div className="rules">{['BR/01 Priority criteria are configured per job posting.','BR/02 Criteria are associated with the corresponding posting.','BR/03 Candidate profile information is evaluated against configured recruitment criteria.','BR/04 Evaluation results support HR review and prioritization.','BR/05 Recruitment information is managed according to authorized organizational scope.'].map(x=><p key={x}>{x}</p>)}</div></Section>
    <Section id="analysis" eyebrow="06 / SYSTEM ANALYSIS" title="From business behaviour to system behaviour"><div className="usecase"><div><span>Use Case</span><b>UC11 — Apply for Job</b></div><div><span>Actor</span>Candidate</div><div><span>Goal</span>Submit an application for a selected job</div><div><span>Preconditions</span>Logged in · Email verified · Job exists</div><div><span>Main Flow</span>View Job → Apply → Create Application → Save → Confirmation</div><div><span>Exception</span>Application is unavailable if email has not been verified</div><div><span>Postcondition</span>Application request is stored in the system</div></div><div className="artifact-stack"><Placeholder label="ACTIVITY DIAGRAM" title="Candidate Application Workflow"/><Placeholder label="SEQUENCE DIAGRAM" title="Apply for Job — System Interaction"/><div className="two-col"><div><p className="eyebrow">Data Model</p><p>A simplified business-facing ERD should focus on Candidate, Application, Job Posting, Branch, Category, Priority Criteria, Province and Language.</p></div><Placeholder label="ERD" title="Simplified Recruitment Data Model"/></div></div></Section>
    <Section id="prototype" eyebrow="07 / PROTOTYPE" title="Bringing the solution to life"><div className="gallery">{['Job Discovery','Job Detail + Apply','Application Tracking','Job Management','Candidate Management','Candidate Evaluation / Matching'].map((x,i)=><div className={i===5?'featured-shot':''} key={x}><Placeholder label="SCREENSHOT" title={x}/></div>)}</div><div className="automation"><p className="eyebrow">PROCESS AUTOMATION</p>{['New Application → Store → Notify HR','Recruitment Data → Aggregate → Summary → Email HR','Pending Application → Scheduled Check → Reminder → HR'].map(x=><div key={x}>{x}</div>)}</div></Section>
    <Section id="outcome" eyebrow="08 / DELIVERABLES & OUTCOME" title="What the project produced"><div className="four-col">{[['Research','Interview · Observation · Survey'],['Analysis','Requirements · Use Cases'],['Design','Processes · Data · UI'],['Prototype','Working recruitment platform']].map(([a,b])=><div key={a}><p className="eyebrow">{a}</p><p>{b}</p></div>)}</div><div className="reflection"><h3>What I learned</h3><p><b>Start with the problem.</b> Understanding the existing process came before defining features.</p><p><b>Requirements need traceability.</b> Findings, business needs and system capabilities should connect clearly.</p><p><b>Business and technology must connect.</b> Modeling and prototyping helped translate requirements into system behaviour.</p></div></Section>
  </main></>
}

function App(){ return window.location.pathname.startsWith('/projects/recruitment-management') ? <CaseStudy/> : <Home/> }
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>)
