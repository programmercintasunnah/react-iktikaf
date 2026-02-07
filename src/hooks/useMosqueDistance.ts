import { useMemo } from 'react';
import type { Mosque } from '../types';
import { calculateDistance, formatDistance } from '../utils/formatters';

export interface MosqueWithDistance extends Mosque {
  distance: number;
  formattedDistance: string;
}

export function useMosqueDistance(
  mosques: Mosque[], 
  userLocation: { latitude: number; longitude: number } | null
) {
  const mosquesWithDistance = useMemo(() => {
    if (!userLocation) {
      return mosques.map(mosque => ({
        ...mosque,
        distance: 0,
        formattedDistance: 'Lokasi tidak diketahui'
      }));
    }

    return mosques.map(mosque => {
      const distance = calculateDistance(userLocation, mosque.address.coordinates);
      return {
        ...mosque,
        distance,
        formattedDistance: formatDistance(distance)
      };
    });
  }, [mosques, userLocation]);

  const sortedByDistance = useMemo(() => {
    return [...mosquesWithDistance].sort((a, b) => a.distance - b.distance);
  }, [mosquesWithDistance]);

  const nearestMosque = sortedByDistance[0];
  const farthestMosque = sortedByDistance[sortedByDistance.length - 1];

  const getMosquesWithinRadius = (radiusKm: number): MosqueWithDistance[] => {
    if (!userLocation) return mosquesWithDistance;
    
    return mosquesWithDistance.filter(mosque => mosque.distance <= radiusKm * 1000);
  };

  const getSortedMosques = (sortBy: 'distance' | 'name' | 'rating' = 'distance'): MosqueWithDistance[] => {
    switch (sortBy) {
      case 'name':
        return [...mosquesWithDistance].sort((a, b) => a.name.localeCompare(b.name));
      case 'rating':
        return [...mosquesWithDistance].sort((a, b) => b.rating - a.rating);
      case 'distance':
      default:
        return sortedByDistance;
    }
  };

  const filterMosques = (
    searchTerm: string,
    features: string[] = []
  ): MosqueWithDistance[] => {
    return mosquesWithDistance.filter(mosque => {
      const matchesSearch = !searchTerm || 
        mosque.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mosque.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mosque.address.province.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFeatures = features.length === 0 || 
        features.every(feature => mosque.facilities.includes(feature));

      return matchesSearch && matchesFeatures;
    });
  };

  return {
    mosquesWithDistance,
    sortedByDistance,
    nearestMosque,
    farthestMosque,
    getMosquesWithinRadius,
    getSortedMosques,
    filterMosques,
  };
}