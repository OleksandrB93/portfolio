import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface IconProps {
  name: LucideIcon;
  color?: string;
  size?: string;
  link: string;
  label: string;
}

const Icon = ({ name: Icon, color, size, link, label }: IconProps) => {
  return (
    <a
      href={link}
      style={{ boxShadow: ` ${color} 0px 3px 8px` }}
      className="relative group bg-background flex justify-center items-center rounded-full shadow-lg cursor-pointer"
    >
      <motion.div
        className="group animate-link"
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon
          color={color}
          size={size}
          className="m-2 transition-all duration-500 stroke-2"
        />
        <p
          style={{ color: `${color}` }}
          className="absolute top-1/1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
        text-[14px] text-semibold bg-background py-[1px] px-2 rounded-md"
        >
          {label}
        </p>
      </motion.div>
    </a>
  );
};

export default Icon;
