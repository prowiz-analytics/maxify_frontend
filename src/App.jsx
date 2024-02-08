import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import KPI from './Pages/Dash';
import Dashboards from './Pages/Dashboards';
import Dash from './Pages/Dash';
import Password from './Pages/Password';
import PasswordPageReset from './Pages/Password';

export const API = "https://dashworx-backend-2vi4s5cyva-uc.a.run.app"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/resetpassword' element={<ResetPassword/>}/>
          <Route path='/dash' element={<Dash/>}/>
          <Route path='/cwv' element={<KPI/>}/>
          <Route path='/seo' element={<KPI/>}/>
          <Route path='/marketing' element={<KPI/>}/>
          <Route path='/dashboards' element={<Dashboards/>}/>
          <Route path='/resetpassword/:token' element={<PasswordPageReset/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
