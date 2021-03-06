import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import Feed from "./pages/Feed/Feed";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NewsFeed from "./pages/NewsFeed";

function App() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("dark")) || false;
  };

  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    setTheme((prev) => !prev);
    localStorage.setItem("dark", !theme);
  };

  //for testing if it works
  useEffect(() => {
    console.log("Theme changed");
  }, [theme]);

  return (
    <div className={`App ${theme === "dark" ? "App-dark" : "App-light"}`}>
      <Router>
        <Navbar handleClick={toggleTheme} theme={theme} />
        <Switch>
          <Route exact path="/">
            <Home theme={theme} />
          </Route>
          <Route exact path="/about">
            <About theme={theme} />
          </Route>
          <Route exact path="/shows-movies">
            <Feed theme={theme} />
          </Route>
          <Route exact path="/login">
            <Login theme={theme} />
          </Route>
          <Route exact path="/sign-up">
            <SignUp theme={theme} />
          </Route>
          <Route exact path="/news-feed">
            <NewsFeed theme={theme} />
          </Route>
          <Route>
            <PageNotFound theme={theme} />
          </Route>
        </Switch>
        <Footer theme={theme} />
      </Router>
    </div>
  );
}

export default App;
