import React from 'react'
import './Nav.css'
import logo from '../../../assets/logo.svg'
import logo_MetaMask from '../../../assets/logo_MetaMask.svg'

const Nav = () => {
  return (
    <nav>
      <ul className='l1'>
        <a href="#">
          <li>
            <img src={logo} alt="Logo" />
          </li>
        </a>
      </ul>
      <ul className='l1'>
        <li>
          <a href="#">Comprar NFT</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>
      <ul className='l1'>
        <a href="#">
          <div className='MetaMask'>
            <img src={logo_MetaMask} alt="Logo MetaMask" />
            <p>Conectar Carteira</p>
          </div>
        </a>
        
      </ul>
    </nav>
  )
}

export default Nav