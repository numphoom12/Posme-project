import './App.css';
import Navhome from './Navbar butt/Navbarhome';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Userpage from './userpage/userpage';
import Psswdpage from './passwordpage/psswdpage';
import Deletepage from './delete-account/deletepage';
import Paymentpage from './payment page/paymentpage';
import Editpage from './editpage/editpage';
import Login from './login/Login';


function App() {
  return (
    <div>
    <Navhome/>
    <BrowserRouter>
    <div className='App'>
      <Routes>
      <Route path='/' element={<Userpage/>}/> 
      <Route path='Editpage' element = {<Editpage/>}/> 
      <Route path='Psswdpage' element = {<Psswdpage/>}/>
      <Route path='Paymentpage' element = {<Paymentpage/>}/>
      <Route path='Deletepage' element = {<Deletepage/>}/>
      <Route path='Login' element = {<Login/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </div>

    
    // <div>
    // <Navhome/>
    // <div className=''>
    //   {/* <Psswdpage/> */}
    //   {/* <Paymentpage/> */}
    //   <Deletepage/>
    // </div>

    // </div>

  );
}

export default App;
