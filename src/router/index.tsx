import { createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from '../components/layout/PublicLayout';
import { MosqueList } from '../pages/public/MosqueList';
import { MosqueDetail } from '../pages/public/MosqueDetail';
import { IktikafList } from '../pages/public/IktikafList';
import { IktikafRegistration } from '../pages/public/IktikafRegistration';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { 
        index: true, 
        element: <MosqueList /> 
      },
      { 
        path: 'mosques', 
        element: <MosqueList /> 
      },
      { 
        path: 'mosques/:id', 
        element: <MosqueDetail /> 
      },
      { 
        path: 'iktikaf', 
        element: <IktikafList /> 
      },
      { 
        path: 'iktikaf/:mosqueId/register', 
        element: <IktikafRegistration /> 
      },
      {
        path: '*',
        element: (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-gray-600 mb-8">Halaman tidak ditemukan</p>
              <a href="/" className="text-green-600 hover:text-green-700">
                Kembali ke Beranda
              </a>
            </div>
          </div>
        )
      }
    ]
  }
]);