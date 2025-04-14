// components/PageTransition.jsx
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 0.3 }}
  
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;