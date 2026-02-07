import { Link } from 'react-router-dom';
import { Card, Badge, Button } from '../../components';
import { mosques } from '../../data';
import { iktikafPrograms } from '../../data';
import { formatPrice, formatDate, getRelativeTime } from '../../utils/formatters';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function IktikafList() {
  // Filter mosques that have iktikaf programs
  const mosquesWithIktikaf = mosques.filter(mosque => 
    iktikafPrograms.some(program => program.institutionId === mosque.id)
  );

  // Get all iktikaf programs with mosque info
  const iktikafWithMosques = iktikafPrograms.map(program => {
    const mosque = mosques.find(m => m.id === program.institutionId);
    return {
      ...program,
      mosque
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Program Iktikaf Ramadhan 1446 H
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan program iktikaf di masjid-masjid terdekat. Daftarkan diri Anda untuk 
          mengisi 10 hari terakhir bulan suci Ramadhan dengan ibadah yang lebih khusyuk.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600">{mosquesWithIktikaf.length}</div>
          <div className="text-gray-600">Masjid dengan Iktikaf</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600">{iktikafPrograms.length}</div>
          <div className="text-gray-600">Total Program</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600">
            {iktikafPrograms.reduce((sum, p) => sum + p.currentParticipants, 0)}
          </div>
          <div className="text-gray-600">Peserta Terdaftar</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600">
            {iktikafPrograms.reduce((sum, p) => sum + (p.maxParticipants || 0), 0)}
          </div>
          <div className="text-gray-600">Kuota Tersedia</div>
        </Card>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {iktikafWithMosques.map((program) => (
          <Card key={program.id} hover>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Program Image */}
              <div className="md:col-span-1">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={program.images[0] || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'}
                    alt={program.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </div>

              {/* Program Info */}
              <div className="md:col-span-2 space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{program.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {program.mosque?.name}
                  </div>
                </div>

                <p className="text-gray-700 line-clamp-2">{program.description}</p>

                {/* Program Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Durasi</div>
                    <div className="font-semibold">{program.duration} hari</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Biaya</div>
                    <div className="font-semibold text-green-600">{formatPrice(program.price || 0)}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Peserta</div>
                    <div className="font-semibold">{program.currentParticipants}/{program.maxParticipants}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Status</div>
                    <Badge variant={program.status === 'upcoming' ? 'success' : 'warning'} className="text-xs">
                      {program.status === 'upcoming' ? 'Akan Datang' : program.status}
                    </Badge>
                  </div>
                </div>

                {/* Dates */}
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>
                    {formatDate(program.startDate)} - {formatDate(program.endDate)}
                  </span>
                  <span className="ml-auto text-green-600 font-medium">
                    ({getRelativeTime(program.startDate)})
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{
                      width: `${Math.min((program.currentParticipants / (program.maxParticipants || 1)) * 100, 100)}%`
                    }}
                  ></div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-2">
                  <div className="text-sm text-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Deadline: {formatDate(program.registrationDeadline || program.startDate)}
                  </div>
                  <div className="space-x-2">
                    <Button variant="outline" size="sm">
                      Lihat Detail
                    </Button>
                    <Button size="sm">
                      Daftar Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* No Programs Message */}
      {iktikafWithMosques.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Calendar className="mx-auto h-12 w-12" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Belum Ada Program Iktikaf
          </h3>
          <p className="text-gray-600 mb-4">
            Saat ini belum ada program iktikaf yang tersedia. Silakan cek kembali nanti.
          </p>
          <Link to="/">
            <Button variant="outline">
              Cari Masjid Lainnya
            </Button>
          </Link>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Siap Melakukan Iktikaf?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Jangan lewatkan kesempatan untuk meraih pahala berlimpah di 10 hari terakhir Ramadhan. 
          Pilih masjid dan program yang sesuai dengan kebutuhan Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/mosques">
            <Button>
              Cari Masjid
            </Button>
          </Link>
          <Button variant="outline">
            Panduan Iktikaf
          </Button>
        </div>
      </div>
    </div>
  );
}