import React from 'react'
import Edit from '../edit butt/Edit'
import Psswd from '../password butt/Psswd'
import Payment from '../ payment butt/Payment'
import Deleteacc from '../deleteacc/Deleteacc'
import {Link} from 'react-router-dom' 




function userpage() {
  return (
    <div background> 
        <Link to="/Editpage">
        <Edit/>
        </Link>
        <Link to="/Psswdpage">
        <Psswd/>
        </Link>
        <Link to="/Paymentpage">
        <Payment/>
        </Link>
        <Link to="/Deletepage">
        <Deleteacc/>
        </Link>
    </div>
  )
}

export default userpage
