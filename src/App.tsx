
import './App.css';
import Chat from './components/Chat';
import {
  Route,
  BrowserRouter as Router,
  Routes} from "react-router-dom";
import { Authcontext } from './context/Authcontext';
import { UserType } from './types/type';
import { useState } from 'react';
function App() {
 const [user,setUser]=useState<UserType|null>(null)

  return (
    <div >
      <Router>
      <Authcontext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<div>Home page</div>}/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
        </Authcontext.Provider>
      </Router>
    </div>
  )
}

export default App
