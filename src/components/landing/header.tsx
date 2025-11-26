"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, Menu, X, ArrowRight } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-white/10 backdrop-blur-md bg-[#050505]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#92D639] to-[#7ab828] rounded-xl flex items-center justify-center shadow-lg shadow-[#92D639]/20">
              <MessageCircle className="text-black w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              RESPONDE<span className="text-[#92D639]">ZAP.AI</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Planos</Link>
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Funcionalidades</Link>
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Para você</Link>
            <Link href="#" className="text-sm font-medium text-[#92D639] hover:text-[#aaff44] transition-colors flex items-center gap-1">
              Área do Cliente <ArrowRight size={14} />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
             <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10">
              Fale com vendas
            </Button>
             <Button className="bg-[#92D639] text-black font-bold hover:bg-[#82c232] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#92D639]/30">
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A0A0B] border-b border-white/10 px-4 pt-2 pb-6 space-y-4 absolute w-full shadow-2xl">
          <Link href="#" className="block text-gray-300 hover:text-[#92D639] py-2">Home</Link>
          <Link href="#" className="block text-gray-300 hover:text-[#92D639] py-2">Planos</Link>
          <Link href="#" className="block text-gray-300 hover:text-[#92D639] py-2">Funcionalidades</Link>
          <Button className="w-full mt-4 bg-[#92D639] hover:bg-[#82c232] text-black py-3 rounded-lg font-bold">
            Começar Grátis
          </Button>
        </div>
      )}
    </header>
  );
}
