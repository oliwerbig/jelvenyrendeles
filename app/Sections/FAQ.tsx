import React from "react";

const FAQ = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Gyakran ismételt kérdések
        </h2>
        <div className="grid border-t border-gray-200 pt-8 text-left dark:border-gray-700 md:grid-cols-2 md:gap-16">
          <div>
            <div className="mb-10">
              <h3 className="ivtems-center mb-4 flex text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Milyen fizetési lehetőségeket kínálunk?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Elsősorban készpénzt és banki átutalást fogadunk el a rendelések
                kifizetésére
              </p>
            </div>
            <div className="mb-10">
              <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Mennyi idő alatt érkezik meg a rendelésem?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                A kiszállítási idő a terméktől és a kiszállítási címtől függ.
                Amint azok elkészülnek, a rendeléseket rögtön postázzuk.
                Ugyanakkor a rendelések legyártása a terméktől függően eltarthat
                napokig, vagy hetekig. A rendelés leadása után felvesszük veled
                a kapcsolatot és megegyezünk egy időpontban.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Hogyan tudok rendelést leadni a Termékekre?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Kérjük, látogass el weboldalunkra, majd a rendelési űrlap
                segítségével add le a rendelésedet szövegesen megfogalmazva. Ha
                segítségre van szükséged, vedd fel a kapcsolatot velünk
                telefonon vagy emailen.
              </p>
            </div>{" "}
            <div className="mb-10">
              <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Hogyan vehetem fel a kapcsolatot önökkel?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Bármikor kereshet minket telefonon vagy email címünkön.
                <br />
                Telefonszámunk: +36 20 371 0680 <br />
                Email: jelvenydepo@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
