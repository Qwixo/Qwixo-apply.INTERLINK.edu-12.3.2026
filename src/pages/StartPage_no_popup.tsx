import React from 'react'
import V2StartHero from "../components/LP3_EN-no_mailchimp_popup/V2StartHero"
import V2HowInterlinkHelpsSection from "../components/LP3_EN-no_mailchimp_popup/V2HowInterlinkHelpsSection"
import V2StudentJourneyComparisonSection from "../components/LP3_EN-no_mailchimp_popup/V2StudentJourneyComparisonSection"
import V2ComparisonTableSection from "../components/LP3_EN-no_mailchimp_popup/V2ComparisonTableSection"
import V2StudyOptionsSection from "../components/LP3_EN-no_mailchimp_popup/V2StudyOptionsSection"
import V2CleanJourneyTimeline from "../components/LP3_EN-no_mailchimp_popup/V2CleanJourneyTimeline"
import V2TimelineSection from "../components/LP3_EN-no_mailchimp_popup/V2TimelineSection"
import V2TestimonialsSection from "../components/LP3_EN-no_mailchimp_popup/V2TestimonialsSection"
import V2StudentLifeSection from "../components/LP3_EN-no_mailchimp_popup/V2StudentLifeSection"
import V2OnTheFenceSection from "../components/LP3_EN-no_mailchimp_popup/V2OnTheFenceSection"
// import V2IsRightForYouSection from "../components/LP3_EN-no_mailchimp_popup/V2IsRightForYouSection"
import V2FAQSection from "../components/LP3_EN-no_mailchimp_popup/V2FAQSection"
import V2LastCTASection from "../components/LP3_EN-no_mailchimp_popup/V2LastCTASection"
import V2Footer from "../components/LP3_EN-no_mailchimp_popup/V2Footer"
import V2ScrollToTop from "../components/LP3_EN-no_mailchimp_popup/V2ScrollToTop"

const StartPage_no_popup = () => {
  const APPLY =
    "https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58"

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <V2ScrollToTop />

      {/* NEW FLOATING + TEXT ROTATE HERO SECTION */}
      <V2StartHero />

      {/* Start pursuing your goals with INTERLINK! */}
      <V2HowInterlinkHelpsSection />

      {/* Speaking English Pays Off with Student Journey Comparison */}
      <V2StudentJourneyComparisonSection />

      {/* Comparison Table */}
      <V2ComparisonTableSection />

      {/* Study Options */}
      <V2StudyOptionsSection />

      {/* CleanJourneyTimeline */}
      <V2CleanJourneyTimeline />

      {/* Timeline - What happens after you apply */}
      <V2TimelineSection />

      {/* Testimonials */}
      <V2TestimonialsSection guideStyle />

      {/* Student Life Section */}
      <V2StudentLifeSection />

      {/* On The Fence */}
      <V2OnTheFenceSection />

      {/* Is Right For You - commented out */}
      {/* <V2IsRightForYouSection /> */}

      {/* FAQ */}
      <V2FAQSection />

      {/* Final CTA Section */}
      <V2LastCTASection />

      <V2Footer />
    </div>
  )
}

export default StartPage_no_popup
