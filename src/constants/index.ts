export const SAUDI_GREEN = {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
  950: '#052e16',
};

export const THEME_COLORS = {
  primary: SAUDI_GREEN,
  secondary: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};

export const APP_CONFIG = {
  APP_NAME: 'GO-Iktikaf',
  APP_VERSION: '1.0.0',
  DEFAULT_LATITUDE: -6.2087634, // Jakarta center
  DEFAULT_LONGITUDE: 106.845599, // Jakarta center
  GEOLOCATION_TIMEOUT: 10000,
  SEARCH_DEBOUNCE_DELAY: 300,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
};

export const API_ENDPOINTS = {
  MOSQUES: '/api/mosques',
  IKTIAF_PROGRAMS: '/api/iktikaf-programs',
  REGISTRATIONS: '/api/registrations',
  UPLOAD: '/api/upload',
};

export const REGISTRATION_REQUIREMENTS = [
  'Pria usia minimal 17 tahun',
  'Sehat jasmani dan rohani',
  'Membawa perlengkapan sholat',
  'Mengisi formulir pendaftaran',
  'Menyetujui syarat dan ketentuan',
];

export const HEALTH_CONDITIONS = [
  { value: 'healthy', label: 'Sehat' },
  { value: 'has_medical_condition', label: 'Memiliki kondisi medis' },
];

export const VACCINATION_STATUS = [
  { value: 'vaccinated', label: 'Sudah Vaksin' },
  { value: 'unvaccinated', label: 'Belum Vaksin' },
  { value: 'partial', label: 'Vaksin Sebagian' },
];

export const RELATIONSHIPS = [
  'Ayah',
  'Ibu',
  'Suami',
  'Istri',
  'Saudara Kandung',
  'Orang Tua',
  'Teman',
  'Lainnya',
];

export const OCCUPATIONS = [
  'Pelajar/Mahasiswa',
  'Pegawai Swasta',
  'PNS',
  'Wiraswasta',
  'Pengusaha',
  'Ustadz/Mubaligh',
  'Dokter/Bidan',
  'Guru',
  'Buruh',
  'Tidak Bekerja',
  'Lainnya',
];