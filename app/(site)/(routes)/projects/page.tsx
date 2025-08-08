"use client";

import ProjectItem from "@/components/ProjectItem";
import AxiosIcon from "@/components/icons/AxiosIcon";
import CSSIcon from "@/components/icons/CSSIcon";
import ClerkIcon from "@/components/icons/ClerkIcon";
import CloudinaryIcon from "@/components/icons/CloudinaryIcon";
import EmailJsIcon from "@/components/icons/EmailJsIcon";
import EmotionIcon from "@/components/icons/EmotionIcon";
import ExpressIcon from "@/components/icons/ExpressIcon";
import FramerMotionIcon from "@/components/icons/FramerMotionIcon";
import GraphQLIcon from "@/components/icons/GraphQLIcon";
import HTMLIcon from "@/components/icons/HTMLIcon";
import JSIcon from "@/components/icons/JSIcon";
import MDBIcon from "@/components/icons/MDBIcon";
import MongodbIcon from "@/components/icons/MongodbIcon";
import NextAuth from "@/components/icons/NextAuth";
import NextIcon from "@/components/icons/NextIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import OpenAiIcon from "@/components/icons/OpenAiIcon";
import PrismaIcon from "@/components/icons/PrismaIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import ReduxIcon from "@/components/icons/ReduxIcon";
import SassIcon from "@/components/icons/SassIcon";
import ShadIcon from "@/components/icons/ShadIcon";
import SocketIcon from "@/components/icons/SocketIcon";
import StripeIcon from "@/components/icons/StripeIcon";
import SupabaseIcon from "@/components/icons/SupabaseIcon";
import SwiperIcon from "@/components/icons/SwiperIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import TypeScriptIcon from "@/components/icons/TypeScriptIcon";
import ZustandIcon from "@/components/icons/ZustandIcon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShieldCheck } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const ProjectsPage = () => {
  const projects = [
    {
      img:'/imgs/projects/GraphQL.png',
      title: 'Next Posts App',
      description: 'his application was created to demonstrate the functionality of authentication, GraphQL, and Apollo.',
      link:'https://nextjs-demo-theta-ashen.vercel.app',
      github:'https://github.com/OleksandrB93/nextjs-demo',
      techs:[
        { icon: <NextIcon />, label: "Next.js" },
        { icon: <TailwindIcon />, label: "Tailwind" },
        { icon: <TypeScriptIcon />, label: "TypeScript" },
        { icon: <MongodbIcon />, label: "Mongodb" },
        { icon: <ShadIcon />, label: "Shad" },
        { icon: <ShieldCheck className="text-black w-[44px] h-[44px]" />, label: "Next Auth" },
        {icon: <GraphQLIcon/>, label: "GraphQL"}
      ]
    },
    {
      img: "/imgs/projects/Spotify.jpg",
      title: "Spotify-Clone",
      description:
        "This is a full-stack project for practicing Next.js skills. It uses the Supabase. Authentication is implemented using NextAuth.js with Google provider, GitHub provider, and Email+password methods. Payment through Stripe is also implemented.",
      link: "https://spotify-clone-red-chi.vercel.app/",
      github: "https://github.com/OleksandrB93/spotify-clone",
      techs: [
        { icon: <NextIcon />, label: "Next.js" },
        { icon: <SupabaseIcon />, label: "Supabase" },
        { icon: <TailwindIcon />, label: "Tailwind" },
        { icon: <TypeScriptIcon />, label: "TypeScript" },
        { icon: <ZustandIcon />, label: "Zustand" },
        { icon: <StripeIcon />, label: "Stripe" },
      ],
    },
    {
      img: "/imgs/projects/Weather.jpg",
      title: "Weather forecast",
      description:
        "This is the projectk project for practicing React+TypeSctipt skills. It uses the Weather API.",
      link: "https://oleksandrb93.github.io/weather/",
      github: "https://github.com/OleksandrB93/weather",
      techs: [
        { icon: <ReactIcon />, label: "React" },
        { icon: <TypeScriptIcon />, label: "TypeScript" },
        { icon: <AxiosIcon />, label: "Axios" },
        { icon: <FramerMotionIcon />, label: "FramerMotion" },
        { icon: <TailwindIcon />, label: "Tailwind" },
      ],
    },
    {
      img: "/imgs/projects/vibro.jpg",
      title: "Vibropress",
      description: "This is the Vibropress project.",
      link: "https://www.vibropress.net/",
      github: "https://github.com/OleksandrB93/my-vibropress",
      techs: [
        { icon: <ReactIcon />, label: "React" },
        { icon: <TypeScriptIcon />, label: "TypeScript" },
        { icon: <SwiperIcon />, label: "Swiper" },
        { icon: <FramerMotionIcon />, label: "FramerMotion" },
        { icon: <EmotionIcon />, label: "Emotion" },
      ],
    },
    {
      img: "/imgs/projects/pet.jpg",
      title: "Petly",
      description:
        "This is a full-stack project written in React, using MongoDB and Express. With this project, you can find your perfect pet.",
      link: "https://chidorishar.github.io/Petly-Frontend/",
      github: "https://github.com/OleksandrB93/Petly-Frontend",
      techs: [
        { icon: <ReactIcon />, label: "React" },
        { icon: <ReduxIcon />, label: "Redux" },
        { icon: <TailwindIcon />, label: "Tailwind" },
        { icon: <AxiosIcon />, label: "Axios" },
        { icon: <NodeIcon />, label: "Node.js" },
        { icon: <ExpressIcon />, label: "Express.js" },
        { icon: <CloudinaryIcon />, label: "Cloudinary" },
        { icon: <MongodbIcon />, label: "Mongodb" },
      ],
    },
    {
      img: "/imgs/projects/discord.jpg",
      title: "Discord-clone",
      description:
        "This is a full-stack project for practicing Next.js skills. It uses the Planetscale. Authentication is implemented using Clerk with Google provider, GitHub provider, and Email+password methods. Chat functionality for communication, including text messaging, audio and video calls, as well as file sharing, is also implemented.",
      link: "https://discord-clone-production-5f3f.up.railway.app/",
      github: "https://github.com/OleksandrB93/discord-clone",
      techs: [
        { icon: <NextIcon />, label: "Next.js" },
        { icon: <TypeScriptIcon />, label: "TypeScript" },
        { icon: <TailwindIcon />, label: "Tailwind" },
        { icon: <AxiosIcon />, label: "Axios" },
        { icon: <ZustandIcon />, label: "Zustand" },
        { icon: <ClerkIcon />, label: "Clerk" },
        { icon: <AxiosIcon />, label: "Axios" },
        { icon: <ZustandIcon />, label: "Zustand" },
        { icon: <PrismaIcon />, label: "Prisma" },
        { icon: <ShadIcon />, label: "Shad" },
        { icon: <SocketIcon />, label: "Socket" },
      ],
    },
    {
      img: "/imgs/projects/Netflix.jpg",
      title: "Netflix-Clone",
      description:
        "This is a full-stack project for practicing Next.js skills. It uses the  MongoDB database and the Prisma ORM client. Authentication is implemented using NextAuth.js with Google provider, GitHub provider, and Email+password (JWS) methods.",
      link: "https://netflix-nextjs-peach.vercel.app/",
      github: "https://github.com/OleksandrB93/netflix-nextjs/",
      techs: [
        { icon: <NextIcon />, label: "Next.js" },
        { icon: <TypeScriptIcon />, label: "TypeScript" },
        { icon: <TailwindIcon />, label: "Tailwind" },
        { icon: <PrismaIcon />, label: "Prisma" },
        { icon: <AxiosIcon />, label: "Axios" },
        { icon: <NextAuth />, label: "NextAuth" },
        { icon: <MongodbIcon />, label: "Mongodb" },
        { icon: <EmotionIcon />, label: "Emotion" },
        { icon: <ZustandIcon />, label: "Zustand" },
        { icon: <FramerMotionIcon />, label: "FramerMotion" },
      ],
    },

    {
      img: "/imgs/projects/Saas-Ai.jpg",
      title: "Genius-ai",
      description:
        "This is a full-stack project for practicing Next.js skills. It uses the Planetscale. Authentication is implemented using Clerk with Google provider, GitHub provider, and Email+password methods. Payment through Stripe is also implemented.",
      link: "https://genius-pjog.vercel.app/",
      github: "https://github.com/OleksandrB93/genius-ai",
      techs: [
        { icon: <NextIcon />, label: "Next.js" },
        { icon: <TypeScriptIcon />, label: "TypeScript" },
        { icon: <TailwindIcon />, label: "Tailwind" },
        { icon: <ClerkIcon />, label: "Clerk" },
        { icon: <PrismaIcon />, label: "Prisma" },
        { icon: <AxiosIcon />, label: "Axios" },
        { icon: <ZustandIcon />, label: "Zustand" },
        { icon: <StripeIcon />, label: "Stripe" },
        { icon: <OpenAiIcon />, label: "OpenAi" },
        { icon: <ShadIcon />, label: "Shad" },
      ],
    },

    {
      img: "/imgs/projects/Funiro.jpg",
      title: "Funiro",
      description:
        "The landing page was created using React + Typescript. The layout is made for two breakpoints.",
      link: "https://oleksandrb93.github.io/funiro/",
      github: "https://github.com/OleksandrB93/funiro",
      techs: [
        { icon: <ReactIcon />, label: "React" },
        { icon: <TypeScriptIcon />, label: "TypeScript" },
        { icon: <TailwindIcon />, label: "Tailwind" },
        { icon: <FramerMotionIcon />, label: "FramerMotion" },
        { icon: <SwiperIcon />, label: "Swiper" },
      ],
    },
    {
      img: "/imgs/projects/gamePlatform.jpg",
      title: "Gameplatform",
      description:
        "The landing page was created using React + Typescript. The layout is made for two breakpoints.",
      link: "https://oleksandrb93.github.io/game-platform/",
      github: "https://github.com/OleksandrB93/game-platform",
      techs: [
        { icon: <ReactIcon />, label: "React" },
        { icon: <TypeScriptIcon />, label: "TypeScript" },
        { icon: <TailwindIcon />, label: "Tailwind" },
        { icon: <FramerMotionIcon />, label: "FramerMotion" },
        { icon: <SwiperIcon />, label: "Swiper" },
        { icon: <EmailJsIcon />, label: "EmailJs" },
      ],
    },
    {
      img: "/imgs/projects/filmoteka.jpg",
      title: "FILMOTECA",
      description:
        "A short-term team project by 6 collaborators. I was a Team Lead assistant & Front-end developer of the project. I implement closing of the modal window by pressing the ESC key and by clicking outside the modal window, do not forget to remove the listeners, Connect / spin Loader (spinner) for asynchronous requests, Slider to the movie library, implement search and display of movies by keyword. The website created from scratch by the prototype in Figma. The project was ready on time within 7 days.",
      //    Technology used: Javascript (variables, types, branching, arrays, function, object, spread/rest, destructuring, callbacks, arrays methods, pure functions method chaining, function methods, prototypes, DOM, events, throttle/debounce, lazy loading few node.js, npm, code modularity, webpack/parcel json, web storage, asynchrony, date and time promises, HTTP/s, rest API, AJAX, tui pagination, async/await, fetch, axios, handlerbars)
      //   NPM packages
      //   HTML (tags, attributes, semantics, clean structure, code style)
      //   CSS (selector specificity, pseudo-class, css variables, pseudo-elements, font properties, box model, element geometry, element types, image types, gradient, shadow, raster/vector graphics, svg sprites positioned elements, animations, transitions, forms, link js)
      //   SASS
      //   BEM
      //   Adaptive and responsive layout
      //   Other skills (Communication, Presentations, Teamwork, SMART, Trello, Postman)",
      link: "https://victor-rochnyak.github.io/Filmoteka/",
      github: "https://github.com/Victor-Rochnyak/Filmoteka",
      techs: [
        { icon: <SwiperIcon />, label: "Swiper" },
        { icon: <AxiosIcon />, label: "Axios" },
        { icon: <JSIcon />, label: "JavaScript" },
        { icon: <MDBIcon />, label: "Movies DB" },
        { icon: <SassIcon />, label: "Sass" },
      ],
    },
    {
      img: "/imgs/projects/iceCream.jpg",
      title: "IceCream",
      description:
        "This is a team project that we did with my group mates (11 people). I was front-end developer. I made a section Hero-Head, and animation. The landing page is created using HTML, CSS, Java Script. The markup is created for three breakpoints: 480px, 768px, and 1200px. Observed semantics according to HTML5 standards. The sizes of vector and raster graphics are optimized, there is support for displaying pictures for retina screens. Added page favicon. BEM methodology, SASS preprocessor were also used.",
      link: "https://victor-rochnyak.github.io/IceCream/",
      github: "https://github.com/Victor-Rochnyak/IceCream",
      techs: [
        { icon: <JSIcon />, label: "JavaScript" },
        { icon: <HTMLIcon />, label: "HTML" },
        { icon: <CSSIcon />, label: "CSS" },
      ],
    },
    {
      img: "/imgs/projects/webStudio.jpg",
      title: "WebStudio",
      description:
        "The landing page was created using only HTML and CSS. The layout is made for three breakpoints: 480px, 768px and 1200px. All background and content raster images are responsive and support x1 and x2 screens. BEM methodology, SASS preprocessor were also used.",
      link: "https://oleksandrb93.github.io/goit-markup-hw-08/",
      github: "https://github.com/OleksandrB93/goit-markup-hw-08",
      techs: [
        { icon: <JSIcon />, label: "JavaScript" },
        { icon: <HTMLIcon />, label: "HTML" },
        { icon: <CSSIcon />, label: "CSS" },
      ],
    },
  ];

  return (
    <div
      style={{ position: "absolute", top: 0, left: 0, zIndex: 30 }}
      className="h-[500px] w-[400px] ml-[430px] rounded-r-md bg-background flex justify-center"
    >
      {/* @ts-ignore */}
      <ScrollArea className="h-[500px] w-[350px] rounded-md border-none p-4">
        {projects.map((project) => (
          <ProjectItem key={uuidv4()} {...project} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default ProjectsPage;
