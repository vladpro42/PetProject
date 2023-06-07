import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useFetchData } from '../utils/fetchTask';
import { getTasks } from '../utils/fetchTask';
import { useDispatch } from 'react-redux';
import { setStateFromDataBase } from '../modules/Board/components/reducer/createBoardSlice';

const AuthCheck = ({ children }) => {

    const { user } = useAuth();

    const dispath = useDispatch();

    if (user) {
        getTasks("http://localhost:3001/api/task")
            .then((data) => dispath(setStateFromDataBase(data)))
    }

    return (
        <>
            {!user
                ? <Navigate to="/" replace={true} />
                : <>{children}</>
            }
        </>
    );
};

export default AuthCheck;