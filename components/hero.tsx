"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("opacity-100", "translate-y-0");
      titleRef.current.classList.remove("opacity-0", "translate-y-10");
    }

    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add("opacity-100", "translate-y-0");
        subtitleRef.current.classList.remove("opacity-0", "translate-y-10");
      }
    }, 400);

    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.classList.add("opacity-100", "translate-y-0");
        buttonRef.current.classList.remove("opacity-0", "translate-y-10");
      }
    }, 800);
  }, []);

  const scrollToProducts = () => {
    document.getElementById("lineas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-beige/90 to-beige/50 overflow-hidden"
    >
      {/* Fondo con degradado mejorado */}
      <div className="absolute inset-0 bg-gradient-to-b from-beige/90 to-beige/50 opacity-80"></div>

      {/* Efectos sutiles de desenfoque */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 right-0 w-2/3 h-2/3 bg-primary/10 blur-3xl opacity-40"></div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 z-10 text-center py-12">
        {/* Título principal */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-extrabold text-primary mb-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <span className="block text-6xl md:text-8xl text-secondary mb-4">
            Mueblito
          </span>
          <span className="block text-3xl md:text-4xl font-normal tracking-widest">
            Art & Design
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-400"
        >
          Piezas únicas de mobiliario que transforman espacios y cuentan
          historias a través del diseño y la emoción.
        </p>

        {/* Botón de llamada a la acción */}
        <div
          ref={buttonRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-600"
        >
          <Button
            variant="default"
            className="flex items-center mx-auto py-3 px-8 bg-primary text-white rounded-full text-lg hover:bg-primary-dark transition-all duration-300"
            onClick={scrollToProducts}
          >
            Ver productos
            <ArrowDown className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
