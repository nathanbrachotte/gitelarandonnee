import { BlurFade } from "@/components/magicui/blur-fade";
import { LandingH2 } from "@/components/Typography";
import { ZoomedImage } from "@/components/ZoomedImage";
import { IMAGES } from "@/data";

export function Gallery() {
  return (
    <>
      <section id="gallery" className="mt-24 mb-12 text-center px-4">
        <LandingH2 className="mb-8">Le Gîte en images</LandingH2>
        <div className="columns-2 gap-4 sm:columns-3 mt-4">
          {Object.values(IMAGES).map((image, idx) => (
            <BlurFade
              key={image.url}
              delay={0.25 + idx * 0.05}
              inView
              className="relative"
            >
              <div className="z-10 text-sm text-primary absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg pointer-events-none">
                <p>{image.caption}</p>
              </div>
              <ZoomedImage>
                <img
                  className="mb-4 size-full rounded-lg object-contain"
                  src={image.url}
                  alt={image.caption}
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
