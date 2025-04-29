"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Pencil, Hammer, Truck } from "lucide-react";
import { motion } from "framer-motion"; // Para las animaciones suaves

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Concepto",
    description:
      "Exploramos ideas y conceptos basados en tus necesidades y espacio disponible.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
  },
  {
    id: 2,
    title: "Diseño",
    description:
      "Creamos bocetos y modelos 3D para visualizar el producto final.",
    icon: <Pencil className="h-8 w-8 text-primary" />,
  },
  {
    id: 3,
    title: "Fabricación",
    description:
      "Elaboramos cada pieza con materiales de primera calidad y técnicas artesanales.",
    icon: <Hammer className="h-8 w-8 text-primary" />,
  },
  {
    id: 4,
    title: "Entrega",
    description:
      "Realizamos la entrega e instalación en tu espacio con cuidado profesional.",
    icon: <Truck className="h-8 w-8 text-primary" />,
  },
];

function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col"
    >
      <Card className="h-full bg-white rounded-3xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <CardContent className="flex flex-col items-center text-center p-8">
          <div className="text-4xl font-extrabold text-primary mb-4">
            {step.id}
          </div>
          <div className="mb-4 p-6 bg-primary/10 rounded-full transition-transform transform hover:scale-125 hover:rotate-12">
            {step.icon}
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-3">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-lg">{step.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function DesignProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 bg-gradient-to-r from-beige via-light-beige to-beige"
    >
      {/* Gradients for section top and bottom */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-beige to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-beige to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="inline-block text-4xl font-extrabold text-primary mb-4 line-decoration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Nuestro Proceso
          </motion.h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground/80 text-lg">
            Desde la idea inicial hasta la entrega final, cada paso de nuestro
            proceso está diseñado para crear piezas excepcionales.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none p-0 m-0">
            {processSteps.map((step) => (
              <li key={step.id} className="flex">
                <ProcessStepCard step={step} />
              </li>
            ))}
          </ul>

          {/* Final message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-soft text-center"
          >
            <p className="text-lg text-primary">
              Cada proyecto es único y personalizado según tus necesidades
              específicas. Nos enorgullece ofrecer un servicio integral desde el
              concepto hasta la instalación.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
