import React from 'react'
import VNStartHero from "../components/VNStartHero"
import VNHowInterlinkHelpsSection from '../components/VNHowInterlinkHelpsSection'
import VNStudentJourneyComparisonSection from '../components/VNStudentJourneyComparisonSection'
import VNComparisonTableSection from '../components/VNComparisonTableSection'
import VNStudyOptionsSection from '../components/VNStudyOptionsSection'
import VNCleanJourneyTimeline from "../components/VNCleanJourneyTimeline"
import VNTimelineSection from '../components/VNTimelineSection'
import VNTestimonialsSection from '../components/VNTestimonialsSection'
import VNStudentLifeSection from '../components/VNStudentLifeSection'
import VNOnTheFenceSection from '../components/VNOnTheFenceSection'
// import IsRightForYouSection from '../components/IsRightForYouSection'
import VNFAQSection from '../components/VNFAQSection'
import VNLastCTASection from '../components/VNLastCTASection'
import VNFooter from '../components/VNFooter'
import ScrollToTop from '../components/ScrollToTop'

// 👇 import the popup trigger
import LP3_Popup_Trigger from '../components/LP3_Popup_Trigger'

const VNStartPage = () => {
  const APPLY = 'https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58'


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      
      {/* NEW FLOATING + TEXT ROTATE HERO SECTION */}
      <VNStartHero />
      
      {/* REPLACED SECTION: Start pursuing your goals with INTERLINK! */}
      <VNHowInterlinkHelpsSection />
      
      {/* REPLACED: Speaking English Pays Off with Student Journey Comparison */}
      <VNStudentJourneyComparisonSection />
      
      {/* UPDATED SECTION: Comparison Table */}
      <VNComparisonTableSection />
      
      {/* UPDATED SECTION: Study Options */}
      <VNStudyOptionsSection />
      
      {/* CleanJourneyTimeline */}
      <VNCleanJourneyTimeline />
      
      {/* NEW SECTION: Timeline - What happens after you apply */}
      <VNTimelineSection />
      
      {/* NEW SECTION: Testimonials - Not touching as requested */}
      <VNTestimonialsSection guideStyle />

      {/* NEW SECTION: Student Life Section - Added between Testimonials and On The Fence */}
      <VNStudentLifeSection />
      
      {/* NEW SECTION: On The Fence */}
      <VNOnTheFenceSection />
      
      {/* NEW SECTION: Is Right For You - Commented out as requested */}
      {/* <IsRightForYouSection /> */}
      
      {/* NEW SECTION: FAQ */}
      <VNFAQSection />
      
      {/* FINAL CTA SECTION - Updated */}
      <VNLastCTASection />

      <VNFooter />

      {/* 👇 mount once – handles the modal + submission + redirect */}
      <LP3_Popup_Trigger
        locale="vn"
        guideUrl="/vn/guide"
        redirectUrl={APPLY}
        tag="lp3-popup-vn"
      />
    </div>
  )
}

export default VNStartPage
