import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@src/context/AuthProvider.jsx';
import Login from '@src/pages/Login.jsx';
import PrivateRoute from '@src/context/PrivateRoute.jsx';
import Home from '@src/pages/Home.jsx';
import Notfound from '@src/pages/Notfound.jsx';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='' element={<PrivateRoute />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
