import logo from './logo.svg';
import './App.css';
import Chatbox from './components/Chatbox';
import User from './components/User';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContextProvider';
import Navbar from './components/Navbar';

function App() {
    const {Auth} = useContext(AuthContext)
  return (
    <div className="App">
      <Navbar/>
     {Auth?<Chatbox/>:
     <User/>}
    </div>
  );
}

export default App;
