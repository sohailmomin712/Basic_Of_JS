// Write Code here

import { useState } from "react";

const PlayPause = () => {
  const [text, setText] = useState("The state is paused");
  const [butText, setButtext] = useState("paused");

  const handleNaz = () => {
    setText("The state is playing");
    setButtext("playing");
    // console.log("handleNaz is runiing");
  };

  return (
    <>
      <h1>{text}</h1>
      <button onClick={handleNaz}>{butText}</button>
    </>
  );
};

export default PlayPause;
