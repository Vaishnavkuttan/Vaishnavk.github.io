export const projectsData = [
    {
        id: 1,
        title: "Taco Bell Delivery Platform & Aggregator Integrations",
        domain: "Food & Beverage / E-commerce",
        company: "Cognizant",
        role: "Lead QA & Agile Coordinator",
        overview: "Led end-to-end quality assurance for the Taco Bell Delivery Website, managing complex integrations with major delivery aggregators (GrubHub, UberEats, DoorDash, Postmates). Responsible for validating Menu Management, Order Management, and POS/KDS systems connectivity in a cloud-native environment.",
        responsibilities: [
            "Designed holistic Test Strategies and Test Plans for quarterly releases.",
            "Managed the end-to-end testing lifecycle (STLC) within Agile sprints.",
            "Collaborated with Business Analysts to analyze requirements and infrastructure needs.",
            "Led Release Readiness meetings and coordinated Go/No-Go decisions.",
            "Mentored junior testers and conducted Knowledge Transfer (KT) sessions."
        ],
        technical: [
            "Executed AWS Log Validation using CloudWatch to debug order failures.",
            "Validated POS (Point of Sale) and KDS (Kitchen Display System) integrations.",
            "Conducted Cross-Browser & Cross-Device testing using BrowserStack.",
            "Managed test data and environments using AWS EC2 and S3."
        ],
        automation: [
            "Maintained scalable Selenium WebDriver + TestNG regression suites.",
            "Implemented CI/CD execution flows via Jenkins for nightly builds.",
            "Leveraged GitHub for version control and branch management."
        ],
        outcomes: [
            "Reduced regression cycle time by 40% through automation.",
            "Ensured 100% test coverage for critical aggregator flows.",
            "Minimized defect leakage into production by introducing Shift-Left practices.",
            "Streamlined Release Certification process for faster time-to-market."
        ],
        technologies: ["Selenium", "Java", "AWS (CloudWatch, S3)", "JIRA", "Qmetry", "BrowserStack"],
        repoUrl: "https://github.com/vaishnav-kalaikumar/taco-bell-automation-demo",
        badgeHolder: true
    },
    {
        id: 2,
        title: "Cloud-Native Automation Framework Architecture",
        domain: "Technical Initiative / DevOps",
        company: "Cognizant",
        role: "Automation Architect",
        overview: "Designed and modernized a hybrid test automation framework to support continuous delivery. Focused on integrating Generative AI (GitHub Copilot) and Cloud Infrastructure (AWS) to enhance script reliability and execution speed.",
        responsibilities: [
            "Architected a robust Selenium + TestNG framework with Page Object Model.",
            "Integrated GitHub Copilot to accelerate script development and maintenance.",
            "Configured AWS Device Farm for scalable mobile web testing.",
            "Established coding standards and conducted code reviews for the QA team."
        ],
        technical: [
            "Implemented parallel execution to reduce build times.",
            "Integrated framework with Jenkins for automated trigger on commit.",
            "Utilized Docker containers for consistent test execution environments.",
            "Scripted API validations using Postman for backend checks."
        ],
        automation: [
            "Achieved Guinness World Record for Gen AI Hackathon using Copilot.",
            "Automated over 500+ regression test scenarios.",
            "Self-healing scripts to reduce maintenance overhead."
        ],
        outcomes: [
            "Increased automation stability by 30% using cloud execution.",
            "Reduced script authoring time by 25% with GitHub Copilot.",
            "Enabled 'One-Click' regression testing for deployment pipelines."
        ],
        technologies: ["Selenium", "TestNG", "GitHub Copilot", "AWS Device Farm", "Jenkins", "Docker"],
        repoUrl: "https://github.com/vaishnav-kalaikumar/gen-ai-automation",
        badgeHolder: true
    },
    {
        id: 3,
        title: "Enterprise System Verification & Release Management",
        domain: "Enterprise Software",
        company: "HCL Technologies",
        role: "Test Analyst",
        overview: "Delivered comprehensive functional and system assurance for large-scale enterprise applications. Focused on achieving 100% requirement coverage and ensuring stability for production Go-Live events.",
        responsibilities: [
            "Performed rigorous Functional, Integration, and System Testing.",
            "Analyzed 100% of business requirements to create exhaustive test scenarios.",
            "Coordinated with development teams for immediate bug triage and closure.",
            "Managed defect lifecycle in JIRA from discovery to resolution."
        ],
        technical: [
            "Executed specialized GUI and Usability testing for end-user satisfaction.",
            "Handled Production/Go-Live validation coordination.",
            "Maintained strict version control and test documentation."
        ],
        automation: [
            "Identified regression candidates for future automation.",
            "Created data-driven manual test suites for complex workflows."
        ],
        outcomes: [
            "Achieved zero critical defects in UAT phases.",
            "Standardized bug reporting formats for clearer communication.",
            "Improved regression testing efficiency through structured test planning."
        ],
        technologies: ["Manual Testing", "JIRA", "SQL", "System Testing", "Agile"],
        badgeHolder: false
    },
    {
        id: 4,
        title: "Consumer Device Experience & Support System",
        domain: "Consumer Electronics",
        company: "Sutherland (Amazon Kindle)",
        role: "Tech Support Engineer",
        overview: "Ensured superior user experience for the Amazon Kindle ecosystem through exploratory testing and high-volume technical support. Focused on identifying recurring user issues to improve product quality.",
        responsibilities: [
            "Conducted exploratory testing to identify edge-case defects.",
            "Created detailed Standard Operating Procedures (SOPs) for the team.",
            "Troubleshot complex technical issues for a global user base.",
            "Documented manual test scenarios based on user feedback trends."
        ],
        technical: [
            "Utilized device logging tools to analyze failure patterns.",
            "Collaborated with Tier-2 support to escalate systemic bugs."
        ],
        automation: [
            "Drafted structured exploratory test charters to guide sessions."
        ],
        outcomes: [
            "Improved First Call Resolution (FCR) metrics significantly.",
            "Contributed to the knowledge base, reducing training time for new hires.",
            "Identified critical firmware bugs affecting user retention."
        ],
        technologies: ["Device Testing", "Troubleshooting", "Log Analysis", "Kindle OS"],
        badgeHolder: false
    }
];
