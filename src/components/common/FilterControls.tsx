import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Search, Filter, MapPin } from 'lucide-react';

import type { MosqueFilterState } from '../../types';

interface FilterControlsProps {
  filters: MosqueFilterState;
  onFiltersChange: (filters: MosqueFilterState) => void;
  onLocationRequest: () => void;
  locationLoading?: boolean;
}

export function FilterControls({ 
  filters, 
  onFiltersChange, 
  onLocationRequest,
  locationLoading = false 
}: FilterControlsProps) {
  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, searchTerm: value });
  };

  const handleDistanceChange = (value: string) => {
    onFiltersChange({ 
      ...filters, 
      distanceRange: value === 'all' ? 99999 : parseInt(value) 
    });
  };

  const handleSortChange = (value: string) => {
    onFiltersChange({ 
      ...filters, 
      sortBy: value as 'distance' | 'name' | 'rating' 
    });
  };

  const toggleIktikafFilter = () => {
    onFiltersChange({ ...filters, hasIktikaf: !filters.hasIktikaf });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          placeholder="Cari masjid berdasarkan nama atau lokasi..."
          value={filters.searchTerm}
          onChange={handleSearchChange}
          className="pl-10"
        />
      </div>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Distance Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-1" />
            Jarak
          </label>
          <select
            value={filters.distanceRange === 99999 ? 'all' : filters.distanceRange.toString()}
            onChange={(e) => handleDistanceChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="all">Semua jarak</option>
            <option value="1">1 km</option>
            <option value="5">5 km</option>
            <option value="10">10 km</option>
            <option value="25">25 km</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Urutkan
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="distance">Terdekat</option>
            <option value="name">Nama (A-Z)</option>
            <option value="rating">Rating Tertinggi</option>
          </select>
        </div>

        {/* Iktikaf Filter Toggle */}
        <div className="flex items-end">
          <Button
            variant={filters.hasIktikaf ? 'primary' : 'outline'}
            onClick={toggleIktikafFilter}
            className="w-full justify-center"
          >
            <Filter className="w-4 h-4 mr-2" />
            Iktikaf Saja
            {filters.hasIktikaf && <Badge className="ml-2">ON</Badge>}
          </Button>
        </div>

        {/* Location Request */}
        <div className="flex items-end">
          <Button
            variant="secondary"
            onClick={onLocationRequest}
            loading={locationLoading}
            className="w-full justify-center"
          >
            <MapPin className="w-4 h-4 mr-2" />
            {locationLoading ? 'Mendeteksi...' : 'Gunakan Lokasi'}
          </Button>
        </div>
      </div>

      {/* Active Filters Display */}
      {(filters.searchTerm || filters.distanceRange !== 99999 || filters.hasIktikaf) && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
          {filters.searchTerm && (
            <Badge variant="info">
              Cari: "{filters.searchTerm}"
            </Badge>
          )}
          {filters.distanceRange !== 99999 && (
            <Badge variant="info">
              Jarak: {filters.distanceRange}km
            </Badge>
          )}
          {filters.hasIktikaf && (
            <Badge variant="success">
              Iktikaf Tersedia
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}