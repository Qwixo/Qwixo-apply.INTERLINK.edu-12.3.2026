import React from 'react'
import LP4StartHero from "../components/LP4StartHero"
import HowInterlinkHelpsSection from '../components/HowInterlinkHelpsSection'
import LP4StudentJourneyComparisonSection from '../components/LP4StudentJourneyComparisonSection'
import LP4ComparisonTableSection from '../components/LP4ComparisonTableSection'
import LP4StudyOptionsSection from '../components/LP4StudyOptionsSection'
import CleanJourneyTimeline from "../components/CleanJourneyTimeline"
import LP4TimelineSection from '../components/LP4TimelineSection'
import TestimonialsSection from '../components/TestimonialsSection'
import StudentLifeSection from '../components/StudentLifeSection'
import LP4OnTheFenceSection from '../components/LP4OnTheFenceSection'
// import IsRightForYouSection from '../components/IsRightForYouSection'
import FAQSection from '../components/FAQSection'
import LP4CTA from '../components/LP4CTA'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const LP4 = () => {
  const scrollToCTA = () => {
    const el = document.getElementById('lp4cta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />

      {/* NEW FLOATING + TEXT ROTATE HERO SECTION */}
      <LP4StartHero scrollToCTA={scrollToCTA} />

      {/* REPLACED SECTION: Start pursuing your goals with INTERLINK! */}
      <HowInterlinkHelpsSection />

      {/* REPLACED: Speaking English Pays Off with Student Journey Comparison */}
      <LP4StudentJourneyComparisonSection />

      {/* UPDATED SECTION: Comparison Table */}
      <LP4ComparisonTableSection />

      {/* UPDATED SECTION: Study Options */}
      <LP4StudyOptionsSection />

      {/* CleanJourneyTimeline */}
      <CleanJourneyTimeline />

      {/* NEW SECTION: Timeline - What happens after you apply */}
      <LP4TimelineSection />

      {/* NEW SECTION: Testimonials - Not touching as requested */}
      <TestimonialsSection guideStyle />

      {/* NEW SECTION: Student Life Section - Added between Testimonials and On The Fence */}
      <StudentLifeSection />

      {/* NEW SECTION: On The Fence */}
      <LP4OnTheFenceSection />

      {/* NEW SECTION: Is Right For You - Commented out as requested */}
      {/* <IsRightForYouSection /> */}

      {/* NEW SECTION: FAQ */}
      <FAQSection />

      {/* FINAL CTA SECTION - Updated */}
      <LP4CTA />

      <Footer />
    </div>
  )
}

export default LP4
