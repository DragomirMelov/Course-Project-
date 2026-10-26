import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router';
import { UserContext } from '../../Context/userContext';

const RouteGuards = () => {
  const { auth } = useContext(UserContext);
  const location = useLocation();

  if (!auth?.access_token) {
    return <Navigate to="/contact" state={{ from: location }} replace />;
  }

  return <Outlet/>;
};




export default RouteGuards