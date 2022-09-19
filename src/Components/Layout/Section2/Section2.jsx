import React from 'react'
import './Section2.css'
import galeria1 from '../../../assets/galeria1.png'
import galeria2 from '../../../assets/galeria2.png'
import galeria3 from '../../../assets/galeria3.png'
import galeria4 from '../../../assets/galeria4.png'
import galeria5 from '../../../assets/galeria5.png'
import galeria6 from '../../../assets/galeria6.png'
import galeria7 from '../../../assets/galeria7.png'
import galeria8 from '../../../assets/galeria8.png'

const Section2 = () => {
  return (
    <section className='section2'>
      <div className='section2-div'>
        <img src={galeria1} alt="Foto Astronauta 1" />
        <img src={galeria2} alt="Foto Astronauta 2" />
        <img src={galeria3} alt="Foto Astronauta 3" />
        <img src={galeria4} alt="Foto Astronauta 4" />
      </div>
      <div className='section2-div'>
        <img src={galeria5} alt="Foto Astronauta 5" />
        <img src={galeria6} alt="Foto Astronauta 6" />
        <img src={galeria7} alt="Foto Astronauta 7" />
        <img src={galeria8} alt="Foto Astronauta 8" />
      </div>
    </section>
  )
}

export default Section2