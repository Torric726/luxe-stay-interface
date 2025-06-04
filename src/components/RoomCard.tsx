
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Star } from 'lucide-react';

interface Room {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  amenities: string[];
  capacity: number;
  available: boolean;
}

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={room.image} 
          alt={room.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge 
            variant={room.available ? "default" : "destructive"}
            className={room.available ? "bg-green-500" : ""}
          >
            {room.available ? "Disponible" : "Ocupada"}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${room.price}/noche
          </div>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-gray-900">{room.name}</CardTitle>
            <CardDescription className="text-hotel-navy font-medium">
              {room.type}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-hotel-gold fill-current" />
            <span className="text-sm font-medium">4.8</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center text-gray-600 mb-4">
          <Users className="h-4 w-4 mr-1" />
          <span className="text-sm">Hasta {room.capacity} huéspedes</span>
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
        
        <Button 
          className="w-full bg-gradient-navy text-white hover:opacity-90 transition-all duration-300"
          disabled={!room.available}
        >
          {room.available ? "Reservar Ahora" : "No Disponible"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
