import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Registerform from './Components/Register';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/Register' element={<Registerform/>}></Route>


   </Routes>
   </BrowserRouter>
  );
}

export default App;
