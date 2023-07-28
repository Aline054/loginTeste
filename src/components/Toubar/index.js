import React from 'react'
import './styles.css'
import { FaBars } from 'react-icons/fa';
import {FiSearch,FiToggleLeft } from 'react-icons/fi';
import { Form } from 'react-router-dom';


export default function Toubar(){
  return(
    <div>
      
    <FiSearch className='Fibar'/>
      <FaBars className='faBar'/>
    <FiSearch className='Fibar'/>
     <input placeholder='Search' className='input'/>
     <a className='li'>Light</a>
     <FiToggleLeft className='fi'/>
     <a className='a'>Dark</a>

     <h2 className='user'>Usuários</h2>
        <a className='nome'>Nome</a>
        <input  className='input1' placeholder='---'/>

        <a className='cpf'>CPF</a>
        <input  className='inputCPF' placeholder='---'/>

        <a className='emailTou'>Email</a>
        <input  className='inputEmail' placeholder='---'/>

        <a className='cll'>Telefone/Celular</a>
        <input  className='inputCll' placeholder='---'/>

        <a className='login1'>Login</a>
        <input  className='inputlogin' placeholder='---'/>

        <a className='cdt'>Data de Cadastro</a>
        <input  className='inputCdt' placeholder='---'/>

        <a className='perfil'>Perfil de acesso</a>
        <input  className='inputPerfil' placeholder='---'/>

        <h2 className='h2'>Função</h2>
        <p className='funcao'> Jurídica</p>
        <p className='funcao1'> Gerente</p>
        <p className='funcao2'> Comprador</p>
        <p className='funcao3'>Análista</p>
   
   <a className='parceiro'>Parceiro</a>
   <input placeholder='--' className='parce'/>

      <p className='redefinicao'>REDEFINIÇÃO DE SENHA</p>   

      <a className='CRSenha'>Senha</a>
      <input className='crSenha' />
      <a className='CRenha'> Confirmar Senha</a>
      <input className='crsenha' />

      <button className='butnCancelar'>Cancelar Voltar</button>
      <button className='btnSalvar'>Salvar</button>
    </div>
 
  )
}