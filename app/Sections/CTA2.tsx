import React from "react";

const CTA2 = () => {
  return (
    <section className="bg-white py-12 px-8 dark:bg-gray-900 lg:py-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Felkeltettük érdeklődésedet?
          </h2>
          <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Lépj kapcsolatba velünk, és legyél az ügyfelünk
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#order"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Rendelj most!
              <svg
                className="ml-2 -mr-1 h-5 w-5"
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
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              Termékeink
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA2;
