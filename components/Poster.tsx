import { cn } from "@/lib/utils";
import { Facebook, Github, Linkedin, Mail, Send } from "lucide-react";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import Avatar from "./Avatar";
const Poster = () => {
  const pathname = usePathname();

  let pathClass: string;
  switch (pathname) {
    case "/":
      pathClass = "#ff5900";
      // pathClass = "shadow-[#ff5900]";
      break;
    case "/contact":
      pathClass = "#31bbe9";
      // pathClass = "shadow-[#51be8d]";
      break;
    case "/about":
      pathClass = "#22bf78";
      // pathClass = "shadow-[#31a0d0]";
      break;
    case "/projects":
      pathClass = "#bc0e5f";
      // pathClass = "shadow-[#a61156]";
      break;
    default:
      pathClass = "";
  }

  const links = [
    {
      name: Mail,
      label: "EMail",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=barabashsan4ik@gmail.com",
    },
    {
      name: Linkedin,
      label: "Linkedin",
      link: "https://www.linkedin.com/in/olexandr-barabash-034812139/",
    },
    {
      name: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/San4ik7/",
    },
    { name: Send, label: "Telegram", link: "https://t.me/Oleksandr_Barabash" },
    { name: Github, label: "GitHub", link: "https://github.com/OleksandrB93" },
  ];

  return (
    <div
      style={{
        boxShadow: `0px 2px 10px 0px ${pathClass}, 0px 2px 25px 0px ${pathClass}`,
        border: `4px solid ${pathClass}`,
      }}
      className={cn(
        "transition-all duration-1000 absolute top-50 left-[80px] h-[550px] rounded-md bg-no-repeat bg-top bg-cover glass-effect bg-hero w-[350px] ",
        pathClass
      )}
    >
      <div className="relative flex flex-col items-center">
        <div className="absolute top-96 left-50">
          <p className="text-3xl font-bold font-serif ">Oleksandr Barabash</p>
          <p
            style={{ color: `${pathClass}` }}
            className="text-xl font-bold  transition-all duration-500"
          >
            Developer
          </p>
          <ul className="flex justify-center gap-x-5 mt-4">
            {links.map(({ name, link, label }) => (
              <li key={uuidv4()} >
                <Icon name={name} color={pathClass} link={link} label={label}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Poster;
