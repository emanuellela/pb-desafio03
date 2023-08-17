import React from 'react';
import Login from '../../views/Login/LoginForm';
import Register from '../../views/Register/RegisterForm';
import { Route, Routes } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
