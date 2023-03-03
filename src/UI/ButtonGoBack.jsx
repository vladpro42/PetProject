import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonGoBack = ({to, children}) => {
    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)}>{children}</button>
  );
};

export default ButtonGoBack;