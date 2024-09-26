import { BlurFade } from "@/components/magicui/blur-fade";
import { ZoomedImage } from "@/components/ZoomedImage";

const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export function Gallery() {
  return (
    <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <ZoomedImage>
              <img
                className="mb-4 size-full rounded-lg object-contain"
                src={"/outside-snow.webp"}
                alt={`Random stock image`}
                width={911}
                height={684}
              />
            </ZoomedImage>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
