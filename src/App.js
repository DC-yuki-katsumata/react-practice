import './App.css';
import './Greeting'
import Greeting from './Greeting';
import Counter from './Counter';
import NameForm from './NameForm';

function App() {
  return (
    <div className="App">
      <Greeting name="Yuki"></Greeting>
      <Greeting name="Chikara"></Greeting>
      <Greeting name="Tokiya"></Greeting>
      <Counter></Counter>
      <NameForm></NameForm>
    </div>
  );
}

export default App;
