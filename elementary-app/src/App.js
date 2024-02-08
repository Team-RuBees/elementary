import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom'; 
import Home from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import HelpPage from './pages/HelpPage';
import { Navigate } from 'react-router-dom';
import CustomizePage from './pages/CustomizePage'
import CustomSideBar from './components/CustomSideBar';
import ButtonPage from './pages/elements/ButtonPage';
import CardsPage from './pages/elements/CardsPage';
import FormPage from './pages/elements/FormPage';
import InputBoxPage from './pages/elements/InputBoxPage';
import LoaderPage from './pages/elements/LoaderPage';
import TablePage from './pages/elements/TablePage';
import ToggleButtonPage from './pages/elements/ToggleButtonPage';
import CheckBox from './pages/elements/CheckBox';
import AboutPage from './pages/AboutPage';
import SettingsPage from './pages/SettingsPage';


function App() {
  return (  
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>} />
          <Route path="/home" element = {<Home/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/signup" element = {<SignUp/>} />
          <Route path="/help" element = {<HelpPage/>}/>
          <Route path="/customize" element = {<CustomizePage/>}/>
          <Route path="/customsidebar" element = {<CustomSideBar/>}/>

          {/* START OF ELEMENTS PAGE ROUTES */}
          <Route path="/button" element = {<ButtonPage/>}/>
          <Route path="/cards" element = {<CardsPage/>}/>
          <Route path="/form" element = {<FormPage/>}/>
          <Route path="/inputbox" element = {<InputBoxPage/>}/>
          <Route path="/loader" element = {<LoaderPage/>}/>
          <Route path="/checkbox" element = {<CheckBox/>}/>
          <Route path="/table" element = {<TablePage/>}/>
          <Route path="/toggle" element = {<ToggleButtonPage/>}/>
          <Route path="/about" element = {<AboutPage/>}/>
          <Route path="/settings" element = {<SettingsPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
