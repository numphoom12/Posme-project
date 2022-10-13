import axios from 'axios';
import {React,useState} from 'react'
import { Button } from 'react-bootstrap';
import './paymentpage.css'


function Paymentpage() {
  const [paynumber,setPayNumber] = useState();
  const handlesubmit = () => {
    const promtnum = {
      "promptpay_number": paynumber
    }
    console.log(promtnum)
    axios.post("https://posme.fun:2096/auth/edit",promtnum)
  }

  return (
    <div className='payment-page'>
        <div className='photo-payment'>
        <img src ="https://cdn.discordapp.com/attachments/1015206753857720341/1019092854477434950/pay.png" alt = " " className='pay-logo'>
        </img>
        </div>

        <input className='new-number' type="number" placeholder = 'New Promtpay Number' onChange ={e => setPayNumber(e.target.value)}/>

        <Button onClick = {handlesubmit} className='save-number'>
            SAVE
        </Button>

    </div>
  )
}

export default Paymentpage
