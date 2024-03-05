import './styles.scss'
import { FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Rodape = () => {
  return (
    <footer className='rodape' id='contatos'>
      <ul className='info-contatos'>
        <li>
         <span className='icon'> <RiInstagramFill/></span>
          <a href="https://www.instagram.com/vivisz_01/" target='_blank' rel='noopener noreferrer'>@vivisz_01</a>
        </li>
        <li>
          <span className='icon'><MdEmail/></span>
          <a href="#" target='_blank' rel='noopener noreferrer' >victoria2024@gmail.com</a>
        </li>
        <li>
          <span className='icon'><FaPhoneAlt/></span>
          <a href="https://api.whatsapp.com/send?phone=5581985200782&text=Oii!!%20tudo%20bom?" target='_blank' rel='noopener noreferrer'>(81) 98520-00782</a>
        </li>
      </ul>
    </footer>
  )
}

export default Rodape