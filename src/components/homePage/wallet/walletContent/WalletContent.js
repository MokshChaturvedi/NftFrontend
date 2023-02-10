import React, { useEffect, useState } from 'react'
import axios from 'axios';

const WalletContent = (props) => {
    const [data, setData] = useState();
    const [wallet, setWallet] = useState([]);
    let [balance, setbalance] = useState([]);

    let len = wallet.length;
    let num = 0;
    let getBalance = async () => {

        while (num <= len) {

            console.log("num", num);
            console.log("len", len);
            let addressObj = { "wallet_name": wallet[num].wallet_name };

            const headers = {
                'Content-Type': 'application/json'
            }
            try {
                console.log("Hii22", addressObj);

                await axios.post('http://localhost:5000/cardano-nft/mainnet/get-balance', addressObj, { headers: headers }).then((res) => {
                    if (res.data.status) {
                        console.log("res.data", res.data)
                        setbalance(balance => [...balance, res.data.message == null ? 0 : res.data.message])
                        wallet[num]['balance'] = res.data.message == null ? 0 : res.data.message;
                        console.log("States", balance)
                        num++;
                    } else {
                        wallet[num]['balance'] = "loading";
                    }
                })
            } catch (error) {
                console.log(error);
            }
            console.log(balance)
        }

    }




    useEffect(() => {
        setWallet(props.data);
        console.log("Aman");
        getBalance();
    }, [props.data])
    // setWallet(props.data)
    return (
        <table class="table text-white">
            <thead>
                <tr className='text-center'>
                    <th scope="col">Sno.</th>
                    <th scope="col">Wallet Name</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                {wallet?.map((elemt, ind, arr) => {

                    return (
                        <>
                            <tr>
                                <th scope="row">{ind + 1}</th>
                                <td>{elemt.wallet_name}</td>
                                {/* <td><img src="img/priceicon.svg"/>balance</td> */}
                                {balance.length > 0 ? (
                                    balance[ind] == undefined ? (<div key={ind} className='text-center'>
                                        <div class="spinner-border" role="status">
                                        </div>
                                    </div>) : (<td>{`${balance[ind]} ADA`}</td>)

                                ) : (
                                    <>
                                        <td>{`Loading...`}</td>
                                    </>
                                )}

                                <td>{elemt.response.paymentAddr}</td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </table>


    )
}

export default WalletContent