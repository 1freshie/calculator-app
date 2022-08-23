import './App.css';
import Header from './components/Header';
import Keypad from './components/Keypad';
import ResultBar from './components/ResultBar';

const App = () => {
  return (
    <div className="container">
      <Header />
      <ResultBar />
      <Keypad />
    </div>
  );
}

export default App;
