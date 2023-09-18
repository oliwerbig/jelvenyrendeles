"use client";

import { Button } from "flowbite-react/lib/esm/components/Button";
import Image from "next/image";
import OrderForm from "../OrderForm";

const Order = () => {
  return (
    <section id="order" className="bg-slate-100/50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#3b82f6" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Rendelj tőlünk most!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Leadhatod rendelésed itt, az űrlapon keresztül, vagy megkereshetsz
              minket emailcímünkön, vagy telefonszámunkon. <br></br>
              <br></br>A rendelésed leadása után mindenképp keresni fogunk téged
              a megadott elérhetőségeken a részletek megbeszélése és a rendelés
              megerősítése céljával. Ha 2-3 napon belül nem jelentkezünk,
              keressen további elérhetőségeinken.
              <br />
              <br />
              <span className="cursor-pointer select-all text-base font-semibold leading-7 text-white">
                jelvenyrendeles@gmail.com
              </span>
              <br />
              <span className="cursor-pointer select-all text-base font-semibold leading-7 text-white">
                +36 20 371 0680
              </span>
            </p>
            <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-6 lg:justify-start">
              <Button href="#prices" outline color="gray">
                Árlista <span aria-hidden="true">→</span>
              </Button>
              <a
                href="#contact"
                className="text-base font-semibold leading-7 text-white hover:text-slate-200"
              >
                Csak kérdésed van?
              </a>
            </div>
          </div>
          <div className="m-0 mt-8 flex basis-full flex-col items-center justify-center lg:m-8 lg:mt-32">
            <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
              <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                <OrderForm />
              </div>
            </div>
            <a
              href="#"
              className="dark:text-dark mb-6 flex items-center text-lg font-semibold text-white"
            >
              By{" "}
              <div className="relative m-2 ml-0 aspect-[4/1] w-[10rem]">
                <Image src="/logo-05.svg" alt="logo" fill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
