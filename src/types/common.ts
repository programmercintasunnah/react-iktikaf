export interface LocationState {
  latitude: number | null;
  longitude: number | null;
  accuracy: number | null;
  error: string | null;
  loading: boolean;
}

export interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

export interface FilterOptions {
  searchTerm: string;
  distanceRange: number;
  features: string[];
  hasIktikaf: boolean;
}

export interface MosqueFilterState extends FilterOptions {
  sortBy: 'distance' | 'name' | 'rating';
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginationOptions {
  page: number;
  limit: number;
  total: number;
}