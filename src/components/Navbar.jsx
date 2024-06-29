import '../styles/navbar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#">FerbaDev</a>
      <div className="dropdown">
        <button className="dropbtn">
          Menú
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#">Sobre mí</a>
          <a href="https://github.com/FerbaDev" target="_blank" rel="noopener noreferrer">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
