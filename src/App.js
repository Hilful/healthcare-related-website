import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Component/AboutUs/AboutUs';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home'
import Login from './Component/LoginFrom/Login';
import NotFound from './Component/NotFound/NotFound';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Register from './Component/Register/Register';
import Shedule from './Component/Shedule/Shedule';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <PrivateRoute path="/about us">
                <AboutUs/>
            </PrivateRoute>
            <Route path="/Shedule">
              <Shedule/>
            </Route>
            <Route path="/Contact">
              <Contact/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
