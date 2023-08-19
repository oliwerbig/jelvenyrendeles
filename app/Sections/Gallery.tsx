import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="bg-slate-50 p-[60px]">
      <h1 className="py-10 text-center text-3xl font-bold dark:text-white">
        Képek a termékeinkről
      </h1>

      <div className="container mx-auto items-center px-4 py-8 lg:px-32 ">
        <div className="grid grid-flow-col grid-cols-4 grid-rows-4 gap-2">
          <div className="row-span-2 w-full">
            <img
              src="/media/jelvenydepo/9.webp"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full rounded object-cover object-center opacity-75 hover:opacity-100"
            />
          </div>
          <div className="col-span-2 row-span-2 w-full">
            <img
              src="/media/jelvenydepo/2.webp"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full rounded object-cover object-center opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full ">
            <img
              src="/media/jelvenydepo/3.webp"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full rounded object-cover object-center opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full">
            <img
              src="/media/jelvenydepo/10.webp"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full rounded object-cover object-center opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="col-span-2 row-span-2 w-full">
            <img
              src="/media/jelvenydepo/4.webp"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full rounded object-cover object-center opacity-75 hover:opacity-100 "
            />
          </div>

          <div className="col-span-2 w-full">
            <img
              src="/media/jelvenydepo/6.webp"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full rounded object-cover object-center opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full">
            <img
              src="/media/jelvenydepo/7.webp"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full rounded object-cover object-center opacity-75 hover:opacity-100 "
            />
          </div>
          <div className="w-full">
            <img
              src="/media/jelvenydepo/8.webp"
              alt="Photo by Claudio Schwarz on Unsplash"
              className="inset-0 h-full w-full rounded object-cover object-center opacity-75 hover:opacity-100 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
