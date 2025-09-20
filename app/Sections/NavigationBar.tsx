"use client";

import { Button } from "flowbite-react/lib/esm/components/Button";
import { Navbar } from "flowbite-react/lib/esm/components/Navbar";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <>
      <Navbar className="relative z-10">
        <Navbar.Brand href="/">
          <div
            className="mr-3 aspect-[4/1] h-6 sm:h-9"
            style={{ position: "relative" }}
          >
            <Image src="/logo-07.svg" fill alt="logo" />
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button gradientDuoTone="pinkToOrange" href="/rendeles">
            Rendelj most!
          </Button>
          <Navbar.Toggle></Navbar.Toggle>
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/#szalagos">Szalagos kitűzők</Navbar.Link>
          <Navbar.Link href="/#kituzok">Kitűzők és jelvények</Navbar.Link>
          <Navbar.Link href="/#prices">Árlista</Navbar.Link>
          <Navbar.Link href="/#about">Rólunk</Navbar.Link>
          <Navbar.Link href="/rendeles">Rendelés</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
