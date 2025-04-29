"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Palette, Heart } from "lucide-react";

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [
      cardRef.current,
      textRef.current,
      imageRef.current,
    ].filter(Boolean);

    elements.forEach((el) => {
      el?.classList.add("opacity-0");
      observer.observe(el!);
    });

    return () => elements.forEach((el) => observer.unobserve(el!));
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="w-full py-24 md:py-32 bg-beige/95 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0 bg-[url('/images/texture-light.png')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-beige to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-beige to-transparent"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary/80 mb-3 tracking-wider">
            NUESTRA ESENCIA
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-primary mb-4">
            Artesanía & <span className="italic">Diseño</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary/30 mx-auto mb-8"></div>
          <p className="text-muted-foreground/80 max-w-2xl mx-auto text-lg">
            Donde la tradición artesanal se encuentra con la innovación
            contemporánea
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card
            ref={cardRef}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div ref={textRef} className="p-8 md:p-10 lg:p-12">
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-5">
                    <div>
                      <h3 className="text-xl font-medium text-primary mb-3">
                        Filosofía Creativa
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Cada pieza en Mueblito / Art & Design nace de la
                        intersección entre arte y funcionalidad. Creemos en
                        diseños atemporales que trascienden tendencias,
                        enfocados en calidad y significado.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-primary mb-3">
                        Proceso Artesanal
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Combinamos técnicas centenarias con tecnología moderna.
                        Desde la selección de materiales hasta los acabados
                        finales, cada paso es ejecutado con precisión y atención
                        al detalle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-primary mb-3">
                        Compromiso
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Más que muebles, creamos piezas con alma que cuentan
                        historias. Nuestro compromiso es con la excelencia, la
                        sostenibilidad y la creación de valor a través del
                        diseño.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                ref={imageRef}
                className="relative h-80 lg:h-full min-h-[400px]"
              >
                <Image
                  src="/fondo.jpg"
                  alt="Taller artesanal de Mueblito"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-lg font-medium mb-1">Taller Principal</p>
                    <p className="text-sm text-white/80">San Juan, Argentina</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
