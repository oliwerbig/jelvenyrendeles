"use client";
import { Button, Label, Textarea, TextInput, Radio, FileInput } from "flowbite-react";
import React from "react";

const sendOrder = async (data: any) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    if (key === 'grafika' || key === 'tavalyiFoto') {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    } else {
      formData.append(key, data[key]);
    }
  });

  await fetch("/api/sendOrder", {
    method: "POST",
    body: formData,
  })
    .then(async (res) => {
        if (res.ok) {
            alert("Sikeresen elküldted a rendelésed!");
        } else {
            const error = await res.json();
            alert(`Hiba történt: ${error.message}`);
        }
    })
    .catch((error) => {
      alert(
        "Valami hiba történt, kérlek add le rendelésed telefonon vagy saját email kliensből"
      );
    });
};

const OrderForm = (props: React.PropsWithChildren<any>) => {
  const [formState, setFormState] = React.useState({
    orderType: "Árajánlat kérés",
    institutionName: "",
    contactName: "",
    contactTitle: "",
    contactPhone: "",
    contactEmail: "",
    productType: "Kitűző",
    quantity: "",
    designBadgeSize: "",
    designRibbonColor: "",
    designFontColor: "",
    designRibbonEnd: "egyenes",
    description: "",
    deliveryAndPayment: "Személyes átvétel",
    billingInfoName: "",
    billingInfoAddress: "",
    billingInfoEmail: "",
    shippingInfoAddress: "",
    shippingInfoZip: "",
    shippingInfoContactPhone: "",
    otherRequest: "",
    promDate: "",
    orderDate: new Date().toISOString().split('T')[0],
    grafika: null as File | null,
    tavalyiFoto: null as File | null,
  });

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    sendOrder(formState);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormState({ ...formState, [name]: files[0] });
    }
  };

  return (
    <form className={`space-y-8 ${props.className ?? ""}`} {...props} onSubmit={handleOrder}>
        <div>
            <Label value="Árajánlat kérés / Megrendelőlap" />
            <div className="flex items-center gap-2">
                <Radio id="arajanlat" name="orderType" value="Árajánlat kérés" defaultChecked onChange={handleInputChange} />
                <Label htmlFor="arajanlat">Árajánlat kérés</Label>
            </div>
            <div className="flex items-center gap-2">
                <Radio id="megrendeles" name="orderType" value="Megrendelőlap" onChange={handleInputChange} />
                <Label htmlFor="megrendeles">Megrendelőlap</Label>
            </div>
        </div>

        <div>
            <Label htmlFor="institutionName" value="Megrendelő intézmény neve" />
            <TextInput id="institutionName" name="institutionName" type="text" required value={formState.institutionName} onChange={handleInputChange} />
        </div>

        <fieldset className="border p-4 rounded-md">
            <legend className="text-lg font-medium">Kapcsolattartó személy</legend>
            <div className="space-y-4">
                <div>
                    <Label htmlFor="contactName" value="Név" />
                    <TextInput id="contactName" name="contactName" type="text" required value={formState.contactName} onChange={handleInputChange} />
                </div>
                <div>
                    <Label htmlFor="contactTitle" value="Titulus" />
                    <TextInput id="contactTitle" name="contactTitle" type="text" value={formState.contactTitle} onChange={handleInputChange} />
                </div>
                <div>
                    <Label htmlFor="contactPhone" value="Telefonszám" />
                    <TextInput id="contactPhone" name="contactPhone" type="tel" required value={formState.contactPhone} onChange={handleInputChange} />
                </div>
                <div>
                    <Label htmlFor="contactEmail" value="Email cím" />
                    <TextInput id="contactEmail" name="contactEmail" type="email" required value={formState.contactEmail} onChange={handleInputChange} />
                </div>
            </div>
        </fieldset>

        <div>
            <Label value="Termék megnevezése" />
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Radio id="kituzo" name="productType" value="Kitűző" defaultChecked onChange={handleInputChange} />
                    <Label htmlFor="kituzo">Kitűző</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="szalagos_kituzo" name="productType" value="Szalagos kitűző" onChange={handleInputChange} />
                    <Label htmlFor="szalagos_kituzo">Szalagos kitűző</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="szalag_kituzo_nelkul" name="productType" value="Szalag kitűző nélkül" onChange={handleInputChange} />
                    <Label htmlFor="szalag_kituzo_nelkul">Szalag kitűző nélkül</Label>
                </div>
            </div>
        </div>

        <div>
            <Label htmlFor="quantity" value="Darabszám" />
            <TextInput id="quantity" name="quantity" type="number" required value={formState.quantity} onChange={handleInputChange} />
        </div>

        <fieldset className="border p-4 rounded-md">
            <legend className="text-lg font-medium">Design</legend>
            <div className="space-y-4">
                <div>
                    <Label htmlFor="designBadgeSize" value="Jelvény méret" />
                    <TextInput id="designBadgeSize" name="designBadgeSize" type="text" value={formState.designBadgeSize} onChange={handleInputChange} />
                </div>
                <div>
                    <Label htmlFor="designRibbonColor" value="Szalag szín" />
                    <TextInput id="designRibbonColor" name="designRibbonColor" type="text" value={formState.designRibbonColor} onChange={handleInputChange} />
                </div>
                <div>
                    <Label htmlFor="designFontColor" value="Betűszín" />
                    <TextInput id="designFontColor" name="designFontColor" type="text" value={formState.designFontColor} onChange={handleInputChange} />
                </div>
                <div>
                    <Label value="Szalagvég" />
                    <div className="flex items-center gap-2">
                        <Radio id="egyenes" name="designRibbonEnd" value="egyenes" defaultChecked onChange={handleInputChange} />
                        <Label htmlFor="egyenes">Egyenes vágással (550 Ft + Áfa)</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio id="cikk-cakk" name="designRibbonEnd" value="cikk-cakk" onChange={handleInputChange} />
                        <Label htmlFor="cikk-cakk">Cikk-cakk vágással (590 Ft + Áfa)</Label>
                    </div>
                </div>
            </div>
        </fieldset>

        <div>
            <Label htmlFor="description" value="Leírás, amennyiben nem áll rendelkezésre fotó vagy grafika" />
            <Textarea id="description" name="description" placeholder="Jelvényen a pontos felirat, kép megnevezése; a szalagon a pontos felirat, mindkét szalag részre külön-külön" rows={4} value={formState.description} onChange={handleInputChange} />
        </div>

        <div>
            <Label value="Az átvétel és fizetés módja" />
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Radio id="szemelyes" name="deliveryAndPayment" value="Személyes átvétel" defaultChecked onChange={handleInputChange} />
                    <Label htmlFor="szemelyes">Személyes átvétel Bp. XVII. kerületben</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="eloreutalas" name="deliveryAndPayment" value="Szállítás előre utalással" onChange={handleInputChange} />
                    <Label htmlFor="eloreutalas">Szállítás előre utalással (2540 Ft)</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="utanvet" name="deliveryAndPayment" value="Utánvét" onChange={handleInputChange} />
                    <Label htmlFor="utanvet">Utánvéttel (4000 Ft)</Label>
                </div>
            </div>
        </div>

        <fieldset className="border p-4 rounded-md">
            <legend className="text-lg font-medium">Számlázási adatok (Áfás számla igény esetén)</legend>
            <div className="space-y-4">
                <div>
                    <Label htmlFor="billingInfoName" value="Név" />
                    <TextInput id="billingInfoName" name="billingInfoName" type="text" value={formState.billingInfoName} onChange={handleInputChange} />
                </div>
                <div>
                    <Label htmlFor="billingInfoAddress" value="Cím" />
                    <TextInput id="billingInfoAddress" name="billingInfoAddress" type="text" value={formState.billingInfoAddress} onChange={handleInputChange} />
                </div>
                <div>
                    <Label htmlFor="billingInfoEmail" value="Email cím a számlához" />
                    <TextInput id="billingInfoEmail" name="billingInfoEmail" type="email" value={formState.billingInfoEmail} onChange={handleInputChange} />
                </div>
            </div>
        </fieldset>

        <fieldset className="border p-4 rounded-md">
            <legend className="text-lg font-medium">Szállítási adatok</legend>
            <div className="space-y-4">
                <div>
                    <Label htmlFor="shippingInfoAddress" value="Cím" />
                    <TextInput id="shippingInfoAddress" name="shippingInfoAddress" type="text" value={formState.shippingInfoAddress} onChange={handleInputChange} />
                </div>
                <div>
                    <Label htmlFor="shippingInfoZip" value="Irányítószám" />
                    <TextInput id="shippingInfoZip" name="shippingInfoZip" type="text" value={formState.shippingInfoZip} onChange={handleInputChange} />
                </div>
                <div>
                    <Label htmlFor="shippingInfoContactPhone" value="Átvevő személy telefonszáma" />
                    <TextInput id="shippingInfoContactPhone" name="shippingInfoContactPhone" type="tel" value={formState.shippingInfoContactPhone} onChange={handleInputChange} />
                </div>
            </div>
        </fieldset>

        <div>
            <Label htmlFor="otherRequest" value="Egyéb kérés, megjegyzés" />
            <Textarea id="otherRequest" name="otherRequest" rows={4} value={formState.otherRequest} onChange={handleInputChange} />
        </div>

        <div>
            <Label htmlFor="promDate" value="A szalagavató időpontja" />
            <TextInput id="promDate" name="promDate" type="date" value={formState.promDate} onChange={handleInputChange} />
        </div>

        <div>
            <Label htmlFor="orderDate" value="Megrendelés dátuma" />
            <TextInput id="orderDate" name="orderDate" type="date" value={formState.orderDate} readOnly />
        </div>

        <div>
            <Label htmlFor="grafika" value="Grafika (PDF)"/>
            <FileInput id="grafika" name="grafika" accept=".pdf" onChange={handleFileChange} />
            <p className="text-sm text-gray-500">A grafikát csak abban az esetben kérjük, ha Ön új megrendelő, vagy ha a tavalyihoz képest változtatást kér.</p>
        </div>

        <div>
            <Label htmlFor="tavalyiFoto" value="Fotó a tavalyi szalagos kitűzőről"/>
            <FileInput id="tavalyiFoto" name="tavalyiFoto" accept="image/*" onChange={handleFileChange} />
            <p className="text-sm text-gray-500">A tavalyi szalagos kitűzőről készült fotót, hogy biztosan a megfelelő grafikát és szalagot használjuk, valamint vizuálisan is lássuk a pontos rendelést – ez nagyban megkönnyíti a gyártást.</p>
        </div>

        <p>Kívánunk Önöknek jó egészséget és sok energiát az új tanév minden napjára!</p>

      <Button
        type="submit"
        size="md"
        gradientDuoTone="purpleToBlue"
      >
        Küldés
      </Button>
    </form>
  );
};

export default OrderForm;