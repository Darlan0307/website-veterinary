import './styles.scss'
import imgHeader from '../../../assets/img-header.png'
import { FaPhoneAlt } from "react-icons/fa";

const HeaderBottom = () => {
  return (
    <section className='header-bottom'>
      <div className='container-info'>
        <h2>Victoría Justino</h2>
        <p>Sua Veterinária de Confiança em Jaboatão dos Guararapes</p>
        <a href='#' className='link-insta'>Fale Comigo</a>
        <a href='#' className='link-phone'><FaPhoneAlt/> <span>(81) 91234-4567</span></a>
      </div>
      <img className='perfil' src={imgHeader} alt="imagem de perfil" />
    </section>
  )
}

export default HeaderBottom