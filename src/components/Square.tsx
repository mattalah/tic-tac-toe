import React from "react";

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isDisabled: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isDisabled }) => (
  <button className={`square ${isDisabled ? "disabledSquare" : ""}`} onClick={onClick} disabled={isDisabled}>
    {value}
  </button>
);

export default Square;
