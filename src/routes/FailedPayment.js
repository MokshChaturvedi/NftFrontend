import React from 'react'
import PaymentCancel from "../components/collectionPage/paymentPage/PaymentCancel";
import axios from 'axios'
const baseURL = "http://localhost:8000/item/update-payment-status";

const FailedPayment = () => {

  React.useEffect(() => {
    
    const url = window.location.href.split('=');
    const id = url[1];
    console.log('IDDDDDI',id)

    axios.post(baseURL ,{payment_id : id}).then((response) => {
      console.log("get data reponse",response.data);
    
    }).catch((err)=>{
      console.log('ERROR',err)
    })

  }, []);

  return (
    <>
   <PaymentCancel></PaymentCancel>
    </>
 
  )
}


export default FailedPayment