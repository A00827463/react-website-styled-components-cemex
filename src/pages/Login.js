import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container, Button } from "../globalStyles";
import {
  InfoSec,
  ContentLogin,
  ContentLoginSubheading,
  ContentLoginSubText,
  Form,
  FormInput,
  CustomLink,
} from "../components/Form/Form.elements";

import { Alert } from "react-bootstrap";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [dbEmail, setDbEmail] = useState();
  const [dbPassword, setDbPassword] = useState();
  const [dbID, setDbID] = useState();
  const refreshPage = () => {
    window.location.reload();
  };


  async function handleSubmit(e) {
    e.preventDefault();

    /*  */
    // setError("");
    // setLoading(true);
    // if(login(emailRef.current.value, passwordRef.current.value)){
    //   history.push("/");
    //   refreshPage();
    // } else {
    //   setError('Unable to log in');
    // }
    // setLoading(false);

    
    /*------------- FireBase -------------*/
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      let data = {
        email: emailRef.current.value,
      };
      fetch("/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((jsonRes) => {
          setDbEmail(jsonRes.recordset[0].Email);
          setDbPassword(jsonRes.recordset[0].Password);
          setDbID(jsonRes.recordset[0].UserID);
          
        })
        .then(() => {
          sessionStorage.setItem("ID", dbID);
          
        });
      history.push("/?ID=" + sessionStorage.ID);
      refreshPage();
    } catch(err) {
      setError(err.message);
    }
    setLoading(false);



    /*------------- FireBase -------------*/


    // try {
    //   setError("");
    //   setLoading(true);
    //   await login(emailRef.current.value, passwordRef.current.value);
    //   history.push("/");
    //   refreshPage();
    // } catch (err) {
    //   setError('Unable to log in');
    // }
    // setLoading(false);
  }

  return (
    <>
      <InfoSec light l>
        <Container>
          <ContentLogin>
            <ContentLoginSubheading dark>Login</ContentLoginSubheading>
            <ContentLoginSubText dark>
              Enter your user credentials to enter.
            </ContentLoginSubText>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form>
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                  required
                />
              </Form>
              <Form>
                <FormInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </Form>
              <Button fontBig disabled={loading} type="submit">
                Login
              </Button>
            </Form>
            <br />
            <CustomLink to="/password-olvidado" blue>
              Forgot your password?
            </CustomLink>
            <CustomLink to="/sign-up" blue>
              Already have an account? Sign Up
            </CustomLink>
          </ContentLogin>
        </Container>
      </InfoSec>
    </>
  );
};

export default Login;
