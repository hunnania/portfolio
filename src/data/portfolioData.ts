// Projects data
export const projectsData = [
  {
    code: "SE" as const,
    title: "PantauTular",
    role: "Full-stack Developer",
    technologies: ["Next.js", "Django", "PostgreSQL", "GitHub", "Sonarcloud", "Sentry", "Postman", "Draw.io", "Notion"],
    description: "Developed infectious disease surveillance web application for BRIN to monitor disease outbreaks across Indonesia. Built full-stack solution using Next.js frontend and Django REST API backend with PostgreSQL database.",
    imageUrl: "/pantautular.png",
    demoLink: "https://pantautular.netlify.app/",
    presentationLink: "https://www.canva.com/design/DAGnt-Rkz2g/2YL8wl9lOVSjXikxewSioQ/view?utm_content=DAGnt-Rkz2g&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb742f6d985",
  },
  {
    code: "SE" as const,
    title: "BrewForce Attack",
    role: "Full-stack Developer",
    technologies: ["Next.js", "Spring Boot", "Docker", "Kubernetes", "GitLab", "Postman", "Draw.io", "Burp Suite"],
    description: "Built security-focused microservices web application following OWASP Top 10 guidelines in 5-member team. Developed Next.js frontend and Spring Boot backend with separated authentication service architecture.",
    imageUrl: "/brewforce.png",
    demoLink: "https://kelompok-7-brewforce-fe.pkpl.cs.ui.ac.id/",
  },
  {
    code: "SE" as const,
    title: "IAST Connect",
    role: "Full-stack Developer",
    technologies: ["Next.js", "Django", "GitHub", "Figma"],
    description: "Delivered alumni networking platform for Ikatan Alumni Sang Timur client in 4-member agile team. Built responsive web application using Next.js frontend and Django backend with intuitive UI/UX design.",
    imageUrl: "/iast.png",
    repositoryLink: "https://github.com/orgs/ikatanalumnisangtimur/repositories",
  },
  {
    code: "SE" as const,
    title: "Marmut Music",
    role: "Full-stack Developer",
    technologies: ["Django", "HTML", "CSS", "Draw.io", "Supabase"],
    description: "Collaborated in 4-member development team to deliver a full-stack music streaming application. Designed comprehensive database architecture using EER modeling and implemented relational database through ER-to-Relational mapping.",
    imageUrl: "/marmut.png",
    repositoryLink: "https://github.com/BasHidup/marmut",
  },
  {
    code: "SE" as const,
    title: "UlasBuku",
    role: "Full-stack Developer",
    technologies: ["Django", "HTML", "CSS", "Flutter", "GitHub"],
    description: "Developed cross-platform book review application with web and mobile interfaces in 6-member team. Built Django REST API backend with unified authentication serving both web and Flutter applications.",
    imageUrl: "/ulasbuku.png",
    repositoryLink: "https://github.com/PBP-B07",
    presentationLink: "https://www.canva.com/design/DAGrevqwGHI/cgeKdbxqxL4ng0csH-RI6w/view?utm_content=DAGrevqwGHI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd11ada7e62",
  },
  {
    code: "DS" as const,
    title: "Lodging Reservation Analytics",
    role: "Data Scientist",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Google Colab"],
    description: "Collaborated in 3-member data science team to deliver comprehensive analytics solution for hospitality industry. Developed ML classification model (F1: 0.84) for booking cancellation prediction and regression model for pricing optimization.",
    imageUrl: "/lodging.png",
    presentationLink: "https://www.canva.com/design/DAGDMwW1kPk/o4cYmzHqqxIJg82Ep1J82w/edit?utm_content=DAGDMwW1kPk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    sourceCodeLink: "https://colab.research.google.com/drive/1B8z6nRz9LCRdaxFhry_et5YJwJoRbVr3#scrollTo=XlxBJ4ZndxVV"
  }
];

// Experiences data
export const experiencesData = [
  {
    title: "Database Teaching Assistant",
    organization: "Faculty of Computer Science, University of Indonesia",
    period: "January 2025 - June 2025",
    description: "Collaborated with Database lecturers and teaching assistant team to develop comprehensive assessment materials including quizzes, tutorials, and group projects aligned with academic standards.",
    achievements: [
      "Evaluated and provided constructive feedback on assignments for 100+ students",
      "Delivered academic support through responsive consultation on coursework",
      "Contributed to improved learning outcomes through quality assessment"
    ],
    type: "teaching" as const
  },
  {
    title: "Discrete Mathematics 1 Teaching Assistant",
    organization: "Faculty of Computer Science, University of Indonesia",
    period: "August 2024 - January 2025",
    description: "Created comprehensive assessment materials and grading rubrics in collaboration with faculty team.",
    achievements: [
      "Evaluated 50+ student assignments with constructive feedback",
      "Enhanced mathematical reasoning skills through targeted guidance",
      "Facilitated exam preparation through structured review sessions"
    ],
    type: "teaching" as const
  },
  {
    title: "Discrete Mathematics 2 Teaching Assistant",
    organization: "Faculty of Computer Science, University of Indonesia",
    period: "January 2024 - August 2024",
    description: "Developed individual assignments and answer keys in collaboration with teaching team to maintain academic rigor.",
    achievements: [
      "Assessed 50+ student submissions with detailed feedback",
      "Supported academic progress and comprehension through guidance",
      "Conducted exam preparation sessions for midterms and finals"
    ],
    type: "teaching" as const
  },
  {
    title: "Internal Control Staff",
    organization: "Forum Ukhuwah dan Kajian Islam Fasilkom UI",
    period: "January 2025 - Present",
    description: "Coordinated bidding process (fit and proper test) for Executive Board positions and SIWAK NG committee, ensuring transparent candidate selection.",
    achievements: [
      "Managed stakeholder communication between bidders and panelists",
      "Served as MC and timekeeper during evaluation sessions",
      "Ensured objective selection process through procedural oversight"
    ],
    type: "organizational" as const
  },
  {
    title: "Human Resource Development Staff",
    organization: "Forum Ukhuwah dan Kajian Islam Fasilkom UI",
    period: "August 2023 - January 2024",
    description: "Executed human resource development programs to enhance organizational capacity and member engagement.",
    achievements: [
      "Led \"Remember Your Friend\" initiative improving cross-functional collaboration",
      "Enhanced member networking through targeted activities",
      "Served as liaison between HR Development and IT Force division"
    ],
    type: "organizational" as const
  }
];
