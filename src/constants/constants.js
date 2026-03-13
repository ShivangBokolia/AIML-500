import { linkedin, GitHub_Outline, Instagram, Mail } from "../assets";

const navbarLinks = [
    {
        name: "Artifacts",
        id: "artifacts",
    },
    {
        name: "Contact",
        id: "contact",
    },
];

const jobDetails = {
    Collins: {
        year: "Jan 2023 - Present",
        title: "Software Engineer 2",
        name: "Collins Aerospace",
        desc: [
            "I work on a large-scale, AI-driven Testing-as-a-Service platform built with Python and Vue.js, focused on automatically generating exhaustive test scenarios from user-defined requirements. My work centers on a genetic-algorithm–based test generation engine that explores complex input spaces and produces high-coverage test cases at scale.",
            "A key contribution was re-architecting the numeric equation solver within the test generation algorithm using libraries like SymPy and NumPy, reducing end-to-end computation time from ~90 minutes to ~7 minutes while improving numerical accuracy and precision.",
            "I also designed a graphical visualization of interrelated requirements in the Vue.js frontend, helping users better understand data flow and dependencies. This feature has been widely adopted and positively received by multiple teams.",
            "Beyond core features, I extend the engine to support increasingly complex requirements driven from evolving use cases, fix bugs based on user feedback, and help onboard and support other developers working on the platform.",
        ],
        skills: [
            "Python",
            "Vue.js",
            "TypeScript",
            "Quasar",
            "JavaScript",
            "React",
            "Automation",
            "Frontend Development",
            "Backend Development",
        ],
        link: "https://www.collinsaerospace.com/",
    },
    Itential: {
        year: "May 2022 - Aug 2022",
        title: "Software Engineer Co-op",
        name: "Itential",
        desc: [
            "I collaborated with the R&D tools team on data analysis and the development of automation tools to improve internal engineering workflows.",
            "I led the creation of a CI/CD automation tool using Bash and Node.js that leveraged the GitLab API to automatically update over 180 open-source adapters. What previously required months of manual effort from senior engineers was reduced to a few hours of review, significantly accelerating migration timelines.",
            "I also built a Node.js-based documentation automation tool that converted JavaScript and JSON source data into structured Markdown documentation, turning previously undocumented adapters into clearly documented and easily accessible components.",
        ],
        skills: ["Node.js", "Bash", "CI/CD Automation", "Data Analysis"],
        link: "https://www.itential.com/",
    },
    CloudCheckr: {
        year: "May 2020 - Dec 2020",
        title: "Software Engineer Intern",
        name: "CloudCheckr",
        desc: [
            "I worked on the CloudCheckr CMx application as part of the software development team, contributing to core product enhancements using React.",
            "I implemented complex features and developed multiple pages while collaborating closely with designers and engineers to ensure the UI matched project requirements and design specifications.",
            "I also worked on automated testing in Python using Robot Framework to reduce reliance on manual testing, cutting testing effort by roughly 70% and improving overall software quality through earlier issue detection.",
        ],
        skills: ["React", "Python", "Frontend Development", "QA Testing"],
        link: "https://www.flexera.com/products/cloudcheckr",
    },
};

const educationDetails = {
    Masters_2: {
        year: "Jan 2026 - Present",
        college: "Indiana Wesleyan University",
        degree: "Masters of Science in Artificial Intelligence",
        specialization: "Specialization in Data Analytics",
        link: "https://www.indwes.edu/",
    },
    Masters_1: {
        year: "Aug 2018 - Dec 2022",
        college: "Rochester Institute of Technology",
        degree: "Masters of Science in Computer Science",
        gpa: "3.78/4.00",
        specialization: "Specialization in Computer Graphics",
        achievement: "Magna Cum Laude",
        link: "https://www.rit.edu/",
    },
    Bachelors: {
        year: "Aug 2018 - Dec 2022",
        college: "Rochester Institute of Technology",
        degree: "Bachelors of Science in Computer Science",
        gpa: "3.78/4.00",
        specialization: "Minor in Mathematics",
        achievement: "Magna Cum Laude",
        link: "https://www.rit.edu/",
    },
};

const hardSkills = [
    "Python",
    "JavaScript",
    "React",
    "Vue.js",
    "HTML",
    "CSS",
    "C++",
    "Java",
    "Ada",
    "LangGraph",
    "Quasar",
    "Git",
    "Node.js",
];

const softSkills = ["Teamwork", "Communication", "Problem Solving", "Agile"];

const artifacts = [
    {
        name: "CoursePilot (ChatBot)",
        definition:
            "A chatbot assistant capable of answering questions about Workshop One could help address this problem by providing quick, clear explanations.",
        objective:
            "The primary objective of the chatbot is to help students understand the requirements for Workshop One in the AIML-500 course. The assistant provides guidance about assignments, grading rubrics, deadlines, and submission instructions. By offering quick answers to common questions, the chatbot helps students stay organised and reduces confusion about assignment expectations.",
        process: [
            "Goal: We established the primary goal of the project as helping students quickly obtain answers related to their workshop details. Instead of requiring students to open multiple lengthy documents and manually search through them, the objective was to provide a chatbot that allows students to ask questions directly and receive accurate, relevant information instantly.",
            "Experimentation: During the development phase, we experimented with multiple available tools to determine the most suitable platform for building the chatbot. These tools included Mizou.com, ChatGPT, and Chatbase.co. Each platform was tested to evaluate its capabilities, ease of use, and effectiveness in handling the project requirements.",
            "Tool Selection: After testing the different platforms, we decided to proceed with Chatbase.co. The decision was based on the flexibility it provided in managing content sources and updating prompts, which made it more suitable for our use case compared to the other tools.",
            "Prompt Engineering: Once the tool was finalized, we initially used the default prompt provided by the platform to test the chatbot. However, the responses were not sufficiently accurate or aligned with the intended use case. We therefore iteratively refined and engineered the prompt through multiple rounds of testing and adjustments until the chatbot consistently produced accurate and relevant responses.",
            "Personality: After ensuring that the chatbot was able to answer questions accurately, we focused on improving the interaction experience by giving the bot a distinct personality. The prompt was updated to make the chatbot respond in a cheerful, playful, and slightly sarcastic tone, making interactions more engaging and preventing the responses from feeling overly robotic.",
            "Design: After the chatbot's functionality and personality were finalized, we focused on the visual design. The chatbot interface was designed to reflect the aesthetic and branding of IWU, ensuring that the look and feel of the chatbot aligned with the institution it was built to support.",
        ],
        tools: "ChatBase.co",
        value_proposition:
            "Through the development of the IWU Workshop Chatbot, I demonstrated my ability to identify a real user need and build a practical AI-driven solution. By experimenting with different tools, selecting the most suitable platform, and refining prompts, I created a chatbot that provides accurate information in an engaging and user-friendly way. This project highlights my skills in problem solving, prompt engineering, tool evaluation, and designing solutions that simplify complex information for users.",
        source_link: "https://www.chatbase.co/YiqLVcp82YHBitv_Kg9Kf/help",
        in_page_link: "artifactOne",
    },
];

const projects = [
    {
        name: "Haptic2FA",
        description:
            "Contributed to research with a team of UX researchers to develop an android application using Java, tailored for a two-factor authentication system, with focus on enhancing accessibility for blind and low vision users.",
        skills: [
            "Java",
            "Android Studio",
            "App Development",
            "Something",
            "Nothing",
            "Maybe Something after all",
        ],
        source_code_link:
            "https://github.com/ShivangBokolia/Haptic-Application",
    },
    {
        name: "Rendering volumetric videos in real time",
        description:
            "Engineered the software architecture encompassing data capture, processing and rendering of volumetric point cloud data and synchronized audio into a virtual reality environment in real-time.",
        skills: ["C++", "Unreal Engine"],
        source_code_link: "https://github.com/",
    },
    {
        name: "Ray Tracer",
        description:
            "Implemented a ray tracer in C++, employing the Turner Whitted algorithm to craft high-definition images.",
        skills: ["C++"],
        source_code_link:
            "https://github.com/ShivangBokolia/RayTracer-from-Scratch",
    },
    {
        name: "Rendering volumetric videos in real time",
        description:
            "Engineered the software architecture encompassing data capture, processing and rendering of volumetric point cloud data and synchronized audio into a virtual reality environment in real-time.",
        skills: ["C++", "Unreal Engine"],
        source_code_link: "https://github.com/",
    },
    {
        name: "Rendering volumetric videos in real time",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh..",
        skills: ["C++", "Unreal Engine"],
        source_code_link: "https://github.com/",
    },
];

const connect = [
    {
        name: "LinkedIn",
        desc: "Connect professionally",
        img: linkedin,
        link: "https://www.linkedin.com/in/sb-info",
    },
    {
        name: "GitHub",
        desc: "View my projects",
        img: GitHub_Outline,
        link: "https://github.com/ShivangBokolia",
    },
    {
        name: "Instagram",
        desc: "Follow me on social",
        img: Instagram,
        link: "https://www.instagram.com/shivangboko/",
    },
    {
        name: "Email",
        desc: "sbokolia@gmail.com",
        img: Mail,
        link: "mailto:sbokolia@gmail.com",
    },
];

export {
    navbarLinks,
    jobDetails,
    educationDetails,
    hardSkills,
    softSkills,
    projects,
    connect,
    photoImages,
    artifacts,
};
