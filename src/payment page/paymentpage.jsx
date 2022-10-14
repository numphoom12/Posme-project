import axios from 'axios';
import {React,useState} from 'react'
import { Button,Form } from 'react-bootstrap';
import './paymentpage.css'
import { useEffect } from 'react';


function Paymentpage() {
  const [paynumber,setPayNumber] = useState()
  const [pdata,setPdata] = useState("")

  const handlesubmit = () => {
    const promtnum = {

      "promptpay_number": paynumber
    }
    console.log(promtnum)
    axios.put("https://posme.fun:2096/auth/edit",promtnum,{withCredentials : true})
  }


  useEffect(() => {
    axios.get("https://posme.fun:2096/auth/user",
    {withCredentials : true}).then(
      (result) => 
      {setPdata(result.data)
      console.log(result.data)
      setPayNumber(result.data.promptpay_number)
    })
  },[])

  return (
    <div className='payment-page'>
        <div className='photo-payment'>
        <img src ="https://cdn.discordapp.com/attachments/1015206753857720341/1019092854477434950/pay.png" alt = " " className='pay-logo'>
        </img>
        </div>
        <div>
          <span className="p-text">
            Promtpay Number
          </span>
        </div>
        <Form required onSubmit =  {handlesubmit}>
        <input defaultValue = {pdata.promptpay_number} className='new-number' type="tel" pattern="[0-9]{10}" placeholder = 'Ex.0812345678' onChange ={e => setPayNumber(e.target.value)}/>

        < input value="SAVE" type = 'submit' className='save-number'/>
        </Form>

    </div>
  )
}

export default Paymentpage
