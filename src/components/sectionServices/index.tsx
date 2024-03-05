import './styles.scss'
import { MdHealthAndSafety } from "react-icons/md";
import { TbVaccine } from "react-icons/tb";
import { FaTooth } from "react-icons/fa";
import { PiStethoscopeThin } from "react-icons/pi";
import { MdOutlinePets } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react'

const dataServices = [
  {
    id:0,
    icon: <MdHealthAndSafety/>,
    title:"Consultas",
    description:"Exames físicos, avaliação de saúde, diagnóstico de doenças, prescrição de medicamentos e acompanhamento de pacientes.",
    link:"https://www.nucleodoconhecimento.com.br/veterinaria"
  },
  {
    id:1,
    icon: <TbVaccine/>,
    title:"Vacinação",
    description:"Imunização contra doenças contagiosas, como raiva, cinomose, parvovirose e leptospirose.",
    link:"https://www.nucleodoconhecimento.com.br/veterinaria"
  },
  {
    id:2,
    icon: <FaTooth/>,
    title:"Odontologia",
    description:" Limpeza de tártaro, profilaxia bucal, extração de dentes e tratamento de doenças periodontais.",
    link:"https://www.nucleodoconhecimento.com.br/veterinaria"
  },
  {
    id:3,
    icon: <MdOutlinePets/>,
    title:"Controle de natalidade",
    description:"Castração e ovariohisterectomia para evitar reprodução indesejada.",
    link:"https://www.nucleodoconhecimento.com.br/veterinaria"
  },
  {
    id:4,
    icon: <PiStethoscopeThin/>,
    title:"Fisioterapia",
    description:"Reabilitação de animais que sofreram lesões ou cirurgias.",
    link:"https://www.nucleodoconhecimento.com.br/veterinaria"
  },
]

const SectionServices = () => {
  return (
    <section className='section-services' id='servicos'>
      <h2 className='subtitle'>Serviços de alta qualidade para você</h2>

    <Swiper
      pagination={{ clickable:true }}
      navigation
			loop= {true}
      className='container-carosel'
      breakpoints={{
        0: {
          slidesPerView: 1,          
        },
        800: {
          slidesPerView: 2,          
        },
        1200:{
          slidesPerView: 3,
        }
      }}
    >

      {dataServices.map(service =>(
        <SwiperSlide key={service.id} className='carosel-card'>
          <div className='container'>
          <span className='icon-service'>
            {service.icon}
          </span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <a href={service.link} target='_blank'>Saber Mais</a>
          </div>
        </SwiperSlide>
      ))}
   
    </Swiper>

    </section>
  )
}

export default SectionServices