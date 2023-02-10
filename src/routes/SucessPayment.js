import axios from 'axios'
import React, { useState, useEffect } from "react";
import { createPaymentSucessApi } from '../redux/collectionSlice'
import { connect } from 'react-redux';
import PaymentSucess from "../components/collectionPage/paymentPage/PaymentSucess";
import BACKEND_URL from "../constants/constants";

const baseURL = "http://localhost:8000/item/update-payment-status";


const SucessPayment = ({
  onSucessPayment,


}) => {

  React.useEffect(() => {

    const url = window.location.href.split('=');
    const id = parseInt(url[1]);
    console.log('IDDDDDI', id)
    axios.post(baseURL, { payment_id: id }).then((response) => {
      console.log("get data reponse", response.data);

    }).catch((err) => {
      console.log('ERROR', err)
    })

  }, []);



  React.useEffect(() => {
    onSucessPayment()
  }, []);


  return (
    <>
      <PaymentSucess></PaymentSucess>
    </>


  )
}

const mapStateToProps = (state) => {
 
  return {
    onSucessPayment: state.collection.createPaymentSucessStatus
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSucessPayment: (payload) => dispatch(createPaymentSucessApi(payload)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SucessPayment)
// export default SucessPayment;