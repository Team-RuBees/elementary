import logo from './logo.svg';
import Routes from './routes';
import HomePage from './pages/HomePage';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <SignUp/>
      
    </div>
  );
}

export default App;
