import '../styles/presentation.css';
import avatar from '../assets/avatar.jpg'; // Ajusta la ruta según tu estructura



const Presentation = () => {
  return (
    <div className="contenido">
      <div className="presentacion">
        <div className="name-pic">
          <span className="name">Soy Fernando Barron.</span>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="extra">
        <p>- Soy Desarrollador Web Front End React.</p>
        <p>- Me encanta crear sitios web funcionales, atractivos y que resuelvan problemas.</p>
      </div>
    </div>
  )
}

export default Presentation

