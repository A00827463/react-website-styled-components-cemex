// import { useState} from "react";
import { Footer, Navbar, Navbar2} from "./components";
import GlobalStyle from "./globalStyles"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from './components/PrivateRoute';

import Home from "./pages/HomePage/Home";
import Instrucciones from "./pages/Instrucciones/Instrucciones";

import Leaderboard from "./pages/Leaderboard";
import Perfil from "./pages/Perfil";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import PasswordOlvidado from "./pages/PasswordOlvidado";
import ScrollToTop from "./components/ScrollToTop";

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <AuthProvider>
      <GlobalStyle/>
      <ScrollToTop/>
      {/* <Navbar/> */}
      <Navbar2/>
      {/* {click ? <Navbar2/> : <Navbar/>} */}
      <Switch>
        <PrivateRoute path="/" exact component={Home}/>
        <PrivateRoute path="/instrucciones" exact component={Instrucciones}/>
        <PrivateRoute path="/leaderboard" exact component={Leaderboard}/>
        <PrivateRoute path="/perfil" exact component={Perfil}/>
        <PrivateRoute path="/admin" exact component={Admin}/>

        <Route path="/sign-up" exact component={SignUp}/>
        <Route path="/login" default exact component={Login}/>
        <Route path="/password-olvidado" exact component={PasswordOlvidado}/>
      </Switch>
      <Footer/>
      </AuthProvider>
    </Router>
  );
}

export default App;
