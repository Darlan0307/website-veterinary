import './styles.scss'
import logoImage from '../../../assets/logo.png'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const HeaderTop = () => {

  const [isMobile,setIsMobile] = useState(false)
  const [showMenu,setShowMenu] = useState(false)

  useEffect(()=>{
    function handleResize(){
      if(window.innerWidth < 601){
          setIsMobile(true)    
      }else{
          setIsMobile(false)      
      }
    }
    handleResize()
    return ()=> window.removeEventListener('resize',handleResize)
  })

  return (
    <section className="header-top">
      <img className='logo' src={logoImage} alt="Logo" />
      {!isMobile && (
        <nav className='menu-desktop'>
        <ul>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="#localizacao">localização</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
        </ul>
      </nav>
      )}

      {isMobile && (
          <button className={`btn-mobile  ${showMenu ? 'fixed':''}`}
          onClick={()=>setShowMenu(!showMenu)}
          >
            {showMenu ? <IoClose/> : <GiHamburgerMenu/>}
          </button>
        )}

      {isMobile && (
        <nav className={`menu-mobile ${showMenu ? 'open' : 'close'}`}>
          <ul onClick={()=>setShowMenu(false)}>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#depoimentos">Depoimentos</a>
          </li>
          <li>
            <a href="#localizacao">localização</a>
          </li>
          <li>
            <a href="#contatos">Contatos</a>
          </li>
          </ul>
        </nav>
      )}
      
    </section>
  )
}

export default HeaderTop