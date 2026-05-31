import { useState } from "react";
import "./Header.css";
import userIcon from "./assets/coin-image.png";
// import reactIcon from "./assets/react.svg";


function Header() { 
    const name = "Player";
    const [walletA, setWalletA] = useState(100);
    const [walletB, setWalletB] = useState(0);

    const recharge = () => {
        alert("Recharge clicked");
        setWalletA(prev => prev + 100);
    };

    const decharge = () => {
        if (walletB < 100) {
        alert("Insufficient balance");
        return;
        }
        setWalletB(prev => prev - 100);
    };

    return (
        <header>
        <div className="header-wrapper">

            <div className="left-heading">
            <div className="text">Welcome to</div>
            <div className="maintext">
                <h1>GMABLE</h1>
            </div>
            </div>

            <div className="user-profile">
            <div className="profile-trigger">
                <span className="username" id="username">{name}</span>
                <img src={userIcon} alt="Profile" className="user-icon" />
            </div>

            <div className="profile-dropdown">
                <div className="profile-header">
                <img src={userIcon} alt="Profile" className="dropdown-icon" />
                <span id="dropdown-username">{name}</span>
                </div>

                <div className="wallet-info">
                <div className="wallet-item">
                    <span className="wallet-label">Wallet A:</span>
                    <span id="wallet-a" className="wallet-amount">{walletA}</span>
                </div>

                <div className="wallet-item">
                    <span className="wallet-label">Wallet B:</span>
                    <span id="wallet-b" className="wallet-amount">{walletB}</span>
                </div>
                </div>

                <div className="wallet-actions">
                <button className="action-btn topup-btn" onClick={recharge}>
                    Top Up
                </button>
                <button className="action-btn withdraw-btn" onClick={decharge}>
                    Withdraw
                </button>
                </div>
            </div>

            </div>
        </div>
        </header>
    );
    }

export default Header;
