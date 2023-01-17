import './App.css';
import { Dashboard } from './components/Dashboard';
import { Cards } from './components/Cards';
import { MediaAds } from './components/MediaAds';
import { TextAds } from './components/TextAds';
import { Route, Routes, Link } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/textads" element={<TextAds />} />
      <Route path="/mediaads" element={<MediaAds />} />
    </Routes>
    </>
  
  );
}

export default App;
