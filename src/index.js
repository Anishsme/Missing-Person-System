import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
//import Helpline from '../src/Helpline login/Helpline_login'
// import PoliceHome from './Police_Home_Page/police_home';
import PoliceLogin from './Police_login/police_login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <App />  */}
     {/* <Helpline></Helpline>  */}
    {/* <PoliceHome/> */}
    <PoliceLogin></PoliceLogin>
  </React.StrictMode>
);


