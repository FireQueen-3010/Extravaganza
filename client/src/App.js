import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About';
import Login from './pages/Login';
import GetStarted from './pages/GetStarted';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';

function App() {

  const getTheme = () => {
   return JSON.parse(localStorage.getItem('dark')) || false
  }

  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () =>{
   setTheme((prev)=>!prev)
   localStorage.setItem('dark', !theme)
  }

  //for testing if it works
  useEffect(() => {
    console.log("Theme changed");
  }, [theme]);


  return (
    <div className={`App ${theme=='dark'?"App-dark":"App-light"}`}>
     <Router>
     <Navbar handleClick={toggleTheme} theme={theme} />
     <Switch>
          <Route exact path="/about">
            <About theme={theme}/>
          </Route>
          <Route exact path="/login">
            <Login theme={theme}/>
          </Route>
          <Route exact path="/">
            <Home theme={theme}/>
          </Route>
          <Route exact path="/start">
            <GetStarted theme={theme}/>
          </Route>
          <Route>
            <PageNotFound theme={theme}/>
          </Route>
        </Switch>
        <Footer theme={theme}/>
     </Router>
    </div>
  );
}

export default App;
