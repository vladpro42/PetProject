
import { Route, Routes, useNavigate } from 'react-router-dom';
import AboutDev from './modules/About/AboutDev';
import AboutProject from './modules/About/AboutProject';
import FormSignIn from './modules/SignIn/FormSignIn';
import FormSingUp from './modules/SignUp/FormSingUp';
import Layout from './components/Layout';
import WelcomePage from './pages/WelcomePage';
import './style/App.css';
import { AuthProvider } from './hoc/AuthProvider';
import EditProfilePage from './pages/EditProfilePage';
import AuthCheck from './hoc/AuthCheck';
import Board from './modules/Board/Board';
import { useEffect } from 'react';

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/main")
    }
  }, [])

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="main" element={
            <AuthCheck>
              <Board />
            </AuthCheck>
          } />
          <Route path='auth/login' element={<FormSignIn />} />
          <Route path='auth/register' element={<FormSingUp />} />
          <Route path='aboutDev' element={<AboutDev />} />
          <Route path='aboutProject' element={<AboutProject />} />
          <Route path='profile' element={<EditProfilePage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
