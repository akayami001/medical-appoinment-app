"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const WhatsAppContact = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = whatsAppUrl;
  };

  return (
    <Button className="mt-10 bg-green-600" onClick={handleClick}>
      Start a Chat
    </Button>
  );
};

export default WhatsAppContact;
