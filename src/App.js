import './App.css';
import './Greeting'
import Greeting from './Greeting';
import Counter from './Counter';
import NameForm from './NameForm';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Greeting name="Yuki"></Greeting>
        <Greeting name="Chikara"></Greeting>
        <Greeting name="Tokiya"></Greeting>
        <Counter></Counter>
        <NameForm></NameForm>
        <Timer></Timer>
      </div>
    </div>
  );
}

export default App;
