"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const WhatsAppIcon = () => {
  const phoneNumber = "+491783739057";
  const message = "Hi there! I have a question...";
  const handleClick = () => {
    const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsAppUrl;
  };
  return (
    <div className="fixed bottom-6 right-6 sm:flex sm:gap-4 ">
      <Button
        className="flex rounded-full bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-secondary hover:text-primary items-center justify-center"
        onClick={handleClick}
      >
        <Image
          src="/whatsapp.png"
          alt="contact us on whatsapp"
          width={25}
          height={25}
        />
      </Button>
    </div>
  );
};

export default WhatsAppIcon;
