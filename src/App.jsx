import Player from './components/Player.jsx'

function App() {
  

  return (
    <main>
      <header>
      <img src="game-logo.png" alt="Tic tak toe game logo"/>
      <h1>Tik-Tac-Toe</h1>
    </header>

    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 1" symbol="X" />
        <Player initialName="Player 2" symbol="0" />
        
      </ol>
       
    </div>

    </main>
  )
}

export default App
