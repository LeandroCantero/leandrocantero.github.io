export const RESUME_DATA = {
    en: {
        name: "Leandro Cantero",
        initials: "LC",
        location: "Hurlingham, Buenos Aires",
        locationLink: "https://www.google.com/maps/place/Hurlingham,+Buenos+Aires",
        about: "Full Stack Developer & Cloud Consultant.",
        summary: "Programming techinician with solid foundations in Full-Stack development (Java, .NET, PERN) and practical experience in Microsoft Azure solutions. Focused on implementing Cloud, Data, Low Code, and AI technologies. Seeking a role where I can contribute to the development of scalable and efficient solutions.",
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
                description: "Undergraduate degree with a robust technical foundation in Object-Oriented Programming (OOP), Data Structures, and Relational Databases (SQL). Specialization in Web Development and Agile Methodologies.",
            },
        ],

        certifications: [
            {
                title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
                issuer: "Microsoft",
                date: "Sep 2025",
                description: "Foundations of relational data, NoSQL, Big Data, and AI in Azure.",
                link: "https://learn.microsoft.com/api/credentials/share/es-es/LeandroFC/1B08B1009A7C9CE7?sharingId=3091CE62186523F0",
            },
            {
                title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
                issuer: "Microsoft",
                date: "Aug 2025",
                description: "Fundamental understanding of core services, security, and Cloud Computing models in Azure.",
                link: "https://learn.microsoft.com/api/credentials/share/es-es/LeandroFC/A0B5A651927C162?sharingId=3091CE62186523F0",
            },
        ],

        work: [
            {
                company: "ReadyMind",
                location: "Remote",
                title: "Cloud Consultant - Trainee",
                start: "May 2025",
                end: "Sep 2025",
                description: "Implemented Cloud solutions in Azure, focused on Data services and Low Code. Completed AZ-900 and DP-900 certifications.",
            },
            {
                company: "Huenei IT",
                location: "Hybrid, Padua, Buenos Aires",
                title: ".NET Developer",
                start: "Nov 2021",
                end: "May 2022",
                description: "Developed and optimized a critical desktop application for a wholesale distributor using C# (.NET) and SQL Server. Improved inventory management efficiency.",
            },
            {
                company: "Alkemy",
                location: "Remote",
                title: "Java Developer - Trainee",
                start: "Jul 2021",
                end: "Sep 2021",
                description: "Participated in backend development for a Full-Stack project using Java, Spring, and MySQL. Worked with SCRUM, Bitbucket, Postman, and Swagger.",
            },
        ],

        skills: ["React", "Node.js", "Java", "Spring Boot", "C#", ".NET", "SQL", "NoSQL", "Azure", "Docker", "Git"],

        languages: [
            { name: "Spanish", level: "Native" },
            { name: "English", level: "B1 (Intermediate)" },
        ],

        projects: [
            {
                title: "Alfajor",
                techStack: ["React", "Node.js", "PostgreSQL"],
                description: "Full-Stack PERN project to create an online reference for reviews, ratings, and rankings of alfajores in Argentina. Achieved 100+ users and 500+ reviews in the first week.",
                detailedDescription: "Alfajor is a full-stack web application (PERN architecture) for discovering, reviewing, and ranking alfajores, built with a focus on a real product: end-to-end typing, performance focus on data loading, and modern integrations. Currently, the platform has +150 alfajores, +500 reviews, and +100 users, validating its real-world usage and data handling at scale.\n\nIt is developed with React 19, TypeScript, and Tailwind CSS v4 on the frontend (using Vite), utilizing TanStack Query for asynchronous state management, caching, and revalidation. The backend is built with Node.js, Express, and TypeScript, using Prisma ORM over PostgreSQL (Supabase). Additionally, it integrates Google login via Supabase Auth, file storage in Supabase Storage, and transactional emails with Resend. Infrastructure-wise, the frontend is deployed on Vercel and the backend on Render, with the domain managed by Cloudflare (DNS and security).",
                link: { label: "alfajor.com.ar", href: "https://www.alfajor.com.ar/" },
                image: "/projects/alfajor.webp",
                width: 800,
                height: 800,
            },
            {
                title: "Pan y Queso",
                techStack: ["React", "Algorithms"],
                description: "Web application to automatically generate balanced soccer teams ensuring equitable skill distribution.",
                detailedDescription: "PanYQueso is a web application to automatically build balanced soccer teams based on the skill and position of each player. It is designed for a real and daily use case of organizing matches: the user loads the list of players, defines their level and role on the field, and the app generates a balanced team setup that seeks to minimize the differences between teams.\n\nIt is developed with React 19 + TypeScript and built with Vite, achieving a fast and reactive interface to manipulate lists and recalculate the balance in real time. For the user experience, it incorporates React Hot Toast (immediate feedback on actions such as generating teams, validating data or errors) and Lucide React (clear and consistent iconography). A key differentiator is the 'shareable output' capability: using html2canvas and html-to-image, the app allows exporting the final setup as an image, ideal for sending it to the group (WhatsApp/Telegram) with a clean format, without manual screenshots or loss of information.",
                link: { label: "pan-y-queso.netlify.app", href: "https://pan-y-queso.netlify.app/" },
                image: "/projects/panyqueso.webp",
                width: 1024,
                height: 396,
            },
            {
                title: "StudyApp-AZ900",
                techStack: ["Next.js", "AI", "Azure"],
                description: "Interactive study platform for Microsoft Azure Fundamentals certification with 485 questions and 4 practice modes. Content processed using ChatGPT 4o.",
                detailedDescription: "StudyApp AZ-900 is an interactive web application designed to help prepare for the Microsoft Azure Fundamentals (AZ-900) certification. It allows practicing with a bank of 485 questions and studying through different modes, such as exam simulation (random questions and final result), practice (full walkthrough with answers), flashcards for quick review, and a locally saved attempt history to track progress.\n\nThe project is developed as a SPA with React (JavaScript) and built with Vite, featuring CSS styling and quality control via ESLint. Results and history are stored in the browser using localStorage, allowing the app to be used without a backend. Additionally, the question content is consumed from a JSON file included in the repository.",
                link: { label: "studyapp-az900.vercel.app", href: "https://studyapp-az900.vercel.app/" },
                image: "/projects/studyapp.png",
                width: 1024,
                height: 316,
            },
        ],
    },

    es: {
        name: "Leandro Cantero",
        initials: "LC",
        location: "Hurlingham, Buenos Aires",
        locationLink: "https://www.google.com/maps/place/Hurlingham,+Buenos_Aires",
        about: "Desarrollador Full Stack y Consultor Cloud.",
        summary: "Técnico Universitario en Programación con sólidas bases en desarrollo Full-Stack (Java, .NET, PERN) y experiencia práctica en soluciones Azure. Enfocado en la implementación de tecnologías Cloud, Data, Low Code e IA. Busco un rol donde pueda contribuir al desarrollo de soluciones escalables y eficientes.",
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
                description: "Carrera de pregrado enfocada en el desarrollo de software, con una base técnica robusta en Programación Orientada a Objetos (POO), Estructuras de Datos y Bases de Datos Relacionales (SQL). Especialización en Desarrollo Web y Metodologías Ágiles.",
            },
        ],

        certifications: [
            {
                title: "Microsoft Certified: Aspectos básicos de los datos de Azure (DP-900)",
                issuer: "Microsoft",
                date: "Sept 2025",
                description: "Fundamentos de datos relacionales, NoSQL, Big Data y IA en Azure.",
                link: "https://learn.microsoft.com/api/credentials/share/es-es/LeandroFC/1B08B1009A7C9CE7?sharingId=3091CE62186523F0",
            },
            {
                title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
                issuer: "Microsoft",
                date: "Agosto 2025",
                description: "Comprensión fundamental de los servicios centrales, seguridad y modelos de Cloud Computing de Azure.",
                link: "https://learn.microsoft.com/api/credentials/share/es-es/LeandroFC/A0B5A651927C162?sharingId=3091CE62186523F0",
            },
        ],

        work: [
            {
                company: "ReadyMind",
                location: "Remoto",
                title: "Consultor Cloud - Trainee",
                start: "Mayo 2025",
                end: "Sept 2025",
                description: "Implementación de soluciones Cloud en Azure, enfocadas en servicios de datos y Low Code. Certificaciones AZ-900 y DP-900 obtenidas.",
            },
            {
                company: "Huenei IT",
                location: "Híbrido, Padua, Buenos Aires",
                title: "Desarrollador .NET",
                start: "Nov 2021",
                end: "Mayo 2022",
                description: "Desarrollo y optimización de aplicación de escritorio crítica para distribuidor mayorista usando C# (.NET) y SQL Server. Gestión de inventario optimizada.",
            },
            {
                company: "Alkemy",
                location: "Remoto",
                title: "Desarrollador Java - Trainee",
                start: "Jul 2021",
                end: "Sept 2021",
                description: "Desarrollo de funcionalidades Back-end para proyecto Full-Stack con Java, Spring y MySQL. Metodología SCRUM y control de versiones con Bitbucket.",
            },
        ],

        skills: ["React", "Node.js", "Java", "Spring Boot", "C#", ".NET", "SQL", "NoSQL", "Azure", "Docker", "Git"],

        languages: [
            { name: "Español", level: "Nativo" },
            { name: "Inglés", level: "B1 (Intermedio)" },
        ],

        projects: [
            {
                title: "Alfajor",
                techStack: ["React", "Node.js", "PostgreSQL"],
                description: "Proyecto Full-Stack PERN para crear un referente en línea para reseñas, calificaciones y rankings de alfajores en Argentina. Logró un impacto inicial de más de 100 usuarios.",
                detailedDescription: "Alfajor es una aplicación web full‑stack (arquitectura PERN) para descubrir, reseñar y rankear alfajores, construida con un enfoque de producto real: tipado end‑to‑end, foco en performance en la carga de datos e integraciones modernas. Actualmente la plataforma cuenta con +150 alfajores, +500 reseñas y +100 usuarios, lo que valida su uso real y el manejo de datos a escala.\n\nEstá desarrollada con React 19, TypeScript y Tailwind CSS v4 en el frontend (con Vite), utilizando TanStack Query para manejo de estado asíncrono, caché y revalidación. El backend está construido con Node.js, Express y TypeScript, usando Prisma ORM sobre PostgreSQL (Supabase). Además, integra login con Google mediante Supabase Auth, almacenamiento de archivos en Supabase Storage y envío de emails transaccionales con Resend. A nivel infraestructura, el frontend se despliega en Vercel y el backend en Render, con el dominio administrado en Cloudflare (DNS y seguridad).",
                link: { label: "alfajor.com.ar", href: "https://www.alfajor.com.ar/" },
                image: "/projects/alfajor.webp",
                width: 800,
                height: 421,
            },
            {
                title: "Pan y Queso",
                techStack: ["React", "Algorithms"],
                description: "Aplicación web para generar equipos de fútbol equilibrados de forma automática. Implementación de algoritmos de balanceo.",
                detailedDescription: "PanYQueso es una aplicación web para armar equipos de fútbol balanceados automáticamente a partir de la habilidad y la posición de cada jugador. Está pensada para un caso real y cotidiano de organización de partidos: el usuario carga la lista de jugadores, define su nivel y rol en la cancha, y la app genera un armado equilibrado que busca reducir al mínimo las diferencias entre equipos.\n\nEstá desarrollada con React 19 + TypeScript y construida con Vite, logrando una interfaz rápida y reactiva para manipular listas y recalcular el balanceo en tiempo real. Para la experiencia de usuario incorpora React Hot Toast (feedback inmediato ante acciones como generar equipos, validar datos o errores) y Lucide React (iconografía clara y consistente). Un diferencial clave es la capacidad de “salida compartible”: mediante html2canvas y html-to-image, la app permite exportar el armado final como imagen, ideal para enviarlo al grupo (WhatsApp/Telegram) con un formato limpio, sin capturas manuales ni pérdida de información.",
                link: { label: "pan-y-queso.netlify.app", href: "https://pan-y-queso.netlify.app/" },
                image: "/projects/panyqueso.webp",
                width: 1024,
                height: 396,
            },
            {
                title: "StudyApp-AZ900",
                techStack: ["Next.js", "AI", "Azure"],
                description: "Plataforma interactiva de estudio para la certificación Microsoft Azure Fundamentals (AZ-900), con un set de 485 preguntas. Contenido procesado con ChatGPT 4o.",
                detailedDescription: "StudyApp AZ-900 es una aplicación web interactiva pensada para ayudar a prepararse para la certificación Microsoft Azure Fundamentals (AZ-900). Permite practicar con un banco de 485 preguntas y estudiar mediante distintos modos, como simulacro de examen (preguntas aleatorias y resultado final), práctica (recorrido completo con respuestas), flashcards para repaso rápido y un historial de intentos guardado localmente para seguir el progreso.\n\nEl proyecto está desarrollado como una SPA con React (JavaScript) y construido con Vite, con estilos en CSS y control de calidad mediante ESLint. Los resultados y el historial se almacenan en el navegador usando localStorage, lo que permite usar la app sin backend. Además, el contenido de preguntas se consume desde un archivo JSON incluido en el repositorio.",
                link: { label: "studyapp-az900.vercel.app", href: "https://studyapp-az900.vercel.app/" },
                image: "/projects/studyapp.png",
                width: 1024,
                height: 316,
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
