
import { Route, Routes } from 'react-router-dom';
import AboutDev from './components/AboutDev';
import AboutProject from './components/AboutProject';
import FormSignIn from './components/FormSignIn';
import FormSingUp from './components/FormSingUp';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import WelcomePage from './pages/WelcomePage';
import './style/App.css';
import { AuthProvider } from './hoc/AuthProvider';
import ToDoList from './components/ToDoList';
import { BoardProvider } from './hoc/BoardProvider';
import EditProfilePage from './pages/EditProfilePage';
import AuthCheck from './hoc/AuthCheck';
import Board from './components/Board/Board';

const App = () => {

  return (
    <BoardProvider>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<WelcomePage />} />
           {/*  <Route path="main" element={
              <AuthCheck>
                <MainPage />
              </AuthCheck>
            } /> */}
            <Route path="main" element={
              <AuthCheck>
                <Board />
              </AuthCheck>
            } />
            <Route path="main/*" element={<AuthCheck>
                <ToDoList />
              </AuthCheck>} />
            <Route path='auth/login' element={<FormSignIn />} />
            <Route path='auth/register' element={<FormSingUp />} />
            <Route path='aboutDev' element={<AboutDev />} />
            <Route path='aboutProject' element={<AboutProject />} />
            <Route path='profile' element={<EditProfilePage />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BoardProvider>
  );
};

export default App;
