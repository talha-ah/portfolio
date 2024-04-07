import { SkillType, ProjectType } from "../types"

import Si from "public/companies/si.svg"
import Gg from "public/companies/gg.svg"
import Ntt from "public/companies/ntt-data.svg"
import Skupreme from "public/companies/skupreme.svg"

export const GitHub = "talha-ah"
export const TotalExperience = 4
export const Name = "Talha Ahmed"
export const LinkedIn = "talha-ah"
export const Location = "London, UK"
export const Phone = "+44 794-643-4693"
export const Email = "talha1392.ahmed@gmail.com"
export const LocationLink = "https://maps.app.goo.gl/qKhcWwXKXbewqidB7"

// Words to be highlighted in the resume
export const HighlightedWords = [
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

export const jobs = [
  "Software",
  "Full Stack",
  "Backend",
  "Frontend",
  "Javascript",
]

export const Summary = (
  <>
    Engineer recognized for delivering top-tier solutions and proven expertise
    in JavaScript and Python, with a keen eye for a healthy degree of
    perfectionism. Led a team of <strong>5-6</strong> engineers successfully in
    agile project environments, contributing to the success of projects valued
    between <strong>$5M</strong> to <strong>$7M</strong>. Adept at driving
    success through innovation, collaboration, and a commitment to excellence.
  </>
)

export const Experiences = [
  {
    company: "NTT DATA & GiffGaff",
    role: "Software Engineer",
    location: "London, UK",
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
      end: null,
    },
    skills:
      "Javascript, React, Next.js, PHP, PostgreSQL, AWS, Airtime Hypernova, Jenkins, Elastic Search, Agile",
    description: [
      <>
        <strong>Leadership:</strong> Stepped up to manage team lead
        responsibilities during the urgent absense of the team lead, effectively
        coordinating tasks and ensuring project continuity, earning recognition
        from project and engineering managers for professionalism and
        leadership.
      </>,
      <>
        <strong>Collaboration:</strong> Worked with various teams to understand
        their component usage needs, updating and optimizing components to
        support diverse requirements, resulting in increased efficiency and
        satisfaction across teams.
      </>,
      <>
        <strong>Efficiency:</strong> Spearheaded contract plan design
        implementation, resulting in a <strong>20%</strong> increase in giffgaff
        service offerings and more than a million in revenue.
      </>,
      <>
        <strong>Innovation:</strong> Developed and published over{" "}
        <strong>10</strong> React components to the internal design library,
        standardizing UI elements across teams and ensuring consistency in
        design implementation.
      </>,
      <>
        <strong>Impact:</strong> Engineered a scalable microservices
        architecture, supporting a <strong>25%</strong> increase in product
        service loads.
      </>,
      <>
        <strong>Mentorship:</strong> Created onboarding documentation for new
        employees that was used to onboard <strong>5</strong> employees.
        Provided mentorship and guidance to junior engineers, resulting in a{" "}
        <strong>30%</strong> increase in team productivity.
      </>,
    ],
  },
  {
    company: "Skupreme",
    role: "Software Engineer",
    location: "Miami, US (Remote)",
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
      end: {
        year: "2022",
        month: "December",
      },
    },
    skills:
      "Javascript, Next.js, Node.js, Express.js, MongoDB, AWS, Serverless, Automation, Package management, Agile",
    description: [
      <>
        <strong>Leadership:</strong> Led client collaboration, conducted demos,
        and addressed challenges for seamless project development, leading to a{" "}
        <strong>30%</strong> increase in client satisfaction ratings.
      </>,
      <>
        <strong>Impact:</strong> Enhanced application functionality and speed by{" "}
        <strong>30%</strong>, adding <strong>$2M</strong> in value through
        advanced strategies and techniques.
      </>,
      <>
        <strong>Efficiency:</strong> Engineered scalable frameworks,
        implementing best-in-class design principles, achieving and enhanced
        overall performance metrics by <strong>25%</strong>.
      </>,
      <>
        <strong>Mentorship:</strong> Mentored junior engineers on best
        practices, methodologies, and feature optimization for standardized and
        efficient development.
      </>,
    ],
  },
  {
    location: "Lahore, PK",
    role: "Full Stack Developer",
    company: "Falcon IT Consulting",
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
      "Javascript, React, React Native, Node.js, Express.js, MongoDB, Firebase",
    description: [
      <>
        <strong>Mentorship:</strong> Mentored a team of <strong>5</strong>{" "}
        engineers, providing career advice and pinpointing areas for growth.
      </>,
      <>
        <strong>Collaboration:</strong> Led comprehensive analysis and
        documentation of client requirements, resulting in a{" "}
        <strong>20%</strong> reduction in project iteration cycles.
      </>,
      <>
        <strong>Achievement:</strong> Oversaw a <strong>$3</strong> million
        project from analysis to completion, earning the{" "}
        <strong>
          &apos;Award of Excellence for Outstanding Accomplishments&apos;
        </strong>{" "}
        .
      </>,
    ],
  },
  {
    company: "Freelancer",
    location: "Lahore, PK",
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
      <>
        <strong>Excellence:</strong> Maintained consistent{" "}
        <strong>5-star</strong> ratings for project deliverables across{" "}
        <strong>10+</strong> diverse projects.
      </>,
      <>
        <strong>Efficiency:</strong> Delivered tailored web applications across
        diverse industries, ensuring seamless user experiences and optimal
        performance.
      </>,
    ],
  },
]

export const Skills: SkillType[] = [
  // {
  //   title: "Main Stack",
  //   list: "JavaScript, Typescript, React, Next.js, React Native, HTML, CSS, Node.js, Express.js, Python, FastAPI, MongoDB, PostgreSQL, Firestore, Webpack, Babel, CSS-in-JS, AWS",
  // },
  // {
  //   title: "Others",
  //   list: "Linux, Lambda, Serverless, AppSync, Amplify, ECS, ECR, EC2, SQS, SNS, GitHub Actions, Automation, Package management, Agile, Heroku, Vercel, Netlify, SCSS, Bootstrap, Tailwind.css, Material-ui, Styled-Components, Redux-Thunk, React-Testing-Library, Jest, Enzyme, Cypress, Mocha, Chai, Sinon, Django, C++, C#, PHP, MySQL, Angular, Flutter, Machine Learning/AI, Docker, Jenkins, Elastic Search, Git, Microservices, CI/CD, DevOps, Google Cloud, Firebase, Azure, TFS, Jira, DynamoDB, GraphQL, Apollo, XML, SOAP, RESTAPI, Nginx, Apache, Bash, SSH",
  // },
  {
    title: "Main Stack",
    list: "JavaScript, TypeScript, React, Node.js, Python, MongoDB, PostgreSQL, AWS, GCP",
  },
  {
    title: "Others",
    list: "Redux, Next.js, Express.js, FastAPI, DynamoDB, Firestore, RESTAPI, GraphQL, Serverless, Microservices, Docker, CI/CD, Git, Agile",
  },
  {
    title: "Languages",
    list: "English (professional), Urdu (native), Punjabi (native)",
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
    list: "Lambda, AppSync, Amplify, ECS, ECR, EC2, SQS, SNS, S3, XML, SOAP, RESTAPI, GraphQL, Apollo, Linux, Bash, SSH, Automation, Package management, Agile, Machine Learning/AI, Jira, Nginx, Apache",
  },
  {
    title: "Languages",
    list: "English (professional), Urdu (native), Punjabi (native)",
  },
]

export const Projects: ProjectType[] = [
  {
    slug: "electromatic-works",
    title: "Electromatic Works",
    link: "https://electromatic-next.vercel.app",
    skills: "React, Next.js, Node.js, Express.js, MongoDB, CI/CD, DevOps",
    role: "Streamlining the customer experience by enabling the users to send product queries without an account.",

    description:
      "As a Full stack Engineer, developed the platform from scratch, streamlining the product inquiry process by 40% through implementing cart functionality without user registration. Implemented CI/CD best practices to ensure the client can update the platform business details and deploy the changes directly from the Admin Panel.",
    experience:
      "At Electromatic Works, I played a pivotal role in developing a platform for a local business, enabling seamless communication and product showcasing. This platform enabled users to contact the business and browse products without the need for an account, streamlining the customer experience. My initiative in suggesting and implementing a cart system without a user authentication, enhanced user experience and client satisfaction, exemplifying my dedication to delivering impactful solutions that meet client needs. I also implemented CI/CD best practices to enable the client to update business details and deploy changes directly from the Admin Panel, further enhancing platform functionality and user experience.",
    achievements: [
      "Streamlined product inquiry process by 40% through implementing cart functionality without user registration.",
      "Implemented CI/CD best practices to ensure the client can update the platform business details and deploy the changes directly from the Admin Panel.",
    ],
  },
  {
    slug: "retail-link",
    title: "Retail Link",
    link: "https://retail-link.vercel.app",
    skills: "React, Next.js, Node.js, Express.js, MongoDB, CI/CD, DevOps",
    role: "Developing a transformative platform tailored for local retail shops, enabling digital transformation and operational efficiency.",

    description:
      "As a Full stack Engineer, developed the platform from scratch, providing local retail shops with a cutting-edge digital platform. Implemented DevOps best practices, ensuring seamless deployment and operation.",
    experience:
      "As the sole developer of Retail Link, I spearheaded the creation of a transformative platform tailored for local retail shops, enabling digital transformation and operational efficiency. Through my expertise in React.js, Next.js, Node.js, and MongoDB, I delivered a user-friendly solution that streamlined order processing and inventory management. My initiative in implementing CI/CD best practices and DevOps methodologies ensured seamless deployment and operation, contributing to the platform's success. Retail Link showcases my ability to leverage technology to drive business growth and deliver impactful solutions that meet client needs.",
    achievements: [
      "Improved order processing efficiency by 30%.",
      "Successfully developed Retail Link from scratch, providing local retail shops with a cutting-edge digital platform.",
      "Implemented DevOps best practices, ensuring seamless deployment and operation.",
    ],
  },
  {
    slug: "prospects-trading",
    title: "Prospects Trading",
    link: "https://play.google.com/store/apps/details?id=com.si.prospects",
    skills: "React, Next.js, Node.js, Express.js, MongoDB, AWS, CI/CD, DevOps",
    role: "Enabling player engagement in Sports Illustrated tournaments through a sticker trading platform.",

    description:
      "As a Full stack Engineer, developed the backend APIs and integrated EventConnect APIs, managing the DevOps and successfully integrating EventConnect APIs.",
    experience:
      'In my role as a Backend Engineer for project Prospects Trading, I played a key role in enabling player engagement in "Sports Illustrated" tournaments through a sticker trading platform. This platform allowed users to trade stickers during tournaments, fostering community engagement and excitement. By developing backend APIs and integrating EventConnect APIs, I improved user engagement and experience for tournament participants. My initiative in implementing batch processing and optimizations efficiently overcame API limitations, further enhancing platform functionality. Prospects Trading highlights my ability to leverage technology to create innovative solutions and drive user engagement.',
    achievements: [
      "Developed the backend APIs and integrated EventConnect APIs.",
      "Worked with EventConnect Team to optimize APIs for faster processing.",
      "Managed the DevOps and introduced batch processing and optimizations to the APIs fetching the event details.",
    ],
  },
  {
    slug: "aab-engage-app",
    title: "AAB Engage App",
    skills: "Node.js, Express.js, SQL, TFS, DevOps",
    link: "https://play.google.com/store/apps/details?id=com.sap.webide.x4efb5a44557f416482c43ec9805cc9b6&hl=en&gl=US",
    role: "Simplifying rental processes and enhancing user support for Abdul Ghani Car rental service customers.",

    description:
      "As a Full stack Engineer, developed the backend APIs and integrated SAP APIs, managing the DevOps and successfully integrating SAP APIs.",
    experience:
      "At AAB Engage App, I focused on improving mobile app support and rental accessibility for users. The AAB Engage App is a mobile application designed to simplify rental processes and enhance user support for Abdul Ghani Car rental service customers. Through my expertise in backend development and integration of SAP APIs, I enhanced user support and streamlined rental processes. Despite challenges in integrating SAP APIs, my dedication and problem-solving skills enabled successful implementation, contributing to the app's success. AAB Engage App underscores my ability to overcome challenges and deliver impactful solutions that meet user needs.",
    achievements: [
      "Developed the backend APIs and integrated SAP APIs.",
      "Managed the DevOps and successfully integrated SAP APIs.",
      "Improved my skills in backend development and DevOps.",
    ],
  },
  {
    slug: "owl-express",
    title: "Owl Express",
    link: "https://www.owlexpress.net",
    skills:
      "React, React Native, GraphQL, AWS, DynamoDB, AppSync, Amplify, Cognito, CI/CD, DevOps",
    role: "Fostering collaboration among students and empowering them to learn and collaborate effectively.",

    description:
      "As a Full stack Engineer, designed a dynamic Learning Platform, fostering collaboration among users. Pioneered a system for active user engagement, empowering them to create help requests with seamless responsiveness from volunteers.",
    experience:
      "As a Full-Stack Developer on the Owl Express project, I designed a dynamic Learning Platform that fostered collaboration among students. Owl Express is an educational platform designed to facilitate peer-to-peer learning and support. My leadership in implementing OAuth with AWS Cognito and managing real-time updates efficiently underscored my technical prowess and problem-solving skills. I delivered a seamless user experience, empowering students to learn and collaborate effectively.",
    achievements: [
      "Developed the web and mobile application, implementing UI/UX design and the design system.",
      "Integrated DynamoDB using GraphQL and AWS AppSync.",
      "Developed serverless synced data architecture for web and mobile applications.",
    ],
  },
  {
    slug: "orgaplan",
    title: "Orgaplan",
    skills: "React, React Native, Node.js, Express.js, MongoDB, Firebase",
    link: "http://orgaplansa.com",
    role: "Streamlining resource management and enhancing efficiency for construction firms.",

    description:
      "As a Full stack Engineer, led the project of 5 developers and overcame challenges in integrating visualization tools. Overcame challenges in integrating CanvasJS for the visualization of the construction site editable map. Improved team efficiency by 25%.",
    experience:
      "In my role as a Full-Stack Engineer for Orgaplan, I played a pivotal role in developing a logistic platform for construction firms. Orgaplan is a platform designed to streamline resource management and enhance efficiency for construction companies. Leading a team of five developers, I spearheaded comprehensive analysis and documentation efforts, resulting in a 20% reduction in project iteration cycles. By integrating CanvasJS for construction site visualization, I overcame significant challenges, ultimately contributing to the platform's success. Orgaplan highlights my ability to lead cross-functional teams and deliver outstanding accomplishments in complex projects.",
    achievements: [
      "Led project of 5 developers and overcame challenges in integrating visualization tools.",
      "Overcame challenges in integrating CanvasJS for the visualization of the construction site editable map.",
      "Improved team efficiency by 25%",
    ],
  },
  {
    slug: "permispop",
    title: "Permispop",
    link: "https://permispop.fr",
    skills: "React, React Native, .NET, MongoDB",
    role: "Revolutionizing the driving lesson experience for instructors and students.",

    description:
      "As a Full stack Engineer, developed the mobile application, implementing UI/UX design and integrating the calendar for lesson scheduling. Completed the project successfully, appreciated by the team and the project manager.",
    experience:
      "In my role as a Frontend Developer for Permispop, I led the development of a mobile application using React Native. Permispop is a driving lesson platform that allows driving instructors to manage their students, lessons, and schedules. Through my efforts in integrating a calendar for lesson scheduling and creating user-friendly forms, I significantly enhanced user engagement and experience. Permispop exemplifies my ability to leverage technology to solve real-world problems and deliver impactful solutions in mobile development projects.",
    achievements: [
      "Developed the mobile application, implementing UI/UX design and integrating the calendar for lesson scheduling.",
      "Completed the project successfully, appreciated by the team and the project manager.",
    ],
  },
]

export const Educations = [
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

export const Achievements = [
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

export const Certifications = [
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