import { BlurFade } from "@/components/magicui/blur-fade";
import { LandingH2 } from "@/components/Typography";
import { ZoomedImage } from "@/components/ZoomedImage";
import { GALLERY } from "@/data.constants";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <>
      <section id="gallery" className="mt-24 mb-12 text-center px-4">
        <LandingH2 className="mb-8">Le Gîte en images</LandingH2>
        <div className="columns-2 gap-4 sm:columns-3 mt-4">
          {Object.values(GALLERY).map((image, idx) => (
            <BlurFade
              key={image.url}
              delay={0.25 + idx * 0.05}
              inView
              className="relative"
            >
              {"caption" in image && typeof image.caption === "string" ? (
                <div
                  className={cn(
                    "z-10 text-xs bottom-0.5 p-1.5 sm:text-sm text-primary absolute sm:bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg pointer-events-none",
                    "text-nowrap",
                  )}
                >
                  <p>{image.caption}</p>
                </div>
              ) : null}
              <ZoomedImage>
                <img
                  className="mb-4 size-full rounded-lg object-contain"
                  src={image.url}
                  alt={image.alt}
                  width={911}
                  height={684}
                />
              </ZoomedImage>
            </BlurFade>
          ))}
        </div>
      </section>
    </>
  );
}
