import logo from './logo.svg';
import './App.css';
import ParentComp from './components/ParentComp';
import Counter from './components/usememo/Counter';

function App() {
  return (
    <div className="App">
      
      <ParentComp />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
