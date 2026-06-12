
import {useEffect, useState} from "react"

import Navbar from "./Navbar"


function Ballons(){

    const [click, setClick] = useState(0)
    const [mul, setMul] = useState(0.1)

    function handleClick(){
        setMul(mul + (0.1 * click/2))
        setClick(click + 1)
        console.log(click)
    }

    useEffect(() => {
        // console.log("hello")
    }, [click])

    return (
        <>
            <Navbar/>
            <h1>Abhay this side</h1>

            <p>{click}</p>
            

            <div className="
                w-full h-[80vh]
                flex flex-col justify-center items-center">
                <div className="h-[90%]">
                    <div 
                        className='bg-red-500 rounded-full flex flex-col justify-center items-center'
                        style={{
                            width: `${click * 10}px`,
                            height: `${click * 10}px`
                        }}>
                            <p>{mul}X</p>
                    </div>
                </div>
                <button 
                    onClick={() => {handleClick()}}
                    className="text-2xl hover:scale-105 hover:cursor-pointer b-0"> 
                    Click me 
                </button>
            </div>
        </>
    )
}

export default Ballons