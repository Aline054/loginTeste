import React from "react";
import './styles.compontes.css'
import { Link } from "react-router-dom";


export default function Home (){
  return(
    <div> 
      <main className="container"> 
      <h1 className='login'>Login</h1>
      <p className="pEmail">Email:</p>
      <input placeholder="Digite seu email" className="emailInput"/>
     
      <p className="pSenha">Senha:</p>
      <input placeholder="Digite seu email" className="senha"/>
      <Link className="link">Esqueci minha senha</Link>
      <Link to={`/Dashboard`}>
      <button className="button">
        Entrar
      </button>
      
      </Link>
      </main>
    </div>
  )
}