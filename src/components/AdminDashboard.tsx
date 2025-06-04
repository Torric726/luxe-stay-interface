
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, Home, CreditCard, Settings, Bell, LogOut, Star, TrendingUp } from 'lucide-react';
import StatsCard from './StatsCard';

interface AdminDashboardProps {
  user: any;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

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
      title: "Huéspedes Actuales",
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

  // Datos de ejemplo para reservas recientes
  const recentBookings = [
    {
      id: 1,
      guest: "María García",
      room: "Suite Ejecutiva",
      checkIn: "2024-06-05",
      checkOut: "2024-06-08",
      status: "confirmed",
      amount: 1050
    },
    {
      id: 2,
      guest: "Carlos Rodríguez",
      room: "Habitación Deluxe",
      checkIn: "2024-06-06",
      checkOut: "2024-06-10",
      status: "pending",
      amount: 1000
    },
    {
      id: 3,
      guest: "Ana López",
      room: "Habitación Estándar",
      checkIn: "2024-06-04",
      checkOut: "2024-06-07",
      status: "checked-in",
      amount: 450
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'checked-in': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'confirmed': return 'Confirmada';
      case 'pending': return 'Pendiente';
      case 'checked-in': return 'Check-in';
      default: return status;
    }
  };

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
                <h1 className="text-xl font-bold text-gray-900">Panel Administrativo</h1>
                <p className="text-sm text-gray-600">Bienvenido, {user.name}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notificaciones
              </Button>
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Dashboard</TabsTrigger>
            <TabsTrigger value="bookings">Reservas</TabsTrigger>
            <TabsTrigger value="rooms">Habitaciones</TabsTrigger>
            <TabsTrigger value="guests">Huéspedes</TabsTrigger>
            <TabsTrigger value="reports">Reportes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Estadísticas principales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Reservas recientes */}
              <Card>
                <CardHeader>
                  <CardTitle>Reservas Recientes</CardTitle>
                  <CardDescription>Últimas reservas realizadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{booking.guest}</p>
                          <p className="text-sm text-gray-600">{booking.room}</p>
                          <p className="text-xs text-gray-500">
                            {booking.checkIn} - {booking.checkOut}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge className={`${getStatusColor(booking.status)} text-white mb-1`}>
                            {getStatusText(booking.status)}
                          </Badge>
                          <p className="text-sm font-medium">${booking.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gráfico de ocupación */}
              <Card>
                <CardHeader>
                  <CardTitle>Ocupación Semanal</CardTitle>
                  <CardDescription>Porcentaje de ocupación por día</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, index) => {
                      const occupancy = [85, 92, 78, 88, 95, 100, 76][index];
                      return (
                        <div key={day} className="flex items-center space-x-3">
                          <span className="w-8 text-sm font-medium">{day}</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-gradient-hotel h-3 rounded-full transition-all duration-500"
                              style={{ width: `${occupancy}%` }}
                            ></div>
                          </div>
                          <span className="w-12 text-sm text-right">{occupancy}%</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Reservas</CardTitle>
                <CardDescription>Administra todas las reservas del hotel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <Card key={booking.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold">{booking.guest}</h3>
                            <Badge className={`${getStatusColor(booking.status)} text-white`}>
                              {getStatusText(booking.status)}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{booking.room}</p>
                          <p className="text-xs text-gray-500">
                            Check-in: {booking.checkIn} | Check-out: {booking.checkOut}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-hotel-navy">${booking.amount}</p>
                          <div className="flex space-x-2 mt-2">
                            <Button size="sm" variant="outline">Ver</Button>
                            <Button size="sm" className="bg-hotel-gold">Editar</Button>
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
                <CardTitle>Gestión de Habitaciones</CardTitle>
                <CardDescription>Estado y configuración de todas las habitaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { number: "101", type: "Estándar", status: "available", price: 150 },
                    { number: "102", type: "Deluxe", status: "occupied", price: 250 },
                    { number: "201", type: "Suite", status: "maintenance", price: 350 },
                    { number: "202", type: "Suite", status: "available", price: 350 },
                    { number: "301", type: "Deluxe", status: "occupied", price: 250 },
                    { number: "302", type: "Estándar", status: "available", price: 150 }
                  ].map((room) => (
                    <Card key={room.number} className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-lg">#{room.number}</h3>
                        <Badge 
                          className={
                            room.status === 'available' ? 'bg-green-500' :
                            room.status === 'occupied' ? 'bg-red-500' : 'bg-yellow-500'
                          }
                        >
                          {room.status === 'available' ? 'Disponible' :
                           room.status === 'occupied' ? 'Ocupada' : 'Mantenimiento'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{room.type}</p>
                      <p className="text-lg font-semibold text-hotel-gold">${room.price}/noche</p>
                      <Button size="sm" className="w-full mt-3" variant="outline">
                        Gestionar
                      </Button>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guests" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de Huéspedes</CardTitle>
                <CardDescription>Información de clientes y su historial</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "María García", email: "maria@email.com", stays: 5, lastVisit: "2024-06-01", status: "VIP" },
                    { name: "Carlos Rodríguez", email: "carlos@email.com", stays: 2, lastVisit: "2024-05-15", status: "Regular" },
                    { name: "Ana López", email: "ana@email.com", stays: 1, lastVisit: "2024-06-04", status: "Nuevo" }
                  ].map((guest, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-hotel rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{guest.name}</h3>
                          <p className="text-sm text-gray-600">{guest.email}</p>
                          <p className="text-xs text-gray-500">Última visita: {guest.lastVisit}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={
                          guest.status === 'VIP' ? 'bg-hotel-gold' :
                          guest.status === 'Regular' ? 'bg-blue-500' : 'bg-green-500'
                        }>
                          {guest.status}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">{guest.stays} estancias</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Ingresos Mensuales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-hotel-navy">$45,280</div>
                    <div className="text-sm text-green-600">+18% vs mes anterior</div>
                    <div className="space-y-2">
                      {['Habitaciones', 'Servicios', 'Extras'].map((category, index) => {
                        const values = [38000, 5280, 2000];
                        const percentages = [84, 12, 4];
                        return (
                          <div key={category} className="flex items-center justify-between">
                            <span className="text-sm">{category}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium">${values[index].toLocaleString()}</span>
                              <span className="text-xs text-gray-500">({percentages[index]}%)</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Satisfacción del Cliente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-hotel-navy">4.8/5</div>
                    <div className="text-sm text-green-600">+0.2 vs mes anterior</div>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => {
                        const percentages = [78, 15, 5, 1, 1];
                        return (
                          <div key={star} className="flex items-center space-x-2">
                            <span className="text-sm w-6">{star}★</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-hotel-gold h-2 rounded-full"
                                style={{ width: `${percentages[5-star]}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500 w-8">{percentages[5-star]}%</span>
                          </div>
                        );
                      })}
                    </div>
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

export default AdminDashboard;
