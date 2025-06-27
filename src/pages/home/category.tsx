import Section from "@/components/section";
import TransitionLink from "@/components/transition-link";
import { useAtomValue } from "jotai";
import { categoriesState } from "@/state";
import { motion, AnimatePresence } from "motion/react";

export default function Category() {
  const categories = useAtomValue(categoriesState);

  return (
    <Section title="Danh mục sản phẩm" viewMoreTo="/categories">
      <div className="pt-2.5 pb-4 flex space-x-6 overflow-x-auto px-4">
        <AnimatePresence>
          {categories.map((category, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              exit={{ opacity: 0 }}
              transition={{
                duration: index * 0.3,
                ease: "easeInOut"
              }}
            >
                <TransitionLink
                  key={category.id}
                  className="flex flex-col items-center space-y-2 flex-none basis-[70px] overflow-hidden cursor-pointer"
                  to={`/category/${category.id}`}
                >
                  <img
                    src={category.image}
                    className="w-[70px] h-[70px] object-cover rounded-full border-[0.5px] border-black/15"
                    alt={category.name}
                  />
                  <div className="text-center text-sm w-full line-clamp-2 text-subtitle">
                    {category.name}
                  </div>
                </TransitionLink>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
