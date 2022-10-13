import axios from 'axios'
import {React,useState} from 'react'
import './psswdpage.css'

function Psswdpage() {
  const [oldpass,setOldPass] = useState("")
  const [newpass,setNewPass] = useState("")
  const [confirmpass,setConfirmPass] = useState("")
  const [type, setType] = useState('password')

  const handletoggle = ()=>{
    if(type === 'password'){
      setType('text')
    }
    else{}
  }

  const handlesubmit = () =>{
    const psswd = {
     "password" : newpass
    }
    console.log(psswd)
    axios.post("https://posme.fun:2096/auth/login",psswd)
  }



  return (
    <div className='password-page'>
      <div className='lock-photo'>
      <img src = "https://cdn.discordapp.com/attachments/1015206753857720341/1019079193738358794/2932273771606062170-128.png"
      alt = " " className='lock-photo'>
      </img>
      </div>
      <textarea className='old-password' placeholder  = "old password"onChange = {e=> setOldPass(e.target.value)}>
      </textarea>
      <textarea className='new-password' placeholder = "new password "onChange = {e=> setNewPass(e.target.value)}>
      
      </textarea>
      <textarea className='confirm-password' placeholder = "confirm password" onChange = {e=> setConfirmPass(e.target.value)}>
      </textarea>

      <div className='save-password' onClick = {handlesubmit}>
      save
      </div>

    </div>
  )
}

export default Psswdpage