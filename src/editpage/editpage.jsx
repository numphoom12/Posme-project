import { useEffect } from 'react'
import {React,useState} from 'react'
import './editpage.css'
import axios from 'axios'


function Editpage() {
  const [eusername,setEUsername] = useState("")
  const [estorename,setEStorename] = useState("")
  const [eaddress,setEAddress] = useState("")
  const [efname,setEFname] = useState("")
  const [elname,setELname] = useState("")
  const [email,setEMail] = useState("")
  const [etax,setETax] = useState("")

  useEffect (() => {
    axios.get("https://posme.fun:2096/auth/user",
      {withCredentials: true}
    ).then(
      (result) => (console.log(result))
    )
  },[])

  const handlesubmit = () => {
    const euser = {
      "username" : eusername,
      "f_name": efname,
      "l_name": elname,
      "store_name": estorename,
      "address": eaddress,
      "email": email,
      "tax_id": etax,
    }
    console.log(euser)
    axios.post("https://posme.fun:2096/auth/edit",{euser},{withCredentials: true})
  }

  return (
  <div>
    <img src = "https://cdn.discordapp.com/attachments/1015206753857720341/1019079023244099604/resume_1.png" alt = " " 
    className = "resume-page-logo"/>'
    {/* <div className='personal-info'>รายละเอียดส่วนตัว</div> */}
    {/* <div className='info'>รายละเอียดสถานประกอบการณ์</div> */}
    <div className="e-info">
    <input className="e-username" placeholder = "user name" onChange = {e => setEUsername(e.target.value)}/>
    </div>
    <div className="e-info">
    <input className='e-storename' placeholder='store name' onChange = {e => setEStorename(e.target.value)}/>
    </div>
    <div className="e-info">
    <input className='e-address' placeholder='address' onChange = {e => setEAddress(e.target.value)}/>
    </div>
    <div className="e-info" >
    <input className='e-fname' placeholder='First name' onChange = {e => setEFname(e.target.value)}/>
    </div>
    <div className="e-info">
    <input className='e-lname' placeholder='Last name' onChange = {e => setELname(e.target.value)}/>
    </div>
    <div className="e-info">
    <input className='e-mail' placeholder='Email' onChange = {e => setEMail(e.target.value)}/>
    </div>
    <input className='e-tax' placeholder='Tax Number' type = 'Number' onChange={e => setETax(e.target.value)}/>
    <div className='save-editpage' onClick={(handlesubmit)}>
      SAVE
    </div>


  </div>
  )
}

export default Editpage