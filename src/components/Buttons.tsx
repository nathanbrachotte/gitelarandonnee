import { LocationIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "@/data";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/routes";

export const CGLButton = () => {
  return (
    <Button asChild variant={"link"}>
      <a href="/cgl">CGLds </a>
    </Button>
  );
};
export const MentionLegalesButton = () => {
  return (
    <Button variant={"link"}>
      <a href="/mentions-legales">Mention Légales</a>
    </Button>
  );
};

export const PhoneNumberLink = ({
  withLabel = false,
}: {
  withLabel?: boolean;
}) => {
  return (
    <Button
      asChild
      variant={withLabel ? "link" : "ghost"}
      size={withLabel ? "default" : "icon"}
    >
      <a className="flex flex-row gap-2" href={"tel:" + PHONE_NUMBER}>
        <PhoneIcon />

        {withLabel ? PHONE_NUMBER : ""}
      </a>
    </Button>
  );
};

export const AddressLink = ({ withLabel = false }: { withLabel?: boolean }) => {
  return (
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
        <LocationIcon />
        {withLabel ? ADDRESS : ""}
      </a>
    </Button>
  );
};

export const MailLink = ({ withLabel = false }: { withLabel?: boolean }) => {
  return (
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
        <MailIcon />
        {withLabel ? EMAIL : ""}
      </a>
    </Button>
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
      className={cn({
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
      className={cn({
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
      className={cn({
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
      className={cn({
        "underline text-purple-950": isActive,
      })}
    >
      <a href={link}>Activités</a>
    </Button>
  );
};
