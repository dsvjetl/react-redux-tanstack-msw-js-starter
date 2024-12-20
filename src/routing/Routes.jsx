import { Routes, Route } from 'react-router-dom';
import { HomeExample } from '../views/HomeExample/HomeExample.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeExample />} />
    </Routes>
  );
}
