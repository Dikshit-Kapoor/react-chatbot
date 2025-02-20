import './App.css';
import Chat from './components/Chat';
import {
  Route,
  BrowserRouter as Router,
  Routes} from "react-router-dom";
import { Usercontext } from './context/Authcontext';
import { UserType } from './types/type';
import { useState,useMemo } from 'react';
import SigninPage from './pages/SigninPage';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';

function App() {
 const [user, setUser] = useState<UserType|null>(null);
 const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div >
      <Router>
      <Usercontext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="sign-in" element={<SigninPage/>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
        </Usercontext.Provider>
      </Router>
    </div>
  )
}

export default App
