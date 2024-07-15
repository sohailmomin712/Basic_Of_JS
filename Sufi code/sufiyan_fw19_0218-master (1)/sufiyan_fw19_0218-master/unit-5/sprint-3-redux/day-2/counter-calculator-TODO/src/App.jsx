
import './App.css';
import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
           <h1>///////////   CALCULATOR   /////////////</h1>
         <Counter/>
         <br />
         <h1>///////////   TODO   /////////////</h1>
         <Todo/>
    </div>
  );
}

export default App;
