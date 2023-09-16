import './App.css';
import { Routes, Route } from 'react-router-dom';
import StartPage from './components/start-page';
import InterviewPage from './components/interviewPage';
import Analysis from './components/analysis';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage />}></Route>
      <Route path='/interview' element={<InterviewPage />}></Route>
      <Route path='/analysis' element={<Analysis />}></Route>
    </Routes>
  );
}

export default App;
