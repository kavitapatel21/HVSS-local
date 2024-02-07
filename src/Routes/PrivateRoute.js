import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthUser from '../components/Pages/Services/AuthUser';
const PrivateRoute = () => {
  const { token } = AuthUser();

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return token ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;