import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import GetStarted from './pages/GetStarted';
import Navbar from './components/Navbar';
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
    <div className="App">
     <Router>
     <Navbar handleClick={toggleTheme} theme={theme} />
     <Switch>
          <Route exact={true} path="/about">
            <About theme={theme}/>
          </Route>
          <Route exact={true} path="/login">
            <Login theme={theme}/>
          </Route>
          <Route exact={true} path="/">
            <Home theme={theme}/>
          </Route>
          <Route exact={true} path="/start">
            <GetStarted theme={theme}/>
          </Route>
          <Route>
            <PageNotFound theme={theme}/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
