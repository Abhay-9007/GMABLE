
import {Link} from 'react-router-dom'
import {useState, useEffect, useContext} from "react"
import axios from 'axios'

import Top_UP_BTN from './BTN/Top_UP_BTN'
import { UserDataContext } from './UserDataContext'

function Navbar(){

    const {userData, setUserData} = useContext(UserDataContext)

    return (<>
        <div className="flex flex-row justify-between p-4">
            <h1 className="text-6xl font-bold bg-linear-to-r from-white to-green-500 bg-clip-text text-transparent">GMABLE</h1>
            
            <div className="group relative">
                <Link to="/profile">
                    <img className="mx-10 h-20 border-2 border-green-500 rounded-full hover:scale-120" 
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>
                </Link>
                <div className="
                    w-70
                    absolute right-0 mt-2
                    hidden group-hover:block
                    flex flex-col justify-center items-center
                    text-2xl text-justify
                    bg-gray-800
                    border-2 border-gray-700
                    p-3 
                    rounded-lg
                    "> 
                    <div className="text-3xl text-left w-[90%] flex flex-row">
                        <h1 className="w-[50%] text-wrap">Name -</h1> {userData.USERNAME}
                    </div>
                    <div className="text-3xl text-left w-[90%] flex flex-row">
                        <h1 className="w-[60%]">Amount -</h1> {userData.WALLET}
                    </div>

                    <Top_UP_BTN/>
                    
                </div>
            </div>
            
            
        </div>
    </>)
}

export default Navbar














// import {Link} from 'react-router-dom'
// import {useState, useEffect} from "react"
// import axios from 'axios'

// function Navbar(){

//     const [user, setUser] = useState({})

//     async function addMoney(){
//         const data = await axios.post(
//             "http://localhost:3000/change/wallet",
//             {
//                 amount : 100,
//                 type : "Credit"
//             },
//             {
//                 withCredentials: true
//             }
//         )
//         // setUser(data.data)
//         // console.log(user)

//         fetchData()
//     }

//     async function fetchData(){
//         const data = await axios.get(
//             "http://localhost:3000/user/details",
//             {
//                 withCredentials: true
//             }
//         )
//         setUser(data.data)
//         // console.log(user)
//     }

//     useEffect(() => {
//         fetchData()
//     }, []);

//     return (<>
//         <div className="flex flex-row justify-between p-4">
//             <h1 className="text-6xl font-bold bg-linear-to-r from-white to-green-500 bg-clip-text text-transparent">GMABLE</h1>
            
//             <div className="group relative">
//                 <Link to="/profile">
//                     <img className="mx-10 h-20 border-2 border-green-500 rounded-full hover:scale-120" 
//                     src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>
//                 </Link>
//                 <div className="
//                     w-70
//                     absolute right-0 mt-2
//                     hidden group-hover:block
//                     flex flex-col justify-center items-center
//                     text-2xl text-justify
//                     bg-gray-800
//                     border-2 border-gray-700
//                     p-3 
//                     rounded-lg
//                     "> 
//                     <div className="text-3xl text-left w-[90%] flex flex-row">
//                         <h1 className="w-[50%] text-wrap">Name -</h1> {user.username}
//                     </div>
//                     <div className="text-3xl text-left w-[90%] flex flex-row">
//                         <h1 className="w-[60%]">Amount -</h1> {user.wallet}
//                     </div>
//                     <button 
//                     onClick = {() => {addMoney()}}
//                     className="
//                     hover:scale-105 hover:cursor-pointer hover:text-violet-500 
//                     text-2xl text-black font-black text-center
//                     py-1 px-4 mt-2
//                     rounded-lg
//                     bg-yellow-200
//                     "> Top-up </button>
                    
//                 </div>
//             </div>
            
            
//         </div>
//     </>)
// }

// export default Navbar


