import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageForm from '../../views/HomePage/HomePageForm';
import Login from '../../views/Login/LoginForm';
import Register from '../../views/Register/RegisterForm';
import { AuthProvider } from './AuthContext';

const AppRoutes: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePageForm />} />
        </Routes>
      </AuthProvider> 
    </>

  );
};

export default AppRoutes;