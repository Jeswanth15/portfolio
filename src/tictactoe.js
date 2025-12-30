import React, { useState } from "react";
import "./tictactoe.css";

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToeAI() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [difficulty, setDifficulty] = useState("easy");
  const [gameOver, setGameOver] = useState(false);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    if (board[i] || gameOver) return;

    const newBoard = [...board];
    newBoard[i] = "X";
    setBoard(newBoard);

    if (calculateWinner(newBoard) || newBoard.every(Boolean)) {
      setGameOver(true);
      return;
    }

    setTimeout(() => aiMove(newBoard), 400);
  };

  const aiMove = (currentBoard) => {
    let move;

    if (difficulty === "easy") {
      move = randomMove(currentBoard);
    } else if (difficulty === "medium") {
      move =
        Math.random() < 0.5
          ? randomMove(currentBoard)
          : minimaxMove(currentBoard);
    } else {
      move = minimaxMove(currentBoard);
    }

    currentBoard[move] = "O";
    setBoard([...currentBoard]);

    if (calculateWinner(currentBoard) || currentBoard.every(Boolean)) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameOver(false);
  };

  return (
    <div className="ttt-wrapper">
      <h3 className="ttt-title">Tic Tac Toe (AI)</h3>

      <select
        className="ttt-select"
        value={difficulty}
        onChange={(e) => resetAndSetDifficulty(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <div className="ttt-status">
        {winner
          ? `Winner: ${winner}`
          : board.every(Boolean)
          ? "Draw!"
          : "Your Turn (X)"}
      </div>

      <div className="ttt-board">
        {board.map((cell, i) => (
          <button
            key={i}
            className="ttt-cell"
            onClick={() => handleClick(i)}
          >
            {cell}
          </button>
        ))}
      </div>

      <button className="ttt-reset" onClick={resetGame}>
        Restart
      </button>
    </div>
  );

  function resetAndSetDifficulty(level) {
    resetGame();
    setDifficulty(level);
  }
}

/* ---------- AI LOGIC ---------- */

function calculateWinner(board) {
  for (let [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function randomMove(board) {
  const empty = board
    .map((v, i) => (v === null ? i : null))
    .filter((v) => v !== null);
  return empty[Math.floor(Math.random() * empty.length)];
}

function minimaxMove(board) {
  let bestScore = -Infinity;
  let move;

  board.forEach((cell, i) => {
    if (!cell) {
      board[i] = "O";
      const score = minimax(board, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  });

  return move;
}

function minimax(board, isMaximizing) {
  const winner = calculateWinner(board);
  if (winner === "O") return 1;
  if (winner === "X") return -1;
  if (board.every(Boolean)) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    board.forEach((cell, i) => {
      if (!cell) {
        board[i] = "O";
        best = Math.max(best, minimax(board, false));
        board[i] = null;
      }
    });
    return best;
  } else {
    let best = Infinity;
    board.forEach((cell, i) => {
      if (!cell) {
        board[i] = "X";
        best = Math.min(best, minimax(board, true));
        board[i] = null;
      }
    });
    return best;
  }
}
