import { LocationIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "@/data";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/routes";
import { useState } from "react";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/components/Link";

export const CGLButton = () => {
  return (
    <Button asChild variant={"link"}>
      <a href={ROUTES.CGL.getPath({})}>CGL</a>
    </Button>
  );
};
export const MentionLegalesButton = () => {
  return (
    <Button variant={"link"}>
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
      variant="link"
      size="icon"
      disabled={copied}
      className={cn(className, "")}
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
            <CheckIcon className="w-4 h-4 text-green-900" />
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
    <div className="flex flex-row gap-0 justify-center items-center">
      <Link href="mailto:gite.larandonnee25@gmail.com" target="_self">
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
      <a href={link}>Accueil</a>
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
      <a href={link}>Disponibilités et Tarifs</a>
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
      <a href={link}>Plan du Gîte</a>
    </Button>
  );
};

export const ActivitésLink = ({ activePath }: { activePath: string }) => {
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
      <a href={link}>Activités</a>
    </Button>
  );
};
