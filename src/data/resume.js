
import {
    PiCheckCircle as CheckCircle,
    PiTerminal as Terminal,
    PiCpu as Cpu,
    PiCloud as Cloud,
    PiToolbox as Toolbox,
    PiWindowsLogo as WindowsLogo
} from 'react-icons/pi';

export const resumeData = {
    profile: {
        name: "Vaishnav Kalaikumar",
        title: "Senior Quality Engineer – Manual & Automation Testing",
        tagline: "Driving Enterprise-Level QA for High-Traffic Applications",
        email: "vaishnavkuttan96@gmail.com",
        phone: "+91-9840679845",
        linkedin: "https://linkedin.com/in/vaishnav-kalaikumar",
        summary: "Senior Quality Engineer with 6+ years of experience driving enterprise-level QA for high-traffic web and mobile applications. Expertise in Automation Frameworks (Selenium, TestNG, POM), CI/CD pipelines (Jenkins, Git), and AWS-based validation. Guinness World Record Holder for pioneering Generative AI (GitHub Copilot) in software testing."
    },
    skills: [
        {
            category: "Automation",
            icon: CheckCircle,
            items: ["Selenium WebDriver", "TestNG", "Maven", "POM", "Extent Reports", "GitHub Copilot"]
        },
        {
            category: "Programming",
            icon: Terminal,
            items: ["Java", "Shell Scripting"]
        },
        {
            category: "Test Management",
            icon: Cpu,
            items: ["JIRA", "Zephyr", "Qmetry", "BrowserStack", "Elo View", "Jarvis"]
        },
        {
            category: "Cloud/DevOps",
            icon: Cloud,
            items: ["AWS (EC2, S3, SNS, Lambda, SQS, Device Farm)", "Jenkins", "Docker", "VMware"]
        },
        {
            category: "Tools",
            icon: Toolbox,
            items: ["Git", "GitHub", "IntelliJ IDEA", "Eclipse", "Postman", "PuTTY", "WinSCP"]
        },
        {
            category: "Platforms",
            icon: WindowsLogo, // Using Windows logo as generic platform placeholder or find better fit
            items: ["Windows", "Mac", "Linux", "Android", "Citrix"]
        }
    ],
    experience: [
        {
            id: 1,
            role: "Associate / Sr. Quality Engineer",
            company: "Cognizant Technology Solutions",
            duration: "Feb 2021 – Present",
            responsibilities: [
                "Design and maintenance of Automation Frameworks involved in testing.",
                "Implemented Page Object Model (POM) for better code reusability.",
                "Executed parallel testing using TestNG to reduce execution time.",
                "Validated AWS-based cloud infrastructures including EC2 and Lambda.",
                "Performed cross-browser and cross-device testing using BrowserStack.",
                "Debugged microservices logs and managed defect lifecycles."
            ]
        },
        {
            id: 2,
            role: "Test Analyst",
            company: "HCL",
            duration: "Feb 2020 – Jan 2021",
            responsibilities: [
                "Performed Functional, Integration, Regression, and Sanity testing.",
                "Managed defect tracking and reporting in JIRA.",
                "Collaborated with developers for defect resolution and root cause analysis.",
                "Created comprehensive test plans and test strategies."
            ]
        },
        {
            id: 3,
            role: "Tech Support Engineer (Amazon Kindle)",
            company: "Sutherland",
            duration: "Sep 2017 – Jul 2019",
            responsibilities: [
                "Handled exploratory testing for Kindle devices.",
                "Debugged user-reported issues and provided technical resolutions.",
                "Maintained documentation for common issues and fixes.",
                "Provided high-level user support and troubleshooting."
            ]
        }
    ],
    achievements: [
        {
            title: "Guinness World Record",
            subtitle: "Generative AI Hackathon",
            description: "Recognized for pioneering contributions in using Generative AI (GitHub Copilot) for software testing innovations."
        },
        {
            title: "Software Testing Certification",
            subtitle: "Qspiders",
            description: "Professional certification in manual and automation testing methodologies."
        },
        {
            title: "GitHub Copilot Advanced Program",
            subtitle: "Certification",
            description: "Advanced proficiency in using AI-pair programming tools for code generation and optimization."
        }
    ],
    education: [
        {
            degree: "B.E. Electrical and Electronics Engineering",
            institution: "Sri Krishna Engineering College",
            year: "2017"
        }
    ],
    projects: [
        {
            title: "Automation Framework (Selenium + TestNG)",
            description: "Designed a robust modular automation framework for a large-scale e-commerce application using Selenium WebDriver and TestNG. Implemented POM design pattern to enhance code maintainability and reusability.",
            tech: ["Selenium", "Java", "TestNG", "Maven"]
        },
        {
            title: "API Testing Suite",
            description: "Developed a comprehensive API automated testing suite using Postman and RestAssured. Validated JSON responses, status codes, and data integrity across microservices endpoints.",
            tech: ["Postman", "RestAssured", "JSON", "API"]
        },
        {
            title: "Cross-Platform Mobile Testing",
            description: "Implemented a cloud-based testing strategy using BrowserStack to validate application performance across 20+ mobile devices and OS versions, ensuring seamless user experience.",
            tech: ["BrowserStack", "Appium", "Android", "iOS"]
        }
    ]
};
