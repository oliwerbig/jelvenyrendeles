"use client";

import { Footer } from "flowbite-react";
import React from "react";

const FooterBar = () => {
  return (
    <>
      <Footer container={true}>
        <div className="mx-auto w-[70vw]">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6">
              <div>
                <Footer.Brand
                  href="https://jelvenydepo.hu"
                  src="/logo-05.svg"
                  alt="Logo"
                />
              </div>
              <div>
                <Footer.Title title="Cégünk" />
                <p>
                  Jelvénydepo kft. <br />
                  Cégjegyzékszám: 16 09 015777
                  <br /> Adószám: 24922227-2-16 <br />
                  5000 Szolnok, Kút utca 3. 2. em. 9.
                </p>
              </div>

              <div>
                <Footer.Title title="Elérhetőség" />
                <p>
                  Szabó Tibor - Cégvezető
                  <br /> jelvenydepo@gmail.com <br />
                  +36203710680
                  <br />
                  <br />
                  Nagy Ildikó - Kapcsolattartó <br />
                  jelvenyrendeles@gmail.com
                  <br />
                  +36 30 382 9773
                  <br />
                </p>
              </div>
              <div>
                <Footer.Title title="Átvevőhely" />
                <p>
                  XVII. kerületben <br />
                  (Budapest)
                </p>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="/"
              by="Jelvénydepo kft. Minden jog fenntartva."
              year={new Date().getFullYear()}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="#"
                icon={() => (
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterBar;
