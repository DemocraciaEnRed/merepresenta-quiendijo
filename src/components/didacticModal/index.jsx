import React from "react";
import { Modal } from "react-bootstrap";
import Topic from "../topic";
import "./index.css";
import { ReactComponent as ContinueIcon } from '../../images/continueIcon.svg';
import { ReactComponent as CorrectAnswerIcon } from '../../images/correctAnswerIcon.svg';
import { ReactComponent as IncorrectAnswerIcon } from '../../images/incorrectAnswerIcon.svg';

const Description = ({ question: { description }, answerIsOk }) => {
  return (
    <div>
      {answerIsOk? <CorrectAnswerIcon className="answer-icon"/> : <IncorrectAnswerIcon className="answer-icon"/>}
      <p className="description">{description}</p>
    </div>
  );
}

const DidacticModal = ({ question, show, answerIsOk, descriptionRead }) => (
  <Modal show={show} onHide={descriptionRead} className="modal-container">
    <div className="didactic-modal">
      <Topic topic={question.topic} separatorColor="white" textColor="black"/>
      <Modal.Body>
        <Description question={question} answerIsOk={answerIsOk}/>
        <div onClick={descriptionRead} className="continue">
          <div className="continue-button">
            <span className="continue">CONTINUAR</span>
            <ContinueIcon className="continue-icon"/>
          </div>
        </div>
      </Modal.Body>
    </div>
  </Modal>
);

export default DidacticModal;