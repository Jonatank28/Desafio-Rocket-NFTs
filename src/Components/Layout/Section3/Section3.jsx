import React from 'react'
import './Section.css'
import banner from '../../../assets/banner.png'


const Section3 = () => {
  return (
    <section className='section3'>
      <div className='section3L'>
        <div className='section3Lla'>
          <div className='section3LA padd'>
            <h1>10K+</h1>
            <p>Artes</p>
          </div>
          <div className='section3B padd'>
            <h1>200+</h1>
            <p>Vendas</p>
          </div>
          <div className='section3LC padd'>
            <h1>20</h1>
            <p>Artistas</p>
          </div>
        </div>
      </div>
      <div className='section3D'>
        <div className='ldcima'>
          <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span className='textospan'>potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
          <p className='lorem'>Lorem ipsum</p>
          </div>
          <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span className='textospan'>potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</p>
          <p className='lorem'>Lorem ipsum</p>
          </div>
        </div>
        <div className='ldbaixo'>
          <img  src={banner} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Section3