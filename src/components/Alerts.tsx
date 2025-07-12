import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { MailIcon } from "@/components/icons";

export const MidWeekAlert = () => {
  return (
    <Alert className="col-span-3">
      <InfoCircledIcon className="h-4 w-4 stroke-primary" />
      <AlertTitle className="uppercase font-bold">
        Locations mid-week ou week-end
      </AlertTitle>
      <AlertDescription className="flex items-center">
        Nous contacter directement
        <MailIcon className="h-4 w-4 ml-1 stroke-primary" />
      </AlertDescription>
    </Alert>
  );
};
