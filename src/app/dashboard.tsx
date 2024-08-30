import Footer from '@/app/Components/Footer';
import Header from '@/app/Components/Header';
import MainContent from '@/app/Components/MainContent';
import Sidebar from '@/app/Components/Sidebar';
import React from 'react';


const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
