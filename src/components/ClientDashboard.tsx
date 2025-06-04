
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CreditCard, Home, LogOut, User, Star, MapPin, Phone, Mail } from 'lucide-react';

interface ClientDashboardProps {
  user: any;
  onLogout: () => void;
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Datos de ejemplo para el cliente
  const currentBooking = {
    id: 1,
    room: "Suite Ejecutiva",
    checkIn: "2024-06-05",
    checkOut: "2024-06-08",
    guests: 2,
    status: "confirmed",
    amount: 1050
  };

  const bookingHistory = [
    {
      id: 1,
      room: "Habitación Deluxe",
      checkIn: "2024-04-15",
      checkOut: "2024-04-18",
      amount: 750,
      status: "completed"
    },
    {
      id: 2,
      room: "Habitación Estándar",
      checkIn: "2024-02-20",
      checkOut: "2024-02-23",
      amount: 450,
      status: "completed"
    }
  ];

  const availableRooms = [
    {
      id: 1,
      name: "Suite Presidencial",
      type: "Suite",
      price: 500,
      image: "/placeholder.svg",
      amenities: ["WiFi", "Mini Bar", "Vista al Mar", "Jacuzzi", "Servicio 24h"],
      capacity: 4,
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
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-hotel rounded-lg flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Mi Panel</h1>
                <p className="text-sm text-gray-600">Bienvenido, {user.name}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Inicio</TabsTrigger>
            <TabsTrigger value="bookings">Mis Reservas</TabsTrigger>
            <TabsTrigger value="rooms">Habitaciones</TabsTrigger>
            <TabsTrigger value="profile">Mi Perfil</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Resumen de reserva actual */}
            {currentBooking && (
              <Card className="border-hotel-gold border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-hotel-navy">
                    <Calendar className="h-5 w-5 mr-2" />
                    Tu Próxima Estancia
                  </CardTitle>
                  <CardDescription>Detalles de tu reserva confirmada</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Habitación</p>
                        <p className="font-semibold text-lg">{currentBooking.room}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Check-in</p>
                          <p className="font-medium">{currentBooking.checkIn}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Check-out</p>
                          <p className="font-medium">{currentBooking.checkOut}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Huéspedes</p>
                        <p className="font-medium">{currentBooking.guests} personas</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-hotel-gold/10 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Total a pagar</p>
                        <p className="text-2xl font-bold text-hotel-navy">${currentBooking.amount}</p>
                        <Badge className="bg-green-500 mt-2">Confirmada</Badge>
                      </div>
                      <div className="space-y-2">
                        <Button className="w-full bg-hotel-navy">
                          <MapPin className="h-4 w-4 mr-2" />
                          Ver Ubicación
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Phone className="h-4 w-4 mr-2" />
                          Contactar Hotel
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Servicios disponibles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Nueva Reserva</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Busca y reserva habitaciones para tus próximas estancias
                  </CardDescription>
                  <Button className="bg-gradient-hotel">
                    Reservar Ahora
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CreditCard className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Mis Facturas</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Accede a tu historial de pagos y facturas
                  </CardDescription>
                  <Button variant="outline">
                    Ver Facturas
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Programa VIP</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">
                    Acumula puntos y disfruta beneficios exclusivos
                  </CardDescription>
                  <Button variant="outline">
                    Ver Beneficios
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Historial de Reservas</CardTitle>
                <CardDescription>Todas tus estancias anteriores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bookingHistory.map((booking) => (
                    <Card key={booking.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{booking.room}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {booking.checkIn} - {booking.checkOut}
                          </p>
                          <Badge className="bg-green-500">Completada</Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-hotel-navy">${booking.amount}</p>
                          <div className="flex space-x-2 mt-2">
                            <Button size="sm" variant="outline">Ver Detalles</Button>
                            <Button size="sm" className="bg-hotel-gold">Calificar</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Habitaciones Disponibles</CardTitle>
                <CardDescription>Explora nuestras opciones de alojamiento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {availableRooms.map((room) => (
                    <Card key={room.id} className="overflow-hidden">
                      <img 
                        src={room.image} 
                        alt={room.name}
                        className="w-full h-40 object-cover"
                      />
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-bold text-lg">{room.name}</h3>
                            <p className="text-hotel-navy font-medium">{room.type}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-hotel-gold">${room.price}</p>
                            <p className="text-sm text-gray-600">/noche</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {room.amenities.slice(0, 3).map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                          {room.amenities.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{room.amenities.length - 3} más
                            </Badge>
                          )}
                        </div>
                        
                        <Button className="w-full bg-gradient-navy">
                          Reservar Habitación
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Información Personal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Nombre completo</p>
                    <p className="font-medium">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Correo electrónico</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Teléfono</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fecha de registro</p>
                    <p className="font-medium">Enero 2024</p>
                  </div>
                  <Button className="w-full bg-hotel-navy">
                    Editar Perfil
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Estadísticas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total de estancias</span>
                    <span className="font-bold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Noches totales</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gasto total</span>
                    <span className="font-bold">$2,250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Puntos VIP</span>
                    <span className="font-bold text-hotel-gold">1,890</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Nivel VIP</span>
                      <Badge className="bg-hotel-gold">Bronce</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-hotel-gold h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">210 puntos para nivel Plata</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientDashboard;
