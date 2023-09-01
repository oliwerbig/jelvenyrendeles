import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";

const ContactForm = (props: React.PropsWithChildren<any>) => {
  return (
    <form
      action="#"
      className={`space-y-8 ${props.className ?? ""}`}
      {...props}
    >
      <div>
        <Label htmlFor="email" value="Email címed" />
        <TextInput
          type="email"
          id="email"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div>
        <Label htmlFor="subject" value="Tárgy" />
        <TextInput
          type="text"
          id="subject"
          placeholder="Mondd el miben segíthetünk"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <Label htmlFor="message" value="Üzeneted" />
        <Textarea id="message" rows={6} placeholder="..."></Textarea>
      </div>
      <Button type="submit" size="md" gradientDuoTone="pinkToOrange">
        Üzenet küldése
      </Button>
    </form>
  );
};

export default ContactForm;
