import { MailIcon, PhoneIcon } from "@/components/icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { PHONE_NUMBER } from "@/data";

export const MidWeekAlert = () => {
  return (
    <Alert className="col-span-3">
      <InfoCircledIcon className="h-4 w-4 stroke-primary" />
      <AlertTitle className="uppercase">
        Locations mid-week ou week-end
      </AlertTitle>
      <AlertDescription className="flex items-center">
        Nous contacter directement:
        <Button asChild size={"icon"} className="mx-2 scale-90">
          <a href={"tel:" + PHONE_NUMBER}>
            <PhoneIcon />
          </a>
        </Button>
        <Button asChild size={"icon"} className="scale-90">
          <a
            className="flex flex-row gap-2"
            href="mailto:gite.larandonnee25@gmail.com"
            target="_self"
          >
            <MailIcon />
          </a>
        </Button>
      </AlertDescription>
    </Alert>
  );
};
