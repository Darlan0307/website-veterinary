import './styles.scss'
import { FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Rodape = () => {
  return (
    <footer className='rodape'>
      <ul className='info-contatos'>
        <li>
         <span className='icon'> <FaClock/></span>
          <p>Segunda - Sexta : 8:30 - 19:30 <br /> Sabado : 9:00 - 17:00</p>
        </li>
        <li>
          <span className='icon'><MdEmail/></span>
          <p>victoria2024@gmail.com</p>
        </li>
        <li>
          <span className='icon'><FaPhoneAlt/></span>
          <p>(81) 91234-1234</p>
        </li>
      </ul>
    </footer>
  )
}

export default Rodape