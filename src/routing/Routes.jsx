import { Routes, Route } from 'react-router-dom';
import { HomeExample } from '../views/HomeExample/HomeExample';
import { routePaths } from './';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routePaths.HOME} element={<HomeExample />} />
    </Routes>
  );
};

export default AppRoutes;
