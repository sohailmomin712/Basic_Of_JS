// Write Code here
// do a default export
import { useState } from "react";

const PlayPause = () => {
  const [tex, setTex] = useState("The state is paused");
  const [but, setButTex] = useState("paused");

  const handleChange = () => {
    setTex("The state is playing");
    setButTex("playing");
  };
  return (
    <>
      <h1>{tex}</h1>
      <button onClick={handleChange}>{but}</button>
    </>
  );
};
export default PlayPause;