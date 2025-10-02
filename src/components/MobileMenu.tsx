import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetDescription,
} from "@/components/ui/sheet";
import { GiteLogoWrapper } from "@/components/GiteLogoWrapper";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  AccueilLink,
  DecouvrirLaRegionLink,
  DispoLink,
  PlanLink,
  RentalToggleButton,
} from "@/components/Buttons";

export function MobileMenu({ activePath }: { activePath: string }) {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <HamburgerMenuIcon className="w-6 h-6 shrink-0" />
        <span className="sr-only">Menu</span>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[300px] bg-white">
        <SheetHeader className="py-4 justify-center flex flex-row flex-1">
          <GiteLogoWrapper currentPath={activePath} />
        </SheetHeader>
        <SheetDescription className="flex-1 flex flex-col gap-2 pt-4">
          <AccueilLink activePath={activePath} />
          <DispoLink activePath={activePath} />
          <PlanLink activePath={activePath} />
          <DecouvrirLaRegionLink activePath={activePath} />
        </SheetDescription>
        <div className="pt-6 border-t border-gray-200">
          <div className="text-center pb-2">
            <p className="text-sm text-gray-600 mb-3 font-medium">
              Besoin de plus/moins de place ?
            </p>
            <RentalToggleButton activePath={activePath} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
