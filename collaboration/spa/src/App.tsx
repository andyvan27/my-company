import { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        task: 'Buy beer'
    },
    {
        id: 2,
        task: 'Buy wine'
    },
    {
        id: 3,
        task: 'Buy waggu'
    }
  ])

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
