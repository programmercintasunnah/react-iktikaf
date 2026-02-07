import { create } from 'zustand';
import type { Mosque } from '../types';
import { mosques } from '../data';

interface MosqueStore {
  mosques: Mosque[];
  selectedMosque: Mosque | null;
  userLocation: { latitude: number; longitude: number } | null;
  filters: {
    searchTerm: string;
    distanceRange: number;
    features: string[];
    hasIktikaf: boolean;
    sortBy: 'distance' | 'name' | 'rating';
  };
  
  // Actions
  setMosques: (mosques: Mosque[]) => void;
  setSelectedMosque: (mosque: Mosque | null) => void;
  setUserLocation: (location: { latitude: number; longitude: number } | null) => void;
  setFilters: (filters: Partial<MosqueStore['filters']>) => void;
  resetFilters: () => void;
}

export const useMosqueStore = create<MosqueStore>((set, get) => ({
  mosques,
  selectedMosque: null,
  userLocation: null,
  filters: {
    searchTerm: '',
    distanceRange: 99999,
    features: [],
    hasIktikaf: false,
    sortBy: 'distance',
  },

  setMosques: (mosques) => set({ mosques }),
  
  setSelectedMosque: (mosque) => set({ selectedMosque: mosque }),
  
  setUserLocation: (location) => set({ userLocation: location }),
  
  setFilters: (newFilters) => set((state) => ({ 
    filters: { ...state.filters, ...newFilters } 
  })),
  
  resetFilters: () => set({
    filters: {
      searchTerm: '',
      distanceRange: 99999,
      features: [],
      hasIktikaf: false,
      sortBy: 'distance',
    }
  }),
}));