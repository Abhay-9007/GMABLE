import { useEffect, useState, useContext } from "react"
import { UserDataContext } from "../UserDataContext"
import axios from 'axios'

function Top_UP_BTN() {

    const {userData, setUserData} = useContext(UserDataContext)

    async function addMoney(){
        try{
            const data = await axios.post(
                "http://localhost:3000/change/wallet",
                {
                    amount : 100,
                    type : "Credit"
                },
                {
                    withCredentials: true
                }
            )
            setUserData(prev => ({
                ...prev,
                WALLET: prev.WALLET + 100
            }));
        }
        catch(err){
            return err
        }
    }

    return (
        <button 
            onClick = {() => {addMoney()}}
            className="
            hover:scale-105 hover:cursor-pointer hover:text-violet-500 
            text-2xl text-black font-black text-center
            p-2 px-4
            rounded-lg
            bg-yellow-200
            "> Top-up
        </button>
    )
}

export default Top_UP_BTN