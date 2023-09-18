"use client";

import { range } from "@/app/range";
import { Badge, Button, Carousel } from "flowbite-react";
import Image from "next/image";
const Szalagos = () => {
  const badgeImages = range(12, 1);
  const szalagosImages = range(12, 1);
  const szalagokImages = ["1", "2", "4", "5", "6", "8", "11", "14", "15"];

  return (
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
            szalag hossza 7.5 cm. <br></br>A Papp László által gyártott
            szalagavatós kitűzőkhöz hasonló szisztémával készítjük<br></br>
            <br></br>A jelvénybe bepréseljük a szalagot. A szalagokból széles
            színválasztékot kínálunk. <br></br>
            <br></br>Szalag vége le van hegesztve, így nem rojtolódik.<br></br>
            <br></br> A szalagavató jelvény ára 450 Ft/db. Az ár nem tartalmazza
            az áfá-t. <br></br>
            <br></br>Ha átutalással kéri a fizetést, kérjük, hogy megrendeléskor
            ezt előre jelezze és adja meg a számlázási címet, minden más esetben
            az iskola nevére állítom ki a számlát. Előleget nem kérek.<br></br>
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
                    <div className="relative h-[40rem] w-full">
                      <Image
                        className="rounded-lg"
                        src={`/media/jelvenyrendeles/products/szalagos_promo (4).jpg`}
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
  );
};

export default Szalagos;
