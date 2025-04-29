"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function CatalogDownload() {
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contentRef.current?.classList.add("opacity-100", "translate-y-0");
            contentRef.current?.classList.remove("opacity-0", "translate-y-20");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      contentRef.current.classList.add("opacity-0", "translate-y-20");
      contentRef.current.classList.add(
        "transition-all",
        "duration-1000",
        "ease-out"
      );
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/catalogo.pdf"; // Asegúrate que este archivo esté en la carpeta 'public'
    link.download = "Catalogo-Mueblito.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="catalogo"
      ref={sectionRef}
      className="w-full py-20 md:py-32 bg-beige relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-beige to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div
          ref={contentRef}
          className="bg-gradient-soft rounded-3xl p-8 md:p-16 shadow-2xl max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Filtro de blur */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl"></div>

          {/* Contenido */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
            {/* Texto */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Descarga Nuestro Catálogo
              </h2>
              <p className="text-muted-foreground mb-8 text-base md:text-lg">
                Explora nuestra colección completa de diseños, materiales y
                acabados en nuestro catálogo digital.
              </p>
              <Button
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-3"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={handleDownload}
              >
                <Download
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isHovering ? "translate-y-1" : ""
                  }`}
                />
                Descargar Catálogo
              </Button>
            </div>

            {/* Imagen */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-full max-w-xs mx-auto md:max-w-sm aspect-[3/4] transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/catalogo.jpg"
                  alt="Portada del catálogo"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
              </div>

              {/* Fondo decorativo */}
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
