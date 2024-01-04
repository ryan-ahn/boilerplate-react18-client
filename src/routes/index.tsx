import { Routes, Route } from 'react-router-dom';
import Default from '@layouts/default';
import Main from '@containers/main';
import HocWithAccess from '@containers/hoc/access';

// access
const ProtectedMain = HocWithAccess(Main);

// routes
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Default />}>
        <Route path="/" element={<ProtectedMain />} />
      </Route>
    </Routes>
  );
}
