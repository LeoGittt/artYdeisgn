"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X, Maximize, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    image: "/showcase-1.jpg",
    title: "Colección Orgánica",
    description: "Líneas fluidas inspiradas en formas naturales",
    category: "Living",
  },
  {
    id: 2,
    image: "/showcase-2.jpg",
    title: "Serie Brutalista",
    description: "Materiales crudos con acabados texturizados",
    category: "Comedor",
  },
  {
    id: 3,
    image: "/showcase-3.jpg",
    title: "Línea Piccolo",
    description: "Mobiliario infantil seguro y versátil",
    category: "Dormitorio",
  },
  {
    id: 4,
    image: "/showcase-4.jpg",
    title: "Colección Alamin",
    description: "Piezas escultóricas funcionales",
    category: "Exteriores",
  },
  {
    id: 5,
    image: "/showcase-5.jpg",
    title: "Edición Fazzio",
    description: "Elegancia contemporánea italiana",
    category: "Oficina",
  },
  {
    id: 6,
    image: "/showcase-6.jpg",
    title: "Serie Tiersen",
    description: "Arte funcional para espacios modernos",
    category: "Living",
  },
];

export default function PremiumGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (activeIndex === null) return;

    if (e.key === "Escape") {
      closeViewer();
    }
    if (e.key === "ArrowLeft") {
      navigate(-1);
    }
    if (e.key === "ArrowRight") {
      navigate(1);
    }
    if (e.key === "f") {
      toggleFullscreen();
    }
  };

  const openViewer = (index: number) => {
    setActiveIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeViewer = () => {
    setActiveIndex(null);
    setIsFullscreen(false);
    document.body.style.overflow = "auto";
  };

  const navigate = (direction: number) => {
    if (activeIndex === null) return;

    let newIndex = activeIndex + direction;
    if (newIndex < 0) newIndex = galleryItems.length - 1;
    if (newIndex >= galleryItems.length) newIndex = 0;

    setActiveIndex(newIndex);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen && galleryRef.current) {
      galleryRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <section className="relative py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Nuestras <span className="font-medium">Creaciones</span>
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Piezas únicas donde el diseño se encuentra con la artesanía
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => openViewer(index)}
            >
              <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visor de imagen */}
      {activeIndex !== null && (
        <div
          ref={galleryRef}
          className="fixed inset-0 bg-black z-50 flex flex-col"
        >
          {/* Controles superiores */}
          <div className="flex justify-between items-center p-6 absolute top-0 left-0 right-0 z-10">
            <button
              onClick={closeViewer}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-white">
              {activeIndex + 1} / {galleryItems.length}
            </div>
            <button
              onClick={toggleFullscreen}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Maximize size={20} />
            </button>
          </div>

          {/* Imagen principal */}
          <div className="flex-grow flex items-center justify-center p-4 relative">
            <Image
              src={galleryItems[activeIndex].image}
              alt={galleryItems[activeIndex].title}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Controles inferiores */}
          <div className="bg-black/80 p-6 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-medium mb-1">
                {galleryItems[activeIndex].title}
              </h3>
              <p className="text-gray-300 mb-4">
                {galleryItems[activeIndex].description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  {galleryItems[activeIndex].category}
                </span>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors z-10"
          >
            <ArrowLeft size={24} className="text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-3 rounded-full transition-colors z-10"
          >
            <ArrowRight size={24} className="text-white" />
          </button>
        </div>
      )}
    </section>
  );
}
