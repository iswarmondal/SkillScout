import './App.css';
import { Routes, Route } from 'react-router-dom';
import StartPage from './components/start-page';
import InterviewPage from './components/interviewPage';
import Analysis from './components/analysis';
import ThankYou from './components/thankYouPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage />}></Route>
      <Route path='/interview' element={<InterviewPage />}></Route>
      <Route path='/thanks' element={<ThankYou />}></Route>
      <Route path='/analysis' element={<Analysis />}></Route>
    </Routes>
  );
}

export default App;
