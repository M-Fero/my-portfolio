/* ========================================
   EDITABLE PORTFOLIO CONTENT
   ⚠️ EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
   ======================================== */

// ========================================
// PERSONAL INFORMATION
// ========================================
const personalInfo = {
    name: "Mostafa Fero",
    title: "Unity Game Developer",
    yearsOfExperience: "3+",
    
    // 📝 EDIT: Add your profile image path
    // Place your image in the 'images' folder and update the path below
    profileImage: "images/Self/Profile-Photo.png",
    // Example: profileImage: "images/profile-photo.jpg",
    
    // 📝 EDIT: Add your CV/Resume file
    // Place your CV in the 'assets' folder and update the filename
    cvFile: "assets/Mostafa-Fero-Unity-Developer.pdf",
    // Example: cvFile: "assets/Mostafa-Fero-CV-2025.pdf",
    
    location: "6 of October City, Egypt",
    email: "Mostafa.F.Fero@gmail.com",
    phone: "+20 111 800 5622",
    
    // 📝 EDIT: Add your social media links
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/mostafa-fero/",
        github: "#", // Add your GitHub profile URL
        discord: "#", // Add your Discord profile URL
        spotify: "https://open.spotify.com/user/fero.nitro?si=46ec73f195194b44"
    }
};

// ========================================
// HOME PAGE CONTENT
// ========================================
const homeContent = {
    subtitle: "Unity Game Developer (3+ Years) | C# Programmer",
    greeting: "Hi, I'm",
    tagline: "Passionate About Bringing Ideas to Life",
    
    // 📝 EDIT: Update your professional summary paragraphs
    professionalSummary: [
        `Dedicated Unity Game Developer with over 3 years of professional experience specializing in 3D simulation games, interactive VR/AR experiences, and advanced gameplay mechanics. Proficient in C# programming, performance optimization, and crafting immersive user interfaces from concept to deployment.`,
        
        `Adept at integrating specialized hardware and custom input mechanics, notably developing motion-controlled interactive simulations using Kinect during my tenure at STS (Smart Touch Solutions). Experienced in bridging the gap between gameplay and backend systems through API integration, Firebase, SQL, and multiplayer network architectures.`,
        
        `Backed by a strong foundation in full-stack web development and technical support, I bring exceptional troubleshooting skills and an engineering mindset to game development. Proven ability to lead development pipelines, manage version control, and collaborate within cross-functional teams to deliver highly polished, performant titles.`
    ]
};

// ========================================
// PROJECTS
// 📝 EDIT: Add/Update your projects here
// ========================================
const projects = [
    {
        title: "Air Assault",
        // 📝 EDIT: Add your project image
        // Place images in 'images/projects/' folder
        image: "https://m-fero.github.io/wp-content/uploads/2024/05/Screenshot-2024-05-25-194912-800x450.png",
        // Example: image: "images/projects/air-assault.png",
        
        description: "A high-octane 3D space defense game. Airforce invades from outer space, and it's the player's duty to save the planet from alien invaders utilizing smooth movement and rapid-fire mechanics.",
        
        contributions: [
            "Implemented core C# gameplay loops and enemy wave AI.",
            "Optimized particle systems for high-performance laser combat.",
            "Managed Scene & Object Pooling for projectile efficiency."
        ],
        
        technologies: ["Unity 3D", "C#", "AI Navigation"],
        
        // 📝 EDIT: Add your project links
        links: {
            demo: "#", // Add demo/play link
            repo: "#"  // Add GitHub repository link
        }
    },
    {
        title: "Space Shooter",
        // 📝 EDIT: Add your project image
        image: "https://m-fero.github.io/wp-content/uploads/2024/05/Screenshot-2024-05-25-182042-800x450.png",
        // Example: image: "images/projects/space-shooter.png",
        
        description: "Enjoy levels of challenging spaceship combat on unknown planets with special environment setups, advanced post-processing, and dynamic lighting.",
        
        contributions: [
            "Integrated Unity Post-Processing stack for cinematic visuals.",
            "Engineered custom shaders using Unity Shader Graph.",
            "Designed responsive UI/UX for mobile and PC displays."
        ],
        
        technologies: ["Post-Processing", "Shader Graph", "UI/UX"],
        
        // 📝 EDIT: Add your project links
        links: {
            demo: "#"
        }
    },
    {
        title: "FearRoad Highway",
        // 📝 EDIT: Add your project image
        image: "https://m-fero.github.io/wp-content/uploads/2024/05/FearRoad-1-800x450.png",
        // Example: image: "images/projects/fearroad.png",
        
        description: "An endless runner racing game featuring procedural road generation. Players achieve high scores, avoid traffic, and collect coins to unlock new rides.",
        
        contributions: [
            "Programmed Procedural Content Generation (PCG) for endless roads.",
            "Implemented monetization pipelines (In-App Purchases, Ads).",
            "Optimized for Android/iOS mobile deployment."
        ],
        
        technologies: ["PCG", "Mobile Dev", "Monetization"],
        
        // 📝 EDIT: Add your project links
        links: {
            playStore: "#" // Add Google Play Store link
        }
    }
    
    // 📝 ADD MORE PROJECTS: Copy the structure above to add more projects
    // Example:
    // {
    //     title: "Your New Project",
    //     image: "images/projects/new-project.png",
    //     description: "Project description...",
    //     contributions: ["Contribution 1", "Contribution 2"],
    //     technologies: ["Tech1", "Tech2"],
    //     links: { demo: "#" }
    // }
];

// ========================================
// SKILLS
// 📝 EDIT: Add/Update your skills
// ========================================
const skills = {
    // Core technical skills (displayed as badges)
    technical: [
        'Unity 3D / 2D',
        'C# Programming',
        'VR / AR Development',
        'Multiplayer Networking',
        'UI / UX Design',
        'Game Mechanics & Physics',
        'Procedural Content Generation (PCG)',
        'Post-Processing & Shader Graph',
        'Performance Optimization',
        'Firebase & SQL',
        'Mobile Dev (Android & iOS)',
        'Monetization (Ads, IAP)',
        'REST API Integration',
        'Git / GitHub',
        'Animation & Rigging',
        'Level Design'
        
        // 📝 ADD MORE: Add your additional skills here
    ],
    
    // Key specializations (detailed descriptions)
    specializations: [
        {
            icon: "fas fa-gamepad",
            title: "Unity 3D Game Development",
            description: "Simulation, interaction, level design, and storytelling. Successfully upgraded Unity versions and resolved deprecated code issues."
        },
        {
            icon: "fas fa-code",
            title: "C# Programming & Game Mechanics",
            description: "Advanced physics, AI for NPCs, Object-Oriented Programming (OOP), design patterns, and optimized mechanics using scene management & object pooling."
        },
        {
            icon: "fas fa-layer-group",
            title: "UI/UX for Games",
            description: "Proficient in Canvas, World Space UI, and the Unity UI Toolkit to deliver immersive player experiences."
        },
        {
            icon: "fas fa-server",
            title: "Backend & Data Handling",
            description: "Extensive experience with API Integration, Firebase, and SQL to fetch dynamic game data and manage multiplayer functionalities."
        },
        {
            icon: "fas fa-tachometer-alt",
            title: "Performance Optimization",
            description: "Expert in utilizing Unity Profiler, code optimization, memory management, and automated testing to ensure framerate stability."
        }
        
        // 📝 ADD MORE: Add your additional specializations
    ]
};

// ========================================
// EDUCATION
// 📝 EDIT: Update your education details
// ========================================
const education = {
    institution: "Thebes Academy",
    location: "Cairo, Egypt",
    degree: "Computer Science",
    graduationDate: "05/2014",
    
    highlights: [
        "Gained in-depth knowledge of data structures and algorithms to optimize problem-solving.",
        "Learned principles of software engineering, including design patterns and version control.",
        "Acquired understanding of database management and SQL.",
        "Understood software development lifecycle and applied Agile principles."
    ]
};

// ========================================
// WORK EXPERIENCE
// 📝 EDIT: Add/Update your work experience
// ========================================
const experience = [
    {
        position: "Unity Game Developer (Full-Time)",
        company: "STS - Smart Touch Solutions",
        // 📝 EDIT: Add company logo
        // Place logo in 'images/companies/' folder
        logo: "images/companies/sts-logo.png", // Example: "images/companies/sts-logo.png"
        startDate: "04/2025",
        endDate: "Present",
        current: true,
        responsibilities: [
            "<strong>VR & Interactive Simulations:</strong> Developing VR and interactive simulation experiences using Unity (URP/Standard).",
            "<strong>Mechanics & Inputs:</strong> Implementing gameplay systems, input interactions, and specialized hardware controller-based mechanics like Kinect integration.",
            "<strong>Optimization:</strong> Optimizing scenes, build size, and framerate across devices.",
            "<strong>Workflow:</strong> Integrating assets, animation workflows, and collaborating with designers to build prototypes."
        ]
    },
    {
        position: "Unity Game Developer (Part-Time)",
        company: "ARCON",
        logo: "images/companies/arcon-logo.png",
        startDate: "04/2025",
        endDate: "Present",
        current: true,
        partTime: true, // Special flag for part-time styling
        responsibilities: [
            "Maintain and support ongoing simulation & training game projects.",
            "Implement updates, bug fixes, and feature improvements."
        ]
    },
    {
        position: "Unity Game Developer (Full-Time)",
        company: "ARCON",
        // 📝 EDIT: Add company logo
        logo: "images/companies/arcon-logo.png",
        // Example: logo: "images/companies/arcon-logo.png"
        startDate: "03/2023",
        endDate: "04/2025",
        responsibilities: [
            "<strong>Educational Simulation Games:</strong> Worked on 3D simulation-based educational games, ensuring immersive learning experiences.",
            "<strong>Gameplay Mechanics:</strong> Designed, developed, and maintained game mechanics to enhance interactivity and performance.",
            "<strong>Backend Integration:</strong> Implemented data fetching mechanisms to integrate dynamic content from backend systems.",
            "<strong>Unity Engine Upgrade:</strong> Successfully upgraded Unity from 2021 to a newer version (6000), resolving deprecated code."
        ]
    },
    {
        position: "Senior Technical Support Specialist",
        company: "Etisalat by E&",
        logo: "images/companies/etisalat-logo.png",
        startDate: "09/2022",
        endDate: "03/2023",
        responsibilities: [
            "<strong>System Inspection:</strong> Analyzed and inspected C#-based systems, identifying and addressing performance bottlenecks.",
            "<strong>Debugging:</strong> Diagnosed and resolved software issues applying C# debugging techniques to enhance stability."
        ]
    },
    {
        position: "Data and Fixed Representative",
        company: "Vodafone",
        // 📝 EDIT: Add company logo
        logo: "images/companies/vodafone-logo.png",
        // Example: logo: "images/companies/vodafone-logo.png"
        startDate: "11/2017",
        endDate: "10/2022",
        responsibilities: [
            "<strong>Siebel CRM Simulation:</strong> Developed a web-based Siebel CRM simulation using HTML, CSS, JavaScript, and PHP.",
            "<strong>Android Booking App:</strong> Designed and built an Android-based vacation booking system with Firebase integration."
        ]
    },
    {
        position: "Web Developer",
        company: "Diva-Lab",
        // 📝 EDIT: Add company logo
        logo: "images/companies/diva-logo.png",
        // Example: logo: "images/companies/divalab-logo.png"
        startDate: "01/2017",
        endDate: "08/2017",
        responsibilities: [
            "<strong>Full-Stack Development:</strong> Implemented both front-end and back-end functionalities utilizing OOP, PHP, and SQL.",
            "<strong>CRUD Operations:</strong> Built interactive user interfaces with AJAX-based CRUD functionality."
        ]
    },
    {
        position: "System Administrator",
        company: "NouranMedia",
        // 📝 EDIT: Add company logo
        logo: "", // Add logo: place nouranmedia-logo.png in images/companies/
        // Example: logo: "images/companies/nouranmedia-logo.png"
        startDate: "09/2014",
        endDate: "10/2016",
        responsibilities: [
            "<strong>Version Control & Asset Management:</strong> Managed user accounts, permissions, and repositories for smooth collaboration in development teams.",
            "<strong>Server & Database Administration:</strong> Maintained and configured servers, cloud storage, and databases to support online applications and backend services.",
            "<strong>Technical Support & Issue Resolution:</strong> Provided IT support, diagnosing and resolving technical problems to ensure a stable environment for developers."
        ]
    }
    
    // 📝 ADD MORE: Add your additional work experience
];
