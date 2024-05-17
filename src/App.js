import './App.css';
import './Greeting'
import Greeting from './Greeting';
import Counter from './Counter';
import NameForm from './NameForm';
import Timer from './Timer';
import TodoList from './TodoList';

function App() {
  // taskの中身を用意
  const tasks = [
    { id: 1, task: 'Java勉強する' },
    { id: 2, task: '基本情報技術者試験受かる' },
    { id: 3, task: 'ああああああああああああ' }
];

  return (
    <div className="App">
      <div className='container'>
        <Greeting name="Yuki"></Greeting>
        <Greeting name="Chikara"></Greeting>
        <Greeting name="Tokiya"></Greeting>
        <Counter></Counter>
        <NameForm></NameForm>
        <Timer></Timer>
        <TodoList tasks={tasks}></TodoList>
      </div>
    </div>
  );
}

export default App;
