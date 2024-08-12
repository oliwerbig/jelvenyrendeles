"use client";

import { range } from "@/app/range";
import { Badge, Button, Carousel } from "flowbite-react";
import Image from "next/image";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";
import photos from "../szalagosgalleria";

const Szalagos = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <section
        id="szalagos"
        className="bg-slate-100 bg-opacity-80 dark:bg-gray-900/75"
      >
        <div className="mx-auto max-w-7xl items-center gap-16 px-8 py-12 lg:px-20 lg:py-16 xl:grid xl:grid-cols-2">
          <div className="font-light text-gray-600 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 flex items-center gap-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Szalagos kitűzők{" "}
              <span className="font-large mr-2 rounded-full border border-yellow-300 bg-yellow-100 px-5  py-2.5 text-xs text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                Új!
              </span>
            </h2>
            <p>
              A szalagavató jelvény 4 cm átmérőjű, fém alapú. A jelvényen szerepel
              az iskola neve, a névadó arcképe, vagy az iskola logója. A szalag
              anyaga selyem szatén. A szalag szélessége 15 mm. A jelvényből kilógó
              szalag hossza kb. 7 cm. <br></br>
              <br></br>A Papp László által gyártott szalagavatós kitűzőkhöz hasonló szisztémával készítjük
              <br></br>
              <br></br>A jelvénybe bepréseljük a szalagot. A szalagokból széles
              színválasztékot kínálunk. <br></br>
              <br></br>Szalag vége le van hegesztve, így nem rojtolódik.<br></br>
              <br></br> A szalagavató jelvény ára egyenesvágással 590 Ft/db, 640 Ft/db cik-cak vágással. Az ár nem tartalmazza
              az áfá-t. <br></br>
              <br></br>Ha átutalással kéri a fizetést, kérjük, hogy megrendeléskor
              ezt előre jelezze és adja meg a számlázási címet, minden más esetben
              az iskola nevére állítjuk ki a számlát. Előleget nem kérünk.
              <br></br>
              <br></br>Ha nincs kész grafika, 3000 Ft szerkesztési díjat számítunk fel.
            </p>
            <div className="flex flex-row gap-2 pb-2 pt-10">
              <Button color="light" href="#prices">
                Árlista
              </Button>
              <Button gradientDuoTone="pinkToOrange" href="#order">
                Rendelés
              </Button>
            </div>
          </div>{" "}
          <div className="flex h-full flex-col items-start">
            <table className="w-full">
              <tbody>
                <tr>
                  <td>
                    <figure className="cursor-pointer grayscale-[5%] filter transition-all duration-300 hover:grayscale-0">
                      <div className="relative h-[45rem] w-full">
                        <Image
                          className="rounded-lg"
                          src={`/media/jelvenyrendeles/products/szalagos_promo (6).jpg`}
                          alt=""
                          fill
                          sizes="100%"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <figcaption className="text-md absolute bottom-6 left-[-42%] w-full pr-2 pt-2 text-center text-2xl text-black">
                        <p></p>
                      </figcaption>
                    </figure>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="bg-slate-100 bg-opacity-80 dark:bg-gray-900/75">
        <div className="mx-auto max-w-7xl items-center gap-16 px-8 py-12 lg:px-20 lg:py-16">

          <RowsPhotoAlbum photos={photos} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </section>
    </>
  );
};

export default Szalagos;
