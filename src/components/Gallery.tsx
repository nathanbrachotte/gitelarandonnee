import { BlurFade } from "@/components/magicui/blur-fade";
import { H2 } from "@/components/Typography";
import { ZoomedImage } from "@/components/ZoomedImage";

const IMAGES = [
  { url: "/gite/chambre-beige.webp", caption: "Chambre beige" },
  { url: "/gite/chambre-orange.webp", caption: "Chambre orange" },
  { url: "/gite/chambre-violette.webp", caption: "Chambre violette" },
  { url: "/gite/exterieur-apero.webp", caption: "Exterieur apero" },
  { url: "/gite/exterieur-arbres.jpg", caption: "Exterieur arbres" },
  { url: "/gite/exterieur-ete.webp", caption: "Exterieur ete" },
  { url: "/gite/exterieur-loin.webp", caption: "Exterieur loin" },
  { url: "/gite/exterieur-neige.webp", caption: "Exterieur neige" },
  { url: "/gite/exterieur-parking.webp", caption: "Exterieur parking" },
  {
    url: "/gite/exterieur-table-entree.webp",
    caption: "Exterieur table entree",
  },
  { url: "/gite/fondue.webp", caption: "Fondue" },
  { url: "/gite/interieur-cuisine.webp", caption: "Interieur cuisine" },
  { url: "/gite/interieur-entree.webp", caption: "Interieur entree" },
  { url: "/gite/petanque.webp", caption: "Petanque" },
  { url: "/gite/petit-salon-complet.webp", caption: "Petit salon complet" },
  { url: "/gite/petit-salon.webp", caption: "Petit salon" },
  { url: "/gite/petite-salle-de-bain.webp", caption: "Petite salle de bain" },
  {
    url: "/gite/salle-a-manger-grand-angle.webp",
    caption: "Salle a manger grand angle",
  },
  { url: "/gite/salon.webp", caption: "Salon" },
  { url: "/gite/vaches.webp", caption: "Vaches" },
];

export function Gallery() {
  return (
    <>
      <section id="gallery" className="mt-12 text-center">
        <H2>Le Gîte en images</H2>
        <div className="columns-2 gap-4 sm:columns-3 mt-4">
          {IMAGES.map((image, idx) => (
            <BlurFade key={image.url} delay={0.25 + idx * 0.05} inView>
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
