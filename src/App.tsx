
import './App.css';
import Chat from './components/Chat';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate
} from "react-router-dom";

function App() {


  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<div>Home page</div>}/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
