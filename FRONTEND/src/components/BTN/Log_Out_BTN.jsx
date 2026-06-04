
import axios from 'axios'

function Log_Out_BTN() {

    async function addMoney(){
        // const data = await axios.post(
        //     "http://localhost:3000/change/wallet",
        //     {
        //         amount : 100,
        //         type : "Credit"
        //     },
        //     {
        //         withCredentials: true
        //     }
        // )
        console.log("Logout BTN Clicked...")
    }


    return (
        <button 
            onClick = {() => {addMoney()}}
            className="
            hover:scale-105 hover:cursor-pointer hover:text-violet-500 
            text-2xl text-black font-black text-center
            p-2 px-4
            rounded-lg
            bg-gray-200
            "> Log Out
        </button>
    )
}

export default Log_Out_BTN