import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const Reveal = (props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hidden, setHidden] = useState({});
  const [visible, setVisible] = useState({ x: "0%" });
  const controls = useAnimation();

  const checkDirection = () => {
    if (props.isLeft) {
      setHidden({ x: "100%" });
    } else if (props.isRight) {
      setHidden({ x: "-100%" });
    }
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100% ",
        overflow: "hidden",
      }}
    >
      <motion.div
        className={`${props.className ? props.className : ""}`}
        variants={{
          hidden: { y: "100%", opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default Reveal;
