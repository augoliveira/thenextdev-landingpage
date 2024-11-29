import Image from "next/image";

export default function FloatingWhatsappIcon() {
  return (
    <a
      href="https://wa.me/5599999999999"
      target="_blank"
      className="fixed bottom-4 right-4 z-50"
    >
      <Image src="/whatsapp.png" alt="Whatsapp" width={70} height={70} />
    </a>
  );
}