import {
  FacebookIcon2,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ADDRESS, EMAIL, LINKS, PHONE_NUMBER } from "@/data.constants";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/routes";
import { useState } from "react";
import { ArrowRightIcon, CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/components/Link";
import { Label } from "@radix-ui/react-label";

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
  const link = ROUTES.ACCUEIL.getPath({});
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
  const link = ROUTES.DISPO_TARIFS.getPath({});
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
  const link = ROUTES.PLAN_DU_GITE.getPath({});
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
  const link = ROUTES.ACTIVITES.getPath({});
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

export const LaRandonneeLink = () => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <Label className="font-semibold">
        Trop grand pour vous ? Besoin d'encore plus de chambres ?
      </Label>
      <Button
        asChild
        variant={"default"}
        className="bg-cyan-700 hover:bg-cyan-800 text-white group"
      >
        <a
          href={LINKS.LA_HAUT.url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Découvrir le Gîte La Randonnée"
        >
          Gîte La Haut (6 personnes)
          <ArrowRightIcon className="group-hover:translate-x-1 transition-transform duration-300 w-4 h-4 ml-2" />
        </a>
      </Button>
    </div>
  );
};
