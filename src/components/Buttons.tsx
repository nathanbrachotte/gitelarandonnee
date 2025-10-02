import {
  FacebookIcon2,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ADDRESS, EMAIL, GITE, LINKS, PHONE_NUMBER } from "@/data";
import { cn } from "@/lib/utils";
import {
  getDecouvrirLaRegionPath,
  getDispoTarifsPath,
  getHomePagePath,
  getPlanDuGitePath,
  ROUTES,
} from "@/routes";
import { useState } from "react";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/components/Link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const CGLButton = () => {
  return (
    <Button asChild variant={"link"} aria-label="CGL">
      <a href={ROUTES.CGL.getPath({})}>CGL</a>
    </Button>
  );
};
export const MentionLegalesButton = () => {
  return (
    <Button variant={"link"} aria-label="Mention Légales">
      <a href={ROUTES.MENTIONS_LEGALES.getPath({})}>Mention Légales</a>
    </Button>
  );
};

export const PhoneNumberButton = ({
  withLabel = false,
}: {
  withLabel?: boolean;
}) => {
  return (
    <Button
      asChild
      variant={withLabel ? "link" : "default"}
      size={withLabel ? "default" : "icon"}
      aria-label="Téléphone"
    >
      <a className="flex flex-row gap-2" href={"tel:" + PHONE_NUMBER}>
        <PhoneIcon />
        {withLabel ? PHONE_NUMBER : ""}
      </a>
    </Button>
  );
};

export const PhoneNumberLink = ({
  withLabel = false,
  withIcon = false,
}: {
  withLabel?: boolean;
  withIcon?: boolean;
}) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <Button
        aria-label="Téléphone"
        asChild
        variant={withLabel ? "link" : "default"}
        size={withLabel ? "default" : "icon"}
      >
        <a className="flex flex-row gap-2" href={"tel:" + PHONE_NUMBER}>
          {withIcon ? <PhoneIcon /> : ""}
          {withLabel ? PHONE_NUMBER : ""}
        </a>
      </Button>
      <CopyButton className="-ml-5" content={PHONE_NUMBER} />
    </div>
  );
};

export const AddressButton = ({
  withLabel = false,
}: {
  withLabel?: boolean;
}) => {
  return (
    <Button
      asChild
      aria-label="Adresse"
      variant={withLabel ? "link" : "default"}
      size={withLabel ? "default" : "icon"}
    >
      <a
        className="flex flex-row gap-2"
        target="_blank"
        rel="noreferrer noopener"
        href="https://goo.gl/maps/AsjZTatf1GT9vk4a6"
      >
        <LocationIcon />
        {withLabel ? ADDRESS : ""}
      </a>
    </Button>
  );
};

export const AddressLink = ({
  withLabel = false,
  withIcon = false,
}: {
  withLabel?: boolean;
  withIcon?: boolean;
}) => {
  return (
    <div className="flex flex-row gap-0 justify-center items-center">
      <Button
        aria-label="Adresse"
        asChild
        variant={withLabel ? "link" : "ghost"}
        size={withLabel ? "default" : "icon"}
      >
        <a
          className="flex flex-row gap-2"
          target="_blank"
          rel="noreferrer noopener"
          href="https://goo.gl/maps/AsjZTatf1GT9vk4a6"
        >
          {withIcon ? <LocationIcon /> : ""}
          {withLabel ? ADDRESS : ""}
        </a>
      </Button>
      <CopyButton className="-ml-5" content={ADDRESS} />
    </div>
  );
};

export function CopyButton({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      onClick={handleCopy}
      aria-label="Copier"
      variant="link"
      size="icon"
      disabled={copied}
      className={cn(className)}
    >
      <AnimatePresence initial={false} mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.1 }}
          >
            <CheckIcon className="w-4 h-4 text-primary" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.1 }}
          >
            <CopyIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}

export const ContactMailLink = () => {
  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <Link
        href="mailto:gite.larandonnee25@gmail.com"
        target="_self"
        aria-label="Email"
      >
        {EMAIL}
      </Link>
      <CopyButton className="-ml-3" content={EMAIL} />
    </div>
  );
};

export const MailButton = ({ withLabel = false }: { withLabel?: boolean }) => {
  return (
    <Button
      asChild
      variant={withLabel ? "link" : "default"}
      size={withLabel ? "default" : "icon"}
      aria-label="Email"
    >
      <a
        className="flex flex-row gap-2"
        href="mailto:gite.larandonnee25@gmail.com"
        target="_self"
      >
        <MailIcon />
        {withLabel ? EMAIL : ""}
      </a>
    </Button>
  );
};

export const MailLink = ({
  withLabel = false,
  withIcon = false,
}: {
  withLabel?: boolean;
  withIcon?: boolean;
}) => {
  return (
    <div className="flex flex-row gap-0 justify-center items-center">
      <Button
        asChild
        variant={withLabel ? "link" : "ghost"}
        size={withLabel ? "default" : "icon"}
        aria-label="Email"
      >
        <a
          className="flex flex-row gap-2"
          href="mailto:gite.larandonnee25@gmail.com"
          target="_self"
        >
          {withIcon ? <MailIcon /> : ""}
          {withLabel ? EMAIL : ""}
        </a>
      </Button>
      <CopyButton className="-ml-5" content={EMAIL} />
    </div>
  );
};

export const AccueilLink = ({ activePath }: { activePath: string }) => {
  const link = getHomePagePath(activePath);
  const isActive = activePath === link;

  return (
    <Button
      asChild
      variant={"link"}
      size={"lg"}
      className={cn("px-3", {
        "underline text-purple-950": isActive,
      })}
    >
      <a href={link} aria-label="Accueil">
        Accueil
      </a>
    </Button>
  );
};

export const DispoLink = ({ activePath }: { activePath: string }) => {
  const link = getDispoTarifsPath(activePath);
  const isActive = activePath === link;

  return (
    <Button
      asChild
      variant={"link"}
      size={"lg"}
      className={cn("px-3", {
        "underline text-purple-950": isActive,
      })}
    >
      <a href={link} aria-label="Disponibilités et Tarifs">
        Réserver
      </a>
    </Button>
  );
};

export const PlanLink = ({ activePath }: { activePath: string }) => {
  const link = getPlanDuGitePath(activePath);
  const isActive = activePath === link;

  return (
    <Button
      asChild
      variant={"link"}
      size={"lg"}
      className={cn("px-3", {
        "underline text-purple-950": isActive,
      })}
    >
      <a href={link} aria-label="Plan du Gîte">
        Plan du Gîte
      </a>
    </Button>
  );
};

export const DecouvrirLaRegionLink = ({
  activePath,
}: {
  activePath: string;
}) => {
  const link = getDecouvrirLaRegionPath(activePath);
  const isActive = activePath === link;

  return (
    <Button
      asChild
      variant={"link"}
      size={"lg"}
      className={cn("px-3", {
        "underline text-purple-950": isActive,
      })}
    >
      <a href={link} aria-label="Découvrir la région">
        Découvrir la région
      </a>
    </Button>
  );
};

export const FacebookLink = () => {
  return (
    <Button asChild variant={"link"} size={"default"}>
      <a
        href={LINKS.FACEBOOK.url}
        className="flex flex-row gap-2"
        aria-label="Page Facebook"
      >
        <FacebookIcon2 className="w-6 h-6" />
        Suivez notre page Facebook
      </a>
    </Button>
  );
};

export const RentalToggleButton = ({ activePath }: { activePath: string }) => {
  const isLaHaut = activePath.includes("la-haut");
  const linkToRental = isLaHaut ? "La Randonnée" : "Là-Haut";
  const togglePath = isLaHaut
    ? ROUTES.LAR_ACCUEIL.getPath({})
    : ROUTES.LAH_ACCUEIL.getPath({});

  const targetCapacity = GITE[isLaHaut ? "la_randonnee" : "la_haut"].maxPersons;
  const currentCapacity =
    GITE[isLaHaut ? "la_haut" : "la_randonnee"].maxPersons;

  // Create contextual message based on capacity difference
  const needsMoreSpace = currentCapacity < targetCapacity;
  const contextualMessage = needsMoreSpace
    ? "Besoin de plus de place ?"
    : "Êtes-vous un petit groupe ?";

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Contextual message */}
      <motion.p
        className="text-sm text-gray-600 font-medium text-center hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {contextualMessage}
      </motion.p>

      {/* Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          asChild
          aria-label={`Basculer vers ${linkToRental}`}
          className="relative h-auto py-3 px-4 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-500/20 hover:border-green-300/40 group overflow-hidden"
        >
          <a
            href={togglePath}
            className="flex flex-col items-center justify-center gap-1 relative z-10"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20"
              initial={{ opacity: 0, x: "-100%" }}
              whileHover={{ opacity: 1, x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Main content */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-sm font-semibold">Gîte {linkToRental}</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRightIcon className="w-4 h-4" />
              </motion.div>
            </motion.div>

            {/* Capacity transition animation */}
            <motion.div
              className="flex items-center gap-1"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                className="text-xs font-medium text-green-100 px-1 py-0.5 rounded bg-green-900/30"
                key={`current-${currentCapacity}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {currentCapacity}p
              </motion.span>
              <motion.span
                className="text-xs text-green-200"
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ➤
              </motion.span>
              <motion.span
                className="text-xs font-bold text-green-50 bg-green-500/20 px-1 py-0.5 rounded"
                key={`target-${targetCapacity}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {targetCapacity}p
              </motion.span>
            </motion.div>

            {/* Subtle highlight */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
};
