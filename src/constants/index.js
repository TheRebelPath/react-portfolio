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
  metavs,
  threets,
  hobank,
  movies,
  cheeseq,
  ytclone,
  threejs,
  github,
  twitter,
  instagram,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Tech Enthusiast",
    icon: backend,
  },
  {
    title: "Creative Designer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "The Essentials for Web Development",
    company_name: "HTML and CSS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Acquired the skills to create and structure web pages using HTML elements and attributes.",
      "Gained an understanding of applying styles and layouts to web pages using CSS selectors, properties, and values.",
      "Explored responsive design techniques to ensure web pages adapt to different screen sizes and devices.",
      "Utilized web development tools such as code editors, browsers, validators, and debuggers to write, test, and debug code.",
    ],
  },
  {
    title: "Fundamentals for Web Programming",
    company_name: "JavaScript",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Variables and data types: how to declare, assign, and manipulate different types of data, such as numbers, strings, booleans, arrays, and objects.",
      "Functions: how to define, invoke, and return values from reusable blocks of code that perform a specific task.",
      "Events and DOM manipulation: how to handle user interactions (such as clicks, mouse movements, keyboard inputs) and manipulate the elements of a web page using the Document Object Model (DOM).",
      "ECMAScript 6 features: how to use new features of JavaScript such as let and const keywords, template literals, destructuring, default parameters, rest and spread operators, and modules.",
    ],
  },
  {
    title: "Building Dynamic Web Apps",
    company_name: "React",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Learned to manage the state of the components using hooks such as useState and useEffect.",
      "Explored effective approaches to managing user interactions and events via event handlers and custom hooks.",
      "Gained skills in fetching and displaying data from external APIs",
      "Deployed React apps using platforms like github.",
    ],
  },
  {
    title: "Web Dev Tools and Utilities",
    company_name: "Tailwind, Git, Three.js and More",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Git: how to manage my code with version control, using features such as branches, commits, and merges.",
      "Tailwind: how to style my web pages with Tailwind, using features such as utility classes, customization, and composition.",
      "Three.js: how to create and animate 3D graphics in the browser with Three.js, using features such as scenes, cameras, and lights.",
      "Chat GPT: how to use chat gpt to generate solutions for my coding problems, using features such as prompts, parameters, and suggestions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "So, I collaborate with Rodrigo – turns out he's alright at web stuff. Guess we'll keep coding together.",
    name: "Diego Garea",
    designation: "CTO",
    company: "Edicion Especial",
    image: "https://diegogg-dev.com/assets/logo-14f2ee35.svg",
  },
  {
    testimonial:
      "Whoof! Rodrigo turbocharged our site, just like I zoom around the yard. Tail-waggingly impressed!",
    name: "Fenrir",
    designation: "Dog",
    company: "Rodrigo",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Malinois_Shepherd3.JPG",
  },
  {
    testimonial:
      "Discovered Rodrigo's work – solid skills! Web development frontier seems to have a capable explorer.",
    name: "Elon Musk",
    designation: "CEO",
    company: "SpaceX",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/196px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
  },
];

const projects = [
  {
    name: "Metaversus",
    description:
      "Metaversus is a basic landing page built with Next.js, Framer Motion, and Tailwind CSS that showcases the power of these technologies in creating responsive and visually appealing websites.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metavs,
    source_code_link: "https://github.com/TheRebelPath/metaversus-app",
    live_link: "https://therebelpath.github.io/metaversus-app/",
  },
  {
    name: "Movieland",
    description:
      "Movieland is a web app built with React, CSS, and a REST API that allows you to access an external movie database. It provides an intuitive user interface to search for various films and television series.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/TheRebelPath/react-movie-app",
    live_link: "https://therebelpath.github.io/react-movie-app/",
  },
  {
    name: "T-shirt Design Lab",
    description:
      "T-Shirt Design Lab is a web app built with React, Tailwind CSS, and Three.js that allows you to design custom t-shirts from scratch. It provides an intuitive user interface to create unique designs and showcase your creativity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threets,
    source_code_link: "https://github.com/TheRebelPath/threejs-tshirt-app",
    live_link: "https://therebelpath.github.io/threejs-tshirt-app/",
  },
  {
    name: "BuzFeed Cheese Quiz",
    description:
    "Web development project built with React, CSS, and a REST API that tells you what type of cheese you are based on your answers to some questions. It’s inspired by the popular BuzzFeed quizzes and uses an external database to access the quiz data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cheeseq,
    source_code_link: "https://github.com/TheRebelPath/react-buzfeed-clone",
    live_link: "https://therebelpath.github.io/react-buzfeed-clone/",
  },
  {
    name: "Bank Landing Page",
    description:
      "This project is a landing page for a bank that uses React and Tailwind to create a modern and responsive design. The project demonstrates how to use React hooks, custom components, and Tailwind utilities to build a fast and elegant web page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: hobank,
    source_code_link: "https://github.com/TheRebelPath/react-bank-app",
    live_link: "https://therebelpath.github.io/react-bank-app/",
  },
  {
    name: "YouTube Clone",
    description:
      "YouTube clone that showcases the power of CSS and HTML in creating visually appealing websites. It demonstrates the basic skills of web development, such as creating layouts, adding media elements, styling elements, and using CSS selectors and properties.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: ytclone,
    source_code_link: "https://github.com/TheRebelPath/youtube-clone",
    live_link: "https://therebelpath.github.io/youtube-clone/",
  },
];

const socials = [
  {
    name: 'twitter',
    icon: twitter,
    url: 'https://twitter.com/',
  },
  {
    name: 'linkedin',
    icon: linkedin,
    url: 'www.linkedin.com/in/rodrigo-yáñez-64a07428b',
  },
  {
    name: 'instagram',
    icon: instagram,
    url: 'https://www.instagram.com/',
  },
  {
    name: 'github',
    icon: github,
    url: 'https://github.com/TheRebelPath',
  },
];

export { services, technologies, experiences, testimonials, projects, socials };