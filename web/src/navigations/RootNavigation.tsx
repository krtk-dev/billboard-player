import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

export default function RootNavigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}
