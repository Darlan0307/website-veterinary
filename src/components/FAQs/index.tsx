import { useState } from 'react';
import './styles.scss'
import { IoIosArrowDown } from "react-icons/io";
const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      question: 'Experiente e apaixonada por animais',
      answer: [
        "Altamente qualificada e possue vasta experiência no cuidado de animais de estimação.",
        "Dedicamos a fornecer o melhor atendimento possível para o seu pet."
      ],
    },
    {
      question: 'Atendimento personalizado e com carinho',
      answer: [
        "Cada animal é único e merece atenção especial.",
        "Levamos o tempo necessário para ouvir suas preocupações e responder às suas perguntas."
      ],
    },

    {
      question: 'Preços competitivos',
      answer: [
        "Preços competitivos para todos os serviços.",
        "Planos de saúde para animais de estimação para ajudar você a controlar os custos dos cuidados com o seu pet."
      ],
    },
    {
      question: 'Excelente reputação',
      answer: [
        "Excelente reputação na comunidade",
        "Membro da Associação Brasileira de Clínicas Veterinárias e Hospitais Veterinários (ABCV)"
      ],
    },

  ];

  const handleQuestionClick = (index:any) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className='cards'>
      {questions.map((question, index) => (
        <div key={index} onClick={() => handleQuestionClick(index)}>
          <div className='title-card'>
            <h3>{question.question}</h3>
            <span className={activeQuestion == index ? 'active' : ''}><IoIosArrowDown/></span>
          </div>

          {activeQuestion === index && (
            <ul>
            {question.answer.map(res => (
              <li key={res}>
                <p>{res}</p>
              </li>
            ))}
          </ul>
          )}
          
        </div>
      ))}
    </div>
  );
};

export default Faq;