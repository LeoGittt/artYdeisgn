"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/catalogo.pdf"; // Ruta relativa a la carpeta /public
    link.download = "catalogo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        "hero",
        "lineas",
        "galeria",
        "proceso",
        "catalogo",
        "pedidos",
        "contacto",
        "nosotros",
      ];
      let currentSection = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-beige/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Mueblito Logo"
            width={120}
            height={50}
            className={`h-8 sm:h-10 w-auto transition-all duration-300 ${
              scrolled ? "scale-90" : "scale-100"
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <NavLink
            href="#lineas"
            scrolled={scrolled}
            isActive={activeSection === "lineas"}
          >
            Nuestras Líneas
          </NavLink>
          <NavLink
            href="#galeria"
            scrolled={scrolled}
            isActive={activeSection === "galeria"}
          >
            Galería
          </NavLink>
          <NavLink
            href="#proceso"
            scrolled={scrolled}
            isActive={activeSection === "proceso"}
          >
            Proceso
          </NavLink>
          <NavLink
            href="#pedidos"
            scrolled={scrolled}
            isActive={activeSection === "pedidos"}
          >
            Pedidos
          </NavLink>
          <NavLink
            href="#contacto"
            scrolled={scrolled}
            isActive={activeSection === "contacto"}
          >
            Contacto
          </NavLink>
          <NavLink
            href="#nosotros"
            scrolled={scrolled}
            isActive={activeSection === "nosotros"}
          >
            Nosotros
          </NavLink>

          <Button
            className={`ml-2 bg-primary hover:bg-primary-hover text-white text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${
              scrolled ? "scale-90 py-1" : "scale-100"
            }`}
            onClick={handleDownload}
          >
            <Download className="h-4 w-4" />
            Catálogo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-beige/95 backdrop-blur-md absolute w-full shadow-md slide-in">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <MobileNavLink
              href="#lineas"
              onClick={handleLinkClick}
              isActive={activeSection === "lineas"}
            >
              Nuestras Líneas
            </MobileNavLink>
            <MobileNavLink
              href="#galeria"
              onClick={handleLinkClick}
              isActive={activeSection === "galeria"}
            >
              Galería
            </MobileNavLink>
            <MobileNavLink
              href="#proceso"
              onClick={handleLinkClick}
              isActive={activeSection === "proceso"}
            >
              Proceso
            </MobileNavLink>
            <MobileNavLink
              href="#pedidos"
              onClick={handleLinkClick}
              isActive={activeSection === "pedidos"}
            >
              Pedidos
            </MobileNavLink>
            <MobileNavLink
              href="#contacto"
              onClick={handleLinkClick}
              isActive={activeSection === "contacto"}
            >
              Contacto
            </MobileNavLink>
            <MobileNavLink
              href="#nosotros"
              onClick={handleLinkClick}
              isActive={activeSection === "nosotros"}
            >
              Nosotros
            </MobileNavLink>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10 flex items-center justify-center gap-2"
                onClick={handleDownload}
              >
                <Download className="h-4 w-4" />
                Descargar Catalogo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  scrolled: boolean;
  isActive: boolean;
  children: React.ReactNode;
}

function NavLink({ href, scrolled, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`relative px-3 py-2 rounded-md transition-all duration-300 ${
        scrolled ? "text-sm" : "text-base"
      } ${
        isActive
          ? "text-primary font-medium"
          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
      )}
    </Link>
  );
}

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

function MobileNavLink({
  href,
  onClick,
  isActive,
  children,
}: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className={`py-2 px-3 transition-colors duration-200 text-lg rounded-md ${
        isActive
          ? "text-primary font-medium bg-primary/5"
          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
