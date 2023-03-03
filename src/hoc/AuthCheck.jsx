import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const AuthCheck = ({ children }) => {

    const { user } = useAuth();

    return (
        <>
            {!user
                ? <Navigate to="/" replace={true} />
                : <>{ children }</>
            }
        </>
    );
};

export default AuthCheck;