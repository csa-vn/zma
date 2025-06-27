import Carousel from "@/components/carousel";
import { useAtomValue } from "jotai";
import { bannersState } from "@/state";
import { motion, AnimatePresence } from "motion/react";

export default function Banners() {
  const banners = useAtomValue(bannersState);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        <Carousel
          slides={banners.map((banner) => (
            <img className="w-full rounded" src={banner} />
          ))}
        />
      </motion.div>
    </AnimatePresence>
  );
}
