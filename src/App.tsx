import "./App.css"
import MeuComponente from './componentes/MeuComponente'
function App() {
  let nome = "TETE"
  let snome = " TETE2@"
  return (
    <>
      <MeuComponente/>
      <h1 className="meu-nome">Olá eu sou o {nome} {snome}!</h1>
      <h1>Olá eu sou o TERE!</h1>
    </>

  ) //JSX - Javascript XML

}

export default App
