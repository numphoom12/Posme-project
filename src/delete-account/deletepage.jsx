import {React, useEffect, useState} from 'react'
import './deletepage.css'
import {Link} from 'react-router-dom' 
import { Button } from 'react-bootstrap'
import { useNavigate,Navigate } from "react-router-dom";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash,FaEye } from "react-icons/fa";
import axios from 'axios';


function Deletepage() {

  const [passwordInfo, setPasswordInfo] = useState("")
  const [eyeicon, setEyeIcon] = useState('FaEye')
  const [type, setType] = useState('password')
  const [delclick,setDelclick] = useState(0)
  const navigate = useNavigate();

  const handlesubmit = () =>{
    axios.delete("https://posme.fun:2096/auth/user",{withCredentials : true})
  }


  return (
    <div className='delete-page'>

        <img src="https://cdn.discordapp.com/attachments/1015206753857720341/1019450752713883658/trash-bin.png"
        alt = " " className = 'delete-page-photo'/>
        {/* <div className='test-delete'>
          test
        </div>     */}
        
        <div className='delete-text'>
          <i> 
            Confirm account delation?
          </i>
        </div>
        {/* <textarea className='delete-password' placeholder='password' onChange={e => setPasswordInfo(e.target.value)}>
        </textarea> */}
        {/* <input type = {type} className='delete-password' placeholder='password' onChange={e => setPasswordInfo(e.target.value)}/>
        <div className="eye-logo" onClick = {handlesubmit}>{
          {type} === 'password' ? <FaEyeSlash size = {'3em'}/> : <FaEye size = {'3em'}/>
        }</div> */}
        <Link to = '/'>
        <div className='delete-backbutt'>
          <span>
            Back  
          </span> 
        </div>
        </Link>

        <Link to = '/Login'>
        <Button onClick={handlesubmit} className='delete-deletebutt'>
            Delete
        </Button>
        </Link>
    </div>
  )
}

export default Deletepage