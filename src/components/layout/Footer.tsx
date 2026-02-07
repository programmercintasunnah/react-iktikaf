import { APP_CONFIG } from '../../constants';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GO</span>
              </div>
              <span className="text-xl font-bold text-gray-900">GO-Iktikaf</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Temukan masjid terdekat dan program iktikaf di seluruh Indonesia. 
              Platform terpercaya untuk jamaah yang ingin meningkatkan ibadah di bulan suci Ramadhan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.743-.012 3.054-.06 4.123-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.743 0-3.054-.012-4.123-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.235.830-.436.431-.648.768-.830 1.235-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.831 1.235.431.436.648.768.831 1.235.137.353.3.882.344 1.857.049 1.023.058 1.351.058 3.807v.468c0 2.456-.011 2.784-.058 3.807-.045.975-.207 1.504-.344 1.857-.182.466-.399.8-.831 1.235-.431.436-.648.768-.831 1.235-.137.353-.3.882-.344 1.857C9.752 19.812 9.424 19.823 6.968 19.823h-.468c-2.456 0-2.784-.011-3.807-.058-.975-.045-1.504-.207-1.857-.344-.466-.182-.8-.398-1.235-.830-.436-.431-.648-.768-.831-1.235-.137-.353-.3-.882-.344-1.857C-.011 15.999 0 15.671 0 13.215v-.468c0-2.456.011-2.784.058-3.807.045-.975.207-1.504.344-1.857.182-.466.399-.8.831-1.235.436-.431.648-.768.831-1.235.137-.353.3-.882.344-1.857.049-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a1.65 1.65 0 00-.831-.831c-.353-.137-.882-.3-1.857-.344-1.023-.058-1.351-.058-3.807zm2.302 4.998c.724 0 1.311.587 1.311 1.311s-.587 1.311-1.311 1.311-1.311-.587-1.311-1.311.587-1.311 1.311-1.311zm5.422 0c.724 0 1.311.587 1.311 1.311s-.587 1.311-1.311 1.311-1.311-.587-1.311-1.311.587-1.311 1.311-1.311z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                  Cari Masjid
                </a>
              </li>
              <li>
                <a href="/iktikaf" className="text-gray-600 hover:text-green-600 transition-colors">
                  Program Iktikaf
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Cara Pendaftaran
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Bantuan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="mailto:info@go-iktikaf.com" className="hover:text-green-600 transition-colors">
                  info@go-iktikaf.com
                </a>
              </li>
              <li>
                <a href="tel:+628123456789" className="hover:text-green-600 transition-colors">
                  +62 812-3456-789
                </a>
              </li>
              <li>
                <span>Senin - Jumat: 08:00 - 17:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2026 {APP_CONFIG.APP_NAME}. Semua hak dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
                Tentang Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}