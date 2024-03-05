import './styles.scss'
import imgHeader from '../../../assets/img-header.png'
import { FaPhoneAlt } from "react-icons/fa";

const HeaderBottom = () => {
  return (
    <section className='header-bottom'>
      <div className='container-info'>
        <h2>Victoría Justino</h2>
        <p>Sua Veterinária de Confiança em Jaboatão dos Guararapes</p>
        <a href='https://www.instagram.com/vivisz_01/' target='_blank' className='link-insta' rel='noopener noreferrer'>Fale Comigo</a>
        <a href='https://api.whatsapp.com/send?phone=5581985200782&text=Oii!!%20tudo%20bom?' target='_blank' className='link-phone' rel='noopener noreferrer'><FaPhoneAlt/> <span>(81) 98520-00782</span></a>
      </div>
      <img className='perfil' src={imgHeader} alt="imagem de perfil" />
    </section>
  )
}

export default HeaderBottom