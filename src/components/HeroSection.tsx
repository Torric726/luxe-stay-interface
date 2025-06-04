
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Star, Users } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Gestión Hotelera
              <span className="block text-hotel-gold">de Lujo</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Sistema integral para hoteles modernos. Gestiona reservas, habitaciones, 
              pagos y análisis con una interfaz elegante y potente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-hotel-gold hover:bg-hotel-gold-dark text-gray-900 font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                onClick={onGetStarted}
              >
                Comenzar Ahora
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg transition-all duration-300"
              >
                Ver Demo
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-in">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-hotel-gold mr-2" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-blue-100">Reservas Mensuales</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-hotel-gold mr-2" />
                <span className="text-3xl font-bold">1,200+</span>
              </div>
              <p className="text-blue-100">Huéspedes Satisfechos</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-hotel-gold mr-2" />
                <span className="text-3xl font-bold">4.9</span>
              </div>
              <p className="text-blue-100">Rating Promedio</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-hotel-gold rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
