import './app.css'
import Board from './components/Board'
import Titulo from './components/Titulo'

function App() {

  return (
    <>
      
      <section className='ui'>
        <Titulo/>
        <div className='jogo'>
          <Board />
        </div>
      </section>
    </>
  )
}

export default App