import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import SecurityServices from './pages/services/SecurityServices'
import FacilityServices from './pages/services/FacilityServices'
import RiskServices from './pages/services/RiskServices'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/security" element={<SecurityServices />} />
        <Route path="/services/facility" element={<FacilityServices />} />
        <Route path="/services/risk" element={<RiskServices />} />
      </Routes>
    </Layout>
  )
}

export default App
