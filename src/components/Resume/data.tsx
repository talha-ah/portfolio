import { Box } from "@mui/material"

import { Skill } from "@utils/types"

export const GitHub = "talha-ah"
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
  "Node",
  "Python",
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
        <strong>Leadership:</strong> Orchestrated client collaboration,
        facilitating demos, and resolving challenges in real-time, resulting in
        a seamless project development process and a <strong>30%</strong> boost
        in client satisfaction ratings.
      </>,
      <>
        <strong>Impact:</strong> Boosted the application&apos;s functionality
        and speed by <strong>30%</strong>, resulting in a <strong>$2M</strong>{" "}
        increase in value through the implementation of advanced strategies and
        techniques.
      </>,
      <>
        <strong>Efficiency:</strong> Engineered scalable frameworks,
        implementing best-in-class design principles, achieving and enhanced
        overall performance metrics by <strong>25%</strong>.
      </>,
      <>
        <strong>Mentorship:</strong> Provided mentorship to the junior
        engineers, and guiding them on best practices and methodologies,
        developing new and optimizing existing features in a standardized and
        efficient manner.
      </>,
    ],
  },
  {
    location: "Lahore, PK",
    role: "Full Stack Developer",
    company: "Falcon IT Consulting",
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
        <strong>Mentorship:</strong> Guided and mentored a team of{" "}
        <strong>5</strong> engineers, providing career advice and identifying
        areas for improvement.
      </>,
      <>
        <strong>Collaboration:</strong> Led comprehensive analysis and
        documentation of client requirements, resulting in a{" "}
        <strong>20%</strong> reduction in project iteration cycles.
      </>,
      <>
        <strong>Achievement:</strong> Directed a <strong>$3 million</strong>{" "}
        project, overseeing analysis, planning, and development, and achieved
        the{" "}
        <strong>
          &quot;Award of Excellence for Outstanding Accomplishments&quot;
        </strong>{" "}
        .
      </>,
    ],
  },
  {
    company: "Freelancer",
    location: "Lahore, PK",
    role: "Full Stack Developer",
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

export const Skills: Skill[] = [
  // {
  //   title: "Main Stack",
  //   list: "JavaScript, Typescript, React, Next.js, React Native, HTML, CSS, Node.js, Express.js, Python, FastAPI, MongoDB, PostgreSQL, Firestore, Webpack, Babel, CSS-in-JS, AWS",
  // },
  // {
  //   title: "Others",
  //   list: "Linux, Lambda, Serverless, AppSync, Amplify, ECS, ECR, EC2, SQS, SNS, EC2, GitHub Actions, Automation, Package management, Agile, Heroku, Vercel, Netlify, SCSS, Bootstrap, Tailwind.css, Material-ui, Styled-Components, Redux-Thunk, React-Testing-Library, Jest, Enzyme, Cypress, Mocha, Chai, Sinon, Django, C++, C#, PHP, MySQL, Angular, Flutter, Machine Learning/AI, Docker, Jenkins, Elastic Search, Git, Microservices, CI/CD, DevOps, Google Cloud, Firebase, Azure, TFS, Jira, DynamoDB, GraphQL, Apollo, XML, SOAP, RESTAPI, Nginx, Apache, Bash, SSH",
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

export const Projects = [
  {
    title: "Electromatic Works",
    link: "https://electromatic-next.vercel.app",
    skills:
      "Javascript, Node.js, Express.js, React, Next.js, MongoDB, CI/CD, DevOps",
    description:
      "A platform designed for a local business by providing users the ability to contact the business and list products they are interested in without the need for user registration.",
    experience:
      "As a Full stack Engineer, developed the platform from scratch, streamlining the product inquiry process by 40% through implementing cart functionality without user registration. Implemented CI/CD best practices to ensure the client can update the platform business details and deploy the changes directly from the Admin Panel.",
    achievements: [
      <>
        Streamlined product inquiry process by 40% through implementing cart
        functionality without user registration.
      </>,
      <>
        Implemented CI/CD best practices to ensure the client can update the
        platform business details and deploy the changes directly from the Admin
        Panel.
      </>,
    ],
  },
  {
    title: "Retail Link",
    link: "https://retail-link.vercel.app",
    skills: "Javascript, React, Next.js, Node.js, MongoDB, CI/CD, DevOps",
    description:
      "A transformative platform tailored for local retail shops, offering end-to-end solutions for digitalizing operations and enhancing efficiency.",
    experience:
      "As a Full stack Engineer, developed the platform from scratch, providing local retail shops with a cutting-edge digital platform. Implemented DevOps best practices, ensuring seamless deployment and operation.",
    achievements: [
      <>Improved order processing efficiency by 30%.</>,
      <>
        Successfully developed Retail Link from scratch, providing local retail
        shops with a cutting-edge digital platform.
      </>,
      <>
        Implemented DevOps best practices, ensuring seamless deployment and
        operation.
      </>,
    ],
  },
  {
    title: "Prospects Trading",
    skills:
      "Javascript, Node.js, Express.js, React, Next.js, Flutter, MongoDB, AWS",
    link: "https://play.google.com/store/apps/details?id=com.si.prospects",
    description:
      'A platform for "Sports Illustrated" tournaments to engage players in a sticker trading game.',
    experience:
      "As a Full stack Engineer, developed the backend APIs and integrated EventConnect APIs, managing the DevOps and successfully integrating EventConnect APIs.",
    achievements: [
      <>Developed the backend APIs and integrated EventConnect APIs.</>,
      <>
        Worked with EventConnect Team to optimize APIs for faster processing.
      </>,
      <>
        Managed the DevOps and introduced batch processing and optimizations to
        the APIs fetching the event details.
      </>,
    ],
  },
  {
    title: "AAB Engage App",
    skills: "Javascript, Node.js, Express.js, SQL, TFS",
    link: "https://play.google.com/store/apps/details?id=com.sap.webide.x4efb5a44557f416482c43ec9805cc9b6&hl=en&gl=US",
    description:
      'An app for "Abdul Ghani" Car rental service customers to cater to their requests, easing their efforts to receive support on the go.',
    experience:
      "As a Full stack Engineer, developed the backend APIs and integrated SAP APIs, managing the DevOps and successfully integrating SAP APIs.",
    achievements: [
      <>Developed the backend APIs and integrated SAP APIs.</>,
      <>Managed the DevOps and successfully integrated SAP APIs.</>,
    ],
  },
  {
    title: "Owl Express",
    skills:
      "Javascript, React, DynamoDB, GraphQL, AWS, AppSync, Amplify, Cognito",
    link: "https://www.owlexpress.net",
    description:
      "A platform for students to get help from their peers and teachers.",
    experience:
      "As a Full stack Engineer, designed a dynamic Learning Platform, fostering collaboration among users. Pioneered a system for active user engagement, empowering them to create help requests with seamless responsiveness from volunteers.",
    achievements: [
      <>
        Developed the web and mobile application, implementing UI/UX design and
        the design system.
      </>,
      <>
        Integrated Authentication with AWS Cognito, DynamoDB and GraphQL with
        AWS AppSync.
      </>,
      <>
        Developed serverless synced data architecture for web and mobile
        applications.
      </>,
    ],
  },
  {
    title: "Orgaplan",
    skills:
      "Javascript, React, React Native, AWS, MongoDB, Firebase, Node.js, Express.js",
    link: "http://orgaplansa.com",
    description:
      "Orgaplan is a logistic platform for construction firms to streamline resource management.",
    experience:
      "As a Full stack Engineer, led the project of 5 developers and overcame challenges in integrating visualization tools. Overcame challenges in integrating CanvasJS for the visualization of the construction site editable map. Improved team efficiency by 25%.",
    achievements: [
      <>
        Led project of 5 developers and overcame challenges in integrating
        visualization tools.
      </>,
      <>
        Overcame challenges in integrating CanvasJS for the visualization of the
        construction site editable map.
      </>,
      <>Improved team efficiency by 25%.</>,
    ],
  },
  {
    title: "Permispop",
    skills: "Javascript, React, React Native, .NET, MongoDB",
    link: "https://permispop.fr",
    description:
      "Permispop is a platform for driving instructors to manage their students, lessons, and schedules.",
    experience:
      "As a Full stack Engineer, developed the mobile application, implementing UI/UX design and integrating the calendar for lesson scheduling. Completed the project successfully, appreciated by the team and the project manager.",
    achievements: [
      // <>
      //   Developed the mobile application, implementing UI/UX design and
      //   integrating the calendar for lesson scheduling.
      // </>,
      // <>
      //   Completed the project successfully, appreciated by the team and the
      //   project manager.
      // </>,
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

export const Acheivements = [
  {
    title: "Award of Excellence for Outstanding Accomplishments",
    organizations: [{ year: 2021, name: "Falcon IT Consulting" }],
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
    organization: "Hong Kong University of Science - Coursera",
    year: 2020,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/AYEQNF2AUWJ2",
  },
  {
    title: "IBM Data Science",
    organization: "IBM - Coursera",
    year: 2020,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/GGUZ86AV2BZN",
  },
  {
    title: "Data Visualization with Python",
    organization: "IBM - Coursera",
    year: 2019,
    link: "https://www.coursera.org/account/accomplishments/certificate/4PEJU8B5LTFG",
  },
]

export const Tags = () => {
  return (
    <Box component="span" sx={{ fontSize: 0.1 }}>
      {jobs.join(" Developer, ")} {jobs.join(" Engineer, ")}{" "}
      {HighlightedWords.join(", ")}
    </Box>
  )
}

export const Colour = ({
  children,
  color = "error.main",
}: {
  color?: string
  children: React.ReactNode
}) => {
  return (
    <Box component="span" sx={{ color }}>
      {children}
    </Box>
  )
}
