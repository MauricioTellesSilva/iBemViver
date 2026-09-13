import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <div className="hero">
        <img src="https://a.favicon.im/institutobemviver.org.br" alt="institutobemviver.org.br favicon" loading="lazy" />
      </div>
      <div>
        <h1>Instituto Bem viver</h1>
      </div>
      </header>
      <div>
            <nav id="navbar">
              <p id="opcoes">Nome</p>
              <p id="opcoes">Local de Nascimento</p>
              <p id="opcoes">Data de Nascimento</p>
              <p id="opcoes">Email</p>
            </nav>
            <nav id="cadastro">
              <input type="text" placeholder="Digite o nome:" />
              <input type="text" placeholder="Digite o local de nascimento:" />
              <input type="text" placeholder="Digite a data de nascimento:" />
              <input type="text" placeholder="Digite o email:" />
            </nav>
            <nav id="navbar">
              <p id="opcoes">Telefone</p>
              <p id="opcoes">Endereço</p>
              <p id="opcoes">Cidade</p>
              <p id="opcoes">Estado</p>
            </nav>
             <nav id="cadastro">
              <input type="text" placeholder="Digite o telefone:" />
              <input type="text" placeholder="Digite o endereço:" />
              <input type="text" placeholder="Digite a cidade:" />
              <input type="text" placeholder="Digite o estado:" />
            </nav>
            <button className="button">
              Salvar{() => Cadastro()}
            </button>
              <button className="button">
              Cancelar{() => Cadastro()}
            </button>
            
             
      </div>
      </>
  )
}

function Cadastro() {
      <div>
        <h2>Cadastro</h2>
      </div>

  }


export default App
