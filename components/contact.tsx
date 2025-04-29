"use client";

import { useState, useCallback } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Formulario enviado:", formData);
      setFormData({ name: "", email: "", message: "" });
      setSuccessMessage("¡Mensaje enviado correctamente!");

      setTimeout(() => {
        setSuccessMessage(null);
      }, 4000);
    },
    [formData]
  );

  return (
    <section id="contacto" className="w-full py-16 md:py-24 bg-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-12">
          Contacto
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-8 animate-fade-in">
            <ContactCard />
          </div>

          {/* Formulario de contacto */}
          <div className="animate-slide-in">
            <Card className="bg-white rounded-xl shadow-soft border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Envíanos un Mensaje
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <FormField
                    label="Nombre"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                  <FormField
                    label="Email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                  <FormField
                    label="Mensaje"
                    id="message"
                    isTextarea
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>

                  {successMessage && (
                    <p className="text-green-600 text-sm mt-4 text-center">
                      {successMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard() {
  return (
    <Card className="bg-white rounded-xl shadow-soft border-none">
      <CardContent className="p-6 space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-primary mb-6">
            Información de Contacto
          </h3>
          <div className="space-y-6">
            <ContactInfo
              icon={<Mail className="h-5 w-5 text-primary" />}
              title="Email"
              detail="mueblitocodamuebles@gmail.com"
              href="mailto:mueblitocodamuebles@gmail.com"
            />
            <ContactInfo
              icon={<Phone className="h-5 w-5 text-primary" />}
              title="Teléfonos"
              detail="2644568079 / 3516964088"
              href="tel:+542644568079"
            />
          </div>
        </div>

        <Button
          className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
          onClick={() =>
            window.open(
              "https://wa.me/542644568079",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Contactar por WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href: string;
}

function ContactInfo({ icon, title, detail, href }: ContactInfoProps) {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
        <a
          href={href}
          className="text-primary hover:underline transition-colors"
          rel="noopener noreferrer"
          target="_blank"
        >
          {detail}
        </a>
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  isTextarea?: boolean;
}

function FormField({
  label,
  id,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
  isTextarea,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-muted-foreground mb-1"
      >
        {label}
      </label>
      {isTextarea ? (
        <Textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full min-h-[120px] focus:outline-primary"
        />
      ) : (
        <Input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full focus:outline-primary"
        />
      )}
    </div>
  );
}
