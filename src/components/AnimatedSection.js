import React from 'react';
import { motion } from 'framer-motion';

const animatedVariants = {
  hidden: { opacity: 0, y: 64 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const AnimatedSection = ({children, id, style = {}, ...rest}) => (
  <motion.section
    id={id}
    variants={animatedVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.18 }}
    style={style}
    {...rest}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
