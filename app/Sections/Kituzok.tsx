"use client";

import { range } from "@/app/range";
import { Badge, Button, Carousel } from "flowbite-react";
import Image from "next/image";
const Kituzok = () => {
  const badgeImages = [...range(43, 1)].sort(() =>
    Math.random() > 0.5 ? 1 : -1
  );

  return (
    <section
      id="kituzok"
      className="bg-slate-100 bg-opacity-80 dark:bg-gray-900/75"
    >
      <div className="mx-auto max-w-7xl items-center gap-16 px-8 py-12 lg:px-20 lg:py-16 xl:grid xl:grid-cols-2">
        <Carousel className="mt-10 h-[30rem]  xl:mt-0">
          {badgeImages.map((imageId) => (
            <figure
              key={imageId}
              className=" cursor-pointer grayscale-[25%] filter transition-all duration-300 hover:grayscale-0"
            >
              <div className="relative h-[30rem] w-full">
                <Image
                  className="rounded-lg"
                  src={`/media/jelvenyrendeles/products/kituzo_promo (${imageId}).jpg`}
                  alt=""
                  fill
                  sizes="100%"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <figcaption className="text-md absolute bottom-6 w-full px-4 text-center text-white">
                <p></p>
              </figcaption>
            </figure>
          ))}
        </Carousel>
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Kitűzők és jelvények
          </h2>
          <p>
            Köralakú kitűzők elérhetőek:
            <br />
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge color="failure" size="sm">
              26mm
            </Badge>
            <Badge color="failure" size="sm">
              32mm
            </Badge>
            <Badge color="failure" size="sm">
              40mm
            </Badge>
            <Badge color="failure" size="sm">
              55mm
            </Badge>
            <Badge color="failure" size="sm">
              70mm
            </Badge>
          </div>
          <p>
            <br />
            Téglalap kitűzők elérhetőek:
            <br />
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge color="failure" size="sm" className="mr-2 w-fit">
              40x28mm
            </Badge>
            <Badge color="failure" size="sm" className="mr-2 w-fit">
              55x38mm
            </Badge>
            <Badge color="failure" size="sm" className="mr-2 w-fit">
              35x35mm
            </Badge>
          </div>
          <div className="flex flex-row gap-2 pb-2 pt-10">
            <Button color="light" href="#prices">
              Árlista
            </Button>
            <Button gradientDuoTone="pinkToOrange" href="#order">
              Rendelés
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kituzok;
