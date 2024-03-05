import './styles.scss'
import imgForm from '../../assets/img-form.png'

const Form = () => {
  return (
    <div className='container-form'>
      <img src={imgForm} alt="imagem mostrando que victoría está online" />
      <h3>Envie uma mensagem para Victoría</h3>
      <form className='form' autoComplete='off'> 
        <div className='wrap-input'>
          <label className='label' htmlFor="name">Nome:</label>
          <input className='input' type="text" id='name' placeholder='Seu nome'/>
        </div>
        <div className='wrap-input'>
          <label className='label' htmlFor="email">Email:</label>
          <input className='input' type="email" id='email' placeholder='Seu email'/>
        </div>
        <div className='wrap-input'>
          <label className='label' htmlFor="message">Mensagem:</label>
          <textarea className='text-area'  id="message" placeholder='Sua mensagem'></textarea>
        </div>
        <button className='submit' type='button'>Enviar Mensagem</button>
      </form>
    </div>
  )
}

export default Form