export const shadow = (pathname: string) => {
  let pathClass;
  switch (pathname) {
    case "/":
      pathClass = "shadow-[#ff5900]";
      break;
    case "/contact":
      pathClass = "shadow-[#51be8d]";
      break;
    case "/about":
      pathClass = "shadow-[#31a0d0]";
      break;
    case "/work":
      pathClass = "shadow-[#a61156]";
      break;
    default:
      pathClass = "";
  }
  return pathClass;
};
