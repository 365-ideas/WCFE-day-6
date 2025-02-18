import { ease } from "./ease";

export const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants,
  };
};

export const presenceAnim = (variants, state) => {
  return {
    initial: "initial",
    animate: state ? "animate" : "initial",
    variants,
  };
};

export const LoaderAnim = {
  hero: {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: ease.inOutCirc,
      },
    },
  },
  image: {
    initial: {
      scale: .8,
      y: '100%',
      clipPath: 'inset(0% 20% 0% 20%)',
    },
    animate: {
      scale: [0.8, 1],
      y: ['50%', '0%'],
      clipPath: ['inset(0% 20% 0% 20%)', 'inset(0% 0% 0% 0%)'],
      transition: {
        times: [0, 1],
        duration: 2,
        ease: ease.inOutCirc,
      },
    },
    exit: {
      scale: 1.2,
      filter: "blur(1vw)",
    },
  },
  image1: {
    initial: {
      scale: 1.1,
      filter: "blur(1vw) brightness(0.7)",
    },
    animate: {
      scale: 1,
      filter: "blur(0vw)",
      transition: {
        duration: 1,
        ease: ease.inOutCirc,
      },
    },
    exit: {
      scale: 1.2,
      filter: "blur(1vw)",
    },
  }
};

export const TitlePresence = {
  initial: {
    clipPath: "inset(0% -20% 100% -20%)",
    y: "70%",
  },
  animate: ({id, duration}) => ({
    clipPath: "inset(-20% -20% -20% -20%)",
    y: "0%",
    transition: {
      duration,
      ease: ease.outExpo,
      delay: ((id + 1) * 0.15),
    },
    transitionEnd: {
      clipPath: "none",
      y: "auto",
    }
  }),
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
    y: "100%",
  },
}

export const BlurPresence = {
  initial: {
    filter: "blur(1vw)",
    opacity: 0,
  },
  animate:({id=0, duration=1}) => ({
    filter: "blur(0vw)",
    opacity: 1,
    transition: {
      duration,
      delay: ((id + 1) * 0.15),
      ease: ease.inOutCirc,
    },
  }),
  exit: {
    filter: "blur(1vw)",
  },
  scale: {
    initial: {
      filter: "blur(1vw)",
      opacity: 0,
      scale: 1.2,
    },
    animate:({id=0, duration=1}) => ({
      filter: "blur(0vw)",
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay: ((id + 1) * 0.15),
        ease: ease.inOutCirc,
      },
    }),
    exit: {
      filter: "blur(1vw)",
    },
  }
}
