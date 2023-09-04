import React, { useEffect, useState } from 'react';
import _ from "lodash";
import '../../App.css';
import Question from "../question";
import DidacticModal from "../didacticModal";
import Topic from "../topic";
import Logo from "../logo";
import "./index.css";
import WithFooter from "../withFooter";
import Progress from "../progress";

export default function DidacticQuestion({ question, moveToNext, currentQuestionNumber, questionCount }) {
  const [answered, setAnswered] = useState(false);
  const [answerIsOk, setAnswerIsOk] = useState(false);
  const [options, setOptions] = useState([]);
  
  const { answer, incorrectAnswers, topic } = question;
  useEffect(() => {
    const shuffledOptions = _(incorrectAnswers).concat(answer).shuffle().value();
    setOptions(shuffledOptions);
  }, [answer, incorrectAnswers]);

  const onOptionSelected = option => {
    if (answered) return;
    const isCorrect = _.isEqual(answer, option);
    setAnswered(true);
    setAnswerIsOk(isCorrect);
  };

  const FooterContent = <Progress current={currentQuestionNumber+1} total={questionCount} topic={topic}/>;

  return <WithFooter content={FooterContent}>
    <Logo topic={topic} />
    <Topic topic={topic}/>
    <Question question={question} options={options} onOptionSelected={onOptionSelected}/>
    <DidacticModal
      show={answered}
      question={question}
      answerIsOk={answerIsOk}
      descriptionRead={() => moveToNext(answerIsOk)}
    />
  </WithFooter>
}