
import { useState, useEffect } from "react";
import axios from "axios";

import {createContext} from 'react'

export const UserDataContext = createContext()

function UserDataContextProvider(props) {
    
    

    const [userData, setUserData] = useState({
        USERNAME : "user",
        EMAIL : "user@gamble.win",
        WALLET : 0
    })
    

    async function fetchData(){
        try{
            const data = await axios.get(
                "http://localhost:3000/user/details",
                {
                    withCredentials: true
                }
            )
            setUserData({
                USERNAME : data.data.username,
                EMAIL : data.data.email,
                WALLET : data.data.wallet
            })
            
        }
        catch(err){
            return err
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    

    return (
        <div>
            <UserDataContext.Provider value={{userData, setUserData}}>
                {props.children}
            </UserDataContext.Provider>
            {/* {props.children} */}
            {/* <h1>Username : {userData.USERNAME}</h1>
            <h1>Email : {userData.EMAIL}</h1>
            <h1>Wallet : {userData.WALLET}</h1> */}
        </div>
    )
}


export default UserDataContextProvider