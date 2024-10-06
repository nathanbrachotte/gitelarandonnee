import { CheckCircledIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

import { AnimatePresence } from "framer-motion";

export function ContactFormSuccess() {
  return (
    <div className="flex flex-col items-center justify-center border border-green-500 p-4 rounded-md h-56 gap-2 fade-in">
      <CheckCircledIcon className="w-10 h-10 text-green-500" />
      <p>Votre message a bien été envoyé. À bientôt !</p>
    </div>
  );
}
