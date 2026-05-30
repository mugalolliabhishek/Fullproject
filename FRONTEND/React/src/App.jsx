import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Restaurants from './pages/Restaurants';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  const { authToken } = useAppContext();
  

  return (
    <Routes>
    
      <Route
        path="/"
        element={authToken ? <Navigate to="/home" replace /> : <Login />}
      />
        <Route path="/home" element={<Home />} />
      <Route
        path="/signup"
        element={authToken ? <Navigate to="/" replace /> : <Signup />}
        
      />
      <Route path="/menu" element={<Menu />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/" element={<Navigate to="/" replace />:<Login />} /> */}
      <Route
        path="/"
        element={authToken ? <Navigate to="/logout" replace /> : <Login />}
      />
    </Routes>
  );
};

const App = () => (
  <AppProvider>
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <BrowserRouter>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <AppRoutes />
        </main>
        <Footer />
        <Toast />
      </BrowserRouter>
    </div>
  </AppProvider>
);

export default App;

