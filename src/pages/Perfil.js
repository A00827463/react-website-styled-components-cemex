import React, { useRef, useState } from "react";
import { Card, Button, CardDeck, Alert, Form } from "react-bootstrap";
import { Container } from "../globalStyles";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Perfil = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail, logout } = useAuth();

  const refreshPage = () => {
    window.location.reload();
  };

  async function handleLogout() {
    setError("");
    try {
      await logout();
      sessionStorage.clear();
      history.push("/login");
      refreshPage();
    } catch {
      setError("Failed to log out");
    }
  }

  async function handleEmail(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      if (emailRef.current.value !== currentUser.email) {
        await updateEmail(emailRef.current.value);
      }
      setMessage("Email updated succesfully");
    } catch {
      setError("Failed to update Email, try again later");
    }
    setLoading(false);
  }

  async function handlePassword(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    if (passwordRef.current.value.length <= 5) {
      return setError("Password to short");
    }

    const promises = [];
    setMessage("");
    setError("");
    setLoading(true);

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        setMessage("Password updated succesfully");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container>
      <Container>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <CardDeck>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Update Email</h2>
              <Form onSubmit={handleEmail}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    defaultValue={currentUser.email}
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Update Password</h2>
              <Form onSubmit={handlePassword}>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Leave Blank to keep the same"
                  />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="Leave Blank to keep the same"
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log Out</h2>
              <Card.Text className="text-center mb-4">
                You shure you whant to log out?
              </Card.Text>
              <Button
                variant="primary"
                className="w-100"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </Container>
  );
};

export default Perfil;
