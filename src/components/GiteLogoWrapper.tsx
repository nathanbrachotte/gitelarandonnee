import { GiteLogo } from "@/components/logo";
import { H2 } from "@/components/Typography";
import { NAME, SHORT_NAME } from "@/data";

export function GiteLogoWrapper() {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      <GiteLogo className="w-10 h-10 sm:w-12 sm:h-12" />
      <H2 className="hidden sm:block whitespace-nowrap pb-0 font-logo">
        {NAME}
      </H2>
      <H2 className="block sm:hidden whitespace-nowrap pb-0 font-logo">
        {SHORT_NAME}
      </H2>
    </div>
  );
}
