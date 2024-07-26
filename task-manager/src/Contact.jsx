import React from 'react'

function Contact() {
  const link = () => {
    window.location.href = 'https://juan-agustin-avalos.netlify.app/';
  };
  return (
    <>
        <div className='location'>Contact</div>
        <p className='desc'>Puedes contactarte conmigo de diversas formas:</p>
        <section className='card-section'>
          <div className='card-content'>
            <h1>Portfolio</h1>
            <button onClick={link}>Visitar Portfolio</button>
          </div>
          <div className='card-content'>
            <h1>Redes Sociales</h1>
            <div>
            <a href="https://github.com/JohnCoffeeXL"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/juan-agustin-avalos/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/j.avalos15/"><i className="fa-brands fa-instagram"></i></a>
            </div>
            <p>Clickea los iconos para encontrarme en mis redes</p>
          </div>
        </section>
    </>
  )
}

export default Contact