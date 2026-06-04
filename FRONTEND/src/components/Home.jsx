
import {Link} from 'react-router-dom'
import Navbar from "./Navbar"


function Home(){
    return (
        <>  
            <Navbar/>
            <div className="h-[80vh] bg-green-500 flex flex-col justify-center items-center">
                <Link to="/mines" 
                    className="w-fit h-5/10 rounded-2xl">
                    <div className="h-full rounded-2xl flex flex-col justify-center border-6 border-black
                        hover:cursor-pointer hover:text-green-500 text-black hover:bg-black
                        ">
                        <h1
                            className="text-5xl font-bold p-10"
                            >Mines
                        </h1>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Home