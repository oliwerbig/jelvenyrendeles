"use client";

import { Button, Table } from "flowbite-react";

const Prices = () => {
  return (
    <section
      id="prices"
      className="bg-slate-100 py-12 px-8 dark:bg-gray-800 lg:py-16 lg:px-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <h2 className="mb-4 w-fit text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Árlista
        </h2>
        <div className="flex w-full flex-row flex-wrap items-stretch justify-center gap-6">
          <div className="basis-[35rem]">
            <Table hoverable striped>
              <Table.Head>
                <Table.HeadCell>Méret</Table.HeadCell>
                <Table.HeadCell>Tartalom</Table.HeadCell>
                <Table.HeadCell>Ár</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    26mm kör
                  </Table.Cell>
                  <Table.Cell>1 db kész kitűző</Table.Cell>
                  <Table.Cell>-</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    32mm kör
                  </Table.Cell>
                  <Table.Cell>1 db kész kitűző</Table.Cell>
                  <Table.Cell>235ft</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    40mm kör
                  </Table.Cell>
                  <Table.Cell>1 db kész kitűző</Table.Cell>
                  <Table.Cell>240ft</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    55mm kör
                  </Table.Cell>
                  <Table.Cell>1 db kész kitűző</Table.Cell>
                  <Table.Cell>255ft</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    40mm kör szalagos
                  </Table.Cell>
                  <Table.Cell>1 db kész szalagos kitűző</Table.Cell>
                  <Table.Cell>450ft</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <div className="basis-[35rem]">
            <Table hoverable striped>
              <Table.Head>
                <Table.HeadCell>Méret</Table.HeadCell>
                <Table.HeadCell>Tartalom</Table.HeadCell>
                <Table.HeadCell>Ár</Table.HeadCell>
              </Table.Head>
              <Table.Body>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    35x35mm négyzet
                  </Table.Cell>
                  <Table.Cell>1 db kész kitűző</Table.Cell>
                  <Table.Cell>-</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    40x28mm téglalap
                  </Table.Cell>
                  <Table.Cell>1 db kész kitűző</Table.Cell>
                  <Table.Cell>235ft</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    55x38mm téglalap
                  </Table.Cell>
                  <Table.Cell>1 db kész kitűző</Table.Cell>
                  <Table.Cell>240ft</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell colSpan={3}>
                    A csomagolási- és postaköltség: mennyiségtől függően. <br />
                    Az árak az ÁFÁ-t nem tartalmazzák! <br />
                    Fizetési mód: postai utánvétel, banki átutalás, postai
                    csekk, készpénz.
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
        <div className="flex flex-col space-y-4 py-8 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button size="lg" gradientDuoTone="pinkToOrange" href="#order">
            Rendelés
          </Button>
          <Button size="lg" href="#contact" color="light">
            Kérdésed van?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Prices;
