"use client";

import NavItem from "./NavItem";
import { ModeToggle } from "./ThemeButton";
import Poster from "./Poster";
import { User, Mail, GalleryVerticalEnd, Home } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { listVariants } from "@/configs/configMotion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const routes = [
  {
    label: "Home",
    id: uuidv4(),
    path: "/",
    icon: Home,
    color: "text-[#ff5900]",
    colorMuted: "text-[#ff5900]/60",
  },
  {
    label: "About",
    id: uuidv4(),
    path: "/about",
    icon: User,
    color: "text-[#22bf78]",
    colorMuted: "text-[#51be8d]/60",
  },
  {
    label: "Contact",
    id: uuidv4(),
    path: "/contact",
    icon: Mail,
    color: "text-[#318bd0]",
    colorMuted: "text-[#31a0d0]/60",
  },
  {
    label: "Projects",
    id: uuidv4(),
    path: "/projects",
    icon: GalleryVerticalEnd,
    color: "text-[#de0e6f]",
    colorMuted: "text-[#a61156]/60",
  },
];

const NavList = () => {
  const [isPathChanged, setIsPathChanged] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPathChanged(true);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [pathname, isPathChanged]);

  return (
    <motion.ul className="relative w-[80px] h-[500px] flex flex-col justify-center items-center gap-y-10 bg-background rounded-l-lg">
      {routes.map((route, i) => (
        <motion.li
          onClick={() => {
            if (route.path !== pathname) {
              setIsPathChanged(false);
            }
          }}
          key={route.id}
          initial="hidden"
          animate={isPathChanged ? "visible" : "hidden"}
          exit="hidden"
          variants={listVariants}
          custom={i}
        >
          <NavItem key={route.id} {...route} />
        </motion.li>
      ))}
      <Poster />
      <ModeToggle />
    </motion.ul>
  );
};

export default NavList;
