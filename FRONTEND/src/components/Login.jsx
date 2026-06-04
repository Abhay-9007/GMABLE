
import {useState, useEffect} from "react"
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

// import VideoBG from "./VideoBG"
import bgVideo from "../assets/loginBG2.mp4";


function Login(){

    const navigate = useNavigate()

    const [username, setUsername] = useState("")

    function handleUsername(e){
        // console.log(e.target.value)
        setUsername(e.target.value)
    }

    const [email, setEmail] = useState("")

    function handleEmail(e){
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState("")

    function handlePassword(e){
        // console.log(e.target.value)
        setPassword(e.target.value)
    }
    const [message, setMessage] = useState("")

    async function handleSubmit(e){
        e.preventDefault()

        console.log("In the function")

        let response
        try {
            response = await axios.post(
                'http://localhost:3000/api/auth/login',
                {
                    username,
                    email,
                    password
                },
                {
                    withCredentials: true
                }
            );
            if(response.status >= 200 && response.status < 300){
                navigate('/profile');
            }

        } catch(err) {
            setMessage(
                err.response?.data?.message ||
                err.response?.data ||
                "Something went wrong..."
            );
        }
        console.log(response)
    }

    return (
        <>  
            
            <form onSubmit={(e) => {handleSubmit(e)}} className="relative h-screen w-screen flex flex-col justify-center items-center">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    >
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="relative text-center text-5xl font-bold text-green-500 mb-10">
                    <h1> LOGIN </h1>
                </div>
                <div className="relative flex flex-col justify-center items-center w-[50%]">
                    <input 
                    value={username}
                    onChange={(e) => handleUsername(e)}
                    className="input_css" 
                    type="text" placeholder="Username" />
                    <input 
                    value={email}
                    onChange={(e) => handleEmail(e)}
                    className="input_css" 
                    type="text" 
                    placeholder="Email" />
                    <input 
                    value={password}
                    onChange={(e) => handlePassword(e)}
                    className="input_css" 
                    type="password" 
                    placeholder="Password" />
                </div>
                <div className="relative flex flex-row justify-between items-center">
                    <button type="submit" className="green_btn"> Login </button>
                    <Link to='/register'>
                        <button className="green_btn"> Sign up </button>
                    </Link>
                </div>
                <div className="">
                    <p className="text-red-500"> {message} </p>
                </div>
            </form>
        </>
    )
}

export default Login