"use client";

import React, { useEffect } from "react";
import { Image, Layer, Stage } from "react-konva";
import useImage from "use-image";

const Designer = () => {
  const [file, setFile] = React.useState<Blob>();
  const image = useImage(
    file !== undefined
      ? URL.createObjectURL(file)
      : "https://images.placeholders.dev/?width=1024&height=1024&text=asd&bgColor=%23ffffff&textColor=%23ffffff"
  );

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <section
      id="designer"
      className="bg-slate-100 px-8 py-12 dark:bg-gray-900 lg:px-20 lg:py-16"
    >
      <input type="file" onChange={handleFileChange} />
      <Stage width={200} height={200}>
        <Layer>
          <Image image={image} width={200} height={200} alt=""></Image>
        </Layer>
      </Stage>
    </section>
  );
};

export default Designer;
