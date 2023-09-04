import React, { useState, useEffect } from 'react';
import _ from "lodash";
import DicaticQuestion from "../didacticQuestion";
import Background from '../../images/roundBackground.svg';
import WithBackground from "../withBackground";
import Countdown from "../countdown";
import Score from "../score";
import config from "../../config";
import questionPool from "../../questions.json";

export default function Round({ setPlayAgain }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const roundQuestions = _.sampleSize(questionPool, config.questionsPerRound);
    setQuestions(roundQuestions);
  }, []);

  if (_.isEmpty(questions)) return null;
  
  const moveToNext = isCorrect => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestionNumber(currentQuestionNumber + 1)
  };
  
  const questionsCount = _.size(questions);
  const isActive = currentQuestionNumber < questionsCount;
  const currentQuestion = questions[currentQuestionNumber];

  return (
    <div className="animate__animated animate__fadeIn animate__fast">
    {
      isActive?
        <WithBackground background={Background} light>
          {
            isLoading? <Countdown setIsLoading={setIsLoading}/>
            : <div className="full-height animate__animated animate__fadeIn">
              <DicaticQuestion
                key={currentQuestionNumber}
                question={currentQuestion}
                moveToNext={moveToNext}
                questionCount={questionsCount}
                currentQuestionNumber={currentQuestionNumber}
              />
            </div>
          }
        </WithBackground>
        : <Score score={score} total={questionsCount} setPlayAgain={setPlayAgain}/>
      }
    </div>
  );
};