import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminIndex } from './dashboard/pages/AdminIndex';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<MainLayout />}>
            {/* Redirect from '/dashboard' to '/dashboard/admin' */}
            <Route element={<Navigate to='/dashboard/admin' />} />
            {/* Route for '/dashboard/admin' */}
            <Route path='admin' element={<AdminIndex />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
