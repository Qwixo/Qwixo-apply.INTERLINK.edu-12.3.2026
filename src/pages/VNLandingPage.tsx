import React from 'react';
import VNHeroSection from '../components/VNHeroSection';
import VNTestimonialsSection from '../components/VNTestimonialsSection';
import VNGuideTeachesSection from '../components/VNGuideTeachesSection';
import VNIsRightForYouSectionLanding from '../components/VNIsRightForYouSectionLanding';
import VNFinalCTASection from '../components/VNFinalCTASection';
import VNFooter from '../components/VNFooter';

function VNLandingPage() {
  return (
    <div className="min-h-screen">
      <VNHeroSection />
      <VNGuideTeachesSection />
      <VNTestimonialsSection />
      <VNIsRightForYouSectionLanding />
      <VNFinalCTASection />
      <VNFooter />
    </div>
  );
}

export default VNLandingPage;
