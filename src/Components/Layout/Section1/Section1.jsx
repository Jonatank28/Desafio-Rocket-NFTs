import React from 'react'
import './Section1.css'
import badge from '../../../assets/badge.svg'
import groupAvarts from '../../../assets/groupAvarts.png'

const Secao1 = () => {
  return (
    <section className='section1Container'>
      <div className='section1L1'>
        <div className='section1L1P'>
          <p>Mercado digital para colecionáveis em criptos e tokens não fungível (NFT). 
          Compre, venda e descubra ativos digitais exclusivos para você.</p>
        </div>
        <div  className='section1L1IMG'>
          <img src={groupAvarts} alt="Grupo de Pessoas" />
          <span>+10</span>
        <p>Artistas selecionados</p>
        </div>
      </div>
      <div className='section1L2'>
        <h1>
          Descubra a verdadeira <br /> 
          arte digital e <br />
          colecione diversas <br />
          <span>NFTs</span>
        </h1>
      </div>  
      <div className='section1L3'>
          <img src={badge} alt="Badge" />
      </div>
    </section>
  )
}

export default Secao1