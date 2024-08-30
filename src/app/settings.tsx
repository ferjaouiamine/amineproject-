import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import Sidebar from '@/app/Components/Sidebar';
import React from 'react';


const Settings: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Paramètres</h1>
          {/* Contenu des paramètres */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Settings;
