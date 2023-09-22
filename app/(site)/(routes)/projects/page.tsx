"use client";

import ProjectItem from "@/components/ProjectItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { v4 as uuidv4 } from "uuid";

const ProjectsPage = () => {
  const projects = [
    {
      img: "/imgs/projects/Spotify.jpg",
      title: "Spotify-Clone",
      description:
        "This is the project for practicing Next.js skills. It uses the Supabase. Authentication is implemented using NextAuth.js with Google provider, GitHub provider, and Email+password methods. Payment through Stripe is also implemented.",
      link: "https://spotify-clone-red-chi.vercel.app/",
      github: "https://github.com/OleksandrB93/spotify-clone",
    },
    {
      img: "/imgs/projects/discord.jpg",
      title: "Discord-clone",
      description:
        "This is the project for practicing Next.js skills. It uses the Planetscale. Authentication is implemented using Clerk with Google provider, GitHub provider, and Email+password methods. Chat functionality for communication, including text messaging, audio and video calls, as well as file sharing, is also implemented.",
      link: "https://discord-clone-production-5f3f.up.railway.app/",
      github: "https://github.com/OleksandrB93/discord-clone",
    },
    {
      img: "/imgs/projects/Netflix.jpg",
      title: "Netflix-Clone",
      description:
        "This is a small project for practicing Next.js skills. It uses the  MongoDB database and the Prisma ORM client. Authentication is implemented using NextAuth.js with Google provider, GitHub provider, and Email+password methods.",
      link: "https://netflix-nextjs-peach.vercel.app/",
      github: "https://github.com/OleksandrB93/netflix-nextjs/",
    },

    {
      img: "/imgs/projects/Saas-Ai.jpg",
      title: "Genius-ai",
      description:
        "This is the project for practicing Next.js skills. It uses the Planetscale. Authentication is implemented using Clerk with Google provider, GitHub provider, and Email+password methods. Payment through Stripe is also implemented.",
      link: "https://genius-pjog.vercel.app/",
      github: "https://github.com/OleksandrB93/genius-ai",
    },

    {
      img: "/imgs/projects/Funiro.jpg",
      title: "Funiro",
      description:
        "The landing page was created using React + Typescript. The layout is made for two breakpoints.",
      link: "https://oleksandrb93.github.io/funiro/",
      github: "https://github.com/OleksandrB93/funiro",
    },
    {
      img: "/imgs/projects/gamePlatform.jpg",
      title: "Gameplatform",
      description:
        "The landing page was created using React + Typescript. The layout is made for two breakpoints.",
      link: "https://oleksandrb93.github.io/game-platform/",
      github: "https://github.com/OleksandrB93/game-platform",
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
    },
    {
      img: "/imgs/projects/iceCream.jpg",
      title: "IceCream",
      description:
        "This is a team project that we did with my group mates (11 people). I was front-end developer. I made a section Hero-Head, and animation. The landing page is created using HTML, CSS, Java Script. The markup is created for three breakpoints: 480px, 768px, and 1200px. Observed semantics according to HTML5 standards. The sizes of vector and raster graphics are optimized, there is support for displaying pictures for retina screens. Added page favicon. BEM methodology, SASS preprocessor were also used.",
      link: "https://victor-rochnyak.github.io/IceCream/",
      github: "https://github.com/Victor-Rochnyak/IceCream",
    },
    {
      img: "/imgs/projects/webStudio.jpg",
      title: "WebStudio",
      description:
        "The landing page was created using only HTML and CSS. The layout is made for three breakpoints: 480px, 768px and 1200px. All background and content raster images are responsive and support x1 and x2 screens. BEM methodology, SASS preprocessor were also used.",
      link: "https://oleksandrb93.github.io/goit-markup-hw-08/",
      github: "https://github.com/OleksandrB93/goit-markup-hw-08",
    },
  ];

  return (
    <div
      style={{ position: "absolute", top: 0, left: 0, zIndex: 30 }}
      className="h-[500px] w-[400px] ml-[430px] rounded-r-md bg-background flex justify-center"
    >
      <ScrollArea className="h-[500px] w-[350px] rounded-md border-none p-4">
        {projects.map((project) => (
          <ProjectItem key={uuidv4()} {...project} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default ProjectsPage;
