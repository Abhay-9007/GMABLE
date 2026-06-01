

function Navbar(props){
    return (<>
        <div className="flex flex-row justify-between p-4">
            <h1 className="text-6xl font-bold bg-linear-to-r from-white to-green-500 bg-clip-text text-transparent">GMABLE</h1>
            <div className="group relative">
                <img className="mx-10 h-20 border-2 border-green-500 rounded-full hover:scale-120" 
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>

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
                        <h1 className="w-[50%] text-wrap">Name -</h1> {props.name}
                    </div>
                    <div className="text-3xl text-left w-[90%] flex flex-row">
                        <h1 className="w-[60%]">Amount -</h1> {props.amount}
                    </div>
                    <h1 className="
                    hover:scale-105 hover:cursor-pointer hover:text-violet-500 
                    text-2xl text-black font-black text-center
                    py-1 px-4 mt-2
                    rounded-lg
                    bg-yellow-200
                    "> Top-up </h1>
                    
                </div>
            </div>
            
        </div>
    </>)
}

export default Navbar