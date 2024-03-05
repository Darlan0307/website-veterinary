import Form from '../Form'
// import Map from '../Map'
import './styles.scss'

const SectionForm = () => {
  return (
    <section className='section-form' id='localizacao'>
      <h2 className='subtitle'>Contate-nos para mais informações</h2>
      <div className='container-form-map'>
        {/* <Map/> */}
        <Form/>
      </div>
    </section>
  )
}

export default SectionForm