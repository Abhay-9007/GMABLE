import { useState } from "react";

function Mines() {

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

    function openCell(index) {

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

                // reveal all cells
                return newBoard.map(cell => ({
                    ...cell,
                    opened: true
                }));
            }

            return newBoard;
        });
    }

    function restartGame() {
        setBoard(createBoard(25, 5));
        setGameOver(false);
    }

    return (
        <div className="flex flex-col items-center gap-5 mt-10">

            <h1 className="text-3xl font-bold">
                {gameOver ? "💥 Game Over" : "💎 Mines"}
            </h1>

            <div className="grid grid-cols-5 gap-2">

                {board.map((cell, index) => (
                    <button
                        key={index}
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

            <button
                onClick={restartGame}
                className="border px-4 py-2 rounded-lg"
            >
                New Game
            </button>

        </div>
    );
}

export default Mines;