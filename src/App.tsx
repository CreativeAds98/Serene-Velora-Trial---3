import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CustomTripModal } from './components/CustomTripModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { TourPackagesPage } from './pages/TourPackagesPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [planModalDestination, setPlanModalDestination] = useState('');

  const handleOpenPlanModal = (destinationName?: string) => {
    setPlanModalDestination(destinationName || 'Kerala');
    setIsPlanModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF8F5] text-[#1C2826] flex flex-col font-sans selection:bg-[#B68D40]/30 selection:text-[#0D3832]">
        
        {/* Navigation Bar */}
        <Navbar onOpenPlanModal={handleOpenPlanModal} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenPlanModal={handleOpenPlanModal} />} />
            <Route path="/about" element={<AboutPage onOpenPlanModal={handleOpenPlanModal} />} />
            <Route path="/destinations" element={<DestinationsPage onOpenPlanModal={handleOpenPlanModal} />} />
            <Route path="/tour-packages" element={<TourPackagesPage onOpenPlanModal={handleOpenPlanModal} />} />
            <Route path="/holidays" element={<Navigate to="/tour-packages" replace />} />
            <Route path="/contact" element={<ContactPage onOpenPlanModal={handleOpenPlanModal} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Custom Holiday Planning Modal */}
        <CustomTripModal
          isOpen={isPlanModalOpen}
          onClose={() => setIsPlanModalOpen(false)}
          initialDestination={planModalDestination}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
