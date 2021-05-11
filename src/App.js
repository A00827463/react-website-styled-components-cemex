// import { useState} from "react";
import { Footer, Navbar, Navbar2} from "./components";
import GlobalStyle from "./globalStyles"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/HomePage/Home";
import Instrucciones from "./pages/Instrucciones/Instrucciones";

import Leaderboard from "./pages/Leaderboard";
import Perfil from "./pages/Perfil";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import PasswordOlvidado from "./pages/PasswordOlvidado";
import PasswordOlvidadoEspera from "./pages/PasswordOlvidadoEspera";
import ScrollToTop from "./components/ScrollToTop";
// import click from "./pages/SignUp/SignUpSection"



function App() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(true);
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Navbar2/>
      {/* {click ? <Navbar2/> : <Navbar/>} */}
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/instrucciones" exact component={Instrucciones}/>
        <Route path="/leaderboard" exact component={Leaderboard}/>
        <Route path="/perfil" exact component={Perfil}/>
        <Route path="/sign-up" exact component={SignUp}/>
        <Route path="/login" default exact component={Login}/>
        <Route path="/admin" exact component={Admin}/>
        <Route path="/password-olvidado" exact component={PasswordOlvidado}/>
        <Route path="/password-olvidado-espera" exact component={PasswordOlvidadoEspera}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
