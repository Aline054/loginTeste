import React, { useState } from 'react'
import {FiSettings,FiSearch,FiBarChart } from 'react-icons/fi';
import { FaHammer, FaBars } from 'react-icons/fa';
import {BiCalendar,BiChat} from 'react-icons/bi'
import {CiFaceMeh} from 'react-icons/ci'
import './SideMenu.css';


export default function Menu(){

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return(
   
     <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <FaBars/>
       
      </div>
      <ul>
      <FiSettings className='settings'/> 
        <li> Painel de Controle</li>
        <FaHammer className='mart'/>
        <li>Licitação</li>
        <BiCalendar className='mart'/>
        <li>Agendar</li>
        <FiSearch className='mart'/>
        <li>Consultar</li>
        <FiBarChart className='mart'/>
        <li>Relatório</li>
        <CiFaceMeh className='mart'/>
        <li>Dhasboard</li>
        <BiChat className='mart'/>
        <li>Monitoriamento</li>
        <li className='sair'>Sair</li>
      </ul>
     
    </div>
  
  )
}