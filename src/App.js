
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEvent from './components/AddEvent/AddEvent';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App app-container">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/events' element={<AddEvent></AddEvent>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}>Register</Route>
      </Routes>
    </div>
  );
}

export default App;
