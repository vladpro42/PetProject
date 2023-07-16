import React from 'react';
import { Navigate } from 'react-router-dom';
import { getTasks } from '../modules/Board/utils/fetchTask';
import { useDispatch } from 'react-redux';
import { setStateFromDataBase } from '../modules/Board/reducer/createBoardSlice';
import { useSelector } from 'react-redux';
import { getAuth } from '../modules/SignIn/api/userSlice';
import { backendUrl } from '../modules/SignIn/api/auth-api';

const AuthCheck = ({ children }) => {

    const isAuth = useSelector(getAuth)

    const dispath = useDispatch();

    if (isAuth) {
        getTasks(backendUrl + "/task")
            .then((data) => dispath(setStateFromDataBase(data)))

        //return <Navigate to={"/main"} replace={true} />
    }



    return (
        <>
            {!isAuth
                ? <Navigate to="/" replace={true} />
                : <>{children}</>
            }
        </>
    );
};

export default AuthCheck;