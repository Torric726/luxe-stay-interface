
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Star, CreditCard, Bell, Home, Settings } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import RoomCard from '@/components/RoomCard';
import StatsCard from '@/components/StatsCard';
import LoginModal from '@/components/LoginModal';
import AdminDashboard from '@/components/AdminDashboard';
import ClientDashboard from '@/components/ClientDashboard';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  // Datos de ejemplo para las habitaciones
  const rooms = [
    {
      id: 1,
      name: "Suite Ejecutiva",
      type: "Suite",
      price: 350,
      image: "/placeholder.svg",
      amenities: ["WiFi", "Mini Bar", "Vista al Mar", "Jacuzzi"],
      capacity: 2,
      available: true
    },
    {
      id: 2,
      name: "Habitación Deluxe",
      type: "Deluxe",
      price: 250,
      image: "/placeholder.svg",
      amenities: ["WiFi", "TV HD", "Aire Acondicionado", "Balcón"],
      capacity: 3,
      available: true
    },
    {
      id: 3,
      name: "Habitación Estándar",
      type: "Estándar",
      price: 150,
      image: "/placeholder.svg",
      amenities: ["WiFi", "TV", "Aire Acondicionado"],
      capacity: 2,
      available: false
    }
  ];

  // Datos de ejemplo para estadísticas
  const stats = [
    {
      title: "Reservas Activas",
      value: "127",
      icon: Calendar,
      color: "bg-blue-500",
      trend: "+12%"
    },
    {
      title: "Huéspedes",
      value: "89",
      icon: Users,
      color: "bg-green-500",
      trend: "+8%"
    },
    {
      title: "Ocupación",
      value: "78%",
      icon: Home,
      color: "bg-hotel-gold",
      trend: "+5%"
    },
    {
      title: "Ingresos Hoy",
      value: "$12,400",
      icon: CreditCard,
      color: "bg-purple-500",
      trend: "+15%"
    }
  ];

  const handleLogin = (userData, role) => {
    setUser(userData);
    setUserRole(role);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    setUserRole(null);
  };

  // Si el usuario está logueado, mostrar dashboard correspondiente
  if (user) {
    if (userRole === 'admin') {
      return <AdminDashboard user={user} onLogout={handleLogout} />;
    } else {
      return <ClientDashboard user={user} onLogout={handleLogout} />;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-hotel rounded-lg flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">LuxeStay</h1>
                <p className="text-sm text-gray-600">Gestión Hotelera</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setIsLoginOpen(true)}
                className="border-hotel-gold text-hotel-gold hover:bg-hotel-gold hover:text-white transition-all duration-300"
              >
                Iniciar Sesión
              </Button>
              <Button
                className="bg-gradient-navy text-white hover:opacity-90 transition-all duration-300"
                onClick={() => setIsLoginOpen(true)}
              >
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection onGetStarted={() => setIsLoginOpen(true)} />

      {/* Estadísticas Generales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Estadísticas en Tiempo Real</h2>
            <p className="text-gray-600">Monitoreo continuo de nuestras operaciones</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Habitaciones Destacadas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Habitaciones</h2>
            <p className="text-gray-600">Descubre nuestras opciones de alojamiento</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-gradient-hotel text-white hover:opacity-90 transition-all duration-300"
              onClick={() => setIsLoginOpen(true)}
            >
              Ver Todas las Habitaciones
            </Button>
          </div>
        </div>
      </section>

      {/* Características del Sistema */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué LuxeStay?</h2>
            <p className="text-gray-600">Un sistema completo para la gestión hotelera moderna</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Gestión de Reservas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sistema avanzado de reservas con calendario interactivo y gestión de disponibilidad en tiempo real.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Pagos Integrados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Múltiples métodos de pago: efectivo, tarjeta y QR. Facturación automática y reportes financieros.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Panel Administrativo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dashboard completo con métricas, reportes y herramientas de gestión para administradores.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-hotel rounded-lg flex items-center justify-center">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">LuxeStay</h3>
              </div>
              <p className="text-gray-400">
                Sistema de gestión hotelera moderno y eficiente para hoteles de todas las dimensiones.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Funcionalidades</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gestión de Reservas</li>
                <li>Panel Administrativo</li>
                <li>Pagos Integrados</li>
                <li>Reportes y Analytics</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentación</li>
                <li>Centro de Ayuda</li>
                <li>Contacto Técnico</li>
                <li>Training</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@luxestay.com</li>
                <li>+1 (555) 123-4567</li>
                <li>24/7 Soporte</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LuxeStay. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modal de Login */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Index;
