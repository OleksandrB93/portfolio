export const slideInFromUp = {
  hidden: { y: "-100%" },
  visible: { y: "0%" },
};

export const slideInFromLeft = {
  hidden: { x: "-100%" },
  visible: { x: "0%" },
};

export const listVariants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
  hidden: (i: number) => ({
    opacity: 0,
    x: -100,
    transition: {
      delay: i * 0.1,
    },
  }),
};