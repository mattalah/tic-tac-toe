import React, { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../utils/GameUtils";
import "../styles/App.css";

const Board: React.FC = () => {
    const [player, setPlayer] = useState<string>("X");
    const [winner, setWinner] = useState<string>("None");
    const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));

    const onClick = (index: number) => {
        if (board[index] || winner !== "None") return;

        const newBoard = [...board];
        newBoard[index] = player;
        setBoard(newBoard);

        const newWinner = calculateWinner(newBoard);
        setWinner(newWinner);

        if (newWinner === "None") {
            setPlayer(player === "X" ? "O" : "X");
        }
    };

    const onReset = () => {
        setBoard(Array(9).fill(null));
        setPlayer("X");
        setWinner("None");
    };

    return (
        <div
            className="board"
            id="gameBoard"
        >
            <div className="status">
                Next player: <span>{player === "X" ? "O" : "X"}</span>
            </div>
            <div className="winner">
                Winner: <span>{winner !== "None" && winner}</span>
            </div>
            <button
                className="buttonStyle"
                onClick={onReset}
            >
                Reset
            </button>
            {Array.from({ length: 3 }, (_, row) => (
                <div
                    key={row}
                    className="boardRow"
                >
                    {Array.from({ length: 3 }, (_, col) => (
                        <Square
                            key={col}
                            value={board[row * 3 + col]}
                            onClick={() => onClick(row * 3 + col)}
                            isDisabled={winner !== "None"}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
