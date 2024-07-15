import Heading from "./Components/Heading";
import ImageComp from "./Components/Image";
import PlayPause from "./Components/PlayPause";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Heading />

      <ImageComp
        title="suFi"
        src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt="suFi"
        width="100px"
        height="100px"
      />
      <PlayPause />
      {/*
       you can comment the below out */}
      <QuestionDescription />
    </div>
  );
}

const QuestionDescription = () => {
  return (
    <div>
      <div>You have 3 files</div>

      <li>
        {" "}
        <b>PlayPause.jsx</b>
      </li>
      <p>
        Create a component called PlayPause. <br />
        The component should have two elements, an h1 tag and another button
        element.
        <br />
        The h1 tag should have the title <b>The state is paused</b> by default.
        There should be a button, which has the text <b>paused</b>.
        <br />
        Heading 1 - <b>The state is paused</b>
        <br />
        Button text - <b>paused</b>
        <br />
        <br />
        When you <b>click</b> on the button, then the state should change, and
        the h1 tag should now change to <br />
        Heading 1 - <b>The state is playing</b>
        <br />
        Button text - <b>playing</b>
      </p>
    </div>
  );
};
