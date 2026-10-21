import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientTrust from './components/ClientTrust';
import ProductFilterCatalog from './components/ProductFilterCatalog';
import EngineeringQuality from './components/EngineeringQuality';
import ExportMap from './components/ExportMap';
import SEOSection from './components/SEOSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductSpecsModal from './components/ProductSpecsModal';
import RFQModal from './components/RFQModal';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedProductForRFQ, setSelectedProductForRFQ] = useState(null);
  const [specsModalOpen, setSpecsModalOpen] = useState(false);
  const [selectedProductForSpecs, setSelectedProductForSpecs] = useState(null);

  const handleOpenRFQ = (product = null) => {
    setSelectedProductForRFQ(product);
    setRfqModalOpen(true);
  };

  const handleCloseRFQ = () => {
    setRfqModalOpen(false);
    setSelectedProductForRFQ(null);
  };

  const handleOpenSpecsModal = (product) => {
    setSelectedProductForSpecs(product);
    setSpecsModalOpen(true);
  };

  const handleCloseSpecsModal = () => {
    setSpecsModalOpen(false);
    setSelectedProductForSpecs(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Navigation with Original Company Logo */}
      <Navbar 
        onOpenRFQ={handleOpenRFQ} 
        onSelectCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section in Light Theme */}
        <Hero onOpenRFQ={handleOpenRFQ} />

        {/* Client Trust Strip with Authentic Pharma Logos */}
        <ClientTrust />

        {/* Machinery Filter & Catalog with Real Product Photos */}
        <ProductFilterCatalog 
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onOpenRFQ={handleOpenRFQ}
          onOpenSpecsModal={handleOpenSpecsModal}
        />

        {/* Heritage, cGMP Engineering & Sectors */}
        <EngineeringQuality onOpenRFQ={handleOpenRFQ} />

        {/* Global Export Footprint in Light Theme */}
        <ExportMap />

        {/* Technical SEO FAQ Knowledge Base */}
        <SEOSection onOpenRFQ={handleOpenRFQ} />

        {/* Direct Contact & Works Location */}
        <ContactSection />
      </main>

      {/* Footer in Light Corporate Theme */}
      <Footer 
        onOpenRFQ={handleOpenRFQ} 
        onSelectCategory={setActiveCategory} 
      />

      {/* Technical Specifications Modal with Real Photos & Spec Matrix */}
      {specsModalOpen && (
        <ProductSpecsModal 
          product={selectedProductForSpecs}
          onClose={handleCloseSpecsModal}
          onOpenRFQ={handleOpenRFQ}
        />
      )}

      {/* Request For Quote (RFQ) Modal */}
      {rfqModalOpen && (
        <RFQModal 
          initialProduct={selectedProductForRFQ}
          onClose={handleCloseRFQ}
        />
      )}
    </div>
  );
}
