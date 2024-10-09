export const SlideUp = (delay) => {
    return {
      initial: {
        y: 100,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay,
        },
      },
    };
  };
  export const SlideLeft = (delay) => {
    return {
      hidden: {
        x: 100, // Start from the right
        opacity: 0, // Fully transparent
      },
      visible: {
        x: 0, // Move to the original position
        opacity: 1, // Fully opaque
        transition: {
          duration: 1, // Duration of the animation
          delay, // Delay before the animation starts
        },
      },
    };
  };
  
  export const SlideRight = (delay) => {
    return {
      initial: {
        x: -100,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay,
        },
      },
    };
  };
  