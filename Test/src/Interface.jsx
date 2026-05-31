// import "./Interface.css";
// import minesIcon from "./assets/mines_logo.jpeg";
// import plinkoIcon from "./assets/plinko_logo.jpeg";
// import aviatorIcon from "./assets/aviator_logo.png";
// import carIcon from "./assets/car-racing_logo.avif";
// import horseIcon from "./assets/horse-racing_logo.webp";

// function Interface(){
//     return (
//         <>
//         <div className="main-wrapper">
//             <div className="container-wrapper">
//                 <div className="container" id="slotRow">
//                     <div className="item" data-desc="This is a Mines Betting Game" onclick="location.href='mines.html'">
//                     <img src={minesIcon} alt="Mines Game" />
//                     </div>

//                     <div className="item" data-desc="This is a Plinko Game" onclick="location.href='plinko.html'">
//                     <img src={plinkoIcon} alt="Plinko Game" />
//                     </div>

//                     <div className="item center" data-desc="This is an Aviator Game" onclick="location.href='aviator.html'">
//                     <img src={aviatorIcon} alt="Aviator Game" />
//                     </div>

//                     <div className="item" data-desc="This is a Car Racing Game" onclick="location.href='car-racing.html'">
//                     <img src={carIcon} alt="Car Racing Game" />
//                     </div>

//                     <div className="item" data-desc="This is a Horse Racing Game" onclick="location.href='horse-racing.html'">
//                     <img src={horseIcon} alt="Horse Racing Game" />
//                     </div>
//                 </div>
//             </div>

//             <div className="buttons">
//                 <button onclick="shuffleAnimated()">Shuffle</button>
//                 <button onclick="playCenteredGame()">Play</button>
//             </div>

//             <div className="description" id="descriptionBox"></div>
//         </div>
//         </>
//     )
// }

// export default Interface



import { useEffect, useRef } from "react";
import "./Interface.css";

import minesIcon from "./assets/mines_logo.jpeg";
import plinkoIcon from "./assets/plinko_logo.jpeg";
import aviatorIcon from "./assets/aviator_logo.png";
import carIcon from "./assets/car-racing_logo.avif";
import horseIcon from "./assets/horse-racing_logo.webp";

function Interface() {
const containerRef = useRef(null);
const descriptionRef = useRef(null);
const isShuffling = useRef(false);

const getResponsiveMargins = () => {
    const width = window.innerWidth;
    if (width < 480) return { normal: "0 8px", center: "0 15px" };
    if (width < 768) return { normal: "0 12px", center: "0 25px" };
    if (width < 1024) return { normal: "0 15px", center: "0 50px" };
    return { normal: "0 20px", center: "0 40px" };
};

const updateCenter = () => {
    const container = containerRef.current;
    const items = Array.from(container.children);
    const margins = getResponsiveMargins();

    items.forEach((item, index) => {
    item.classList.remove("center");
    item.style.margin = margins.normal;
    item.style.zIndex = "0";

    if (index === 2) {
        item.classList.add("center");
        item.style.margin = margins.center;
        item.style.zIndex = "2";
        descriptionRef.current.textContent =
        item.getAttribute("data-desc");
    }
    });
};

const rotateOnce = () => {
    const container = containerRef.current;
    const first = container.children[0];
    container.appendChild(first);
    updateCenter();
};

const rotateBackwardOnce = () => {
    const container = containerRef.current;
    const items = container.children;
    container.insertBefore(items[items.length - 1], items[0]);
    updateCenter();
};

const shuffleAnimated = () => {
    if (isShuffling.current) return;
    isShuffling.current = true;

    const width = window.innerWidth;
    const baseRotations = width < 480 ? 15 : 25;
    const totalRotations =
    Math.floor(Math.random() * 10) + baseRotations;

    let count = 0;
    let delay = 50;

    const spinStep = () => {
    rotateOnce();
    count++;

    if (count >= totalRotations) {
        isShuffling.current = false;
        return;
    }

    delay = 50 + Math.pow(count, width < 480 ? 1.2 : 1.4);
    setTimeout(spinStep, delay);
    };

    spinStep();
};

const playCenteredGame = () => {
    const centered = containerRef.current.querySelector(".item.center");
    const walletA = parseFloat(localStorage.getItem("WalletA") || "0");

    if (walletA <= 0) {
    alert("Please recharge your wallet to play");
    return;
    }

    centered?.click();
};

useEffect(() => {
    updateCenter();
    window.addEventListener("resize", updateCenter);
    return () => window.removeEventListener("resize", updateCenter);
}, []);

return (
    <div className="main-wrapper">
    <div className="container-wrapper">
        <div className="container" ref={containerRef}>
        <div className="item" data-desc="This is a Mines Betting Game">
            <img src={minesIcon} />
        </div>

        <div className="item" data-desc="This is a Plinko Game">
            <img src={plinkoIcon} />
        </div>

        <div className="item center" data-desc="This is an Aviator Game">
            <img src={aviatorIcon} />
        </div>

        <div className="item" data-desc="This is a Car Racing Game">
            <img src={carIcon} />
        </div>

        <div className="item" data-desc="This is a Horse Racing Game">
            <img src={horseIcon} />
        </div>
        </div>
    </div>

    <div className="buttons">
        <button onClick={shuffleAnimated}>Shuffle</button>
        <button onClick={playCenteredGame}>Play</button>
    </div>

    <div className="description" ref={descriptionRef}></div>
    </div>
);
}

export default Interface;
