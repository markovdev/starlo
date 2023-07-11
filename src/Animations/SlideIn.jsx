import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const SlideIn = (props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hidden, setHidden] = useState({ x: "-100%" });
  const [visible, setVisible] = useState({ x: "0%" });
  const controls = useAnimation();

  useEffect(() => {
    if (props.isRight) setHidden({ x: "100%" });
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      className={`${props.className ? props.className : ""}`}
      variants={{
        hidden: props.hidden,
        visible: { x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, delay: props.delay || 0.2 }}
    >
      {props.children}
    </motion.div>
  );
};

export default SlideIn;
