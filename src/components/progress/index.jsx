import React from "react";
import WithTopicColor from "../withTopicColor";
import "./index.css";

const CurrentNumber = ({ color, current }) => <span style={{ "color": color }}>{current}</span>;
const OfTotal = ({ total }) => <span> de {total}</span>;

const Progress = ({ current, total, topic, color }) => {
  const isFinalOne = !topic;
  return <div className={isFinalOne? "final" : ""}>
    {
      !isFinalOne?
        <WithTopicColor
          render={color => <CurrentNumber color={color} current={current}/>}
          topic={topic}
        />
      : <CurrentNumber color={color} current={current} />
    }
    <OfTotal total={total} />
  </div>;
};

export default Progress;