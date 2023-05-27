import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Addmovie from './Components/Addmovie';
import {BrowserRouter , Routes,Route}  from 'react-router-dom'
import Moviedetails from './Components/Moviedetails';
import Searchpage from './Components/Searchpage';


function App() {

   
  return (
 <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Addmovie/>}/>
      <Route path="/moviedetails/:id" element={<Moviedetails/>} />
      <Route path="/search/:searchword/:searchword" element={<Searchpage/>}/>
    </Routes>
   
  
  
  </div>
 </BrowserRouter>
   
  );
}

export default App;
