export const RESUME_DATA = {
    en: {
        name: "Leandro Cantero",
        initials: "LC",
        location: "Hurlingham, Buenos Aires",
        locationLink: "https://www.google.com/maps/place/Hurlingham,+Buenos+Aires",
        about: "Full Stack Developer & Cloud Consultant.",
        summary: "University Technician in Programming with solid foundations in Full-Stack development (Java, .NET, PERN) and practical experience in Microsoft Azure solutions (AZ-900 and DP-900 certifications). Focused on implementing Cloud, Data, Low Code, and AI technologies, seeking a role where I can contribute to the development of scalable and efficient solutions.",
        avatarUrl: "/avatar.png",
        personalWebsiteUrl: "https://leandrocantero.dev",

        contact: {
            email: "lcantero18@gmail.com",
            tel: "+54 11 6354-4453",
            social: [
                { name: "GitHub", url: "https://github.com/leandrocantero" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/leandro-cantero" },
            ],
        },

        education: [
            {
                school: "Universidad Nacional de Hurlingham",
                degree: "University Technician in Programming",
                start: "2022",
                end: "2025",
                description: "Undergraduate degree focused on software development, with a robust technical foundation in Object-Oriented Programming (OOP), Data Structures, and Relational Databases (SQL). The program includes specialization in Web Development and strong training in Software Engineering and Agile Methodologies for building quality systems.",
            },
        ],

        certifications: [
            {
                title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
                issuer: "Microsoft",
                date: "Aug 2025",
                description: "Fundamental understanding of core services, security, and Cloud Computing models in Azure.",
                link: "https://learn.microsoft.com/api/credentials/share/es-es/LeandroFC/A0B5A651927C162?sharingId=3091CE62186523F0",
                image: "/Fundamentals.jpg",
            },
            {
                title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
                issuer: "Microsoft",
                date: "Sep 2025",
                description: "Foundations of relational data, NoSQL, Big Data, and AI in Azure.",
                link: "https://learn.microsoft.com/api/credentials/share/es-es/LeandroFC/1B08B1009A7C9CE7?sharingId=3091CE62186523F0",
                image: "/Data.jpg",
            },
        ],

        work: [
            {
                company: "ReadyMind",
                location: "Remote",
                title: "Cloud Consultant - Trainee",
                start: "May 2025",
                end: "Sep 2025",
                description: "Implemented Cloud solutions in Azure, focused on the use of data services and Low Code. The training culminated with the approval of AZ-900 and DP-900 certifications.",
            },
            {
                company: "Huenei IT",
                location: "Hybrid, Padua, Buenos Aires",
                title: ".NET Developer",
                start: "Nov 2021",
                end: "May 2022",
                description: "Developed and optimized a critical desktop application for a wholesale distributor, using C# (.NET) and SQL Server. The implementation improved inventory management and distribution efficiency.",
            },
            {
                company: "Alkemy",
                location: "Remote",
                title: "Java Developer - Trainee",
                start: "Jul 2021",
                end: "Sep 2021",
                description: "Participated in backend development for a Full-Stack project using Java, Spring, and MySQL. Actively worked under SCRUM methodology, applying version control with Bitbucket and documenting APIs with Postman and Swagger, strengthening teamwork skills.",
            },
        ],

        skills: ["React", "Node.js", "JavaScript", "Java", "Spring Boot", "C#", ".NET", "HTML", "CSS", "SQL", "NoSQL", "Azure", "Docker", "Git", "SVN", "IA"],

        languages: [
            { name: "Spanish", level: "Native" },
            { name: "English", level: "B1 (Intermediate)" },
            { name: "Portuguese", level: "A2 (Basic)" },
        ],

        projects: [
            {
                title: "Alfajor",
                techStack: ["React", "Node.js", "PostgreSQL"],
                description: "Personal project and unique digital venture in its niche, developed from scratch with Full-Stack PERN architecture (React, Node.js, PostgreSQL) to create the main online hub for alfajor reviews, ratings, and rankings in Argentina. Demonstrating initiative and product vision, it reached 100+ users and 500+ reviews in its first week.",
                detailedDescription: "Alfajor is a full-stack web application (PERN architecture) for discovering, reviewing, and ranking alfajores, built with a focus on a real product: end-to-end typing, performance focus on data loading, and modern integrations. Currently, the platform has +150 alfajores, +500 reviews, and +100 users, validating its real-world usage and data handling at scale.\n\nIt is developed with React 19, TypeScript, and Tailwind CSS v4 on the frontend (using Vite), utilizing TanStack Query for asynchronous state management, caching, and revalidation. The backend is built with Node.js, Express, and TypeScript, using Prisma ORM over PostgreSQL (Supabase). Additionally, it integrates Google login via Supabase Auth, file storage in Supabase Storage, and transactional emails with Resend. Infrastructure-wise, the frontend is deployed on Vercel and the backend on Render, with the domain managed by Cloudflare (DNS and security).",
                link: { label: "alfajor.com.ar", href: "https://www.alfajor.com.ar/" },
                image: "/projects/alfajor.webp",
                width: 800,
                height: 421,
            },
            {
                title: "Dopartis",
                techStack: ["Next.js", "React", "Node.js", "libSQL", "Tailwind CSS"],
                description: "Football web app to track live scores, fixtures, and standings. Features a community forum, match simulator, and Argentine football head-to-head records. Built with Next.js, external APIs, and a libSQL (SQLite) database.",
                detailedDescription: "Dopartis is a modern football web platform built to provide a fast, clean, and frictionless experience for Argentine football fans. It allows users to follow live scores, standings, relegation averages, and fixtures in real-time through external API integrations.\n\nIt features an interactive community forum backed by a libSQL (Turso/SQLite) database, alongside the most comprehensive Argentine head-to-head records section (spanning both professional and amateur eras) powered by a custom Node.js and Express API. The frontend is engineered with Next.js and React 19, optimized for speed and SEO, and deployed on Vercel.",
                link: { label: "dopartis.com", href: "https://dopartis.com" },
                image: "/projects/dopartis.png",
                width: 1200,
                height: 630,
            },
            {
                title: "Escudle",
                techStack: ["React", "Tailwind CSS", "Vite", "PWA", "Node.js"],
                description: "Interactive football web game inspired by Wordle mechanics. Developed from scratch as a PWA using React, Tailwind CSS, and Vite, featuring an autonomous Node.js web scraping pipeline with over 3,000 club crests.",
                detailedDescription: "Escudle is an interactive daily web game inspired by Wordle mechanics, challenging football enthusiasts to guess a mystery club crest within 6 attempts using visual and league clues across Daily, Infinite, and Practice game modes.\n\nEngineered from scratch as an installable Progressive Web App (PWA) using React, Vite, and Tailwind CSS, it offers responsive, near-instant rendering across devices. To overcome the absence of reliable public football crest APIs, an autonomous web scraping and data aggregation pipeline was built in Node.js, establishing a curated dataset of over 3,000 club badges.",
                link: { label: "escudle.com", href: "https://escudle.com" },
                image: "/projects/escudle.png",
                width: 1200,
                height: 630,
            },
        ],
    },

    es: {
        name: "Leandro Cantero",
        initials: "LC",
        location: "Hurlingham, Buenos Aires",
        locationLink: "https://www.google.com/maps/place/Hurlingham,+Buenos_Aires",
        about: "Desarrollador Full Stack y Consultor Cloud.",
        summary: "Técnico Universitario en Programación con sólidas bases en desarrollo Full-Stack (Java, .NET, PERN) y experiencia práctica en soluciones de Microsoft Azure (certificaciones AZ-900 y DP-900). Enfocado en la implementación de tecnologías Cloud, Data, Low Code e IA, busco un rol donde pueda contribuir al desarrollo de soluciones escalables y eficientes.",
        avatarUrl: "/avatar.png",
        personalWebsiteUrl: "https://leandrocantero.dev",

        contact: {
            email: "lcantero18@gmail.com",
            tel: "+54 11 6354-4453",
            social: [
                { name: "GitHub", url: "https://github.com/leandrocantero" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/leandro-cantero" },
            ],
        },

        education: [
            {
                school: "Universidad Nacional de Hurlingham",
                degree: "Tecnicatura Universitaria en Programación",
                start: "2022",
                end: "2025",
                description: "Carrera de pregrado enfocada en el desarrollo de software, con una base técnica robusta en Programación Orientada a Objetos (POO), Estructuras de Datos y Bases de Datos Relacionales (SQL). El programa incluye especialización en Desarrollo Web y una fuerte formación en Ingeniería de Software y Metodologías Ágiles para la construcción de sistemas de calidad.",
            },
        ],

        certifications: [
            {
                title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
                issuer: "Microsoft",
                date: "Agosto 2025",
                description: "Comprensión fundamental de los servicios centrales, seguridad y modelos de Cloud Computing de Azure.",
                link: "https://learn.microsoft.com/api/credentials/share/es-es/LeandroFC/A0B5A651927C162?sharingId=3091CE62186523F0",
                image: "/Fundamentals.jpg",
            },
            {
                title: "Microsoft Certified: Aspectos básicos de los datos de Azure (DP-900)",
                issuer: "Microsoft",
                date: "Sept 2025",
                description: "Fundamentos de datos relacionales, NoSQL, Big Data y IA en Azure.",
                link: "https://learn.microsoft.com/api/credentials/share/es-es/LeandroFC/1B08B1009A7C9CE7?sharingId=3091CE62186523F0",
                image: "/Data.jpg",
            },
        ],

        work: [
            {
                company: "ReadyMind",
                location: "Remoto",
                title: "Consultor Cloud - Trainee",
                start: "Mayo 2025",
                end: "Sept 2025",
                description: "Implementé soluciones Cloud en Azure, enfocadas en el uso de servicios de datos y Low Code. El entrenamiento culminó con la aprobación de las certificaciones AZ-900 y DP-900.",
            },
            {
                company: "Huenei IT",
                location: "Híbrido, Padua, Buenos Aires",
                title: "Desarrollador .NET",
                start: "Nov 2021",
                end: "Mayo 2022",
                description: "Desarrollé y optimicé una aplicación de escritorio crítica para un distribuidor mayorista, utilizando C# (.NET) y SQL Server. La implementación mejoró la eficiencia de la gestión y distribución de inventario.",
            },
            {
                company: "Alkemy",
                location: "Remoto",
                title: "Desarrollador Java - Trainee",
                start: "Jul 2021",
                end: "Sept 2021",
                description: "Participé en el desarrollo de funcionalidades Back-end para un proyecto Full-Stack, utilizando Java, Spring y MySQL. Trabajé activamente bajo la metodología SCRUM, aplicando control de versiones con Bitbucket y documentando APIs con Postman y Swagger, lo que fortaleció mis habilidades de desarrollo en equipo.",
            },
        ],

        skills: ["React", "Node.js", "JavaScript", "Java", "Spring Boot", "C#", ".NET", "HTML", "CSS", "SQL", "NoSQL", "Azure", "Docker", "Git", "SVN", "IA"],

        languages: [
            { name: "Español", level: "Nativo" },
            { name: "Inglés", level: "B1 (Intermedio)" },
            { name: "Portugués", level: "A2 (Básico)" },
        ],

        projects: [
            {
                title: "Alfajor",
                techStack: ["React", "Node.js", "PostgreSQL"],
                description: "Proyecto personal y emprendimiento digital único en su nicho, desarrollado desde cero con arquitectura Full-Stack PERN (React, Node.js, PostgreSQL) para crear el principal referente en línea para reseñas, calificaciones y rankings de alfajores en Argentina. Demostrando iniciativa y visión de producto, el proyecto ha logrado un impacto inicial de más de 100 usuarios y más de 500 reseñas en la primer semana de lanzamiento.",
                detailedDescription: "Alfajor es una aplicación web full‑stack (arquitectura PERN) para descubrir, reseñar y rankear alfajores, construida con un enfoque de producto real: tipado end‑to‑end, foco en performance en la carga de datos e integraciones modernas. Actualmente la plataforma cuenta con +150 alfajores, +500 reseñas y +100 usuarios, lo que valida su uso real y el manejo de datos a escala.\n\nEstá desarrollada con React 19, TypeScript y Tailwind CSS v4 en el frontend (con Vite), utilizando TanStack Query para manejo de estado asíncrono, caché y revalidación. El backend está construido con Node.js, Express y TypeScript, usando Prisma ORM sobre PostgreSQL (Supabase). Además, integra login con Google mediante Supabase Auth, almacenamiento de archivos en Supabase Storage y envío de emails transaccionales con Resend. A nivel infraestructura, el frontend se despliega en Vercel y el backend en Render, con el dominio administrado en Cloudflare (DNS y seguridad).",
                link: { label: "alfajor.com.ar", href: "https://www.alfajor.com.ar/" },
                image: "/projects/alfajor.webp",
                width: 800,
                height: 421,
            },
            {
                title: "Dopartis",
                techStack: ["Next.js", "React", "Node.js", "libSQL", "Tailwind CSS"],
                description: "Web de fútbol para ver resultados en vivo, fixture, tablas. Incluye un foro, simulador de resultados, historiales del fútbol argentino. Desarrollada con Next Js, datos obtenidos a través de una api externa. El foro tiene una base de datos libSQL (SQLite).",
                detailedDescription: "Dopartis es una plataforma web dedicada al fútbol argentino diseñada para ofrecer una experiencia rápida, limpia y sin fricciones. Permite consultar partidos de hoy, resultados en vivo, tablas de posiciones, promedios y fixtures en tiempo real a través de la integración con una API externa (api-football).\n\nIncluye un foro de debate de la comunidad con base de datos libSQL (Turso/SQLite) y una sección especializada con el historial más completo de enfrentamientos del fútbol argentino (incluyendo la era amateur y profesional) gestionada mediante una API propia construida en Node.js y Express. El frontend está construido con Next.js y React 19, optimizado para alto rendimiento y desplegado en Vercel.",
                link: { label: "dopartis.com", href: "https://dopartis.com" },
                image: "/projects/dopartis.png",
                width: 1200,
                height: 630,
            },
            {
                title: "Escudle",
                techStack: ["React", "Tailwind CSS", "Vite", "PWA", "Node.js"],
                description: "Juego web interactivo, inspirado en mecánicas tipo Wordle pero enfocado en el fútbol. Desarrollado desde cero como una PWA (Progressive Web App) utilizando React JS, TailwindCSS y Vite. Ante la falta de APIs públicas estables, diseñé un sistema autónomo de recolección de datos (Web Scraping con Node.js) para construir una base de más de 3000 escudos.",
                detailedDescription: "Escudle es un juego web interactivo inspirado en la dinámica de Wordle pero ambientado en el mundo del fútbol, donde los usuarios deben adivinar el escudo del club oculto en 6 intentos o menos con diferentes pistas y modos de juego (Diario, Infinito y Práctica).\n\nFue concebido y desarrollado desde cero como una Progressive Web App (PWA) utilizando React, Tailwind CSS y Vite para garantizar una experiencia móvil ágil, instalable y de carga instantánea. Para resolver la carencia de APIs públicas confiables y completas de escudos de fútbol a nivel global, se diseñó e implementó un pipeline autónomo de recolección y curación de datos mediante web scraping con Node.js, conformando una base propietaria de más de 3000 escudos optimizados.",
                link: { label: "escudle.com", href: "https://escudle.com" },
                image: "/projects/escudle.png",
                width: 1200,
                height: 630,
            },
        ],
    },
};

// UI Text translations
export const UI_TEXT = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            projects: "Projects",
            certifications: "Certifications",
            skills: "Skills",
            contact: "Contact",
        },
        hero: {
            scrollIndicator: "Scroll to discover my story",
            viewProjects: "View Projects",
            contactMe: "Contact Me",
            downloadCV: "Download CV",
        },
        sections: {
            about: "About Me",
            experience: "Work Experience",
            projects: "Featured Projects",
            certifications: "Certifications",
            skills: "Technologies & Skills",
            contact: "Let's Connect",
        },
        project: {
            details: "Details",
            visit: "Visit Project",
        }
    },
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            experience: "Experiencia",
            projects: "Proyectos",
            certifications: "Certificaciones",
            skills: "Habilidades",
            contact: "Contacto",
        },
        hero: {
            scrollIndicator: "Scroll para descubrir mi historia",
            viewProjects: "Ver Proyectos",
            contactMe: "Contáctame",
            downloadCV: "Descargar CV",
        },
        sections: {
            about: "Sobre mí",
            experience: "Experiencia Laboral",
            projects: "Proyectos Destacados",
            certifications: "Certificaciones",
            skills: "Tecnologías y Habilidades",
            contact: "Conectemos",
        },
        project: {
            details: "Detalles",
            visit: "Visitar Proyecto",
        }
    },
};
