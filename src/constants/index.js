import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  codingNinjas,
  kliqueStart,
  EDC,
  vabthorRce,
  devDetective,
  nQueen,
  studyNotion,
  chatterBox,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "AI ML",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [


  {
    title: "Web Developer",
    company_name: "KliqueStart",
    icon: kliqueStart,
    iconBg: "#383E56",
    date: "Jan 2023 - May 2024",
    points: [
      "Developed a user-friendly website for the organization with essential features.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical and Corporate associate",
    company_name: "Entrepreneurship Development Cell, BV(DU)COEP",
    icon: EDC,
    iconBg: "#383E56",
    date: "April 2022 - Oct 2023",
    points: [
      "Successfully placed 25 students through Startup Internship Placement Program (SIPP) by actively engaging with HR and diverse companies.",
      "Managed technical logistics for events like SIPP, Skill Tank, and Atmosfair, ensuring seamless execution and optimal participant experience.",
      "Established a robust network with founders and CEOs, leveraging these connections to invite industry leaders as speakers for our events.",
      "Played a key role in bridging technical aspects and corporate relations within the Entrepreneurship Development Cell.",
      "Got Reward and Recognition as a Junior Associate",
    ],
  },
  {
    title: "Technical Assistant",
    company_name: "Coding Ninjas",
    icon: codingNinjas,
    iconBg: "#383E56",
    date: "Dec 2021 - April 2022",
    points: [
      "Provides valuable guidance to students, helping them navigate through coding challenges and programming concepts.",
      "Plays a crucial role in resolving coding issues ins C++/DSA and debugging errors, ensuring students understand the intricacies of their code.",
      "Clarifies 350+ doubts and answers queries around fostering a better understanding of coding principles among learners.",
      "Helps bridge the gap between theoretical knowledge and real-world application, making coding concepts more practical for students.",
    ],
  },

  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem",
    name: "Lorem ipsum",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem",
    name: "Lorem ipsum",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem",
    name: "Lorem ipsum",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Vabthor RCE",
    description:
      "Web-based platform that allows to Complie HTML CSS and JavaScript language online, integrated funcationlity with save and share code to others ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: vabthorRce,
    source_code_link: "https://github.com/iamvaibhavrathore/Vab_dev_IDE",
  },
  {
    name: "Dev Detective",
    description:
      "Dev detective project search github profile by your username. UI is developed to change into dark and light mode and we can get the some public profile info like number of repository, followers, following and social media handles.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: devDetective,
    source_code_link: "https://github.com/iamvaibhavrathore/dev-detective-project",
  },
  {
    name: "N Queen Algorithm Visualization",
    description:
      "The N Queen algorithm visualizes placing N queens on an NxN chessboard so that no two queens threaten each other. It uses backtracking to explore all possible solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nQueen,
    source_code_link: "https://github.com/iamvaibhavrathore/N-Queen_Algorithm_Visualization",
  },
  {
    name: "Study Notion",
    description:
      "A full stack ed-tech website developed using MERN stack. Maintained industry standard and with 3 moderator role (Admin, Student and Instructor).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: studyNotion,
    source_code_link: "https://github.com/iamvaibhavrathore/study-notion",
  },
  {
    name: "Chat App",
    description:
      "Chat App allow user to chat in a realtime with no lag. Also added video and image sharing feature. The web app developed using MERN stack and socket.io",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: chatterBox,
    source_code_link: "https://github.com/iamvaibhavrathore/ChattarBox",
  },
];

export { services, technologies, experiences, testimonials, projects };
