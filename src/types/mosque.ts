export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  coordinates: Coordinates;
}

export interface Contact {
  phone: string;
  email: string;
  website?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export type InstitutionType = 'mosque' | 'school' | 'boarding_school';

export interface Institution {
  id: string;
  name: string;
  type: InstitutionType;
  description: string;
  address: Address;
  contact: Contact;
  images: string[];
  facilities: string[];
  capacity: number;
  rating: number;
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
  distance?: number;
}

export interface Mosque extends Institution {
  type: 'mosque';
  prayerTimes?: {
    fajr: string;
    dhuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
  };
}