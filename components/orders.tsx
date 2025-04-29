"use client";

import { useRef, useEffect } from "react";
import { Package, Truck, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Orders() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-20");
          }
        });
      },
      { threshold: 0.1 }
    );

    const itemsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-10");
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      cardRef.current.classList.add(
        "opacity-0",
        "translate-y-20",
        "transition-all",
        "duration-1000",
        "ease-out"
      );
      cardObserver.observe(cardRef.current);
    }

    itemsRef.current.forEach((item) => {
      if (item) {
        item.classList.add(
          "opacity-0",
          "translate-y-10",
          "transition-all",
          "duration-700",
          "ease-out"
        );
        itemsObserver.observe(item);
      }
    });

    return () => {
      if (cardRef.current) cardObserver.unobserve(cardRef.current);
      itemsRef.current.forEach((item) => {
        if (item) itemsObserver.unobserve(item);
      });
    };
  }, []);

  return (
    <section
      id="pedidos"
      ref={sectionRef}
      className="w-full py-24 md:py-32 bg-gradient-to-b from-beige to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-beige to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight leading-tight">
            Información de Pedidos
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mt-6">
            Conoce nuestro proceso de pedidos y envíos para adquirir tus piezas
            favoritas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card
            ref={cardRef}
            className="bg-white rounded-3xl shadow-2xl border-none overflow-hidden"
          >
            <CardContent className="p-10 md:p-14">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
                {/* Item 1 */}
                <div
                  ref={(el) => {
                    itemsRef.current[0] = el;
                  }}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="p-5 bg-primary/10 rounded-full shadow-md">
                    <CreditCard className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">
                    Seña del 30%
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Los pedidos se toman con una seña del 30% del precio total
                    del producto.
                  </p>
                </div>

                {/* Item 2 */}
                <div
                  ref={(el) => {
                    itemsRef.current[1] = el;
                  }}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="p-5 bg-primary/10 rounded-full shadow-md">
                    <Package className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">
                    Envío e Instalación
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    La compra incluye envío e instalación correspondiente.
                  </p>
                </div>

                {/* Item 3 */}
                <div
                  ref={(el) => {
                    itemsRef.current[2] = el;
                  }}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="p-5 bg-primary/10 rounded-full shadow-md">
                    <Truck className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary">
                    Envíos Nacionales
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Realizamos envíos a todo el país.
                  </p>
                </div>
              </div>

              {/* Mensaje final */}
              <div
                ref={(el) => {
                  itemsRef.current[3] = el;
                }}
                className="mt-14 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl shadow-inner"
              >
                <p className="text-center text-base text-muted-foreground leading-relaxed">
                  Para consultas específicas sobre plazos de entrega o métodos
                  de pago, no dudes en contactarnos a través de WhatsApp o
                  correo electrónico.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
