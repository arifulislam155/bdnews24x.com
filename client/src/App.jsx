import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminIndex from './dashboard/pages/AdminIndex';
import MainLayout from './dashboard/layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout for the dashboard */}
        <Route path="/dashboard" element={<MainLayout />}>
          {/* Redirect to /dashboard/admin by default */}
          <Route index element={<Navigate to="/dashboard/admin" />} />
          {/* Admin page */}
          <Route path="admin" element={<AdminIndex />} />
        </Route>
        
        {/* Redirect the root path to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        {/* 404 Page for undefined routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
