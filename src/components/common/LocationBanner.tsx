import { Button } from '../ui/Button';
import { MapPin, Map, Navigation } from 'lucide-react';
import { useGeolocation } from '../../hooks';
import type { MosqueWithDistance } from '../../hooks/useMosqueDistance';

interface LocationBannerProps {
  userLocation: { latitude: number; longitude: number } | null;
  nearestMosque?: MosqueWithDistance;
  farthestMosque?: MosqueWithDistance;
  onLocationRequest: () => void;
}

export function LocationBanner({ 
  userLocation, 
  nearestMosque, 
  farthestMosque,
  onLocationRequest 
}: LocationBannerProps) {
  const location = useGeolocation();

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-green-900 mb-2 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-green-600" />
            Informasi Lokasi
          </h2>
          
          {location.loading ? (
            <div className="text-green-700">
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600 mr-2"></div>
                Mendeteksi lokasi Anda...
              </div>
            </div>
          ) : location.error ? (
            <div className="text-red-700 mb-3">
              <p className="font-medium">❌ {location.error}</p>
              <p className="text-sm mt-1">Silakan izinkan akses lokasi atau gunakan lokasi default.</p>
            </div>
          ) : userLocation ? (
            <div className="text-green-700">
              <p className="font-medium">✅ Lokasi terdeteksi!</p>
              <p className="text-sm mt-1">
                Latitude: {userLocation.latitude.toFixed(6)}, Longitude: {userLocation.longitude.toFixed(6)}
              </p>
            </div>
          ) : (
            <div className="text-amber-700">
              <p className="font-medium">⚠️ Lokasi tidak diketahui</p>
              <p className="text-sm mt-1">Klik tombol di bawah untuk mendeteksi lokasi Anda.</p>
            </div>
          )}

          {/* Mosque Info */}
          {nearestMosque && farthestMosque && userLocation && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="flex items-center mb-2">
                  <Navigation className="w-4 h-4 mr-2 text-green-600" />
                  <span className="font-medium text-green-900">Masjid Terdekat</span>
                </div>
                <p className="font-semibold text-gray-900">{nearestMosque.name}</p>
                <p className="text-sm text-gray-600">{nearestMosque.address.city}</p>
                <p className="text-green-600 font-medium">{nearestMosque.formattedDistance}</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <div className="flex items-center mb-2">
                  <Map className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="font-medium text-blue-900">Masjid Terjauh</span>
                </div>
                <p className="font-semibold text-gray-900">{farthestMosque.name}</p>
                <p className="text-sm text-gray-600">{farthestMosque.address.city}</p>
                <p className="text-blue-600 font-medium">{farthestMosque.formattedDistance}</p>
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="ml-6">
          <Button
            variant={userLocation ? 'secondary' : 'primary'}
            onClick={onLocationRequest}
            loading={location.loading}
          >
            <MapPin className="w-4 h-4 mr-2" />
            {userLocation ? 'Perbarui Lokasi' : 'Deteksi Lokasi'}
          </Button>
        </div>
      </div>
    </div>
  );
}