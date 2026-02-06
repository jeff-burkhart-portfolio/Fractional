import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import EngineeringPhilosophy from './pages/EngineeringPhilosophy';
import NotFound from './pages/NotFound';
import ScrollToHash from './components/ScrollToHash';

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/philosophy" element={<EngineeringPhilosophy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
