"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const scrollToTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollToTopRef.current;
      if (!el) return;

      const isVisible = window.scrollY > 500;
      el.classList.toggle("opacity-100", isVisible);
      el.classList.toggle("translate-y-0", isVisible);
      el.classList.toggle("opacity-0", !isVisible);
      el.classList.toggle("translate-y-10", !isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="w-full py-16 bg-primary text-white relative overflow-hidden"
    >
      {/* Botón scroll up */}
      <div
        ref={scrollToTopRef}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-primary hover:bg-primary-hover text-white p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 opacity-0 translate-y-10 z-40"
        title="Volver arriba"
        aria-label="Volver arriba"
      >
        <ArrowUp className="h-6 w-6" />
      </div>

      {/* Fondo decorativo superior */}
      <div className="absolute top-0 left-0 w-full h-16 " />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo y descripción */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image
              src="/images/logo.png"
              alt="Logo Mueblito"
              width={150}
              height={70}
              className="h-14 w-auto mb-6 invert"
            />
            <p className="text-white/80 max-w-xs">
              Arte & Diseño en Mobiliario. Creamos piezas únicas con pasión y
              dedicación que transforman espacios y conectan con quienes los
              habitan.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-6">Enlaces Rápidos</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {[
                ["#lineas", "Nuestras Líneas"],
                ["#galeria", "Galería"],
                ["#catalogo", "Catálogo"],
                ["#pedidos", "Pedidos"],
                ["#contacto", "Contacto"],
                ["#nosotros", "Sobre Nosotros"],
              ].map(([href, label]) => (
                <FooterLink key={href} href={href}>
                  {label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Contacto y redes */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-6">Contacto</h3>
            <div className="space-y-4 mb-6">
              <ContactItem
                icon={<Mail />}
                text="mueblitocodamuebles@gmail.com"
              />
              <ContactItem icon={<Phone />} text="2644568079 / 3516964088" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram className="h-5 w-5" />}
                label="Instagram"
              />
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook className="h-5 w-5" />}
                label="Facebook"
              />
            </div>
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Mueblito / Art & Design. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}

// Subcomponentes auxiliares
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-white/80 hover:text-white transition-all duration-200 hover:translate-x-1"
      aria-label={typeof children === "string" ? children : ""}
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-transform duration-200 hover:scale-110"
    >
      {icon}
    </Link>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center text-sm sm:text-base text-white/80">
      <span className="mr-3">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
