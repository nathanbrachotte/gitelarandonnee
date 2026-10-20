import { Link } from "@/components/Link";
import { GiteLogo } from "@/components/logo";
import { Small } from "@/components/Typography";
import { NAME, PHONE_NUMBER } from "@/data.constants";
import type { PropsWithChildren } from "react";
import { PhoneIcon } from "./icons";
import { ROUTES } from "@/routes";
// import { CopyButton } from "./Buttons";

export function GiteLogoWrapper({}: PropsWithChildren) {
  return (
    <div className="flex flex-row items-end gap-2">
      <Link
        href={ROUTES.ACCUEIL.getPath({})}
        target="_self"
        className="no-underline"
      >
        <GiteLogo className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg" />
      </Link>
      <div className="flex flex-col items-start">
        <Link
          href={ROUTES.ACCUEIL.getPath({})}
          target="_self"
          className="no-underline"
        >
          <span className="block pb-2 text-2xl lg:text-3xl font-semibold tracking-tight text-primary whitespace-nowrap font-logo -mb-3">
            {NAME}
          </span>
        </Link>
        <Small className="text-xs flex flex-row gap-0.5 relative select-all">
          <PhoneIcon className="w-4 h-4" />
          {PHONE_NUMBER}
          {/* <div className="absolute -right-7 -top-2">
                <CopyButton content={PHONE_NUMBER} className="scale-75" />
              </div> */}
        </Small>
      </div>
    </div>
  );
}
