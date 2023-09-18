import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import { formatDiagnosticsWithColorAndContext } from "typescript";

const sendOrder = async (data: {
  email: string;
  phone: string;
  message: string;
  name: string;
}) => {
  await fetch("/api/sendOrder", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      setTimeout(() => alert("Sikeresen elküldted a rendelésed!"), 2000);
    })
    .catch((error) => {
      alert(
        "Valami hiba történt, kérlek add le rendelésed telefonon vagy saját email kliensből"
      );
    });
};

const OrderForm = (props: React.PropsWithChildren<any>) => {
  const [formState, setFormState] = React.useState({
    email: "",
    phone: "",
    message: "",
    name: "",
  });

  const handleOrder = () => {
    sendOrder({
      email: formState.email,
      phone: formState.phone,
      message: formState.message,
      name: formState.name,
    });
  };

  return (
    <div className={`space-y-8 ${props.className ?? ""}`} {...props}>
      <div>
        <Label htmlFor="name" value="Teljes neved" />
        <TextInput
          type="text"
          id="name"
          placeholder=""
          required
          name="name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="email" value="Email címed" />
        <TextInput
          type="email"
          id="email"
          placeholder=""
          required
          name="email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
        />
      </div>
      <div>
        <Label htmlFor="phone" value="Telefonszámod" />
        <TextInput
          type="text"
          id="phone"
          placeholder=""
          required
          name="phone"
          value={formState.phone}
          onChange={(e) =>
            setFormState({ ...formState, phone: e.target.value })
          }
        />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message" value="Rendelésed tartalma" />
        <Textarea
          id="message"
          rows={6}
          placeholder="Sorold fel mit szeretnél rendelni..."
          name="message"
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
        ></Textarea>
      </div>
      <Button
        type="submit"
        size="md"
        gradientDuoTone="purpleToBlue"
        onClick={handleOrder}
      >
        Rendelés elküldése
      </Button>
    </div>
  );
};

export default OrderForm;
