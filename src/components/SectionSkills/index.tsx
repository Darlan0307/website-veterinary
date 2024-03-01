import './styles.scss'
import imgApresentation from '../../assets/img-apresentation.png'
import Faq from '../FAQs'

const SectionSkills = () => {
  return (
    <section className='container-skills'>

      <h2 className='subtitle'>Por que escolher os serviços de Victoría?</h2>

      <div className='content-skills'>
        <img className='img-apresentation' src={imgApresentation} alt="imagem de victoria" />
        <div className='texto-direita'>

          <h2 className='title-text-info'>Aqui estão alguns motivos:</h2>
        
          <Faq/>
        </div>
      </div>
    </section>
  )
}

export default SectionSkills