import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { MailIcon } from "@/components/icons";

export const MidWeekAlert = () => {
  return (
    <Alert className="col-span-3">
      <InfoCircledIcon className="h-4 w-4 stroke-primary" />
      <AlertTitle className="uppercase font-bold">
        Locations week-end
      </AlertTitle>
      <AlertDescription>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-bold">En été :</span> 560€
          </li>
          <li>
            <span className="font-bold">En hiver :</span> 580€
          </li>
        </ul>
        <div className="flex items-center mt-2">
          Pour les locations en milieu de semaine, nous contacter directement
          <MailIcon
            className="h-4 w-4 ml-1 stroke-primary cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => {
              // Look for the H2 "Réserver" heading that contains the contact form
              const h2Headings = document.querySelectorAll("h2");
              let reserverHeading = null;

              for (const heading of h2Headings) {
                if (
                  heading.textContent?.includes("Nous contacter directement")
                ) {
                  reserverHeading = heading;
                  break;
                }
              }

              if (reserverHeading) {
                reserverHeading.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          />
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
            <span className="font-bold">Location à la semaine:</span> Arrivée le
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
