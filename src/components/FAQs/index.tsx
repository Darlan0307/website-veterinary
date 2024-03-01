import { useState } from 'react';
import './styles.scss'

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
        "cada animal é único e merece atenção especial.",
        "Levamos o tempo necessário para ouvir suas preocupações e responder às suas perguntas."
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
          <h3>{question.question}</h3>

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