import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import { useState } from 'react'
import { WINNING_COMBINATIONS } from './winning_combinations.js'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';

      if(gameTurns.length > 0 && gameTurns[0].player == 'X'){
        currentPlayer = 'O';
      }

  return currentPlayer;
}

function App() {
  const [gameTurn, setGameTurn] =useState([]);
  // const [activePlayer, setActivePlayer] =useState('X');
  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = initialGameBoard;

  for( const turn of gameTurn){

      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player
  }

  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer((curentPlayer) => curentPlayer === 'X' ? 'O' : 'X');

    setGameTurn((prevTurn)=>{
      let currentPlayer = deriveActivePlayer(prevTurn);

      const updatedTurn = [
        {square : {row : rowIndex, col : colIndex}, player: currentPlayer},
        ...prevTurn
      ];

      return updatedTurn;
    });
  }

  return (
    <main>
      <header>
      <img src="game-logo.png" alt="Tic tak toe game logo"/>
      <h1>Tik-Tac-Toe</h1>
    </header>

    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
        <Player initialName="Player 2" symbol="0" isActive={activePlayer === 'O'}/>
        
      </ol>
       <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
    </div>
    <Log turns={gameTurn}/>
    </main>
  )
}

export default App
