import logo from './logo.svg';
import Routes from './routes';
import HomePage from './pages/HomePage';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      
    </div>
  );
}

export default App;
