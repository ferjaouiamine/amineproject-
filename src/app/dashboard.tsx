import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import MainContent from '@/app/Components/MainContent';
import Sidebar from '@/app/Components/Sidebar';
import React from 'react';
import DashboardTable from './Components/DashboardTable';


const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tableau de Bord</h1>
      <DashboardTable />
    </div>
        {/* <MainContent /> */}
        <Footer />
      </div>
    
    </div>
  );
};

export default Dashboard;
