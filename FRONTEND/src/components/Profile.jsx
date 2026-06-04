// import axios from 'axios'
// import {useEffect, useState} from 'react'
// import UserImage from './UserImage'

// function Profile(){

//     const [data, setData] = useState([])
//     const [user, setUser] = useState({})
//     async function fetchData(){
//         try {
//             const data = await axios.get(
//                 'http://localhost:3000/user/details',
//                 {
//                     withCredentials: true
//                 }
//             )
//             setUser(data.data)
//             // console.log(user)
//             const response = await axios.get(
//                 'http://localhost:3000/user/history',
//                 {
//                     withCredentials: true
//                 }
//             );
//             setData(response.data);
            
//         } catch (err) {
//             console.error(err);
//         }
//     }

//     useEffect(() => {
//         fetchData()
//     }, []);


//     return (<>

//         <h1> In Profile section</h1>
//         <div className="h-[80vh] flex flex-row justify-between items-center p-30">
            
//             <div className="w-fit rounded-2xl flex flex-col justify-center items-center text-2xl border-2 border-green-500 p-3 px-7 m-1">
//                 <h1 className="text-3xl m-7">Username - {user.username}</h1>
//                 <h1>Email - {user.email}</h1>
//                 <h1 className="text-5xl m-10">Balance - {user.wallet}</h1>
//             </div>

//             <div className="">
//                 <UserImage/>
//             </div>
//         </div>

//         <h1 className="text-4xl font-bold text-green-500 text-start w-full p-15">
//                 USER HISTORY
//         </h1>
            
//         <div className="h-screen flex flex-col justify-center items-center overflow-auto">
            
//             {[...data].reverse().map((item) => {
//                 return (
                    
//                         (item.amount > 0) ?
//                             (<div key={item._id}
//                                 className="w-fit rounded-2xl flex flex-row justify-center items-center text-2xl border-2 border-green-500 p-3 px-7 m-1 gap-3">
//                                 <h1> +{item.amount}</h1>
//                                 <h1> {item.type} </h1>
//                                 <h1 className="text-sm text-gray-400 text-end pt-2">{item.date}</h1>
//                             </div>) : (
//                             <div key={item._id}
//                                 className="w-fit rounded-2xl flex flex-row justify-center items-center text-2xl border-2 m-1 border-red-500 p-3 px-7 gap-3">
//                                 <h1> {item.amount}</h1>
//                                 <h1> {item.type} </h1>
                                
//                                 <h1 className="text-sm text-gray-400 text-end pt-2">{item.date}</h1>
//                             </div>
//                     )
//                 )
//             })}
//             </div>
        
//     </>)
// }


// export default Profile


import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { UserDataContext } from "./UserDataContext";

import UserImage from "./UserImage";
import Top_UP_BTN from "./BTN/Top_UP_BTN";
import Log_Out_BTN from "./BTN/Log_Out_BTN";

function Profile() {
    const {userData, setUserData} = useContext(UserDataContext)
    // console.log(userData)
    const [data, setData] = useState([]);
    // const [user, setUser] = useState(null);

    async function fetchData() {
        try {
            const res = await axios.get("http://localhost:3000/user/history", 
                {
                    withCredentials: true
                }
            )
            setData(res.data)
            // console.log(res.data)
            // const [userRes, historyRes] = await Promise.all([
            //     axios.get("http://localhost:3000/user/details", {
            //         withCredentials: true,
            //     }),
            //     axios.get("http://localhost:3000/user/history", {
            //         withCredentials: true,
            //     }),
            // ]);
            // setUser(userRes.data);
            // setData(historyRes.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [userData.WALLET]);

    if (!userData) {
        return (
            <div className="h-screen flex justify-center items-center">
                <h1 className="text-3xl text-green-500 font-bold">
                    Loading Profile...
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">

            <div className="py-10">
                <h1 className="text-center text-5xl font-bold text-green-500">
                    USER PROFILE
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-8">

                <div className="w-full max-w-xl backdrop-blur-md bg-white/5 border border-green-500 rounded-3xl p-10 shadow-[0_0_25px_rgba(34,197,94,0.25)]">

                    <h1 className="text-4xl font-bold text-green-400 mb-8">
                        {userData.USERNAME}
                    </h1>

                    <div className="space-y-5 text-xl">
                        <p>
                            <span className="text-green-400 font-semibold">
                                Email:
                            </span>{" "}
                            {userData.EMAIL}
                        </p>

                        <p>
                            <span className="text-green-400 font-semibold">
                                Wallet:
                            </span>{" "}
                            ${userData.WALLET}
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="bg-green-500/20 border border-green-500 rounded-xl p-4 flex gap-4">
                            <Top_UP_BTN/>
                            <Log_Out_BTN/>
                            {/* <h2 className="text-green-400 font-bold text-lg">
                                Current Rank
                            </h2>

                            <p className="text-gray-300 mt-2">
                                Based on your wallet progression.
                            </p> */}
                        </div>
                    </div>
                </div>

                {/* Avatar */}
                <div className="flex justify-center items-center">
                    <UserImage wallet={userData.WALLET} />
                </div>
            </div>

            {/* History Header */}
            <div className="px-10 mt-20">
                <h1 className="text-4xl font-bold text-green-500">
                    TRANSACTION HISTORY
                </h1>
            </div>

            {/* History List */}
            <div className="p-10 flex flex-col gap-4">

                {[...data].reverse().map((item) => (
                    <div
                        key={item._id}
                        className={`
                            flex justify-between items-center
                            rounded-2xl
                            p-5
                            border
                            transition-all
                            hover:scale-[1.02]
                            ${
                                item.amount > 0
                                    ? "border-green-500 bg-green-500/10"
                                    : "border-red-500 bg-red-500/10"
                            }
                        `}
                    >

                        <div className="flex items-center gap-5">

                            <div
                                className={`
                                    text-3xl font-bold
                                    ${
                                        item.amount > 0
                                            ? "text-green-400"
                                            : "text-red-400"
                                    }
                                `}
                            >
                                {item.amount > 0
                                    ? `+₹${item.amount}`
                                    : `-₹${Math.abs(item.amount)}`}
                            </div>

                            <div className="text-lg text-gray-300">
                                {item.type}
                            </div>
                        </div>

                        <div className="text-sm text-gray-400">
                            {item.date}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;