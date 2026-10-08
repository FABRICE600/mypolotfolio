export const portfolio = {
  name: 'Alex Morgan',
  preferredName: 'Alex',
  title: 'Full-Stack Developer & UI Engineer',
  tagline: 'I build delightful web experiences that are fast, accessible, and beautiful.',
  location: 'San Francisco, CA',
  email: 'umuhirefabrice500@gmail.com',
  phone: '',
  availability: 'Available for freelance & full-time',
  about: `I'm a full-stack developer with 5+ years of experience crafting web applications that people love to use. I specialize in React, TypeScript, and Node.js, with a strong focus on performance, accessibility, and clean design. When I'm not coding, you'll find me contributing to open source, mentoring junior developers, or exploring the latest in AI tooling.`,
  aboutLong: `My journey started with a curiosity for how things work on the web — that curiosity turned into a career. Over the years, I've worked with startups and established companies to ship products that serve millions of users. I believe great software is invisible: it just works, feels intuitive, and gets out of your way.\n\nI'm passionate about building things that matter — tools that make people's lives easier, apps that bring joy through thoughtful design, and systems that scale gracefully. I'm always learning, always shipping, and always striving to be better than yesterday.`,
  whatMakesDifferent: 'I bridge the gap between design and engineering — I can take a product from concept to launch, owning both the pixel-perfect frontend and the robust backend.',
  resumeUrl: '',
  social: {
    github: 'https://github.com/FABRICE600/smartbusinesslavableapp-69101efe',
    linkedin: '',
    twitter: '',
    instagram: '',
    youtube: '',
    devto: 'https://dev.to/alexmorgan',
  },
};

export const skills = {
  frontend: [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3 / Tailwind', level: 92 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 85 },
    { name: 'Vue.js', level: 70 },
  ],
  backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Express', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'REST APIs', level: 90 },
    { name: 'GraphQL', level: 80 },
  ],
  database: [
    { name: 'PostgreSQL', level: 88 },
    { name: 'MongoDB', level: 80 },
    { name: 'Firebase', level: 82 },
    { name: 'Supabase', level: 90 },
    { name: 'Redis', level: 70 },
  ],
  tools: [
    { name: 'Git / GitHub', level: 92 },
    { name: 'Docker', level: 78 },
    { name: 'Figma', level: 80 },
    { name: 'AWS', level: 72 },
    { name: 'CI/CD', level: 82 },
  ],
  other: [
    { name: 'UI/UX Design', level: 85 },
    { name: 'Accessibility', level: 88 },
    { name: 'Testing', level: 82 },
    { name: 'Agile / Scrum', level: 80 },
  ],
};

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  github: string;
  liveDemo: string;
  image: string;
  category: string;
  date: string;
  challenge: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: 'taskflow',
    name: 'TaskFlow',
    description: 'A collaborative project management tool with real-time updates and kanban boards.',
    longDescription: 'TaskFlow is a full-featured project management application that helps teams stay organized and productive. With real-time collaboration, drag-and-drop kanban boards, and intelligent task assignment, it streamlines workflows for teams of any size.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'Tailwind CSS'],
    features: ['Real-time collaboration', 'Drag-and-drop kanban boards', 'Task assignment & comments', 'Activity timeline', 'Dark mode', 'Responsive design'],
    github: 'https://github.com/alexmorgan/taskflow',
    liveDemo: 'https://taskflow.app',
    image: 'taskflow',
    category: 'Web App',
    date: '2026-03',
    challenge: 'Building real-time sync across multiple users while maintaining performance with large boards.',
    solution: 'Implemented optimistic UI updates with WebSocket conflict resolution and debounced server sync.',
  },
  {
    id: 'devboard',
    name: 'DevBoard',
    description: 'A developer dashboard aggregating GitHub stats, commit graphs, and deployment metrics.',
    longDescription: 'DevBoard brings all your developer metrics into one beautiful dashboard. It pulls data from GitHub, Vercel, and other platforms to give you a holistic view of your development activity, deployment frequency, and code contributions.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'GitHub API', 'Vercel API', 'Recharts'],
    features: ['GitHub contribution graph', 'Deployment metrics', 'Commit analytics', 'Custom widgets', 'Export reports', 'OAuth integration'],
    github: 'https://github.com/alexmorgan/devboard',
    liveDemo: 'https://devboard.alexmorgan.dev',
    image: 'devboard',
    category: 'Dashboard',
    date: '2026-01',
    challenge: 'Aggregating data from multiple APIs with different rate limits and response formats.',
    solution: 'Built a unified caching layer with background refresh jobs and graceful fallbacks for rate-limited endpoints.',
  },
  {
    id: 'snippetvault',
    name: 'SnippetVault',
    description: 'A code snippet manager with syntax highlighting, tags, and fuzzy search.',
    longDescription: 'SnippetVault is a developer-focused tool for saving, organizing, and sharing code snippets. With support for 50+ languages, intelligent search, and team sharing, it helps developers avoid reinventing the wheel.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Prism.js', 'Fuse.js'],
    features: ['Syntax highlighting for 50+ languages', 'Fuzzy search across snippets', 'Tag-based organization', 'Team sharing & permissions', 'Copy-to-clipboard', 'Markdown support'],
    github: 'https://github.com/alexmorgan/snippetvault',
    liveDemo: 'https://snippetvault.app',
    image: 'snippetvault',
    category: 'Developer Tool',
    date: '2025-10',
    challenge: 'Implementing fast search across thousands of snippets with varying formats.',
    solution: 'Used Fuse.js for client-side fuzzy matching with pre-computed index keys for sub-100ms results.',
  },
  {
    id: 'weatherlite',
    name: 'WeatherLite',
    description: 'A minimalist weather app with location-based forecasts and beautiful data visualizations.',
    longDescription: 'WeatherLite is a clean, fast weather application that focuses on delivering essential information beautifully. It features hourly and 7-day forecasts, interactive temperature graphs, and location-based alerts.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Canvas', 'Geolocation API'],
    features: ['Hourly & 7-day forecasts', 'Interactive temperature graph', 'Location-based alerts', 'Severe weather notifications', 'Animated weather icons', 'Offline cache'],
    github: 'https://github.com/alexmorgan/weatherlite',
    liveDemo: 'https://weatherlite.alexmorgan.dev',
    image: 'weatherlite',
    category: 'Mobile/Web',
    date: '2025-08',
    challenge: 'Rendering smooth animated graphs on mobile devices without jank.',
    solution: 'Used requestAnimationFrame with Canvas rendering and device-pixel-ratio awareness for crisp, smooth visuals.',
  },
  {
    id: 'learnsphere',
    name: 'LearnSphere',
    description: 'An interactive learning platform with video courses, quizzes, and progress tracking.',
    longDescription: 'LearnSphere is an e-learning platform designed for modern web developers. It offers interactive coding exercises, video courses with timestamps, progress tracking, and community discussions — all in one place.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Mux', 'Tailwind CSS'],
    features: ['Interactive coding exercises', 'Video courses with chapters', 'Progress tracking & certificates', 'Discussion forums', 'Stripe payments', 'Admin dashboard'],
    github: 'https://github.com/alexmorgan/learnsphere',
    liveDemo: 'https://learnsphere.app',
    image: 'learnsphere',
    category: 'Web App',
    date: '2025-05',
    challenge: 'Building a reliable in-browser code execution sandbox for exercises.',
    solution: 'Leveraged Web Workers with iframe isolation to safely execute user code without blocking the main thread.',
  },
  {
    id: 'pulseanalytics',
    name: 'Pulse Analytics',
    description: 'A privacy-first web analytics platform with real-time dashboards and zero cookies.',
    longDescription: 'Pulse Analytics is a privacy-conscious alternative to traditional web analytics. It tracks page views, user journeys, and conversion funnels without cookies or personal data collection — fully GDPR compliant by design.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'ClickHouse', 'D3.js'],
    features: ['Real-time visitor tracking', 'Conversion funnels', 'Heat maps', 'Privacy-first (no cookies)', 'GDPR compliant', 'Custom dashboards'],
    github: 'https://github.com/alexmorgan/pulse-analytics',
    liveDemo: 'https://pulse.alexmorgan.dev',
    image: 'pulse',
    category: 'Analytics',
    date: '2025-02',
    challenge: 'Processing high-volume real-time events without impacting page load performance.',
    solution: 'Built a lightweight tracking script using the Beacon API and batched events server-side with ClickHouse for sub-second queries.',
  },
];

export const experience = [
  {
    company: 'TechFlow Inc.',
    position: 'Senior Frontend Engineer',
    location: 'San Francisco, CA (Remote)',
    startDate: '2024',
    endDate: 'Present',
    responsibilities: [
      'Lead frontend architecture for a SaaS platform serving 200K+ users',
      'Mentor 4 junior developers and conduct code reviews',
      'Reduced bundle size by 40% through code splitting and tree shaking',
      'Established design system with 50+ reusable components',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
  },
  {
    company: 'StartupHub',
    position: 'Full-Stack Developer',
    location: 'San Francisco, CA',
    startDate: '2022',
    endDate: '2024',
    responsibilities: [
      'Built and maintained 3 client products from scratch',
      'Designed REST APIs and PostgreSQL schemas for multi-tenant applications',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Collaborated with designers to ship pixel-perfect UIs',
    ],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    company: 'CodeCraft Studio',
    position: 'Frontend Developer',
    location: 'Remote',
    startDate: '2021',
    endDate: '2022',
    responsibilities: [
      'Developed responsive landing pages and marketing sites',
      'Improved Lighthouse scores from 60 to 95+ across client projects',
      'Created reusable component library used across 10+ projects',
      'Integrated analytics and A/B testing tools',
    ],
    technologies: ['JavaScript', 'React', 'SCSS', 'Webpack', 'Figma'],
  },
];

export const education = [
  {
    institution: 'University of California, Berkeley',
    degree: 'B.S. in Computer Science',
    field: 'Computer Science',
    startYear: '2017',
    endYear: '2021',
    location: 'Berkeley, CA',
    achievements: ['Dean\'s List (3 semesters)', 'ACM Programming Club Member', 'Hackathon Winner — Cal Hacks 2020'],
    courses: ['Data Structures & Algorithms', 'Web Application Development', 'Database Systems', 'Human-Computer Interaction', 'Software Engineering'],
  },
];

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', org: 'Amazon Web Services', date: '2024', url: '' },
  { name: 'Professional Scrum Master I (PSM I)', org: 'Scrum.org', date: '2023', url: '' },
  { name: 'Meta Front-End Developer Professional Certificate', org: 'Meta / Coursera', date: '2022', url: '' },
  { name: 'Google UX Design Professional Certificate', org: 'Google / Coursera', date: '2022', url: '' },
];

export const achievements = [
  { title: 'Cal Hacks 2020 Winner', org: 'UC Berkeley', date: '2020', description: 'Won 1st place out of 300+ teams for building an AI-powered study companion app.' },
  { title: 'Open Source Contributor', org: 'GitHub', date: '2023', description: 'Contributed to 5+ open-source projects with 200+ stars combined on personal repos.' },
  { title: 'Tech Speaker', org: 'React SF Meetup', date: '2024', description: 'Presented "Building Accessible React Apps" to 150+ developers at the SF React meetup.' },
  { title: 'Dean\'s List', org: 'UC Berkeley', date: '2019', description: 'Achieved Dean\'s List for 3 consecutive semesters with GPA above 3.8.' },
];

export const testimonials = [
  {
    name: 'Sarah Chen',
    position: 'Product Manager',
    company: 'TechFlow Inc.',
    quote: 'Alex is the rare engineer who cares as much about the user experience as the code quality. He elevated our entire frontend team.',
  },
  {
    name: 'Marcus Johnson',
    position: 'CTO',
    company: 'StartupHub',
    quote: 'One of the most reliable developers I\'ve worked with. Alex shipped features faster than anyone on the team without sacrificing quality.',
  },
  {
    name: 'Emily Rodriguez',
    position: 'UX Designer',
    company: 'CodeCraft Studio',
    quote: 'Working with Alex was a designer\'s dream. He turned Figma files into pixel-perfect, accessible components every single time.',
  },
];
