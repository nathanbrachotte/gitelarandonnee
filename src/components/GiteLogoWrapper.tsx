import { Link } from "@/components/Link";
import { GiteLogo } from "@/components/logo";
import { H2, Text } from "@/components/Typography";
import { NAME, SHORT_NAME } from "@/data";

export function GiteLogoWrapper() {
  return (
    <Link href="/" className="no-underline" target="_self">
      <div className="flex items-end justify-center gap-2 sm:gap-4">
        <GiteLogo className="w-10 h-10 sm:w-12 sm:h-12" />
        <Text className="hidden sm:block whitespace-nowrap pb-0 font-logo text-4xl text-primary font-bold -mb-1.5">
          {NAME}
        </Text>
        <H2 className="block sm:hidden whitespace-nowrap pb-0 font-logo mt-2">
          {SHORT_NAME}
        </H2>
      </div>
    </Link>
  );
}
