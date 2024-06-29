import '../styles/banner.css';

const Banner = () => {
  return (
    <div className="bannersaludo">
      <h1>Hola mundo!</h1>
      <div className="modos">
        <i className="fa-regular fa-sun light" id="botonModoClaro"></i>
        <i className="fa-regular fa-moon dark" id="dark"></i>
      </div>
    </div>
  )
}
 export default Banner