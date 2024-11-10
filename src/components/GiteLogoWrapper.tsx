import { Link } from "@/components/Link";
import { GiteLogo } from "@/components/logo";
import { H2, Small } from "@/components/Typography";
import { NAME, PHONE_NUMBER } from "@/data";
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
        <GiteLogo className="w-14 h-14 rounded-lg" />
      </Link>
      <div className="flex flex-col items-start">
        <Link
          href={ROUTES.ACCUEIL.getPath({})}
          target="_self"
          className="no-underline"
        >
          <H2 className="whitespace-nowrap font-logo -mb-3">{NAME}</H2>
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
