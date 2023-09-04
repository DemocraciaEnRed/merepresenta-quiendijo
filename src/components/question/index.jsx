import _ from "lodash";
import React from "react";
import { Button, Row } from "react-bootstrap";
import "./index.css";

const MobileSizeContainer = ({ children }) => <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
  {children}
</div>;

const Option = ({ onOptionSelected, option }) =>
  <Button className="btn-dark option-button col-md-12" onClick={() => onOptionSelected(option)}>
    <span className="option-text">{_.toUpper(option)}</span>
  </Button>

const Question = ({ question, options, onOptionSelected }) => (
  <div className="col-10 animate__animated animate__fadeIn">
    <p className="question">{question.text}</p>
    <MobileSizeContainer>
      {options.map((option, number) =>
        <Row key={number} className="option">
          <Option
            question={question}
            option={option}
            onOptionSelected={onOptionSelected}
          />
        </Row>
      )}
    </MobileSizeContainer>
  </div>
);

export default Question;