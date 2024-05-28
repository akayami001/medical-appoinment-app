import Image from "next/image";

const WhatsAppIcon = () => {
  const phoneNumber = "+908504802048";
  const message = "Hi there! I have a question...";
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 sm:flex sm:gap-4 ">
      <a
        className="flex rounded-full bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-secondary hover:text-primary items-center justify-center"
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/whatsapp.png"
          alt="contact us on whatsapp"
          width={25}
          height={25}
        />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
