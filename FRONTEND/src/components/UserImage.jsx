
import Image1 from "../assets/USER_DP_IMG/1.png"
import Image2 from "../assets/USER_DP_IMG/2.png"
import Image3 from "../assets/USER_DP_IMG/3.png"
import Image4 from "../assets/USER_DP_IMG/4.png"
import Image5 from "../assets/USER_DP_IMG/5.png"
import Image6 from "../assets/USER_DP_IMG/6.png"
import Image7 from "../assets/USER_DP_IMG/7.png"
import Image8 from "../assets/USER_DP_IMG/8.png"
import Image9 from "../assets/USER_DP_IMG/9.png"
import Image10 from "../assets/USER_DP_IMG/10.png"
import Image11 from "../assets/USER_DP_IMG/11.png"
import Image12 from "../assets/USER_DP_IMG/12.png"


import axios from 'axios'
import { useState, useEffect, useContext } from "react"
import { UserDataContext } from "./UserDataContext"

function UserImage() {

    const {userData, setUserData} = useContext(UserDataContext)

    // console.log(userData)
    // const [user, setUser] = useState({})

    // async function fetchData(){
    //     try{
    //         const data = await axios.get(
    //             "http://localhost:3000/user/details",
    //             {
    //                 withCredentials: true
    //             }
    //         )
    //         setUser(data.data.wallet)
    //         // console.log(user)
    //     }
    //     catch(err){
    //         return err
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // }, []);


    function checkImage(amount) {
        if (amount < 100) return Image1;
        if (amount < 1000) return Image2;
        if (amount < 2000) return Image3;
        if (amount < 3000) return Image4;
        if (amount < 4000) return Image5;
        if (amount < 5000) return Image6;
        if (amount < 7500) return Image7;
        if (amount < 10000) return Image8;
        if (amount < 15000) return Image9;
        if (amount < 20000) return Image10;
        if (amount < 30000) return Image11;
        
        return Image12;
    }

    return (

        <img 
            className="h-100 border-4 border-green-500 rounded-2xl" 
            src={checkImage(userData.WALLET)} 
            alt="userData" />
    )
}

export default UserImage