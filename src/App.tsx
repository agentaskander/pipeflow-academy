import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Admin from './pages/Admin';
import AiTools from './pages/AiTools';
import Apprenticeships from './pages/Apprenticeships';
import Business from './pages/Business';
import Certifications from './pages/Certifications';
import Datacenter from './pages/Datacenter';
import Electrical from './pages/Electrical';
import FieldLabs from './pages/FieldLabs';
import Home from './pages/Home';
import Hvac from './pages/Hvac';
import Instructors from './pages/Instructors';
import Learn from './pages/Learn';
import Plumbing from './pages/Plumbing';
import Skills from './pages/Skills';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/apprenticeships" element={<Apprenticeships />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/plumbing" element={<Plumbing />} />
        <Route path="/hvac" element={<Hvac />} />
        <Route path="/datacenter" element={<Datacenter />} />
        <Route path="/field-labs" element={<FieldLabs />} />
        <Route path="/ai-tools" element={<AiTools />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/business" element={<Business />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}
