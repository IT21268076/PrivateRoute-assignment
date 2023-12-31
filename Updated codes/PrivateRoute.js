import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
  const { user: authUser } = useSelector(state => state.auth);

  if (!authUser) {
    return <Navigate to="/login" state={{ from: window.location.pathname }} />;
  }

  return children;
};
