import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Card, Button, Badge } from '../../components';
import { mosques } from '../../data';
import { iktikafPrograms } from '../../data';
import { formatPrice, formatDate, getRelativeTime } from '../../utils/formatters';
import { MapPin, Phone, Mail, Users, Calendar, Clock, ArrowLeft } from 'lucide-react';

export function MosqueDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'info' | 'iktikaf'>('info');

  const mosque = mosques.find(m => m.id === id);
  const mosqueIktikafPrograms = iktikafPrograms.filter(p => p.institutionId === id);

  if (!mosque) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Masjid Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">
            Masjid yang Anda cari tidak ada dalam database kami.
          </p>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Back Button */}
      <Button 
        variant="secondary" 
        onClick={() => window.history.back()}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali
      </Button>

      {/* Mosque Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mosque Image */}
          <div className="lg:col-span-1">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={mosque.images[0] || 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800'}
                alt={mosque.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mosque Info */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{mosque.name}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                <span>{mosque.address.street}, {mosque.address.city}, {mosque.address.province}</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <Users className="w-8 h-8 mx-auto text-green-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{mosque.capacity.toLocaleString('id-ID')}</div>
                <div className="text-sm text-gray-600">Kapasitas</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{mosque.rating}</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{mosque.facilities.length}</div>
                <div className="text-sm text-gray-600">Fasilitas</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">{mosqueIktikafPrograms.length}</div>
                <div className="text-sm text-gray-600">Program Iktikaf</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-gray-700">{mosque.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-gray-700">{mosque.contact.email}</span>
              </div>
              {mosque.contact.website && (
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-400" />
                  <a 
                    href={mosque.contact.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                  >
                    Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('info')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'info'
                ? 'border-b-2 border-green-600 text-green-600 bg-green-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Informasi Masjid
          </button>
          {mosqueIktikafPrograms.length > 0 && (
            <button
              onClick={() => setActiveTab('iktikaf')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'iktikaf'
                  ? 'border-b-2 border-green-600 text-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Program Iktikaf ({mosqueIktikafPrograms.length})
            </button>
          )}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'info' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Description */}
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Deskripsi</h3>
            <p className="text-gray-700 leading-relaxed">{mosque.description}</p>
          </Card>

          {/* Facilities */}
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fasilitas</h3>
            <div className="grid grid-cols-2 gap-2">
              {mosque.facilities.map((facility, index) => (
                <Badge key={index} variant="default" className="justify-center">
                  {facility}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'iktikaf' && (
        <div className="space-y-6">
          {mosqueIktikafPrograms.map((program) => (
            <Card key={program.id} hover>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Program Image */}
                <div className="lg:col-span-1">
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={program.images[0] || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Program Info */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-700 mb-4">{program.description}</p>

                  {/* Program Details */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Durasi</div>
                      <div className="font-semibold">{program.duration} hari</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Biaya</div>
                      <div className="font-semibold text-green-600">{formatPrice(program.price || 0)}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Peserta</div>
                      <div className="font-semibold">{program.currentParticipants}/{program.maxParticipants}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Status</div>
                      <Badge variant={program.status === 'upcoming' ? 'success' : 'warning'}>
                        {program.status === 'upcoming' ? 'Akan Datang' : program.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>
                      {formatDate(program.startDate)} - {formatDate(program.endDate)}
                    </span>
                    <span className="ml-4 text-green-600 font-medium">
                      ({getRelativeTime(program.startDate)})
                    </span>
                  </div>

                  {/* Requirements */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Persyaratan:</div>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {program.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Deadline: {formatDate(program.registrationDeadline || program.startDate)}
                    </div>
                    <Button>
                      Daftar Iktikaf
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}