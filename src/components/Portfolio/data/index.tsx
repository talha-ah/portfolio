import {
  SkillType,
  ProjectType,
  EducationType,
  ExperienceType,
  AchievementType,
  CertificationtType,
} from "../types"

import Si from "public/companies/si.svg"
import Gg from "public/companies/gg.svg"
import Ntt from "public/companies/ntt-data.svg"
import Skupreme from "public/companies/skupreme.svg"

export const GitHub = "talha-ah"
export const TotalExperience = 4
export const Name = "Talha Ahmad"
export const LinkedIn = "talha-ah"
export const Location = "London, UK"
export const Phone = "+44 794 643 4693"
export const Portfolio = "talhaahmad.dev"
export const Email = "talha.ah08@gmail.com"
export const LocationLink = "https://maps.app.goo.gl/qKhcWwXKXbewqidB7"

// Words to be highlighted in the resume
export const HighlightedWords: string[] = [
  "Managing",
  "Mentoring",
  "Leading",
  "Identifying",
  "Facilitating",
  "Responsible",
  "Collaborating",
  "Career Advice",
  "Project Management",
  "Client Collaboration",
  "Agile Project Environments",
  "Designed",
  "Implemented",
  // ===
  "Analyzed",
  "Collaborated",
  "Constructed",
  "Coordinated",
  "Deployed",
  "Designed",
  "Developed",
  "Diagnosed",
  "Enhanced",
  "Evaluated",
  "Implemented",
  "Improved",
  "Integrated",
  "Managed",
  "Oversaw",
  "Partnered",
  "Performed",
  "Resolved",
  "Tested",
  "Troubleshot",
]

export const jobs: string[] = [
  "Software Engineer",
  "Full Stack Engineer",
  "Backend Engineer",
  "Frontend Engineer",
  "Javascript Engineer",
]

export const Summary: string =
  "with <strong>4+</strong> years of proven track record in building innovative solutions and leading teams in agile environments. Skilled in JavaScript, Python, React, and Node.js, and possessing a strong understanding of AI and Large Language Models (LLMs). Passionate for leveraging AI technologies to drive product excellence. Recognized for delivering exceptional results in fast-paced, early-stage startup environments."

export const Interests: string =
  "Traveling, gaming, anime & tv series (science fiction & fantasy), technology"

export const Experiences: ExperienceType[] = [
  {
    company: "Skupreme",
    role: "Senior Software Engineer",
    location: "Miami, US (Remote)",
    link: "https://skupreme.com",
    logos: [
      {
        logo: <Skupreme key="skupreme" />,
        link: "https://skupreme.com",
      },
    ],
    duration: {
      start: {
        year: "2021",
        month: "January",
      },
      end: null,
    },
    skills:
      "Javascript, React, Next.js, Node.js, Express.js, SQL, MongoDB, AWS, Serverless, NPM, AI, Agile",
    description: [
      "<strong>Leadership:</strong> Led client collaboration, conducted demos, and addressed challenges for seamless project development, leading to a <strong>30%</strong> increase in client satisfaction ratings.",
      "<strong>Innovation:</strong> Developed a dynamic multi-tenant architecture, reducing integration time by <strong>25%</strong> and boosting platform reliability by <strong>20%</strong>, solidifying Skupreme&apos;s position as an e-commerce automation leader.",
      "<strong>Collaboration:</strong> Collaborated with teams to integrate address validation APIs, reducing errors by <strong>30%</strong> and improving shipping accuracy by <strong>15%</strong>, driving operational excellence for Skupreme&apos;s clients.",
      "<strong>Optimization:</strong> Implemented advanced backend API optimizations, reducing response times by <strong>40%</strong> and increasing concurrent user capacity by <strong>25%</strong>, enhancing user experience and platform competitiveness.",
      "<strong>Efficiency:</strong> Engineered scalable microservices architecture, cutting deployment times by <strong>50%</strong>, and ensuring uninterrupted service during updates, enhancing operational efficiency and customer satisfaction.",
      "<strong>Strategic Integration:</strong> Orchestrated seamless integration of payment gateways, driving a <strong>30%</strong> increase in transaction success rates and substantial revenue growth for Skupreme&apos;s clientele.",
      "<strong>Mentorship:</strong> Mentored junior engineers, fostering a culture of innovation and excellence across the organization.",
    ],
  },
  {
    company: "NTT DATA & GiffGaff",
    role: "Senior Software Engineer",
    location: "London, UK",
    link: "https://www.giffgaff.com",
    logos: [
      {
        logo: <Ntt key="NTT Data" />,
        link: "https://www.nttdata.com/global/en",
      },
      {
        logo: <Gg key="Giffgaff" />,
        link: "https://www.giffgaff.com",
      },
    ],
    duration: {
      start: {
        year: "2023",
        month: "January",
      },
      end: {
        year: "2024",
        month: "March",
      },
    },
    skills:
      "Javascript, React, Next.js, PHP, PostgreSQL, AWS, Airtime Hypernova, Jenkins, Elastic Search, Agile",
    description: [
      "<strong>Leadership:</strong> Stepped up to manage team lead responsibilities during the urgent absence of the team lead, effectively coordinating tasks and ensuring project continuity, earning recognition from project and engineering managers for professionalism and leadership.",
      "<strong>Collaboration:</strong> Worked with various teams to understand their component usage needs, updating and optimizing components to support diverse requirements, resulting in increased efficiency and satisfaction across teams.",
      "<strong>Efficiency:</strong> Spearheaded contract plan design implementation, resulting in a <strong>20%</strong> increase in giffgaff service offerings.",
      "<strong>Innovation:</strong> Developed and published over <strong>10</strong> React components to the internal design library.",
      "<strong>Mentorship:</strong> Created on boarding documentation for new employees that was used to onboard <strong>5</strong> new employees. Provided mentorship and guidance to junior engineers, resulting in a <strong>30%</strong> increase in team productivity.",
    ],
  },
  {
    location: "Lahore, PK",
    role: "Full Stack Developer",
    company: "Falcon IT Consulting",
    link: "https://falconconsulting.fr",
    logos: [
      {
        logo: (
          <img
            key="falcon"
            alt="Falcon IT Consulting"
            src={"/companies/Falcon-Logo.png"}
          />
        ),
        link: "https://falconconsulting.fr",
      },
    ],
    duration: {
      start: {
        year: "2020",
        month: "July",
      },
      end: {
        year: "2021",
        month: "May",
      },
    },
    skills:
      "Javascript, React, React Native, Node.js, Express.js, MongoDB, Firebase, DevOps",
    description: [
      "<strong>Mentorship:</strong> Mentored a team of <strong>5</strong> engineers, providing career advice and pinpointing areas for growth.",
      "<strong>Collaboration:</strong> Led comprehensive analysis of clientrequirements, resulting in a <strong>20%</strong> reduction in projectiterations.",
      "<strong>Achievement:</strong> Oversaw a <strong>$3</strong> millionproject from analysis to completion, earning the <strong>&apos;Award of Excellence for Outstanding Accomplishments&apos;</strong>.",
    ],
  },
  {
    company: "Freelancer",
    location: "Lahore, PK",
    link: "https://www.si.com",
    role: "Full Stack Developer",
    logos: [
      {
        logo: <Si key="Sports Illustrated" />,
        link: "https://www.si.com",
      },
    ],
    duration: {
      start: {
        year: "2018",
        month: "October",
      },
      end: {
        year: "2020",
        month: "May",
      },
    },
    skills:
      "Javascript, React, React Native, Node.js, Express.js, MongoDB, Firebase, AWS, Lambda, EC2",
    description: [
      "<strong>Excellence:</strong> Maintained consistent <strong>5-star</strong> ratings for project deliverables across <strong>10+</strong> diverse projects.",
      "<strong>Efficiency:</strong> Delivered tailored web applications acrossdiverse industries, ensuring seamless user experiences and optimalperformance.",
    ],
  },
]

// JavaScript, Typescript, React, Next.js, React Native, HTML, CSS, Node.js, Express.js, Python, FastAPI, MongoDB, PostgreSQL, Firestore, Webpack, Babel, CSS-in-JS, AWS, Linux, Lambda, Serverless, AppSync, Amplify, ECS, ECR, EC2, SQS, SNS, GitHub Actions, Automation, Package management, Agile, Heroku, Vercel, Netlify, SCSS, Bootstrap, Tailwind.css, Material-ui, Styled-Components, Redux-Thunk, React-Testing-Library, Jest, Enzyme, Cypress, Mocha, Chai, Sinon, Django, C++, C#, PHP, MySQL, Angular, Flutter, Machine Learning/AI, Docker, Jenkins, Elastic Search, Git, Microservices, CI/CD, DevOps, Google Cloud, Firebase, Azure, TFS, Jira, DynamoDB, GraphQL, Apollo, XML, SOAP, RESTAPI, Nginx, Apache, Bash, SSH
export const Skills: SkillType[] = [
  {
    title: "Front-End Expertise",
    list: "JavaScript, TypeScript, React, Next.js, Angular, React Native, Redux",
  },
  {
    title: "Back-End Expertise",
    list: "Node.js, Express.js, Python, FastAPI, Django, MongoDB, PostgreSQL, DynamoDB, Firebase",
  },
  {
    title: "Cloud & DevOps Expertise",
    list: "AWS, Azure, Google Cloud Platform, Docker, CI/CD, Git",
  },
  {
    title: "Other Experience",
    list: "Agile/Scrum, GraphQL, LLMs, Elastic Search, Neo4j, Serverless, Microservices, Software Architecture, Security, Infrastructure as Code",
  },
  {
    title: "Languages",
    list: "English (fluent), Urdu (native)",
  },
]

export const SkillsAll: SkillType[] = [
  {
    title: "Programming Languages",
    list: "JavaScript, TypeScript, Python, Java",
  },
  {
    title: "Frontend Technologies",
    list: "HTML, CSS, React, Next.js, React Native, Angular, Redux, Material-UI, Bootstrap, Tailwind.css, Styled-Components, SCSS, Webpack, Babel, CSS-in-JS",
  },
  {
    title: "Backend Technologies",
    list: "Node.js, Express.js, FastAPI, Django, Flask",
  },
  {
    title: "Testing Libraries",
    list: "Jest, Enzyme, Cypress, Mocha, Chai, Sinon, React-Testing-Library",
  },
  {
    title: "Databases",
    list: "MongoDB, PostgreSQL, MySQL, Firebase, DynamoDB, Firestore",
  },
  {
    title: "Cloud Platforms",
    list: "AWS, GCP, Azure, TFS, Heroku, Vercel, Netlify",
  },
  {
    title: "CI/CD & DevOps",
    list: "GitHub Actions, Jenkins, Docker, Elastic Search, Microservices, Serverless, GraphQL, Apollo, Git",
  },
  {
    title: "Others",
    list: "LLMs, Lambda, AppSync, Amplify, ECS, ECR, EC2, SQS, SNS, S3, XML, SOAP, RESTAPI, GraphQL, Apollo, Linux, Bash, SSH, Automation, Package management, Agile/Scrum, Machine Learning/AI, Jira, Nginx, Apache, Software Architecture,Security, Infrastructure as Code",
  },
  {
    title: "Languages",
    list: "English (professional), Urdu (native), Punjabi (native)",
  },
]

export const Projects: ProjectType[] = [
  {
    slug: "saiy",
    title: "SAiY",
    link: "https://www.saiy.ai",
    skills:
      "Node.js, Express.js, Stripe, PostgreSQL (AWS Aurora), AWS, Docker, ChatGPT",
    task: "Revolutionary platform leveraging GEN AI for enhanced communication and interactions. Integrated ChatGPT API, managed DevOps using AWS.",

    shortDescription:
      "As a Backend Engineer, developed the platform from scratch, integrating GEN AI APIs to enhance communication and self-expression for users. Managed the DevOps and successfully integrated GEN AI APIs.",
    description:
      "For SAiY as a Backend Engineer, I played a key role in developing a revolutionary platform that leverages GEN AI to redefine communication and interactions. SAiY is designed to enhance communication skills, self-expression, and clarity for individuals and businesses. Through my expertise in backend development and integration of GEN AI APIs, I made it possible to overcome communication barriers and empower users to achieve meaningful interactions. Using AWS ECR and ECS, I managed the DevOps and successfully integrated GEN AI APIs. SAiY highlights my ability to leverage cutting-edge technology to drive innovation and deliver impactful solutions that transform user experiences.",
    highlights: [
      "Developed the platform from scratch, integrating GEN AI APIs to enhance communication and self-expression for users.",
      "Managed the DevOps and successfully integrated GEN AI APIs.",
      "Overcame communication barriers and empowered users to achieve meaningful interactions.",
    ],
  },
  {
    slug: "mission-automate",
    title: "Mission Automate",
    skills:
      "Python, FastAPI, Firebase, WordPress, DevOps, BeautifulSoup, ChatGPT, DALL·E",
    task: "Scraped medical blogs, integrated ChatGPT for content reformatting and DALL·E for image generation. Streamlined medical content curation process.",

    shortDescription:
      "As a Full Stack Developer, built a robust system to scrape online medical blogs, extract relevant content, leverage ChatGPT to reformat the extracted data into long-form blog posts, and integrate DALL·E for generating visually appealing images and variations. Implemented CI/CD practices and utilized tech stack including Python, FastAPI, Firebase, WordPress, BeautifulSoup, ChatGPT API, and DALL·E API.",
    description:
      "In this project, I demonstrated my expertise in developing a comprehensive solution for data extraction, content reformatting, and image generation in the medical domain. The platform leverages web scraping techniques to extract relevant data from online medical blogs, ensuring a steady stream of up-to-date and authoritative content. To enhance the quality and readability of the extracted content, I seamlessly integrated the powerful ChatGPT API, enabling intelligent reformatting and generation of long-form blog posts. Additionally, I integrated the DALL·E API to generate visually appealing images and variations, further enriching the blog content with engaging visuals. I built a robust and scalable system that streamlines the entire process, saving valuable time and resources.",
    highlights: [
      "Developed a robust system to scrape online medical blogs, extract relevant content, leverage ChatGPT to reformat the extracted data into long-form blog posts, and integrate DALL·E for generating visually appealing images and variations.",
      "Utilized a comprehensive tech stack including Python, FastAPI, Firebase, WordPress, BeautifulSoup, ChatGPT API, and DALL·E API.",
      "Streamlined the process of curating high-quality medical blog content with engaging visuals, saving valuable time and resources.",
    ],
  },
  {
    slug: "electromatic-works",
    title: "Electromatic Works",
    link: "https://electromatic-next.vercel.app",
    skills: "React, Next.js, Node.js, Express.js, MongoDB, CI/CD, DevOps",
    task: "Implemented cart functionality without user registration, streamlining product inquiry process by 40%. Enabled client updates via Admin Panel.",

    shortDescription:
      "As a Full Stack Engineer, played a pivotal role in developing a platform for a local business, enabling seamless communication and product showcasing. Implemented CI/CD best practices to streamline deployment and operation.",
    description:
      "For Electromatic Works, I played a pivotal role in developing a platform for a local business, enabling seamless communication and product showcasing. This platform enabled users to contact the business and browse products without the need for an account, streamlining the customer experience. My initiative in suggesting and implementing a cart system without a user authentication, enhanced user experience and client satisfaction, exemplifying my dedication to delivering impactful solutions that meet client needs. I also implemented CI/CD best practices to enable the client to update business details and deploy changes directly from the Admin Panel, further enhancing platform functionality and user experience.",
    highlights: [
      "Streamlined product inquiry process by 40% through implementing cart functionality without user registration.",
      "Implemented CI/CD best practices to ensure the client can update the platform business details and deploy the changes directly from the Admin Panel.",
    ],
  },
  {
    slug: "go-scholar",
    title: "Go Scholar",
    link: "https://github.com/talha-ah/go_scholar",
    skills:
      "Python, FastAPI, JavaScript, React, Next.js, Firebase, DevOps, BeautifulSoup",
    task: "Developed a tool to gather Google Scholar analytics, links, and citations. Visualized data on graphs, saving time for authors to find co-authors and articles.",

    shortDescription:
      "As a Full stack Engineer, developed this tool which gathers Google Scholar analytics, links, citations and represents them visually on the graphs, saving time for the authors to find co-authors, their articles and links across their network.",
    description:
      "In this project, I developed a tool to gather Google Scholar analytics, links, and citations, enabling authors to visualize their academic impact and network. By leveraging web scraping techniques and data visualization libraries, I created a user-friendly platform that saves time for authors to find co-authors, articles, and links across their network. The tool streamlines the process of gathering and analyzing academic data, empowering authors to make informed decisions and enhance their academic reach and impact.",
    highlights: [
      "Developed a tool to gather Google Scholar analytics, links, and citations.",
      "Visualized data on graphs, saving time for authors to find co-authors and articles.",
      "Empowered authors to enhance their academic reach and impact through data-driven insights.",
    ],
  },
  {
    slug: "retail-link",
    title: "Retail Link",
    link: "https://retail-link.vercel.app",
    skills: "React, Next.js, Node.js, Express.js, MongoDB, CI/CD, DevOps",
    task: "Digital platform for local retail shops, improving order processing efficiency by 30%. Implemented DevOps best practices.",

    shortDescription:
      "As a Full stack Engineer, developed the platform from scratch, providing local retail shops with a cutting-edge digital platform. Implemented DevOps best practices, ensuring seamless deployment and operation.",
    description:
      "As the sole developer of Retail Link, I spearheaded the creation of a transformative platform tailored for local retail shops, enabling digital transformation and operational efficiency. Through my expertise in React.js, Next.js, Node.js, and MongoDB, I delivered a user-friendly solution that streamlined order processing and inventory management. My initiative in implementing CI/CD best practices and DevOps methodologies ensured seamless deployment and operation, contributing to the platform's success. Retail Link showcases my ability to leverage technology to drive business growth and deliver impactful solutions that meet client needs.",
    highlights: [
      "Improved order processing efficiency by 30%.",
      "Successfully developed Retail Link from scratch, providing local retail shops with a cutting-edge digital platform.",
      "Implemented DevOps best practices, ensuring seamless deployment and operation.",
    ],
  },
  {
    slug: "nlp-text-sentiment-analysis-tool",
    title: "NLP Text Sentiment Analysis Tool",
    skills: "Python, NLTK, NLP, Scikit-learn, AI, Machine Learning",
    task: "Sentiment analysis tool using NLP and machine learning to analyze movie review comments. Trained ML model to classify comments as positive, negative, or neutral. Implemented user-friendly interface.",

    shortDescription:
      "Developed a sentiment analysis tool utilizing natural language processing (NLP) and machine learning techniques to analyze the sentiment of movie review comments. Trained a machine learning model on a dataset of movie reviews to classify comments as positive, negative, or neutral. Implemented a user-friendly interface for users to input movie review comments and receive sentiment analysis results.",
    description:
      "Developed a sentiment analysis tool utilizing natural language processing (NLP) and machine learning techniques to analyze the sentiment of movie review comments. Trained a machine learning model on a dataset of movie reviews to classify comments as positive, negative, or neutral. Implemented a user-friendly interface for users to input movie review comments and receive sentiment analysis results.",
    highlights: [
      "Trained a machine learning model for sentiment analysis of movie review comments.",
      "Developed an intuitive user interface for inputting movie review comments and viewing sentiment analysis results.",
      "Achieved high accuracy in sentiment classification through NLP and machine learning techniques.",
    ],
  },
  {
    slug: "six-wraps",
    title: "Six Wraps",
    link: "https://six-wraps.vercel.app",
    skills: "React, Next.js, Node.js, Express.js, Flutter, MongoDB, AWS",
    task: "Developed backend APIs and CMS portal for auto services industry. Implemented CI/CD for streamlined deployment.",

    shortDescription:
      "As a Full Stack Engineer, developed the backend APIs and CMS portal. Implemented CI/CD best practices to streamline deployment and operation.",
    description:
      "As a Full Stack Engineer for Six Wraps, I played a key role in developing the backend APIs for the mobile app and CMS portal for the auto services industry. Six Wraps is a platform designed to offer comprehensive car wrapping services, catering to the auto services industry. Through my expertise in Node.js, Express.js, and MongoDB, I developed backend APIs that enabled seamless data management and user interaction. My initiative in implementing CI/CD best practices ensured streamlined deployment and operation, enhancing platform functionality and user experience. Six Wraps highlights my ability to deliver innovative solutions that meet industry-specific needs and drive business growth.",
    highlights: [
      "Developed the backend APIs and CMS portal for Six Wraps.",
      "Implemented CI/CD best practices to streamline deployment and operation.",
      "Enhanced user experience and platform functionality through efficient data management and user interaction.",
    ],
  },
  {
    slug: "owl-express",
    title: "Owl Express",
    link: "https://www.owlexpress.net",
    skills:
      "React, React Native, GraphQL, AWS, DynamoDB, AppSync, Amplify, Cognito, CI/CD, DevOps",
    task: " Dynamic learning platform for peer-to-peer collaboration. Implemented OAuth with AWS Cognito, managed real-time updates.",

    shortDescription:
      "As a Full stack Engineer, designed a dynamic Learning Platform, fostering collaboration among users. Pioneered a system for active user engagement, empowering them to create help requests with seamless responsiveness from volunteers.",
    description:
      "As a Full-Stack Developer on the Owl Express project, I designed a dynamic Learning Platform that fostered collaboration among students. Owl Express is an educational platform designed to facilitate peer-to-peer learning and support. My leadership in implementing OAuth with AWS Cognito and managing real-time updates efficiently underscored my technical prowess and problem-solving skills. I delivered a seamless user experience, empowering students to learn and collaborate effectively.",
    highlights: [
      "Developed the web and mobile application, implementing UI/UX design and the design system.",
      "Integrated DynamoDB using GraphQL and AWS AppSync.",
      "Developed serverless synced data architecture for web and mobile applications.",
    ],
  },
  {
    slug: "prospects-trading",
    title: "Prospects Trading",
    link: "https://play.google.com/store/apps/details?id=com.si.prospects",
    skills: "Node.js, Express.js, MongoDB, AWS, CI/CD, DevOps",
    task: 'Developed backend APIs, integrated EventConnect APIs for "Sports Illustrated" sticker trading game tournaments.',

    shortDescription:
      "As a Backend Engineer, developed the backend APIs and integrated EventConnect APIs, managing the DevOps and successfully integrating EventConnect APIs.",
    description:
      "As a Backend Engineer for Prospects Trading, I played a key role in developing backend APIs and integrating EventConnect APIs, enabling player engagement in **Sports Illustrated** tournaments through a sticker trading platform. This platform allowed users to trade stickers during tournaments, fostering community engagement and excitement. My initiative in implementing batch processing and optimizations efficiently overcame API limitations, further enhancing platform functionality. Prospects Trading highlights my ability to leverage technology to create innovative solutions and drive user engagement.",
    highlights: [
      "Developed the backend APIs and integrated EventConnect APIs.",
      "Worked with EventConnect Team to optimize APIs for faster processing.",
      "Managed the DevOps and introduced batch processing and optimizations to the APIs fetching the event details.",
    ],
  },
  {
    slug: "permispop",
    title: "Permispop",
    link: "https://permispop.fr",
    skills: "React, React Native, .NET, MongoDB",
    task: "Revolutionizing the driving lesson experience for instructors and students.",

    shortDescription:
      "As a Full stack Engineer, developed the mobile application, implementing UI/UX design and integrating the calendar for lesson scheduling. Completed the project successfully, appreciated by the team and the project manager.",
    description:
      "In my role as a Frontend Developer for Permispop, I led the development of a mobile application using React Native. Permispop is a driving lesson platform that allows driving instructors to manage their students, lessons, and schedules. Through my efforts in integrating a calendar for lesson scheduling and creating user-friendly forms, I significantly enhanced user engagement and experience. Permispop exemplifies my ability to leverage technology to solve real-world problems and deliver impactful solutions in mobile development projects.",
    highlights: [
      "Developed the mobile application, implementing UI/UX design and integrating the calendar for lesson scheduling.",
      "Completed the project successfully, appreciated by the team and the project manager.",
    ],
  },
  {
    slug: "aab-engage-app",
    title: "AAB Engage App",
    skills: "Node.js, Express.js, SQL, TFS, DevOps",
    link: "https://play.google.com/store/apps/details?id=com.sap.webide.x4efb5a44557f416482c43ec9805cc9b6&hl=en&gl=US",
    task: "Simplifying rental processes and enhancing user support for Abdul Ghani Car rental service customers.",

    shortDescription:
      "As a Full stack Engineer, developed the backend APIs and integrated SAP APIs, managing the DevOps and successfully integrating SAP APIs.",
    description:
      "At AAB Engage App, I focused on improving mobile app support and rental accessibility for users. The AAB Engage App is a mobile application designed to simplify rental processes and enhance user support for Abdul Ghani Car rental service customers. Through my expertise in backend development and integration of SAP APIs, I enhanced user support and streamlined rental processes. Despite challenges in integrating SAP APIs, my dedication and problem-solving skills enabled successful implementation, contributing to the app's success. AAB Engage App underscores my ability to overcome challenges and deliver impactful solutions that meet user needs.",
    highlights: [
      "Developed the backend APIs and integrated SAP APIs.",
      "Managed the DevOps and successfully integrated SAP APIs.",
      "Improved my skills in backend development and DevOps.",
    ],
  },
  {
    slug: "orgaplan",
    title: "Orgaplan",
    skills: "React, React Native, Node.js, Express.js, MongoDB, Firebase",
    link: "http://orgaplansa.com",
    task: "Logistic platform for construction firms. Led team of 5, integrated visualization tools like CanvasJS for construction site mapping.",

    shortDescription:
      "As a Full stack Engineer, led the project of 5 developers and overcame challenges in integrating visualization tools. Overcame challenges in integrating CanvasJS for the visualization of the construction site editable map. Improved team efficiency by 25%.",
    description:
      "In my role as a Full-Stack Engineer for Orgaplan, I played a pivotal role in developing a logistic platform for construction firms. Orgaplan is a platform designed to streamline resource management and enhance efficiency for construction companies. Leading a team of five developers, I spearheaded comprehensive analysis and documentation efforts, resulting in a 20% reduction in project iteration cycles. By integrating CanvasJS for construction site visualization, I overcame significant challenges, ultimately contributing to the platform's success. Orgaplan highlights my ability to lead cross-functional teams and deliver outstanding accomplishments in complex projects.",
    highlights: [
      "Led project of 5 developers and overcame challenges in integrating visualization tools.",
      "Overcame challenges in integrating CanvasJS for the visualization of the construction site editable map.",
      "Improved team efficiency by 25%",
    ],
  },
]

export const Educations: EducationType[] = [
  {
    institution: "Canterbury Christ Church University",
    location: "Canterbury, UK",
    degree: "Master of Science in Data Intelligence",
    duration: {
      start: {
        year: "2021",
        month: "September",
      },
      end: {
        year: "2022",
        month: "November",
      },
    },
  },
  {
    institution: "Government College University",
    location: "Lahore, PK",
    degree: "Bachelor of Science in Computer Science - Distinction",
    duration: {
      start: {
        year: "2016",
        month: "October",
      },
      end: {
        year: "2020",
        month: "October",
      },
    },
  },
]

export const Achievements: AchievementType[] = [
  {
    title: "Award of Excellence for Outstanding Accomplishments",
    organizations: [
      {
        year: 2021,
        name: "Falcon IT Consulting",
      },
    ],
  },
  {
    title: "Award of Excellence",
    organizations: [
      {
        year: 2014,
        name: "GSO-1 FGEI, [C/G]",
      },
      {
        year: 2016,
        name: "FGEI [C/G]",
      },
    ],
  },
]

export const Certifications: CertificationtType[] = [
  // {
  //   title: "MongoDB Basics",
  //   organization: "MongoDB University",
  //   year: 2021,
  //   link: "https://learn.mongodb.com/c/hIr9WNYCWqWYXqoDDJE9Og",
  // },
  {
    title: "Full-Stack Web Development with React",
    organization: "Hong Kong University of Science",
    year: 2020,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/AYEQNF2AUWJ2",
  },
  {
    title: "IBM Data Science",
    organization: "IBM",
    year: 2020,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/GGUZ86AV2BZN",
  },
  {
    title: "Data Visualization with Python",
    organization: "IBM",
    year: 2019,
    link: "https://www.coursera.org/account/accomplishments/certificate/4PEJU8B5LTFG",
  },
]
