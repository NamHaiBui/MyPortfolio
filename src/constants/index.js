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
      "Created a cloud API service for a new product feature that used Domain Driven Design and .NET 6, ASP.NET Core MVC, MediatR",
      "Implemented Ocelot API Gateway's authentication through Azure Active Directory, improved code's maintainability by modularizing HTTP requests and responses, and improved code's performance by handling API Gateway's API calls asynchronously.",
      "Improved the performance of a micro-service error dispatch system by implementing and customizing Ocelot API Gateway' Exception Handling Service resulting in a 22% increase in code coverage.",
    ],
  },
  {
    title: "Full stack Software Developer",
    company_name: "OpenKnect",
    icon: openknect_logo,
    iconBg: "#D9F8FC",
    date: "May 2023 - August 2023",
    points: [
      "Developed and tested front-end development and translated Figma designs into application using Flutter and Dart for 30% of the total application user interface.",
      "Constructed scalable back-end system to perform CRUD operations that used Firebase Cloud Firestore and Firebase Storage to deliver a no downtime deployment.",
      "Built and customized security, authentication, and authorization through Firebase Authentication, Firebase Authorization and Identity Vault with an uptime of 99.94%.",
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
    name: "Phone E-commerce",
    description:
      "Build a Fullstack E-commerce website with MicroServices Architecture for optimized uptime and services",
    link: "https://github.com/NamHaiBui/MicroServices",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-green",
    name: "Money Management App",
    description:
      "Build a Fullstack Website with Google Cloud to help management expenses and services",
    link: "https://github.com/NamHaiBui/my-money",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "Hand Gesture Recognizer AI",
    description:
      "Build an hand computer vision application utilizing Convex Hull algorithm to dynamically and actively track hand gestures through a video or live stream",
    link: "https://github.com/NamHaiBui/Finger-Counting",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-pink",
    name: "Evolution Algorithm Illustration",
    description:
      "Built a website to help visualize and understand the Evolution Algorithm in Artificial Intelligent",
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
];
