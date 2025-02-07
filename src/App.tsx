import '../src/App.css';
import Chat from '../src/Components/Chat.tsx';
import {
  Route,
  BrowserRouter as Router,
  Routes} from "react-router-dom";
import { Usercontext } from './Context/Authcontext';
import { UserType } from './types/type';
import { useState } from 'react';
import SigninPage from './Pages/SigninPage';
import Home from './Pages/Home';
import RegisterPage from './Pages/RegisterPage';
function App() {
 const [user,setUser]=useState<UserType|null>(null)

  return (
    <div >
      <Router>
      <Usercontext.Provider value={{ user, setUser }}>
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
