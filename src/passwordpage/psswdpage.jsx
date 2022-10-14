import axios from 'axios'
import {React,useState} from 'react'
import { Button,Form } from 'react-bootstrap'
import './psswdpage.css'
import { Snackbar, Alert } from "@mui/material"

function Psswdpage() {
  const [oldpass,setOldPass] = useState("")
  const [newpass,setNewPass] = useState("")
  const [confirmpass,setConfirmPass] = useState("")
  const [type_old, setTypeOld] = useState('password')
  const [type_new, setTypeNew] = useState('password')
  const [errorMessage, setErrorMessage] = useState(null)
  const [alertColor, setAlertColor] = useState("error")
    
  const handletoggle_oldpass = ()=>{
    if(type_old === 'password'){
      setTypeOld('text')
    }
    else{
      setTypeOld('password')
    }
  }

  const handletoggle_newpass = ()=>{
    if(type_new === 'password'){
      setTypeNew('text')
    }
    else{
      setTypeNew('password')
    }
  }

  const handlesubmit = (event) =>{
    event.preventDefault()
    const psswd = {
     "old_password" : oldpass,
     "new_password" : newpass
    }
    console.log(psswd)
  axios.put("https://posme.fun:2096/auth/password", psswd, {withCredentials: true})
  .then((response) => {
    if (response.status == 200) {
      setErrorMessage("เปลี่ยนรหัสผ่านแล้ว")
      setAlertColor("success")
    }
  })
  .catch((error) => {
    setErrorMessage("รหัสผ่านปัจจุบันไม่ถูกต้อง")
    setAlertColor("error")
  });
  }
  
  return (
    <div className='password-page'>
      <div className='lock-photo'>
      <img src = "https://cdn.discordapp.com/attachments/1015206753857720341/1019079193738358794/2932273771606062170-128.png"
      alt = " " className='lock-photo'>
      </img>
      </div>
      <Form onSubmit = {handlesubmit}>
      <span className="ps-text">Current password</span>
      <div className="old-box">
      <input className='old-password' required type = {type_old}placeholder  = "รหัสผ่านปัจจุบัน"onChange = {e=> setOldPass(e.target.value)}/>
      <div  style={{ background:"tranparent" }}className = "oldpass-bott" onClick={handletoggle_oldpass}>Show password</div>
      </div>
      <span className="ps-text">New password </span>
      <div className="new-box">
      <input className='new-password' required type = {type_new} pattern=".{8,}" placeholder = "อย่างน้อย 8 ตัวอักษร" onChange = {e=> setNewPass(e.target.value)}/>
      <div  style={{ background:"tranparent" }}className = "newpass-bott" onClick={handletoggle_newpass}>Show password</div>
      </div>

      <input type = "submit" value = "SAVE" className='save-password' />

      </Form>
      {
        errorMessage && 
        <Snackbar  open={errorMessage} onClose={() => setErrorMessage(false)} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} autoHideDuration={5000} bodyStyle={{ height: 200, width: 200, flexGrow: 0 }}>
          <Alert onClose={() => setErrorMessage(false)} severity={alertColor} sx={{ width: '100%' }}>
            <div className="errormssg">
            {errorMessage}
            </div>
          </Alert>
        </Snackbar>
      }

      

    </div>
  )
}

export default Psswdpage