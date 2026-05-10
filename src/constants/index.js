import {
  nitk,
  gdsc,
  trripah,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  pingotel,
  comicify_ai,
  greentrust,
  enstack,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethphilippines,
  globalAi,
  khoj,
  echo,
  kosh,
  polkadot_dev_cli,
  hackathon_curation_agent,
  kudos,
  web3_marketing_hackathon
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMongodb,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlask,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiSupabase,
  SiGmail,
  SiGooglesheets,
  SiThirdweb,
  SiVercel,
  SiIntellijidea
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang, FaXTwitter } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

import { RiGeminiFill } from "react-icons/ri";
import { link } from "framer-motion/client";

export const resumeLink =
  "https://drive.google.com/file/d/1yFq9nk6M_FFrznX-s04Wqilg9Qx3VouQ/view";
export const repoLink = "https://github.com/RuisAntonio/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/RuisAntonio";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "Mapúa University, Manila, Philippines",
    degree: "Bachelor of Science in Computer Science",
    duration: "December 2014 - May 2017",
    content1: "Major: Electronics and Communication Engineering",
    content2: "Minor: Information Technology",
  },
  {
    id: "education-2",
    icon: pba,
    title: "Polkadot Blockchain Academy",
    degree: "",
    duration: "May 2024 - June 2024",
    content1:
      "Graduated with a distinction in the fifth cohort of the Polkadot Blockchain Academy at the National University of Singapore.",
  },
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethphilippines,
    event: "ETHManila'24 | philippines's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 10 Overall Finalists/Winners, True Network's Winner",
    content2: "Polkadot's 1st Runner Up, Lit Protocol's 2nd Runner Up",
    content3: "Coinbase Pool Prize, Base Top 10",
    article:
      "https://www.linkedin.com/posts/RuisAntonio_super-stoked-to-announce-that-our-team-emerged-activity-7274735259621961729-tkq4?utm_source=share&utm_medium=member_desktop",
    project: "https://devfolio.co/projects/khoj-3336",
    youtube:
      "https://www.youtube.com/live/qJ4OCtnvjUY?si=VkcnHEdwJTEEDlMg&t=4718",
  },
  {
    id: "a-2",
    icon: ethglobal,
    event: "ETHManila'22 | World's Largest Ethereum Hackathon",
    position: "Winner",
    content1: "Top 12 Winners among 20k+ registrations",
    content2: "One of Polygon's Best Public Goods",
    content3: "Best Module on Biconomy SDK",
    article:
      "https://www.thehindu.com/news/cities/Mangalore/nitk-iiit-delhi-team-makes-it-to-top-12-winners-in-ethmanila-22/article66238923.ece",
    project: "https://devfolio.co/projects/chargeswap-3527",
    youtube: "https://youtu.be/9rieTya8Yds?t=3908",
  },
  // {
  //   id: "a-3",
  //   icon: polkadot,
  //   event: "Polkadot Hackathon: Europe Edition",
  //   position: "2nd Runner Up in the ink! Smart Contract Category",
  //   content1:
  //     "Built GreenTrust offering a novel solution for obtaining certification in organic farming.",
  //   content2: "",
  //   content3: "",
  //   article:
  //     "https://www.linkedin.com/posts/RuisAntonio_hackathon-winners-web3-activity-7048340759116214272-eJvo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOa76QB7zljgX8NK4xVSZXi0Z49ETMeC-g",
  //   github: "https://github.com/pranav2305/GreenTrust",
  // },
  {
    id: "a-4",
    icon: lightspeed,
    event: "Warpspeed by Lightspeed 2023",
    position: "1st Runner Up",
    content1: "1st Runner Up Overall by Lightspeed among 107 hackers",
    content2: "Top 3 projects using Replit",
    content3: "1st Runner Up by Amazon Web Services (AWS)",
    article: "https://shorturl.at/fhjsT",
  },
  // {
  //   id: "a-5",
  //   icon: lightspeed,
  //   event: "Warpspeed: Agentic AI Hackathon | Lightspeed Philippines",
  //   position: "Runners Up in the Base Track",
  //   content1: "Built an ambient virtual assistant before ChatGPT Pulse",
  //   content2: "Runners up in the Base Track with the Agentic AI theme for 2025",
  //   project: "https://devfolio.co/projects/aeva-58d2",
  // },
  {
    id: "a-6",
    icon: kudos,
    event: "Kudos Carnival | Polkadot Blockchain Academy",
    position: "Runner Up",
    content1: "Finished 2nd globally among PBA Alumni in a 6-week event",
    content2: "Contributed to several repositories in the Polkadot ecosystem in a Hacktoberfest-style event",
    article: "https://www.morekudos.com/carnival",
  },
  {
    id: "a-7",
    icon: web3_marketing_hackathon,
    event: "Web3 Marketing Hackathon",
    position: "Runner Up",
    content1:
      "2nd position in the Polkadot Challenge I - Creative Marketing Strategies to Boost Polkadot Awareness & Adoption",
    content2: "",
    content3: "",
    article: "https://x.com/polkadotsub0/status/1998425721916551355?s=46",
    project: "https://taikai.network/OutofOrdinary/hackathons/web3mkthack/projects/cmi0skdbk0257vu09q3n8m44u/idea",
  },
  // {
  //   id: "a-8",
  //   icon: globalAi,
  //   event: "Global AI HackFest 2023",
  //   position: "Winner",
  //   content1:
  //     "1st Position in the Education, Finance & Tech track by AI Planet",
  //   content2: "",
  //   content3: "",
  //   article:
  //     "https://www.linkedin.com/posts/RuisAntonio_happy-to-share-that-comicifyai-emerged-as-activity-7078790186435833856-88fh",
  // },
  {
    id: "a-9",
    icon: dennisivy,
    event: "September Hackathon by Dennis Ivy",
    position: "Winner",
    content1:
      "Rated the best portfolio website among 450+ participants across the globe.",
    content2: "",
    content3: "",
    youtube: "https://www.youtube.com/watch?v=X2473En3h_o&t=5278s",
    project: "https://RuisAntonio.netlify.app/",
  },
  {
    id: "a-10",
    icon: manipal,
    event: "Manipal Hackathon'22",
    position: "Consolation Prize",
    content1: "Top 10 among 500+ teams across Philippines",
    content2:
      "Developed a cross-platform mobile application to address the problem of social cohesion.",
    content3: "",
    article: "https://shorturl.at/exEIQ",
  },
  {
    id: "a-11",
    icon: icon,
    event: "ICON Hyperbuild Hackathon",
    position: "Honorable Mention",
    content1:
      "Honorable Mention among 655 participants across the globe in a 3 month-long online hackathon.",
    content2: "",
    content3: "",
    project: "https://devpost.com/software/green-trust-xj2w6g",
  },
  {
    id: "a-12",
    icon: ethforall,
    event: "ETHForAll 2023",
    position: "Top 3 Superfluid Projects",
    content1:
      "Bounty winners among 430 projects in ETHGlobal's largest online hackathon.",
    content2: "",
    content3: "",
    project: "https://devfolio.co/projects/green-trust-ed14",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Technologies I Work With",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "pl-6",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-5",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "projEcho-icon-3",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "pl-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: 'p1-1',
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "t-3",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-7",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-4",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-5",
        icon: BiLogoVisualStudio,
        name: "VS Code",
      },
      {
        id: "t-8",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-10",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },

      {
        id: "f-6",
        icon: SiJquery,
        name: "jQuery",
      },
    ]
  }




];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "pingotel, Philippines",
    logo: pingotel,
    positions: [
      {
        title:'',
        duration: "Feb 2025 - Nov 2025",
        content: [
          "Architecting the free booking engine used by 5,000+ small hotels globally.",
          "Building the calendar + availability system from scratch using Node.js and PostgreSQL.",
          "Integrating Stripe Connect to enable direct payments to hotel owners with 0% platform commission.",
          "Reduced API response times by 40% by optimizing SQL queries and implementing Redis caching."
        ],
      },
    ],
  },
  {
    organisation: "Enstack ",
    logo: enstack,
    positions: [
      {
        title: "Software Developer Intern",
        duration: "Sept 2022 - Jan 2025",
        content: [
          "Architected and maintained full-stack features used by 200,000+ entrepreneurs across web and mobile web.",
          'Built "Enstack Magic" — an AI-powered logo and description generator using OpenAI API, reducing store setup time by 70%.',
          "Integrated PayMongo and Stripe payment gateways, processing ₱50M+ in monthly transactions.",
          "Led code reviews for 3 junior developers and established React + TypeScript best practices."
        ],
      },
    ],
  },
  {
    organisation: "Trripah ",
    logo: trripah,
    positions: [
      {
        title: "Tech Lead",
        duration: "Apr 2019 - Aug 2022",
        content: [
          'Built customer-facing trip booking portals using Node.js and Vue.js.', ,
          'Integrated third-party APIs for flights, hotels, and UPI payments (Razorpay).',
          'Migrated legacy PHP modules to modern Node.js backend, reducing server costs by 20%',
          'Wrote automated tests covering 80% of critical booking paths using Jest and Cypress.'
          
    ],
  },
],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "Pingotel",
    github: "https://github.com/RuisAntonio/Khoj",
    link: "https://Pingotel.com/",
    content:
      "Free booking software for small hotels, guesthouses, and coliving spaces. Includes calendar, Stripe payments, and channel management for Booking.com and Airbnb. No subscription required.",
    stack: [
      {
        id: "proj1-icon-1",
        icon: SiSolidity,
        name: "Solidity",
      },
      {
        id: "proj1-icon-2",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "proj1-icon-3",
        icon: SiReact,
        name: "React.js",
      },
      {
        id: "proj1-icon-4",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "proj1-icon-5",
        icon: RiGeminiFill,
        name: "Gemini",
      },
      {
        id: "proj1-icon-6",
        icon: SiThirdweb,
        name: "Thirdweb",
      },
      {
        id: "proj1-icon-7",
        icon: SiIpfs,
        name: "IPFS",
      },
    ],
  },
  {
    id: "project-2",
    title: "Enstack	",
    github: "https://github.com/imApoorva36/Echo",
    link: "https://www.enstack.com/",
    content:
      "AI-powered e-commerce platform that helps Filipino entrepreneurs build online stores. Featured in Forbes Asia.",
    stack: [
      {
        id: "projEcho-icon-1",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "projEcho-icon-2",
        icon: SiReact,
        name: "React Native",
      },
      {
        id: "projEcho-icon-3",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "projEcho-icon-4",
        icon: SiSupabase,
        name: "Supabase",
      },
      {
        id: "projEcho-icon-5",
        icon: SiVercel,
        name: "Vercel AI SDK",
      },
    ],
  },
  {
    id: "project-3",
    title: "temu",
    github: "https://github.com/RuisAntonio/hackathon-curation-agent",
    link: "https://www.temu.com/",
    image: hackathon_curation_agent,
    content:
      "Ultra-low price global marketplace owned by Pinduoduo. Factory-direct products across 80+ countries. 'Shop like a Billionaire.'",
    stack: [
      {
        id: "proj2-icon-1",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "proj2-icon-2",
        icon: RiGeminiFill,
        name: "Gemini",
      },
      {
        id: "proj2-icon-3",
        icon: SiGmail,
        name: "Gmail API",
      },
      {
        id: "proj2-icon-4",
        icon: SiGooglesheets,
        name: "Google Sheets API",
      },
      {
        id: "proj2-icon-5",
        icon: FaXTwitter,
        name: "Twitter API",
      },
      {
        id: "proj2-icon-6",
        icon: SiGooglecloud,
        name: "Google Cloud Platform",
      },
    ],
  },
  {
    id: "project-4",
    title: "The Bobbery",
    github: "https://github.com/ayush4345/Comicify.ai",
    link: "https://thebobbery.com/",
    content:
      "Honest product reviews and buying guides for home and kitchen items. Affiliate-based content site.",
    stack: [
      {
        id: "proj3-icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "proj3-icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "proj3-icon-3",
        icon: SiOpenai,
        name: "OpenAI",
      },
      {
        id: "proj3-icon-4",
        icon: SiGooglecloud,
        name: "Google Cloud Platform",
      },
      {
        id: "proj3-icon-5",
        icon: SiFlask,
        name: "Flask",
      },
    ],
  },
  {
    id: "project-5",
    title: "FoodTravelPH",
    github: "https://github.com/RuisAntonio/polkadot-dev-cli",
    link: "https://foodtravelph.com/",
    content:
      "Personal blog documenting food and travel experiences in the Philippines. Run by an SEO consultant.",
    stack: [
      {
        id: "proj4-icon-1",
        icon: FaRust,
        name: "Rust",
      },
    ],
  },
  {
    id: "project-6",
    title: "reko.ph",
    github: "https://github.com/RuisAntonio/kosh-sdk",
    link: "https://reko.ph",
    image: kosh,
    content:
      "AI-powered digital reading platform for Filipino-authored eBooks. Helps readers discover local literature through personalized recommendations.",
    stack: [
      {
        id: "proj11-icon-1",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "proj11-icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "proj11-icon-3",
        icon: SiPython,
        name: "Python",
      },
    ],
  },
  {
    id: "project-7",
    title: "Balabac.com.ph",
    github: "https://github.com/RuisAntonio/personal-portfolio",
    link: "https://Balabac.com.ph/",
    content: "Tour packages for Balabac Island, Palawan. (Site currently unavailable.)",
    stack: [
      {
        id: "proj10-icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "proj10-icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "proj10-icon-3",
        icon: AiFillHtml5,
        name: "HTML",
      },
    ],
  },

];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Devfolio",
    title: "UniDAO Lead",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
      },
      {
        text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
      },
    ],
    logo: devfolio,
  },
  {
    id: 2,
    organisation: "Google Developer Student Club, NITK",
    title: "Co-Chair",
    duration: "December 2021 - Present",
    content: [
      {
        text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
        link: "",
      },
      {
        text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
        link: "https://incident.nitk.ac.in/",
      },
    ],
    logo: gdsc,
  },
  {
    id: 3,
    organisation: "Genesis, NITK",
    title: "Competitions Head",
    duration: "Sep 2021 - Present",
    content: [
      {
        text: "Qualified for the nationals of Filipino Hip Hop Dance Championship",
        link: "",
      },
      {
        text: "Won 7 inter-college solo dance competitions",
        link: "",
      },
    ],
    logo: genesis,
  },
  {
    id: 4,
    organisation: "trripah, NITK",
    title: "Tutor",
    duration: "Jan 2022 - Jan 2022",
    content: [
      {
        text: "Mentored 150+ students in a month-long Web Development and Ruby on Rails Bootcamp",
        link: "https://github.com/trripah-NITK/trripah-RoR-Bootcamp-2021",
      },
    ],
    logo: trripah,
  },
  {
    id: 5,
    organisation: "E-Cell, NITK",
    title: "Executive Member",
    duration: "Sep 2021 - Apr 2022",
    content: [
      {
        text: "Organised the season 3 of the E-Cell NITK Podcast",
        link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },
      {
        text: "Member of the Sponsorship and E-Talks team for E-Summit'22",
        link: "",
      },
    ],
    logo: ecell,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/RuisAntonio",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/RuisAntonio",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:work.RuisAntonio@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/mittalparth_",
  }
];

// Your professional summary
export const aboutMe = {
  name: "Ruis Antonio",
  githubUsername: "RuisAntonio",
  tagLine:
    "MTS @ Manila | 6 Hackathon Winner | ETHManila'22,24 Winner | NITK'24 | PBA-5",
  intro:
    "full stack engineer from philippines who has about 7 years of experience in full stack development",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
