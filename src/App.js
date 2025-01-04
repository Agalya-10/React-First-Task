import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Registerform from './Components/Register';
import Datastorage from './Components/DataStorage';
{/* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/> */}


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/Register' element={<Registerform/>}></Route>
    <Route path='/Datastorage' element={<Datastorage/>}></Route>
    



   </Routes>
   </BrowserRouter>
  );
}

export default App;
