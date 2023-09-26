import { motion } from "framer-motion";
import { PiXBold } from "react-icons/pi";

export function Banner(props: { message: string; onClose: () => void }) {
  return (
    <motion.div
      class="fixed bottom-0 flex h-8 w-full bg-accent-primary px-2 text-black"
      initial={{
        y: 32
      }}
      animate={{
        y: 0
      }}
    >
      <span class="flex flex-1 items-center justify-center text-sm tracking-wide">
        {props.message}
      </span>
      <div
        class="flex cursor-pointer items-center justify-center"
        onClick={props.onClose}
      >
        <PiXBold />
      </div>
    </motion.div>
  );
}