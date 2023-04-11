import "@/styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        variants={{
          hidden: { opacity: 0 },
          enter: { opacity: 1 },
          exit: { opacity: 0 },
        }} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear", duration: 0.75 }} // Set the transition to linear
        className=""
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
