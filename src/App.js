import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Common/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import NotFound from './Pages/Common/NotFound/NotFound';
import Footer from './Pages/Common/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashBoardHome from './Pages/Dashboard/DashBoardHome/DashBoardHome';
import Admin from './Pages/Dashboard/Admin/Admin';
import AddService from './Pages/Dashboard/AddServices/AddService';
import DeleteService from './Pages/Dashboard/DeleteServices/DeleteService';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}>
        
          <Route path="/dashboard" element={<DashBoardHome />}/>
          <Route path="/dashboard/Admin" element={<Admin />} />
          <Route path="/dashboard/addservice" element={<AddService/>} />
          <Route path="/dashboard/delete" element={<DeleteService/>} />
          



      </Route>
      <Route path="/dashboardg" element={<DashBoardHome/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
