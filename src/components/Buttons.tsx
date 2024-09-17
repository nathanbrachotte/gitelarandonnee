import { LocationIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "@/data";

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

export const PhoneNumberLink = () => {
  return (
    <Button asChild variant={"link"}>
      <a className="flex flex-row gap-2" href={"tel:" + PHONE_NUMBER}>
        <PhoneIcon />

        {PHONE_NUMBER}
      </a>
    </Button>
  );
};

export const AddressLink = () => {
  return (
    <Button asChild variant={"link"}>
      <a
        className="flex flex-row gap-2"
        target="_blank"
        rel="noreferrer noopener"
        href="https://goo.gl/maps/AsjZTatf1GT9vk4a6"
      >
        <LocationIcon />
        {ADDRESS}
      </a>
    </Button>
  );
};

export const MailLink = () => {
  return (
    <Button asChild variant={"link"}>
      <a
        className="flex flex-row gap-2"
        href="mailto:gite.larandonnee25@gmail.com"
        target="_self"
      >
        <MailIcon />
        {EMAIL}
      </a>
    </Button>
  );
};

export const AccueilLink = () => {
  return (
    <Button asChild variant={"link"}>
      <a href="/">Accueil</a>
    </Button>
  );
};

export const DispoLink = () => {
  return (
    <Button asChild variant={"link"}>
      <a href="/disponibilites-tarifs">Disponibilités et Tarifs</a>
    </Button>
  );
};

export const PlanLink = () => {
  return (
    <Button asChild variant={"link"}>
      <a href="/plan-du-gite">Plan du Gîte</a>
    </Button>
  );
};

export const RegionLink = () => {
  return (
    <Button asChild variant={"link"}>
      <a href="/notre-region">Notre Région</a>
    </Button>
  );
};
