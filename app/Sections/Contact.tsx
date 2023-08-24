"use client";

import { Button, Card } from "flowbite-react";
import Image from "next/image";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-100 px-8 py-12 dark:bg-gray-900 lg:px-20 lg:py-16"
    >
      <div className="mx-auto flex max-w-7xl flex-row flex-wrap items-start justify-center gap-6 ">
        <div className="flex basis-[40rem] flex-col gap-6 lg:basis-[30rem]">
          <Card horizontal={true} imgSrc="/media/tibi.jpg">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Szabó Tibor
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Villamosüzemmérnök,
              <br />
              cégvezető
              <br />
              <br />
              +36 20 371 0680
            </p>
          </Card>
          <Card horizontal={true} imgSrc="/media/ildi.jpg">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Nagy Ildikó
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Ügyintéző,
              <br />
              kapcsolattartó
              <br />
              <br />
              +36 30 382 9773
            </p>
          </Card>

          <Card horizontal={true}>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Jelvénydepo kft.
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Az alábbi elérhetőségeken találhatsz meg minket:
            </p>
            <ul className="flex space-x-4 sm:mt-0">
              <li>
                {" "}
                <span className="cursor-pointer select-all text-base font-semibold leading-7">
                  jelvenydepo@gmail.com
                </span>
                <br />
                <span className="cursor-pointer select-all text-base font-semibold leading-7">
                  +36 20 371 0680
                </span>
              </li>
            </ul>
          </Card>

          <Card horizontal={true}>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Felkeltettük érdeklődésedet?
            </h5>
            <p className="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
              Lépj kapcsolatba velünk, és legyél az ügyfelünk
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="sm" href="#order" gradientDuoTone="cyanToBlue">
                Rendelj most!
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
              <Button href="#products" size="sm" color="light">
                Termékeink
              </Button>
            </div>
          </Card>
        </div>

        <div className="basis-[40rem] lg:basis-[30rem] ">
          <div className="my-12 xl:my-4">
            <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Kérdezz tőlünk!
            </h2>
            <p className="text-center text-xl font-light text-gray-500 dark:text-gray-400">
              Kérdésed támadt termékeinkkel, árainkkal vagy gyártási
              folyamatunkkal kapcsolatban? Ne félj feltenni!
            </p>
          </div>
          <Card>
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
