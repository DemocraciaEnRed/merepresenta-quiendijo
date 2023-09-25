import React from "react";
import WithTopicColor from "../withTopicColor";
import "./index.css";

const CurrentNumber = ({ color, current }) => <span style={{ "color": color }}>{current}</span>;
const OfTotal = ({ total, color }) => <span style={{ "color": color }}> de {total}</span>;

const Progress = ({ current, total, topic, color }) => {
  const isFinalOne = !topic;
  return <div className={isFinalOne? "final" : ""}>
    {
      !isFinalOne?
        <WithTopicColor
          render={el => <CurrentNumber color={color} current={current}/>}
          topic={topic}
        />
      : <CurrentNumber color={color} current={current} />
    }
    <OfTotal total={total} color={color} />
  </div>;
};

export default Progress;