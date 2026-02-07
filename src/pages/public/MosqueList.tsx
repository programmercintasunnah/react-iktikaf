import { useState } from 'react';
import { MosqueCard, FilterControls, LocationBanner } from '../../components';
import { useMosqueDistance } from '../../hooks';
import { getUserLocation } from '../../hooks/useGeolocation';
import { mosques } from '../../data';
import type { MosqueFilterState } from '../../types';

export function MosqueList() {
  const [filters, setFilters] = useState<MosqueFilterState>({
    searchTerm: '',
    distanceRange: 99999,
    features: [],
    hasIktikaf: false,
    sortBy: 'distance'
  });

  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const {
    nearestMosque,
    farthestMosque,
    getSortedMosques
  } = useMosqueDistance(mosques, userLocation);

  const handleLocationRequest = async () => {
    const location = await getUserLocation();
    setUserLocation(location);
  };

  const displayMosques = getSortedMosques(filters.sortBy);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Temukan Masjid Terdekat
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Jelajahi masjid-masjid di seluruh Indonesia dan temukan program iktikaf 
          untuk meningkatkan kualitas ibadah Anda di bulan suci Ramadhan.
        </p>
      </div>

      {/* Location Banner */}
      <LocationBanner
        userLocation={userLocation}
        nearestMosque={nearestMosque}
        farthestMosque={farthestMosque}
        onLocationRequest={handleLocationRequest}
      />

      {/* Filter Controls */}
      <FilterControls
        filters={filters}
        onFiltersChange={setFilters}
        onLocationRequest={handleLocationRequest}
      />

      {/* Results Summary */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          {displayMosques.length} Masjid Ditemukan
        </h2>
        {userLocation && (
          <div className="text-sm text-green-600">
            🔍 Berdasarkan lokasi Anda
          </div>
        )}
      </div>

      {/* Mosque Grid */}
      {displayMosques.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayMosques.map((mosque) => (
            <div key={mosque.id}>
              <MosqueCard
                mosque={mosque}
                showDistance={!!userLocation}
                onClick={() => window.location.href = `/mosques/${mosque.id}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Tidak ada masjid ditemukan
          </h3>
          <p className="text-gray-600 mb-4">
            Coba ubah filter atau kata kunci pencarian Anda.
          </p>
          <button
            onClick={() => setFilters({
              searchTerm: '',
              distanceRange: 99999,
              features: [],
              hasIktikaf: false,
              sortBy: 'distance'
            })}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Reset Filter
          </button>
        </div>
      )}

      {/* Load More Button (for future pagination) */}
      {displayMosques.length > 0 && displayMosques.length >= 12 && (
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </div>
  );
}