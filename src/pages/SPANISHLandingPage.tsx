import React from 'react';
import SPANISHHeroSection from '../components/SPANISHHeroSection';
import SPANISHTestimonialsSection from '../components/SPANISHTestimonialsSection';
import SPANISHGuideTeachesSection from '../components/SPANISHGuideTeachesSection';
import SPANISHIsRightForYouSectionLanding from '../components/SPANISHIsRightForYouSectionLanding';
import SPANISHFinalCTASection from '../components/SPANISHFinalCTASection';
import SPANISHFooter from '../components/SPANISHFooter';

function SPANISHLandingPage() {
  return (
    <div className="min-h-screen">
      <SPANISHHeroSection />
      <SPANISHGuideTeachesSection />
      <SPANISHTestimonialsSection />
      <SPANISHIsRightForYouSectionLanding />
      <SPANISHFinalCTASection />
      <SPANISHFooter />
    </div>
  );
}

export default SPANISHLandingPage;
