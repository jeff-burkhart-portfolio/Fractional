
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import EngineeringPhilosophy from './pages/EngineeringPhilosophy';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/philosophy" element={<EngineeringPhilosophy />} />
        </Routes>
      </Layout>
    </Router>
  );
}
