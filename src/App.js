import './App.css';
import './Greeting'
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <Greeting name="Yuki"></Greeting>
      <Greeting name="Chikara"></Greeting>
      <Greeting name="Tokiya"></Greeting>
      <Counter></Counter>
    </div>
  );
}

export default App;
