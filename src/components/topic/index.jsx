import React from "react";
import _ from "lodash";
import WithTopicColor from "../withTopicColor";
import "./index.css";

const Topic = ({ topic, separatorColor = "black" }) => {
  return <div className={`topic separator ${separatorColor}`}>
    <WithTopicColor
      render={color => <p style={{ "backgroundColor": color }} className="topic-name">{_.toUpper(topic)}</p>}
      topic={topic}
    />
  </div>;
}

export default Topic;