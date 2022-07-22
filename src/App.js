import './App.css';
import Banner from './components/Banner'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const handleSubmit = (text) => {
    setTasks([...tasks, text])
  }
  return (
    <div className="App">
      <Banner />
      <TaskForm handleSubmit={handleSubmit}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
