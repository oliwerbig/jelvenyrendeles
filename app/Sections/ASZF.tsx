import React from "react";

const FAQ = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <h2 className="mx-auto text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Általános Szerződési Feltételek
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-20 rounded-3xl bg-slate-200 dark:bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:px-24 lg:py-16">
          <ul>
            <li>
              1. Bevezetés <br /> Ezen Általános Szerződési Feltételek
              (továbbiakban: "ÁSZF") a Jelvénydepo kft., mint eladó
              (továbbiakban: "Eladó") és az áruk vásárlója (továbbiakban:
              "Vásárló") közötti szerződéses kapcsolatot szabályozzák. Az ÁSZF
              az eladó weboldalán elérhető ajándéktárgyak (továbbiakban:
              "Termékek") vásárlására vonatkozik.
            </li>
            <li>
              2. Rendelés és Vásárlás{" "}
              <li>
                2.1 A Vásárló a Termékek rendelését követően ajánlatot tesz az
                Eladó felé a Termékek vásárlására.
              </li>
              <li>
                {" "}
                2.2 A Rendelés elküldésével a Vásárló elfogadja az ÁSZF-ben
                foglalt feltételeket és kötelezettséget vállal a vásárlásra.
              </li>
              <li>
                {" "}
                2.3 Az Eladó fenntartja a jogot a Rendelés elfogadásának vagy
                visszautasításának döntésére indoklás nélkül.{" "}
              </li>
            </li>
            <li>
              3. Árak és Fizetési Feltételek
              <li>
                3.1 A Termékek árai a weboldalon találhatóak és az ÁFA-t NEM
                tartalmazzák.{" "}
              </li>
              <li>
                {" "}
                3.2 A Vásárló köteles a vásárlás során a kiválasztott Termékek
                árát és a szállítási díjat kifizetni az Eladó által megadott
                fizetési módon.{" "}
              </li>
            </li>
            <li>
              4. Szállítás és Kiszállítás
              <li>
                4.1 Az Eladó vállalja, hogy a Rendelésben megadott címre
                eljuttatja a Termékeket a kiválasztott szállítási módon és
                időpontban.{" "}
              </li>
              <li>
                4.2 A kiszállítási idő az Eladó és a szállítási szolgáltató
                ütemezésétől függ, az Eladó nem vállal felelősséget a
                kiszállítás időben történő megtörténteért.
              </li>
            </li>
            <li>
              {" "}
              5. Termékek Minősége és Garancia
              <li>
                5.1 Az Eladó minden erőfeszítést megtesz a Termékek minőségének
                biztosítására és pontos leírásának nyújtására a weboldalon.{" "}
              </li>
              <li>
                5.2 A Vásárló köteles az átvett Termékeket az átvétel napjától
                számított 7 napon belül átvizsgálni és az esetleges hibákat
                azonnal jelezni az Eladó felé.
              </li>
            </li>
            <li>
              7. Egyéb Rendelkezések
              <li>
                7.1 Az Eladó fenntartja magának a jogot az ÁSZF feltételeinek
                egyoldalú módosítására, melyet az Eladó honlapján tesz közzé.{" "}
              </li>
              <li>
                7.2 A jelen ÁSZF tartalmazza az összes megállapodást az Eladó és
                a Vásárló között a Termékek vásárlásával kapcsolatban, és
                felülír minden korábbi írásos vagy szóbeli megállapodást.{" "}
              </li>
            </li>
          </ul>
          <br />
          Ezen Általános Szerződési Feltételeket a Vásárló a Rendelés leadásával
          elfogadja és magára nézve kötelezőnek ismeri el.
        </div>
      </div>
    </section>
  );
};

export default FAQ;
