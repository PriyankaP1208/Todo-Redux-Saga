import './App.css';
import TodoList from './Component/TodoList';
import TodoInput from './Component/TodoInput';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
