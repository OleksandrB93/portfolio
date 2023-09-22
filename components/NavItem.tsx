"use client";
import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
interface NavItemProps {
  label: string;
  id: string;
  path: string;
  icon: LucideIcon;
  key: string;
  color: string;
  colorMuted: string;
}

const NavItem = ({
  path,
  icon: Icon,
  id,
  label,
  color,
  colorMuted,
}: NavItemProps) => {
  const pathname = usePathname();

  let pathClass: string;
  switch (pathname) {
    case "/":
      // pathClass = "#ff5900";
      pathClass = "#ff5900 0px 0px 10px 0.2px";
      break;
    case "/contact":
      // pathClass = "#318bd0";
      pathClass = "#00bfff 0px 0px 10px 0.2px";
      break;
    case "/about":
      // pathClass = "#22bf78";
      pathClass = "#51be8d 0px 0px 10px 0.2px";
      break;
    case "/projects":
      // pathClass = "#bc0e5f";
      pathClass = "#ff0077 0px 0px 10px 0.2px";
      break;
    default:
      pathClass = "";
  }

  return (
    <motion.div
      key={id}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{
        scale: 0.8,
        rotate: -10,
        borderRadius: "100%",
      }}
    >
      <Link
        style={{
          boxShadow: pathname === path ? pathClass : "",
        }}
        href={path}
        key={id}
        className={cn(
          "relative group rounded-md  text-sm group flex flex-col p-1 w-full justify-start items-center font-medium cursor-pointer transition"
        )}
      >
        <Icon
          className={cn(
            `h-9 w-9 p-[2px] rounded-[6px]`,
            pathname === path ? color : colorMuted
            // pathname === path ? "shadow-md" : ""
          )}
        />
        <motion.span
          className={cn(
            "absolute top-[100%] -left-50 py-1 px-2 bg-foreground font-bold rounded-sm opacity-1 transition-opacity duration-600 opacity-0 group-hover:opacity-100",
            pathname === path ? color : "text-background opacity-0"
          )}
        >
          {label}
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default NavItem;
