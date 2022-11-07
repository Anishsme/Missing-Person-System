import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import App from './App';
import Helpline from '../src/Helpline login/Helpline_login'
import PoliceHome from './Police_Home_Page/police_home';
import PoliceLogin from './Police_login/police_login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
  <Router>
   
    <Routes>
      <Route path='/' element={ <App /> }></Route>
       
      
      <Route path='/policeLogin' element={<PoliceLogin/>}>
          
      </Route>
      <Route path='/helpline' element={<Helpline/>}>
          
      </Route>
      <Route path='/policeHome' element={<PoliceHome/>}>
      
      </Route>
    </Routes>
    
  </Router>
   
  </div>

  
);


