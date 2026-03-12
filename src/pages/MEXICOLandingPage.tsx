import React from 'react';
import MEXICOHeroSection from '../components/MEXICOHeroSection';
import SPANISHTestimonialsSection from '../components/SPANISHTestimonialsSection';
import SPANISHGuideTeachesSection from '../components/SPANISHGuideTeachesSection';
import SPANISHIsRightForYouSectionLanding from '../components/SPANISHIsRightForYouSectionLanding';
import SPANISHFinalCTASection from '../components/SPANISHFinalCTASection';
import SPANISHFooter from '../components/SPANISHFooter';

function MEXICOLandingPage() {
  return (
    <div className="min-h-screen">
      <MEXICOHeroSection />
      <SPANISHGuideTeachesSection />
      <SPANISHTestimonialsSection />
      <SPANISHIsRightForYouSectionLanding />
      <SPANISHFinalCTASection />
      <SPANISHFooter />
    </div>
  );
}

export default MEXICOLandingPage;
