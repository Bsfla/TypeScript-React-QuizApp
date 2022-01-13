import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';

const startTrivia = () => {

}

const checkAnswer = () => {

}

const nextQuestion = () => {
  
}

const App = () => {
   const [loading, setLoading] = useState(false);
   const [questions, setQuestions] = useState([]);
   const [number, setNumber] = useState(0);
   const [userAnswers, setUserAnswers] = useState([]);
   const [score, setScore] = useState(0);
   const [gameOver, setGameOver] = useState(true);
   
   return (
   <div className='App'>
      <h1>REACT QUIZ</h1>
      <button className='start' onClick={startTrivia}>
         Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard questionNr={number + 1} />
   </div>
   )
}

export default App;
