"use client";

import { Button } from "flowbite-react";

export default function Hero() {
  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <section
        className="px-8 py-12 shadow-xl shadow-gray-200 dark:bg-gray-900 dark:shadow-gray-900 lg:px-20 lg:py-16"
        id="hero"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="hidden lg:mb-8 lg:flex lg:justify-start">
              <div className="relative overflow-hidden rounded-full px-4 py-1.5 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-slate-100/10 dark:hover:ring-slate-100/20">
                <span className="flex items-center justify-center gap-2 text-gray-600">
                  <div className="h-[1rem] w-[1.5rem] rounded bg-[linear-gradient(180deg,_#C8102E_33.333%,_#FFF_33.333%_66.666%,_#00843E_66.666%)]"></div>
                  Magyar gyártású, magyar méretekben, magyar alapanyagokból{" "}
                  <a href="#about" className="font-semibold text-red-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Tudj meg többet <span aria-hidden="true">&rarr;</span>
                  </a>
                </span>
              </div>
            </div>
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Jelvényeket, kitűzőket készítünk
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Saját gyártású kitűzőket, jelvényeket árulunk, magyar
              alapanyagokból, különleges eseményekre <br />
              <br />✆ +36 30 382 9773
              <br />✉ jelvenyrendeles@gmail.com
            </p>
            <br />
            <div className="flex flex-wrap items-center gap-2">
              <Button href="#szalagos" color="light" size="xl">
                Szalagos kitűzők
              </Button>
              <Button href="#kituzo" color="light" size="xl">
                Kitűzők és jelvények
              </Button>
              <Button href="#order" gradientDuoTone="pinkToOrange" size="xl">
                Rendelés
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
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="hidden p-5 lg:col-span-4 lg:flex">
            <img src="/logo-03.svg" alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
}
