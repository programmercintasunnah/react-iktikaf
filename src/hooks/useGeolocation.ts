import { useState, useEffect } from 'react';
import type { LocationState, GeolocationOptions } from '../types';
import { APP_CONFIG } from '../constants';

export function useGeolocation(options: GeolocationOptions = {}): LocationState {
  const [state, setState] = useState<LocationState>({
    latitude: null,
    longitude: null,
    accuracy: null,
    error: null,
    loading: true,
  });

  const defaultOptions: GeolocationOptions = {
    enableHighAccuracy: true,
    timeout: APP_CONFIG.GEOLOCATION_TIMEOUT,
    maximumAge: 0,
    ...options,
  };

  useEffect(() => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setState(prev => ({
        ...prev,
        error: "Geolocation tidak didukung oleh browser Anda. Gunakan browser modern.",
        loading: false,
      }));
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
        error: null,
        loading: false,
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      let errorMessage = "Tidak dapat mengambil lokasi Anda. ";
      
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage += "Izin lokasi ditolak. Silakan aktifkan lokasi di browser Anda.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage += "Informasi lokasi tidak tersedia.";
          break;
        case error.TIMEOUT:
          errorMessage += "Waktu permintaan lokasi habis.";
          break;
        default:
          errorMessage += "Terjadi kesalahan yang tidak diketahui.";
          break;
      }

      setState(prev => ({
        ...prev,
        error: errorMessage,
        loading: false,
      }));
    };

    // Request current position
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      defaultOptions
    );
  }, [defaultOptions.enableHighAccuracy, defaultOptions.timeout, defaultOptions.maximumAge]);

  return state;
}

/**
 * Get user location with fallback options
 */
export async function getUserLocation(): Promise<{ latitude: number; longitude: number }> {
  try {
    // Try browser geolocation first
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        resolve,
        reject,
        {
          enableHighAccuracy: true,
          timeout: APP_CONFIG.GEOLOCATION_TIMEOUT,
          maximumAge: 0
        }
      );
    });
    
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
  } catch (error) {
    console.log('Browser geolocation failed, trying fallback...');
    
    try {
      // Try IP-based geolocation
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (data.latitude && data.longitude) {
        return {
          latitude: data.latitude,
          longitude: data.longitude
        };
      }
    } catch (ipError) {
      console.log('IP geolocation failed...');
    }

    // Use default location (Jakarta center)
    return {
      latitude: APP_CONFIG.DEFAULT_LATITUDE,
      longitude: APP_CONFIG.DEFAULT_LONGITUDE
    };
  }
}

/**
 * Check location permission status
 */
export async function checkLocationPermission(): Promise<PermissionState> {
  if ('permissions' in navigator) {
    try {
      const result = await navigator.permissions.query({ name: 'geolocation' });
      return result.state;
    } catch (error) {
      console.log('Permission check failed:', error);
    }
  }
  return 'prompt';
}