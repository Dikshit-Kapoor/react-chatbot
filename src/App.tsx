
import './App.css';
import Chat from './components/Chat';
import {
  Route,
  BrowserRouter as Router,
  Routes} from "react-router-dom";
import { Usercontext } from './context/Authcontext';
import { UserType } from './types/type';
import { useState } from 'react';
import SigninPage from './pages/SigninPage';
import Home from './pages/Home';
function App() {
 const [user,setUser]=useState<UserType|null>(null)

  return (
    <div >
      <Router>
      <Usercontext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="sign-in" element={<SigninPage/>}/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
        </Usercontext.Provider>
      </Router>
    </div>
  )
}

export default App
