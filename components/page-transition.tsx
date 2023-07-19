import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            x: "100%",
          },
          pageAnimate: {
            opacity: 1,
            x: 0,
          },
          pageExit: {
            opacity: 0,
            x: "-100%",
          },
        }}
        transition={{
          duration: 0.3,
        }}
        style={{ position: "absolute", width: "95%", height: "90%", zIndex: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
