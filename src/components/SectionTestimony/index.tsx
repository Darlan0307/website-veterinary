import './styles.scss'
import bgOld from '../../assets/bg-olds.png'
import old1 from '../../assets/old-1.png'
import old2 from '../../assets/old-2.png'
import old3 from '../../assets/old-3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'

const dataTestimony = [
  {
    id:0,
    picture: old1,
    name:"Anna Carla",
    testimony:"Meu labrador, teve problemas digestivos. Dra. Victoría diagnosticou e tratou com sucesso. Ela é paciente, atenciosa e explica tudo com clareza. Recomendo a todos!",
    
  },
  {
    id:1,
    picture: old2,
    name:"José Costa",
    testimony:"Minha gatinha Mia estava assustada na clínica. Dra. Victoría foi gentil e paciente, conquistando sua confiança. Mia está mais feliz e saudável, e eu devo isso à Dra. Victoría.",
    
  },
  {
    id:2,
    picture: old3,
    name:"Adriana Maria",
    testimony:"Meu poodle, precisou de uma cirurgia delicada.A cirurgia foi um sucesso e Toby se recuperou rápido. Sou muito grata à Dra. Victoría.",
    
  }
]

const SectionTestimony = () => {

  const [enableNavigation,setEnableNavigation] = useState(false)

  useEffect(()=>{
    function handleResize(){
      if(window.innerWidth < 701){
        setEnableNavigation(false)    
      }else{
        setEnableNavigation(true)      
      }
    }
    handleResize()
    return ()=> window.removeEventListener('resize',handleResize)
  })

  return (
    <section className='section-testimony' id='depoimentos'>
      <h2 className='subtitle'>Testemunhos dos paciêntes</h2>

     <div className="content-testimony">
      
      <img className='bg-olds' src={bgOld} alt="imagem background dos testemunhos" />

     <Swiper
      slidesPerView={1}
      pagination={{ clickable:true }}
      navigation={enableNavigation}
			loop= {true}
      className='container-carosel'
    >

      {dataTestimony.map(testimony =>(
        <SwiperSlide key={testimony.id} className='carosel-card'>
          <article className='card-testimony'>
            <img src={testimony.picture} alt={testimony.name} />
            <div className='content-text'>
              <p>{testimony.testimony}</p>
              <h3>{testimony.name}</h3>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
     </div>
    </section>
  )
}

export default SectionTestimony