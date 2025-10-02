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
      <AlertDescription>
        <ul className="list-disc list-inside">
          <li>Tarif estival : 560€</li>
          <li>Tarif hivernal : 580€</li>
        </ul>
        <div className="flex items-center mt-2">
          Nous contacter directement pour plus d'informations
          <MailIcon className="h-4 w-4 ml-1 stroke-primary" />
        </div>
      </AlertDescription>
    </Alert>
  );
};

export const ArrivalDepartureAlert = () => {
  return (
    <Alert className="col-span-3">
      <InfoCircledIcon className="h-4 w-4 stroke-primary" />
      <AlertTitle className="font-bold">
        HEURES DE DÉPART ET D'ARRIVÉE
      </AlertTitle>
      <AlertDescription>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-bold">Location semaine:</span> Arrivée le
            samedi à 16h au plus tôt, départ à 10h au plus tard.
          </li>
          <li>
            <span className="font-bold">Location week-end:</span> Arrivée le
            vendredi à 16h au plus tôt, départ le dimanche à 17h au plus tard.
          </li>
        </ul>
      </AlertDescription>
    </Alert>
  );
};
