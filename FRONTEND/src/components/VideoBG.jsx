
import bgVideo from "../assets/loginBG.mp4";

function VideoBG() {
    return (
        <div className="relative h-screen overflow-hidden">
            <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-10"
            >
            <source src={bgVideo} type="video/mp4" />
            </video>

            <h1 className="relative text-white text-5xl">
            Hello World
            </h1>
        </div>

    )}


export default VideoBG