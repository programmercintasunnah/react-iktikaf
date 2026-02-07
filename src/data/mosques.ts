import type { Mosque } from '../types';

export const mosques: Mosque[] = [
  {
    id: '1',
    name: 'Masjid Istiqlal',
    type: 'mosque',
    description: 'Masjid nasional Indonesia terbesar di Asia Tenggara',
    address: {
      street: 'Jl. Taman Wijaya Kusuma',
      city: 'Jakarta Pusat',
      province: 'DKI Jakarta',
      postalCode: '10710',
      coordinates: { latitude: -6.170166, longitude: 106.831375 }
    },
    contact: {
      phone: '+62 21 3913788',
      email: 'info@istiqlal.go.id',
      website: 'https://www.istiqlal.go.id'
    },
    images: ['https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800'],
    facilities: ['Parkir Luas', 'AC', 'Perpustakaan', 'Musholla Wanita', 'Ruang Wudu'],
    capacity: 200000,
    rating: 4.8,
    reviews: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Masjid Al-Azhar',
    type: 'mosque',
    description: 'Masjid modern dengan universitas Islam terkemuka',
    address: {
      street: 'Jl. Sisingamangaraja',
      city: 'Kebayoran Baru',
      province: 'DKI Jakarta',
      postalCode: '12180',
      coordinates: { latitude: -6.235161, longitude: 106.799326 }
    },
    contact: {
      phone: '+62 21 72792753',
      email: 'info@alazhar.sch.id',
      website: 'https://www.alazhar.sch.id'
    },
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    facilities: ['Universitas', 'Perpustakaan', 'Kantin', 'Parkir', 'AC'],
    capacity: 15000,
    rating: 4.6,
    reviews: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Masjid Al-Akbar',
    type: 'mosque',
    description: 'Masjid terbesar kedua di Indonesia',
    address: {
      street: 'Jl. Masjid Agung Al-Akbar',
      city: 'Surabaya',
      province: 'Jawa Timur',
      postalCode: '60294',
      coordinates: { latitude: -7.351956, longitude: 112.712094 }
    },
    contact: {
      phone: '+62 31 8017222',
      email: 'info@alakbar.surabaya.go.id',
      website: 'https://www.alakbar.surabaya.go.id'
    },
    images: ['https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800'],
    facilities: ['Menara 99m', 'AC', 'Parkir Bas 1.500 Mobil', 'Auditorium', 'Kantin'],
    capacity: 120000,
    rating: 4.7,
    reviews: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Masjid Al-Mashun',
    type: 'mosque',
    description: 'Masjid bersejarah dengan arsitektur unik',
    address: {
      street: 'Jl. Sisingamangaraja',
      city: 'Medan',
      province: 'Sumatera Utara',
      postalCode: '20151',
      coordinates: { latitude: 3.575122, longitude: 98.687309 }
    },
    contact: {
      phone: '+62 61 4515080',
      email: 'info@almashun.medan.go.id',
      website: 'https://www.almashun.medan.go.id'
    },
    images: ['https://images.unsplash.com/photo-1597041836421-2a0f5b6a3415?w=800'],
    facilities: ['Arsitektur Oktagonal', 'Perpustakaan', 'Parkir', 'Ruang Belajar'],
    capacity: 8000,
    rating: 4.5,
    reviews: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Masjid Agung Bandung',
    type: 'mosque',
    description: 'Masjid provinsi dengan arsitektur kolonial',
    address: {
      street: 'Jl. Dago',
      city: 'Bandung',
      province: 'Jawa Barat',
      postalCode: '40132',
      coordinates: { latitude: -6.917500, longitude: 107.619123 }
    },
    contact: {
      phone: '+62 22 4236745',
      email: 'info@masjidagung.bandung.go.id',
      website: 'https://www.masjidagung.bandung.go.id'
    },
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'],
    facilities: ['Arsitektur Kolonial', 'Taman', 'Parkir Luas', 'Perpustakaan'],
    capacity: 10000,
    rating: 4.4,
    reviews: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'Masjid Al-Jabbar',
    type: 'mosque',
    description: 'Masjid modern dengan desain neo-futurisme',
    address: {
      street: 'Jl. Gede Bage',
      city: 'Bandung',
      province: 'Jawa Barat',
      postalCode: '40294',
      coordinates: { latitude: -6.9481, longitude: 107.7036 }
    },
    contact: {
      phone: '+62 22 87341414',
      email: 'info@aljabbar.jabarprov.go.id',
      website: 'https://www.aljabbar.jabarprov.go.id'
    },
    images: ['https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800'],
    facilities: ['AI Room', 'Digital Signage', 'Parkir Luas', 'AC', 'Perpustakaan Digital'],
    capacity: 20000,
    rating: 4.9,
    reviews: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '7',
    name: 'Masjid Baiturrahman',
    type: 'mosque',
    description: 'Simbol kebangkitan Aceh pasca tsunami',
    address: {
      street: 'Jl. Teuku Umar',
      city: 'Banda Aceh',
      province: 'Aceh',
      postalCode: '23244',
      coordinates: { latitude: 5.5547, longitude: 95.3171 }
    },
    contact: {
      phone: '+62 651 7555222',
      email: 'info@baiturrahman.aceh.go.id',
      website: 'https://www.baiturrahman.aceh.go.id'
    },
    images: ['https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800'],
    facilities: ['Monumen Tsunami', 'Taman', 'Perpustakaan', 'Parkir', 'Museum'],
    capacity: 15000,
    rating: 4.8,
    reviews: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '8',
    name: 'Masjid Dian Al-Mahri',
    type: 'mosque',
    description: 'Masjid dengan kubah emas yang mewah',
    address: {
      street: 'Jl. Meruyung',
      city: 'Depok',
      province: 'Jawa Barat',
      postalCode: '16513',
      coordinates: { latitude: -6.3945, longitude: 106.8245 }
    },
    contact: {
      phone: '+62 21 7520410',
      email: 'info@dianalmahri.com',
      website: 'https://www.dianalmahri.com'
    },
    images: ['https://images.unsplash.com/photo-1576495197515-7e0825fd16d2?w=800'],
    facilities: ['Kubah Emas', 'Marmer Impor', 'Parkir Luas', 'AC', 'Fasilitas Mewah'],
    capacity: 8000,
    rating: 4.6,
    reviews: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '9',
    name: 'Masjid Al-Azhom',
    type: 'mosque',
    description: 'Masjid terbesar di Provinsi Banten',
    address: {
      street: 'Jl. KH. Hasyim Ashari',
      city: 'Tangerang',
      province: 'Banten',
      postalCode: '15111',
      coordinates: { latitude: -6.1705, longitude: 106.6403 }
    },
    contact: {
      phone: '+62 21 55741074',
      email: 'info@alazhom.banten.go.id',
      website: 'https://www.alazhom.banten.go.id'
    },
    images: ['https://images.unsplash.com/photo-1598429646924-5cfd4699ee65?w=800'],
    facilities: ['AC', 'Parkir Luas', 'Auditorium', 'Perpustakaan', 'Kantin'],
    capacity: 12000,
    rating: 4.5,
    reviews: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '10',
    name: 'Masjid Agung An-Nur',
    type: 'mosque',
    description: 'Masjid terbesar di Pekanbaru dengan arsitektur Melayu-Turki',
    address: {
      street: 'Jl. Sudirman',
      city: 'Pekanbaru',
      province: 'Riau',
      postalCode: '28116',
      coordinates: { latitude: 0.5267, longitude: 101.4508 }
    },
    contact: {
      phone: '+62 761 21573',
      email: 'info@annur.pekanbaru.go.id',
      website: 'https://www.annur.pekanbaru.go.id'
    },
    images: ['https://images.unsplash.com/photo-1549900183-601b4c431039?w=800'],
    facilities: ['Arsitektur Melayu-Turki', '10 Kubah', '4 Menara', 'Parkir Luas', 'AC'],
    capacity: 4500,
    rating: 4.7,
    reviews: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '11',
    name: "Masjid Jami' Abu Darda'",
    type: 'mosque',
    description: 'Masjid modern di Panam dengan kegiatan islami aktif',
    address: {
      street: 'Jl. Merak Sakti',
      city: 'Panam',
      province: 'Riau',
      postalCode: '28292',
      coordinates: { latitude: 0.5078, longitude: 101.4378 }
    },
    contact: {
      phone: '+62 761 7654321',
      email: 'info@abudarda.com',
      website: 'https://www.abudarda.com'
    },
    images: ['https://images.unsplash.com/photo-1611339555312-e607c8352bd7?w=800'],
    facilities: ['Kajian Rutin', 'Program Tahsin', 'Ambulans Gratis', 'Parkir', 'AC'],
    capacity: 3000,
    rating: 4.6,
    reviews: [],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];