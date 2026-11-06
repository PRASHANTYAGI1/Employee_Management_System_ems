
import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Mainlogo from "@/assets/Mainlogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src={Mainlogo}
            alt="EMPOWER EMS"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* <a
            href="/login"
            className="text-sm font-semibold text-slate-700 hover:text-blue-600"
          >
            Login
          </a> */}

          <a
            href="/login"
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-blue-700 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            Login
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-5 py-5 shadow-xl">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-slate-700 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/login"
              className="font-semibold text-blue-700"
            >
              Login
            </a>

            <a
              href="/register"
              className="text-center bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
