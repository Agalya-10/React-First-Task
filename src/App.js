import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Datastorage from './Components/DataStorage';
import Register from './Components/Register';
import Registerform from './Components/Registerform';
import City from './Components/City';
import State from './Components/State';
import Country from './Components/Country';
import LocationModal from './Components/LocationModal';
import UseContextFormExample from './Components/UseContextFormExample';
{/* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/> */}


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/Register' element={<Register/>}></Route>
    <Route path='/Datastorage' element={<Datastorage/>}></Route>
    {/* <Route path='/Registerform' element={<Registerform/>}></Route>
    <Route path='/city' element={<City/>}></Route>
    <Route path='/state' element={<State/>}></Route>
    <Route path='/Country' element={<Country/>}></Route>
    <Route path='/locationmodal' element={<LocationModal/>}></Route> */}
    <Route path='/usecontext' element={<UseContextFormExample/>}></Route>

   </Routes>
   </BrowserRouter>
  );
}

export default App;
