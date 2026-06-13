
import {useEffect, useState} from "react"

import Navbar from "./Navbar"


function Ballons(){

    const [click, setClick] = useState(10)
    const [mul, setMul] = useState(0.1)
    const [message, setMessage] = useState("")
    const [col, setCol] = useState("")      

    function handleClick(){
        let temp = mul + (0.1 * (click-7)/2)    // set Bias here...
        temp = Math.round(temp * 100) / 100;
        setMul(temp)    
        setClick(click + 1)
        console.log(click)
    }

    function handleReset(){
        const rand = Math.random() * 100
        // console.log(rand)
        if (click > rand) {
            setClick(10)
            setMul(0.1)
            setMessage("You Lose at multiplier " + mul)
        }
    }


    function handleCashOut(){
        setMessage("You Won " + (100 * mul))
        setClick(10)
        setMul(0.1)
    } 

    useEffect(() => {
        handleReset()
        // console.log("hello")
    }, [click])

    return (
        <>
            <Navbar/>
            <h1>Abhay this side</h1>

            <p>{click}</p>
            <p>{message}</p>
            

            <div className="
                w-full h-[70vh]
                flex flex-col justify-center items-center">
                <div className="h-[90%] flex flex-col justify-center items-center">
                    <div onClick={() => {handleClick()}}
                        className=' rounded-full flex flex-col justify-center items-center'
                        style={{
                            // backgroundColor: "#"+"00"+col+"00",
                            backgroundColor:`hsl(${click * 10}, 100%, 60%)`,
                            width: `${click * 10}px`,
                            height: `${click * 10}px`
                        }}>
                            <p className="text-2xl font-bold text-black">{mul}X</p>
                    </div>
                </div>
                {/* <button 
                    onClick={() => {handleClick()}}
                    className="text-2xl hover:scale-105 hover:cursor-pointer b-0"> 
                    Click me 
                </button> */}
                <button 
                    onClick={() => {handleCashOut()}}
                    className="text-2xl hover:scale-105 hover:cursor-pointer b-0"> 
                    Cash Out
                </button>
            </div>
        </>
    )
}

export default Ballons


// this file is not ready, and i hav eto make it on my own....
