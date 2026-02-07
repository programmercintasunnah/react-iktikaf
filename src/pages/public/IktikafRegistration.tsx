import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, Button, Input } from '../../components';
import { mosques } from '../../data';
import { iktikafPrograms } from '../../data';
import { REGISTRATION_REQUIREMENTS, HEALTH_CONDITIONS, VACCINATION_STATUS, RELATIONSHIPS, OCCUPATIONS } from '../../constants';
import { ArrowLeft, Upload, User, Phone, Mail, Calendar, MapPin, AlertCircle } from 'lucide-react';

// Validation schemas
const personalInfoSchema = z.object({
  name: z.string().min(3, 'Nama minimal 3 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(10, 'Nomor telepon minimal 10 digit'),
  age: z.number().min(17, 'Usia minimal 17 tahun').max(80, 'Usia maksimal 80 tahun'),
  gender: z.enum(['male', 'female']),
  address: z.string().min(10, 'Alamat minimal 10 karakter'),
  occupation: z.string().optional(),
});

const healthInfoSchema = z.object({
  vaccinationStatus: z.enum(['vaccinated', 'unvaccinated', 'partial']),
  healthCondition: z.enum(['healthy', 'has_medical_condition']),
  medicalHistory: z.string().optional(),
  specialNeeds: z.string().optional(),
});

const emergencyContactSchema = z.object({
  name: z.string().min(3, 'Nama minimal 3 karakter'),
  phone: z.string().min(10, 'Nomor telepon minimal 10 digit'),
  relationship: z.string().min(2, 'Hubungan minimal 2 karakter'),
});

const programPreferencesSchema = z.object({
  durationPreference: z.enum(['full_10_days', 'partial']),
  mealsNeeded: z.boolean(),
  accommodationNeeded: z.boolean(),
});

export function IktikafRegistration() {
  const { mosqueId } = useParams<{ mosqueId: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mosque = mosques.find(m => m.id === mosqueId);
  const program = iktikafPrograms.find(p => p.institutionId === mosqueId);

  // Form hooks
  const personalForm = useForm({
    resolver: zodResolver(personalInfoSchema),
  });

  const healthForm = useForm({
    resolver: zodResolver(healthInfoSchema),
  });

  const emergencyForm = useForm({
    resolver: zodResolver(emergencyContactSchema),
  });

  const preferencesForm = useForm({
    resolver: zodResolver(programPreferencesSchema),
  });

  if (!mosque || !program) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Program Tidak Ditemukan
          </h1>
          <p className="text-gray-600 mb-6">
            Program iktikaf yang Anda cari tidak tersedia.
          </p>
          <Button onClick={() => navigate('/iktikaf')}>
            Kembali ke Daftar Program
          </Button>
        </div>
      </div>
    );
  }

  const steps = [
    { number: 1, title: 'Data Diri', description: 'Informasi pribadi Anda' },
    { number: 2, title: 'Data Kesehatan', description: 'Kondisi kesehatan Anda' },
    { number: 3, title: 'Kontak Darurat', description: 'Info kontak darurat' },
    { number: 4, title: 'Preferensi Program', description: 'Pilihan program iktikaf' },
    { number: 5, title: 'Konfirmasi', description: 'Review dan konfirmasi' },
  ];

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to success page or show success message
      alert('Pendaftaran berhasil! Kami akan menghubungi Anda segera.');
      navigate('/iktikaf');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Pendaftaran Iktikaf
              </h1>
              <p className="text-gray-600">
                {program.title} - {mosque.name}
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate('/iktikaf')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.number
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.number}
                </div>
                <div className={`flex-1 h-1 mx-2 ${
                  currentStep > step.number ? 'bg-green-600' : 'bg-gray-200'
                }`}></div>
                <div className="text-xs text-gray-600 ml-2 hidden sm:block">
                  <div className="font-medium">{step.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="p-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <User className="inline w-5 h-5 mr-2" />
                  Data Diri
                </h2>
                <p className="text-gray-600 mb-6">
                  Lengkapi data diri Anda untuk pendaftaran program iktikaf.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Nama Lengkap"
                  placeholder="Masukkan nama lengkap sesuai KTP"
                  {...personalForm.register('name')}
                  error={personalForm.formState.errors.name?.message}
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="email@example.com"
                  {...personalForm.register('email')}
                  error={personalForm.formState.errors.email?.message}
                  required
                />

                <Input
                  label="Nomor WhatsApp"
                  type="tel"
                  placeholder="08xx-xxxx-xxxx"
                  {...personalForm.register('phone')}
                  error={personalForm.formState.errors.phone?.message}
                  required
                />

                <Input
                  label="Usia"
                  type="number"
                  placeholder="25"
                  {...personalForm.register('age', { valueAsNumber: true })}
                  error={personalForm.formState.errors.age?.message}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Kelamin <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...personalForm.register('gender')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Pilih jenis kelamin</option>
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                  {personalForm.formState.errors.gender && (
                    <p className="mt-1 text-sm text-red-600">
                      {personalForm.formState.errors.gender.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pekerjaan
                  </label>
                  <select
                    {...personalForm.register('occupation')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Pilih pekerjaan</option>
                    {OCCUPATIONS.map((occ) => (
                      <option key={occ} value={occ}>{occ}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <Input
                    label="Alamat Lengkap"
                    placeholder="Masukkan alamat lengkap"
                    {...personalForm.register('address')}
                    error={personalForm.formState.errors.address?.message}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Health Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Data Kesehatan
                </h2>
                <p className="text-gray-600 mb-6">
                  Informasi kesehatan Anda untuk memastikan kelayakan mengikuti program.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status Vaksinasi <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...healthForm.register('vaccinationStatus')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Pilih status vaksinasi</option>
                    {VACCINATION_STATUS.map((status) => (
                      <option key={status.value} value={status.value}>
                        {status.label}
                      </option>
                    ))}
                  </select>
                  {healthForm.formState.errors.vaccinationStatus && (
                    <p className="mt-1 text-sm text-red-600">
                      {healthForm.formState.errors.vaccinationStatus.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kondisi Kesehatan <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...healthForm.register('healthCondition')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Pilih kondisi kesehatan</option>
                    {HEALTH_CONDITIONS.map((condition) => (
                      <option key={condition.value} value={condition.value}>
                        {condition.label}
                      </option>
                    ))}
                  </select>
                  {healthForm.formState.errors.healthCondition && (
                    <p className="mt-1 text-sm text-red-600">
                      {healthForm.formState.errors.healthCondition.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <Input
                    label="Riwayat Penyakit (jika ada)"
                    placeholder="Jelaskan riwayat penyakit yang pernah diderita"
                    {...healthForm.register('medicalHistory')}
                    error={healthForm.formState.errors.medicalHistory?.message}
                  />
                </div>

                <div className="md:col-span-2">
                  <Input
                    label="Kebutuhan Khusus (jika ada)"
                    placeholder="Jelaskan kebutuhan khusus yang diperlukan"
                    {...healthForm.register('specialNeeds')}
                    error={healthForm.formState.errors.specialNeeds?.message}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Emergency Contact */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Kontak Darurat
                </h2>
                <p className="text-gray-600 mb-6">
                  Informasi kontak yang dapat dihubungi saat keadaan darurat.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Nama Kontak Darurat"
                  placeholder="Masukkan nama kontak darurat"
                  {...emergencyForm.register('name')}
                  error={emergencyForm.formState.errors.name?.message}
                  required
                />

                <Input
                  label="Nomor Telepon"
                  type="tel"
                  placeholder="08xx-xxxx-xxxx"
                  {...emergencyForm.register('phone')}
                  error={emergencyForm.formState.errors.phone?.message}
                  required
                />

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hubungan <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...emergencyForm.register('relationship')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Pilih hubungan</option>
                    {RELATIONSHIPS.map((rel) => (
                      <option key={rel} value={rel}>{rel}</option>
                    ))}
                  </select>
                  {emergencyForm.formState.errors.relationship && (
                    <p className="mt-1 text-sm text-red-600">
                      {emergencyForm.formState.errors.relationship.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Program Preferences */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Preferensi Program
                </h2>
                <p className="text-gray-600 mb-6">
                  Pilih preferensi Anda untuk program iktikaf.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Durasi Iktikaf <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...preferencesForm.register('durationPreference')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="full_10_days">Full 10 hari</option>
                    <option value="partial">Partial (beberapa hari)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...preferencesForm.register('mealsNeeded')}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Membutuhkan makanan
                    </span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...preferencesForm.register('accommodationNeeded')}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Membutuhkan penginapan
                    </span>
                  </label>
                </div>
              </div>

              {/* Program Summary */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">Ringkasan Program</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Program:</span>
                    <div className="font-medium">{program.title}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Lokasi:</span>
                    <div className="font-medium">{mosque.name}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Tanggal:</span>
                    <div className="font-medium">
                      {new Date(program.startDate).toLocaleDateString('id-ID')} - {new Date(program.endDate).toLocaleDateString('id-ID')}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600">Biaya:</span>
                    <div className="font-medium text-green-600">
                      {program.price === 0 ? 'Gratis' : `Rp ${program.price.toLocaleString('id-ID')}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Konfirmasi Pendaftaran
                </h2>
                <p className="text-gray-600 mb-6">
                  Periksa kembali data Anda sebelum mengirim pendaftaran.
                </p>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Syarat dan Ketentuan</h3>
                <ul className="list-disc list-inside text-sm text-amber-800 space-y-1">
                  {REGISTRATION_REQUIREMENTS.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Dengan mengirim formulir ini, Anda menyetujui syarat dan ketentuan yang berlaku.
                </p>
                <Button
                  onClick={handleSubmit}
                  loading={isSubmitting}
                  className="mx-auto"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pendaftaran'}
                </Button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Sebelumnya
            </Button>
            {currentStep < 5 ? (
              <Button onClick={handleNext}>
                Selanjutnya
              </Button>
            ) : (
              <Button onClick={handleSubmit} loading={isSubmitting}>
                Kirim Pendaftaran
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}