import { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar"
import axios from "axios";

import { UserDataContext } from "./UserDataContext"

function Mines() {

    const {userData, setUserData} = useContext(UserDataContext)
    const [profit, setProfit] = useState(0);
    const [mul, setMul] = useState(1);

    function createBoard(totalCells, mineCount) {
        const board = Array(totalCells).fill().map(() => ({
            mine: false,
            opened: false
        }));

        let minesPlaced = 0;

        while (minesPlaced < mineCount) {
            const randomIndex = Math.floor(Math.random() * totalCells);

            if (!board[randomIndex].mine) {
                board[randomIndex].mine = true;
                minesPlaced++;
            }
        }

        return board;
    }

    const [board, setBoard] = useState(() =>
        createBoard(25, 5)
    );

    const [gameOver, setGameOver] = useState(false);
    const [deduct100, setDeduct100] = useState(true);

    function openCell(index) {
        setCanCashOut(true)
        if (deduct100) {
            alterMoney(-100)
            setDeduct100(false)
        }
        if (gameOver) return;

        setBoard(prev => {
            const newBoard = [...prev];

            if (newBoard[index].opened) return prev;

            newBoard[index] = {
                ...newBoard[index],
                opened: true
            };

            if (newBoard[index].mine) {
                setGameOver(true);
                setCanCashOut(false)
                // reveal all cells
                return newBoard.map(cell => ({
                    ...cell,
                    opened: true
                }
            ));
            }
            setProfit(prev => prev + (10 * mul));
            setMul(prev => prev + 0.5);
            return newBoard;
        });
    }

    async function fetchUserDetail(){
        try{
            const data = await axios.get(
                "http://localhost:3000/user/details",
                {
                    withCredentials: true
                }
            )
            setCanPlay(data.data.wallet >= 100);
        }catch(err){
            console.log(err)
        }
        
    }
    
    async function alterMoney(amount){
        // if(amount === 0) return
        try{
            const data = await axios.post(
                "http://localhost:3000/change/wallet",
                {
                    amount : amount,
                    type : "Mines"
                },
                {
                    withCredentials: true
                }
            )
            return data
        }
        catch(err){
            console.log(err)
        }
    }

    const [canPlay, setCanPlay] = useState(true)
    

    function restartGame() {
        // checkIsPlayable()
        setDeduct100(true)
        setBoard(createBoard(25, 5));
        setProfit(0);
        setMul(1);
        setWinMessage("");
        setGameOver(false);
    }

    const [winMessage, setWinMessage] = useState("");
    const [canCashOut, setCanCashOut] = useState(false);
    

    async function cashOut(){
        setWinMessage("You won " + profit + " coins")
        alterMoney(profit)
        setCanCashOut(false)
        restartGame()
    }

    useEffect(() => {
        fetchUserDetail();
    }, [createBoard, userData]);

    return (
        <>
        <Navbar/>
        
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-green-500">
            <h1 className="text-7xl font-bold">
                {winMessage}
            </h1>
        </div>

        <div className="flex flex-col items-center gap-5 mt-10">

            <h1 className="text-3xl font-bold">
                {gameOver ? "💥 Game Over" : "💎 Mines"}
            </h1>

            <div className="grid grid-cols-5 gap-2">

                {board.map((cell, index) => (
                    <button
                        key={index}
                        disabled = {userData.WALLET < 100}
                        onClick={() => openCell(index)}
                        className="
                            h-20
                            w-20
                            border
                            rounded-lg
                            text-3xl
                            cursor-pointer
                        "
                    >
                        {!cell.opened
                            ? ""
                            : cell.mine
                            ? "💣"
                            : "💎"}
                        
                    </button>
                ))}

            </div>
            <div className="flex justify-center gap-10">
                <button
                    disabled = {!canCashOut}
                    onClick={cashOut}
                    className="disabled:cursor-not-allowed border px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600">
                    Cash-Out
                </button>

                <button
                    disabled = {userData.WALLET < 100}
                    onClick={restartGame}
                    className="disabled:cursor-not-allowed border px-4 py-2 rounded-lg"
                >
                    New Game
            </button>
            </div>

            <p>
                Profit: {profit}
            </p>

        </div>
        </>
    );
}

export default Mines;