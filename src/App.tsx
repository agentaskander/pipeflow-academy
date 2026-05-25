import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AiTools from './pages/AiTools';
import Apprenticeships from './pages/Apprenticeships';
import Business from './pages/Business';
import Certifications from './pages/Certifications';
import CertificationProgress from './pages/CertificationProgress';
import CareerPaths from './pages/CareerPaths';
import Datacenter from './pages/Datacenter';
import Electrical from './pages/Electrical';
import FieldReadiness from './pages/FieldReadiness';
import FieldLabs from './pages/FieldLabs';
import Home from './pages/Home';
import Hvac from './pages/Hvac';
import Instructors from './pages/Instructors';
import Learn from './pages/Learn';
import Plumbing from './pages/Plumbing';
import Skills from './pages/Skills';
import SkillsMap from './pages/SkillsMap';
import TrainingGaps from './pages/TrainingGaps';
import WorkflowLabs from './pages/WorkflowLabs';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/skills-map" element={<SkillsMap />} />
        <Route path="/certification-progress" element={<CertificationProgress />} />
        <Route path="/field-readiness" element={<FieldReadiness />} />
        <Route path="/training-gaps" element={<TrainingGaps />} />
        <Route path="/career-paths" element={<CareerPaths />} />
        <Route path="/workflow-labs" element={<WorkflowLabs />} />
        <Route path="/apprenticeships" element={<Apprenticeships />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/plumbing" element={<Plumbing />} />
        <Route path="/hvac" element={<Hvac />} />
        <Route path="/datacenter" element={<Datacenter />} />
        <Route path="/field-labs" element={<FieldLabs />} />
        <Route path="/ai-tools" element={<AiTools />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/business" element={<Business />} />
      </Route>
    </Routes>
  );
}
