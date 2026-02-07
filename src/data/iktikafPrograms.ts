import type { IktikafProgram } from '../types';

export const iktikafPrograms: IktikafProgram[] = [
  {
    id: 'ik1',
    institutionId: '1', // Masjid Istiqlal
    type: 'iktikaf',
    title: 'Iktikaf Akhir Ramadhan 1446 H',
    description: 'Program iktikaf 10 hari terakhir Ramadhan di Masjid Istiqlal dengan ustadz pilihan',
    startDate: '2025-03-31T00:00:00Z',
    endDate: '2025-04-09T00:00:00Z',
    registrationDeadline: '2025-03-28T23:59:59Z',
    maxParticipants: 500,
    currentParticipants: 234,
    requirements: [
      'Pria usia minimal 17 tahun',
      'Sehat jasmani dan rohani',
      'Membawa perlengkapan sholat',
      'Mengisi formulir pendaftaran'
    ],
    price: 0,
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'],
    status: 'upcoming',
    duration: 10,
    mealsProvided: true,
    accommodationProvided: true,
    scholarInfo: {
      name: 'Ustadz Dr. Ahmad Syafii',
      bio: 'Alumnus Universitas Al-Azhar Kairo dengan pengalaman 20 tahun di bidang tarbiyah',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    schedule: [
      {
        day: 1,
        activities: [
          { time: '04:00', title: 'Sahur', description: 'Makan sahur bersama' },
          { time: '04:30', title: 'Tahajud', description: 'Sholat tahajud berjamaah' },
          { time: '05:00', title: 'Subuh', description: 'Sholat subuh berjamaah' },
          { time: '09:00', title: 'Kajian Subuh', description: 'Kajian Fiqih Iktikaf' },
          { time: '12:00', title: 'Dzuhur', description: 'Sholat dzuhur berjamaah' },
          { time: '15:00', title: 'Ashar', description: 'Sholat ashar berjamaah' },
          { time: '18:00', title: 'Maghrib', description: 'Sholat maghrib berjamaah + buka puasa' },
          { time: '19:30', title: 'Isya + Tarawih', description: 'Sholat isya dan tarawih' },
          { time: '21:00', title: 'Kajian Malam', description: 'Kajian Tasawuf' }
        ]
      }
    ]
  },
  {
    id: 'ik2',
    institutionId: '10', // Masjid Agung An-Nur Pekanbaru
    type: 'iktikaf',
    title: 'Iktikaf Ramadhan An-Nur',
    description: 'Iktikaf 10 hari terakhir dengan ustadz dari berbagai pengajian di Pekanbaru',
    startDate: '2025-03-31T00:00:00Z',
    endDate: '2025-04-09T00:00:00Z',
    registrationDeadline: '2025-03-28T23:59:59Z',
    maxParticipants: 200,
    currentParticipants: 156,
    requirements: [
      'Muslim pria usia 17-60 tahun',
      'Sehat dan tidak memiliki penyakit menular',
      'Membawa perlengkapan pribadi',
      'Wajib mengikuti seluruh kegiatan'
    ],
    price: 150000,
    images: ['https://images.unsplash.com/photo-1549900183-601b4c431039?w=800'],
    status: 'upcoming',
    duration: 10,
    mealsProvided: true,
    accommodationProvided: false,
    scholarInfo: {
      name: 'Ustadz H. Ahmad Fauzi',
      bio: 'Pimpinan Pondok Pesantren Al-Hidayah Pekanbaru, pakar studi Islam',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
    },
    schedule: [
      {
        day: 1,
        activities: [
          { time: '04:00', title: 'Sahur & Dzikir', description: 'Makan sahur bersama dan dzikir pagi' },
          { time: '05:00', title: 'Sholat Subuh', description: 'Sholat subuh berjamaah' },
          { time: '08:00', title: 'Muhasabah Diri', description: 'Sesi muhasabah dan evaluasi diri' },
          { time: '10:00', title: 'Kajian Fikih', description: 'Kaj fikih tentang ibadah Ramadhan' },
          { time: '12:00', title: 'Sholat Dzuhur', description: 'Sholat dzuhur berjamaah' },
          { time: '15:00', title: 'Sholat Ashar', description: 'Sholat ashar berjamaah' },
          { time: '18:00', title: 'Buka Puasa', description: 'Buka puasa bersama' },
          { time: '19:30', title: 'Tarawih & Witir', description: 'Sholat tarawih dan witir' }
        ]
      }
    ]
  },
  {
    id: 'ik3',
    institutionId: '11', // Masjid Jami Abu Darda
    type: 'iktikaf',
    title: 'Iktikaf Ikhwan Abu Darda',
    description: 'Program iktikaf khusus untuk ikhwan (pria) dengan focus pembinaan mental spiritual',
    startDate: '2025-03-31T00:00:00Z',
    endDate: '2025-04-09T00:00:00Z',
    registrationDeadline: '2025-03-28T23:59:59Z',
    maxParticipants: 100,
    currentParticipants: 67,
    requirements: [
      'Pria usia 15-45 tahun',
      'Baca Al-Qur\'an lancar',
      'Sehat jasmani dan rohani',
      'Siap mengikuti aturan iktikaf'
    ],
    price: 0,
    images: ['https://images.unsplash.com/photo-1611339555312-e607c8352bd7?w=800'],
    status: 'upcoming',
    duration: 10,
    mealsProvided: true,
    accommodationProvided: true,
    scholarInfo: {
      name: 'Ustadz Jefri Halim, Lc., M.A.',
      bio: 'Alumnus Universitas Islam Madinah, pakarHadis dan Ulumul Hadis',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150'
    },
    schedule: [
      {
        day: 1,
        activities: [
          { time: '03:30', title: 'Sahur & Tahajud', description: 'Makan sahur dan sholat tahajud' },
          { time: '05:00', title: 'Subuh Berjamaah', description: 'Sholat subuh dengan khusyu' },
          { time: '06:00', title: 'Halaqah Pagi', description: 'Halaqah tahsin Al-Qur\'an' },
          { time: '09:00', title: 'Kajian Kitab', description: 'Pembahasan kitab Hadis Arba\'in' },
          { time: '11:00', title: 'Daurah Singkat', description: 'Pelatihan public speaking islami' },
          { time: '12:00', title: 'Dzuhur', description: 'Sholat dzuhur berjamaah' },
          { time: '15:00', title: 'Ashar', description: 'Sholat ashar berjamaah' },
          { time: '17:30', title: 'Kajian Sore', description: 'Kajian tentang akhlak mulia' },
          { time: '18:00', title: 'Buka Puasa', description: 'Berbuka puasa bersama jamaah' },
          { time: '19:30', title: 'Tarawih', description: 'Sholat tarawih 11 rakaat' },
          { time: '21:00', title: 'Muhasabah', description: 'Muhasabah harian dan evaluasi diri' }
        ]
      }
    ]
  },
  {
    id: 'ik4',
    institutionId: '6', // Masjid Al-Jabbar Bandung
    type: 'iktikaf',
    title: 'Iktikaf Digital Al-Jabbar',
    description: 'Iktikaf dengan fasilitas digital dan modern di Masjid Al-Jabbar',
    startDate: '2025-03-31T00:00:00Z',
    endDate: '2025-04-09T00:00:00Z',
    registrationDeadline: '2025-03-28T23:59:59Z',
    maxParticipants: 300,
    currentParticipants: 189,
    requirements: [
      'Pria usia 17-50 tahun',
      'Mengerti teknologi dasar',
      'Sehat dan mandiri',
      'Memiliki smartphone'
    ],
    price: 250000,
    images: ['https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800'],
    status: 'upcoming',
    duration: 10,
    mealsProvided: true,
    accommodationProvided: true,
    scholarInfo: {
      name: 'Ustadz Prof. Dr. Abdul Aziz',
      bio: 'Rektor Universitas Islam Negeri Bandung, pakar studi Islam kontemporer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    schedule: [
      {
        day: 1,
        activities: [
          { time: '04:00', title: 'Sahur + Digital Detox', description: 'Sahur dan guidance digital detox' },
          { time: '05:00', title: 'Subuh', description: 'Sholat subuh berjamaah' },
          { time: '08:00', title: 'Digital Workshop', description: 'Workshop Islamic apps development' },
          { time: '10:00', title: 'Kajian Islam & Teknologi', description: 'Integrasi Islam dengan teknologi' },
          { time: '12:00', title: 'Dzuhur', description: 'Sholat dzuhur berjamaah' },
          { time: '15:00', title: 'Ashar', description: 'Sholat ashar berjamaah' },
          { time: '17:00', title: 'Islamic Tech Talk', description: 'Diskusi tentang teknologi Islam' },
          { time: '18:00', title: 'Buka Puasa', description: 'Buka puasa bersama' },
          { time: '19:30', title: 'Tarawih', description: 'Sholat tarawih berjamaah' }
        ]
      }
    ]
  },
  {
    id: 'ik5',
    institutionId: '3', // Masjid Al-Akbar Surabaya
    type: 'iktikaf',
    title: 'Iktikaf Jawa Timur Al-Akbar',
    description: 'Iktikaf regional Jawa Timur di Masjid Al-Akbar Surabaya',
    startDate: '2025-03-31T00:00:00Z',
    endDate: '2025-04-09T00:00:00Z',
    registrationDeadline: '2025-03-28T23:59:59Z',
    maxParticipants: 400,
    currentParticipants: 312,
    requirements: [
      'Pria usia 18-60 tahun',
      'Domisili Jawa Timur (disertai KTP)',
      'Sehat dan tidak memiliki penyakit berat',
      'Siap tinggal 10 hari penuh'
    ],
    price: 200000,
    images: ['https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800'],
    status: 'upcoming',
    duration: 10,
    mealsProvided: true,
    accommodationProvided: true,
    scholarInfo: {
      name: 'KH. Ahmad Muwafiq',
      bio: 'Pimpinan Pondok Pesantren Amanatul Ummah, Surabaya',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=150'
    },
    schedule: [
      {
        day: 1,
        activities: [
          { time: '04:00', title: 'Sahur & Dzikir', description: 'Makan sahur dan dzikir pagi' },
          { time: '05:00', title: 'Subuh', description: 'Sholat subuh berjamaah' },
          { time: '07:00', title: 'Muhadharah', description: 'Ceramah pagi tentang spiritualitas' },
          { time: '09:00', title: 'Kajian Kitab Kuning', description: 'Studi kitab klasik' },
          { time: '11:00', title: 'Workshop Dakwah', description: 'Pelatihan public speaking' },
          { time: '12:00', title: 'Dzuhur', description: 'Sholat dzuhur berjamaah' },
          { time: '15:00', title: 'Ashar', description: 'Sholat ashar berjamaah' },
          { time: '16:00', title: 'Sore Maulid', description: 'Maulid Nabi dan sholawat' },
          { time: '18:00', title: 'Buka Puasa', description: 'Berbuka puasa bersama' },
          { time: '19:30', title: 'Tarawih', description: 'Sholat tarawih berjamaah' },
          { time: '21:00', title: 'Tausiyah Malam', description: 'Tausiyah sebelum tidur' }
        ]
      }
    ]
  }
];