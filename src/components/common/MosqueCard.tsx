import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { truncateText } from '../../utils/formatters';
import { MapPin, Users, Calendar, Clock } from 'lucide-react';
import type { Mosque } from '../../types';
import type { MosqueWithDistance } from '../../hooks/useMosqueDistance';

interface MosqueCardProps {
  mosque: Mosque | MosqueWithDistance;
  onClick?: () => void;
  showDistance?: boolean;
}

export function MosqueCard({ mosque, onClick, showDistance = false }: MosqueCardProps) {
  const hasIktikaf = false; // TODO: Check if mosque has iktikaf programs
  
  return (
    <Card hover onClick={onClick} className="relative">
      {/* Nearest Badge */}
      {showDistance && 'distance' in mosque && mosque.distance !== undefined && mosque.distance < 1000 && (
        <Badge variant="success" className="absolute top-2 right-2 z-10">
          Terdekat
        </Badge>
      )}
      
      {/* Mosque Image */}
      <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img
          src={mosque.images[0] || 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800'}
          alt={mosque.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      {/* Mosque Info */}
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {truncateText(mosque.name, 30)}
          </h3>
          <div className="flex items-center text-sm text-gray-600 space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{truncateText(mosque.address.city, 20)}, {mosque.address.province}</span>
          </div>
          
          {/* Distance */}
          {showDistance && 'distance' in mosque && 'formattedDistance' in mosque && (
            <div className="flex items-center text-sm text-green-600 font-medium">
              <Clock className="w-4 h-4 mr-1" />
              {mosque.formattedDistance}
            </div>
          )}
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {truncateText(mosque.description, 100)}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            <span>Kapasitas {mosque.capacity.toLocaleString('id-ID')}</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="text-gray-700 font-medium">{mosque.rating}</span>
          </div>
        </div>
        
        {/* Facilities */}
        <div className="flex flex-wrap gap-1">
          {mosque.facilities.slice(0, 3).map((facility, index) => (
            <Badge key={index} variant="default" className="text-xs">
              {facility}
            </Badge>
          ))}
          {mosque.facilities.length > 3 && (
            <Badge variant="default" className="text-xs">
              +{mosque.facilities.length - 3}
            </Badge>
          )}
        </div>
        
        {/* Iktikaf Available Badge */}
        {hasIktikaf && (
          <Badge variant="success" className="w-full justify-center">
            <Calendar className="w-3 h-3 mr-1" />
            Tersedia Program Iktikaf
          </Badge>
        )}
      </div>
    </Card>
  );
}