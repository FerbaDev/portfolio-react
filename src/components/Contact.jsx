import '../styles/contact.css';


const Contact = () => {
  return (
    <div className="contacto" id="contacto">
      <h2>Contacto:</h2>
      <div className='gracias'>
        <p>¡Gracias por visitar mi portfolio!</p>
        <p>Si tienes alguna pregunta o simplemente deseas conectar, no dudes en contactarme.</p>
      </div>
      <div className="contacto-items">
        
          <a href="https://wa.me/543516493703" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        
        
          <a href="mailto:fernando.barron90@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope"></i>
          </a>
        
        
          <a href="https://github.com/FerbaDev" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        
        
          <a href="https://www.linkedin.com/in/fernando-barron90/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
      </div>
    </div>
  )
}

export default Contact
