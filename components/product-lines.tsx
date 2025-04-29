"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductLine {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  details: string[];
  dimensions?: string;
  materials: string;
  priceRange: string;
  colors?: string[];
}

const productLines: ProductLine[] = [
  {
    id: "piccolo",
    number: "01",
    title: "Línea Piccolo",
    description:
      "Mobiliario infantil diseñado con amor para los más pequeños del hogar.",
    image: "/Capturaa.jpg",
    details: [
      "Diseño ergonómico para niños",
      "Bordes redondeados y seguros",
      "Pinturas no tóxicas",
      "Personalización disponible",
      "Adaptable a diferentes edades",
    ],
    materials: "Madera de haya maciza con acabado ecológico",
    priceRange: "$$ - $$$",
    colors: ["Blanco natural", "Azul pastel", "Rosa suave", "Verde menta"],
  },
  {
    id: "organica",
    number: "02",
    title: "Línea Orgánica",
    description:
      "Formas naturales que se integran armoniosamente en cualquier espacio.",
    image: "/organica.jpg",
    details: [
      "Inspirado en formas de la naturaleza",
      "Líneas fluidas y curvas suaves",
      "Integración perfecta con espacios verdes",
      "Edición limitada",
      "Cada pieza es única",
    ],
    materials: "Madera de nogal y resina epoxi ecológica",
    priceRange: "$$$ - $$$$",
    dimensions: "Variadas (consultar modelo)",
  },
  {
    id: "brutalista",
    number: "03",
    title: "Línea Brutalista",
    description:
      "Diseños audaces con líneas marcadas y materiales en estado puro.",
    image: "/brutalista.jpg",
    details: [
      "Estética industrial y minimalista",
      "Estructuras geométricas definidas",
      "Acabados en crudo y texturas visibles",
      "Para espacios urbanos y contemporáneos",
    ],
    materials: "Hormigón, acero inoxidable y madera reciclada",
    priceRange: "$$$$",
    colors: ["Hormigón natural", "Acero pulido", "Negro mate"],
  },
  {
    id: "fazzio",
    number: "04",
    title: "Línea Fazzio",
    description:
      "Elegancia contemporánea con toques artísticos para espacios sofisticados.",
    image: "/fazio.jpg",
    details: [
      "Diseño italiano inspirador",
      "Combinación de materiales premium",
      "Detalles dorados y cromados",
      "Edición numerada y firmada",
    ],
    materials: "Mármol Carrara, latón y cuero italiano",
    priceRange: "$$$$$",
    dimensions: "Personalizadas según proyecto",
  },
  {
    id: "alamin",
    number: "05",
    title: "Línea Alamin",
    description:
      "Bancos, esculturas y piezas de iluminación con enfoque artístico.",
    image: "/alamin.jpg",
    details: [
      "Piezas escultóricas funcionales",
      "Juego de luces y sombras",
      "Fabricación completamente artesanal",
      "Tiempos de producción extendidos",
    ],
    materials: "Bronce, vidrio soplado y maderas exóticas",
    priceRange: "$$$$ - $$$$$",
    colors: ["Bronce envejecido", "Negro espejo", "Dorado satinado"],
  },
  {
    id: "tiersen",
    number: "06",
    title: "Línea Tiersen",
    description:
      "Art Prints y cuadros que complementan y elevan cualquier ambiente.",
    image: "/tiersen.jpg",
    details: [
      "Ediciones limitadas de 50 unidades",
      "Técnicas mixtas sobre lienzo",
      "Certificado de autenticidad incluido",
      "Enmarcado artesanal premium",
    ],
    materials: "Lienzo de algodón, tintas minerales, marcos de roble",
    priceRange: "$$$ - $$$$$",
    dimensions: "Disponible en 3 tamaños (60x90, 90x120, 120x180 cm)",
  },
];

export default function ProductLines() {
  const [selectedProduct, setSelectedProduct] = useState<ProductLine | null>(
    null
  );

  return (
    <section
      id="lineas"
      className="w-full py-24 md:py-32 lg:py-40 bg-beige relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/images/texture-light.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-beige to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-beige to-transparent z-10"></div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <div className="text-center mb-20">
          <span className="inline-block text-sm md:text-base font-medium text-primary/80 mb-3 tracking-widest">
            COLECCIÓN EXCLUSIVA
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary mb-4">
            Nuestras <span className="italic font-normal">Líneas</span>
          </h2>
          <div className="w-32 h-0.5 bg-primary/30 mx-auto mb-8"></div>
          <p className="text-muted-foreground/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Descubre nuestra colección de mobiliario artesanal donde cada pieza
            cuenta una historia de artesanía y diseño.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {productLines.map((line) => (
            <div
              key={line.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(line)}
            >
              <Card className="bg-white rounded-xl overflow-hidden border border-gray-100/50 shadow-sm hover:shadow-lg transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={line.image}
                    alt={line.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
                  <div className="absolute top-5 left-5 bg-primary text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                    {line.number}
                  </div>
                  <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="outline"
                      className="bg-white/90 backdrop-blur-sm"
                    >
                      Ver detalles
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 md:p-7 flex-grow">
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">
                    {line.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {line.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de detalles */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-20"
              onClick={() => setSelectedProduct(null)}
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-full md:min-h-[600px]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                  priority
                />
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full mr-3">
                      {selectedProduct.number}
                    </span>
                  </div>
                  {selectedProduct.dimensions && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {selectedProduct.dimensions}
                    </span>
                  )}
                </div>

                <h3 className="text-3xl font-medium text-gray-900 mb-4">
                  {selectedProduct.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {selectedProduct.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">
                    Características destacadas
                  </h4>
                  <ul className="space-y-3">
                    {selectedProduct.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                      MATERIALES
                    </h4>
                    <p className="text-gray-900">{selectedProduct.materials}</p>
                  </div>

                  {selectedProduct.colors && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">
                        COLORES
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.colors.map((color, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 px-2 py-1 rounded"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 py-6 text-lg bg-primary hover:bg-primary/90">
                    Solicitar catálogo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
