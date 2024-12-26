import {
  FPT_logo_2010,
  aws,
  contact,
  css,
  firebase,
  git,
  github,
  html,
  images,
  javascript,
  linkedin,
  nextjs,
  nodejs,
  openknect_logo,
  pricewise,
  python,
  react,
  sass,
  snapgram,
  tailwindcss,
  tensorflow,
  summiz,
  Nexus,
  superstars
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: images,
    name: "Flutter",
    type: "Frontend",
  },
  {
    imageUrl: firebase,
    name: "Firebase",
    type: "Cloud Service",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "Cloud Service",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Programming Language",
  },
  {
    imageUrl: tensorflow,
    name: "TensorFlow",
    type: "Machine Learning",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Backend Developer Intern",
    company_name: "FPT Corporation",
    icon: FPT_logo_2010,
    iconBg: "#DFCEB6E0",
    date: "May 2022 - August 2022",
    points: [
      "Developed cloud-based API service using Domain-Driven Design (DDD), .NET 6, ASP.NET Core MVC, and MediatR for new product feature, resulting in 35% faster development cycle.", 
      "Implemented Ocelot API Gateway for enhanced code maintainability and performance. Modularized HTTP requests/responses and handled API calls asynchronously, achieving 15% reduction in API latency.",
      "Optimized micro-service error dispatch system by implementing and customizing Ocelot API Gateway's Exception Handling Service. Increased code coverage by 22% and reduced error resolution time by 10%."
    ],
  },
  {
    title: "Full-Stack Software Engineer Intern", 
    company_name: "OpenKnect",
    icon: openknect_logo,
    iconBg: "#D9F8FC",
    date: "May 2023 - August 2024", 
    points: [
      "Designed and implemented scalable backend system with Firebase Cloud Firestore and Firebase Storage. Achieved 25% reduction in database query response times and ensured 99.99% uptime for CRUD operations.",
      "Implemented security measures including Firebase Authentication, Firebase Authorization, and Identity Vault. Ensured 99.94% uptime and zero security breaches.",
      "Developed and tested 30% of application UI with Flutter and Dart. Translated Figma designs into functional UI, improving user engagement by 15% through enhanced responsiveness.",
      "Modularized codebase, reducing code redundancy by 20% and improving code maintainability by 20 points (measured by code complexity metrics).", 
      "Developed and published open-source library (3,000+ lines of code) in Flutter/Dart. Increased code reusability by 40% and reduced new feature development time by 25%." 
    ],
  },
  {
    title: "Software Engineer Intern", 
    company_name: "Superstars", 
    icon: superstars,  
    iconBg: "#ffffff", 
    date: "May 2025 - Aug 2025",
    points: [
      "Contribute to mobile application development using Flutter framework. Gain expertise in Flutter design and workflow.",
      "Collaborate with engineering team to learn and implement technology stack and development strategies for mobile application development.",
      "Develop front-end of mobile application using Dart, Angular, HTML, CSS, JavaScript, and relevant frameworks.",
      "Integrate front-end with backend using Postman API for seamless data flow and API testing.",
      "Participate in weekly sprint meetings to assess progress, discuss product strategy, and contribute to agile development process."
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/NamHaiBui",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/nam-hai-bui/",
  },
];

export const projects = [
  {
    iconUrl: Nexus,
    theme: "btn-back-red",
    name: "Phone E-commerce Website", 
    description:
      "Engineered a full-stack e-commerce platform with a micro-services architecture. Leveraged Ocelot API Gateway for seamless communication and an event-driven protocol for real-time responsiveness. Strategically selected databases for each microservice, optimizing storage and retrieval for a 40% reduction in average response time. Streamlined the single-page application user flow, achieving a 35% improvement in page load speed.",
    link: "https://github.com/NamHaiBui/MicroServices",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-green",
    name: "Frienance Application", 
    description:
      "Developed a cross-platform application leveraging the strong on-machine processing power of modern machines to allow for accurate offline processing and utilizing the power of Gemini to both improve the financial database and provide custom financial insights. Engineered a sophisticated data manipulation system in Dart, incorporating image processing techniques inspired by NumPy and Python's Image Library. Implemented a novel OCR image parsing solution using Google ML Kit and Gemini Flash LLM, achieving a baseline accuracy of 90% and continuously improving through database expansion. Leveraged Gemini Flash LLM to deliver personalized spending analysis, identify spending patterns, and facilitates seamless receipt splitting among friends.",
    link: "https://github.com/NamHaiBui/my-money",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "Hand Gesture Recognizer AI",
    description:
      "Built a hand computer vision application utilizing the Convex Hull algorithm to dynamically and actively track hand gestures through a video or live stream.",
    link: "https://github.com/NamHaiBui/Finger-Counting",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-pink",
    name: "Evolution Algorithm Illustration",
    description:
      "Built a website to help visualize and understand the Evolution Algorithm in Artificial Intelligence.",
    link: "https://github.com/NamHaiBui/5-Lane-Evolution-AI-Auto-Driving-",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/NamHaiBui/test_project_insta_clone",
  }, 
  {
    iconUrl: "your_portfolio_icon", // Replace with the actual icon variable
    theme: "btn-back-purple", 
    name: "Full-Stack Personal Portfolio", 
    description:
      "Demonstrated expertise in full-stack web development by building a portfolio website from the ground up, integrating modern front-end and backend technologies. Successfully leveraged 3D graphics and animation to create a unique and memorable online presence.", 
    link: "your_portfolio_website_link", // Replace with the actual link
  },
];