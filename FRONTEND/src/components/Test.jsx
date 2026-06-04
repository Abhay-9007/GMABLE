
import { useContext } from "react";
import { UserDataContext } from "./UserDataContext";

function Test(){
    const {userData, setUserData} = useContext(UserDataContext)
    console.log(userData)
    return (
        <>
            <h1>Test</h1>
            <h1>USERNAME : {userData.USERNAME}</h1>
            <h1>EMAIL : {userData.EMAIL}</h1>
            <h1>WALLET : {userData.WALLET}</h1> 

            <p className = "text-9xl font-bold" >GMABLE</p>
            <p className = "text-9xl font-bold text-black [-webkit-text-stroke:2px_white]" >GMABLE</p>
            <p className = "text-9xl font-bold text-black [-webkit-text-stroke:2px_white]" >GMABLE</p>
            {/* <p className = "text-9xl font-bold" >GMABLE</p> */}
            
            
        </>
    )
}


export default Test