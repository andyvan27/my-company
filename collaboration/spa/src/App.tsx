import { FC, useState } from 'react'
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

import Tasks from './components/Tasks';
import PageLayout from './components/PageLayout';

import './styles/App.css';

interface AppProps {
  instance: PublicClientApplication
}

const App: FC<AppProps> = ({ instance }) => {
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
  ]);

  const MainContent = () => {
    return (
      <div className="App">
        <Tasks tasks={tasks} />
      </div>
    );
  }

  return (
    <MsalProvider instance={instance}>
      <PageLayout>
        <MainContent />
      </PageLayout>
    </MsalProvider>
  );
}
export default App;
