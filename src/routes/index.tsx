import { Routes, Route } from 'react-router-dom';
import Default from '@layouts/default';
import Main from '@containers/main';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Default />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}
