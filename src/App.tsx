import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import GuidePage from './pages/GuidePage'
import ScrollToTop from './components/ScrollToTop'
import StartPage from './pages/StartPage';
import SPANISHLandingPage from './pages/SPANISHLandingPage'
import SPANISHGuidePage from './pages/SPANISHGuidePage'
import SPANISHStartPage from './pages/SPANISHStartPage';
import LP4 from './pages/LP4';
import VNLandingPage from './pages/VNLandingPage'
import VNGuidePage from './pages/VNGuidePage'
import VNStartPage from './pages/VNStartPage';
import MEXICOLandingPage from './pages/MEXICOLandingPage';
import StartPage_no_popup from './pages/StartPage_no_popup';
import GreensboroPage from './pages/GreensboroPage';









function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/en" element={<LandingPage />} />        
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/en/guide" element={<GuidePage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/en/start" element={<StartPage />} />        
        <Route path="/es/" element={<SPANISHLandingPage />} />
        <Route path="/es/guide" element={<SPANISHGuidePage />} />
        <Route path="/es/start" element={<SPANISHStartPage />} />
        <Route path="/free-guide" element={<LandingPage />} />
        <Route path="/guía-gratuita" element={<SPANISHLandingPage />} />
        <Route path="/guia-gratuita" element={<SPANISHLandingPage />} />
        <Route path="/home" element={<LP4 />} />
        <Route path="/vn/" element={<VNLandingPage />} />
        <Route path="/vn/guide" element={<VNGuidePage />} />
        <Route path="/vn/start" element={<VNStartPage />} />
        <Route path="/mx/" element={<MEXICOLandingPage />} />
        <Route path="/en/info" element={<StartPage_no_popup />} />
        <Route path="/greensboro" element={<GreensboroPage />} />










      </Routes>
    </>
  )
}

export default App
