import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

import {
  eCommerceProImg,
  movieStudioImg,
  cyberBlogImg,
  amazonCloneImg,
  portfolioImg,
  portfolioImgTwo
} from "../assets/index";

// =================== Project Data start here ======================
export const projectsData = [
  {
    _id: 1001,
    image: eCommerceProImg,
    title: "Supergear Online Shopping",
    des: "Personalize Blog where you can view your content and others can share their contents once you approved.",
    link: "https://youtu.be/JkOaWPFihwo"
  },
  {
    _id: 1002,
    image: movieStudioImg,
    title: "Movie Studio",
    des: "Personalize Blog where you can view your content and others can share their contents once you approved.",
    link: "https://youtu.be/_j9q-LrsyUo"
  },
  {
    _id: 1003,
    image: cyberBlogImg,
    title: "Personalized Blog Website",
    des: "Personalize Blog where you can view your content and others can share their contents once you approved.",
    link: "https://youtu.be/3UUVHSYHEU0"
  },
  {
    _id: 1004,
    image: amazonCloneImg,
    title: "Amazon Clone Pro",
    des: "Personalize Blog where you can view your content and others can share their contents once you approved.",
    link: "https://youtu.be/vviFia-Stqk"
  },
  {
    _id: 1005,
    image: portfolioImgTwo,
    title: "Orebi Online Shopping",
    des: "Personalize Blog where you can view your content and others can share their contents once you approved.",
    link: "https://youtu.be/fkrDAaAMcpY"
  },
  {
    _id: 1006,
    image: portfolioImg,
    title: "Dynamic Portfolio",
    des: "Personalize Blog where you can view your content and others can share their contents once you approved.",
    link: "https://youtu.be/lJ2EBYN0C70"
  }
];
// =================== Project Data end here ========================
// =================== FAQ Data start here ==========================
export const FaqData = [
  {
    id: "01",
    title: "Where is my order",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi saepe autem nihil ex at sapiente voluptatum veritatis iure aliquid obcaecati."
  },
  {
    id: "02",
    title: "What are the delivery types?",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi saepe autem nihil ex at sapiente voluptatum veritatis iure aliquid obcaecati."
  }
];
// =================== FAQ Data end here ============================
export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80
  },
  {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40
  }
];

export const Socials = [
  {
    name: "Discord",
    src: "/instagram.svg"
  },
  {
    name: "Facebook",
    src: "/facebook.svg"
  },
  {
    name: "Instagram",
    src: "/discord.svg"
  }
];
export const Projects = [
  {
    title: "Modern Nextjs Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/NextWebsite.png"
  },
  {
    title: "Space Themed Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/SpaceWebsite.png"
  },
  {
    title: "Modern Nextjs Portfolio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/WebPortfolio.png"
  },
  {
    title: "Matrix themed Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/Matrix.png"
  }
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/"
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills"
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects"
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me"
  }
];
/** @format */

export type billingPlanType = {
  planType: string;
  monthlyPrice: number;
  yearlyPrice: number;
  imgurl: string;
};

export const bilingPlans: billingPlanType[] = [
  {
    planType: "arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    imgurl: "/images/icon-arcade.svg"
  },
  {
    planType: "advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    imgurl: "/images/icon-advanced.svg"
  },
  {
    planType: "pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    imgurl: "/images/icon-pro.svg"
  }
];
