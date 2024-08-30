import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";


export default function Home() {
  return (
   
<div className="flex min-h-screen">
      
      <Sidebar />
      <div className="min-h-screen flex flex-col">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}
