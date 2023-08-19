import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex flex-col text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse">
        <div className="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
          <header className="mb-6">
            <h2 className="select-none text-4xl font-bold leading-none text-gray-400 lg:text-6xl">
              404.
            </h2>
            <h3 className="text-xl font-light leading-normal md:text-3xl lg:text-3xl">
              Sorry, we couldn't find this page.
            </h3>
          </header>

          <p className="mb-5 max-w-sm leading-5 md:leading-7">
            Don't worry, sometimes even we make mistakes. You can find plenty of
            other things on our homepage.
          </p>

          <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium uppercase leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none active:bg-blue-600">
            Back to Homepage
          </button>
        </div>

        <div className="max-w-lg">
          <div className="w-full max-w-sm">
            <Image src="/logo-01" fill alt="Jelvénydepo Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
