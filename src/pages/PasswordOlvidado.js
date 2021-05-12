import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Container, Button } from "../globalStyles";
import {
  InfoSec,
  ContentLogin,
  ContentLoginSubheading,
  ContentLoginSubText,
  Form,
  FormInput,
  // CustomLink
} from "../components/Form/Form.elements";
import { Alert } from "react-bootstrap";

const PasswordOlvidadoSection = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <>
      <InfoSec dark l>
        <Container>
          <ContentLogin>
            <ContentLoginSubheading light>
              Change password
            </ContentLoginSubheading>
            <ContentLoginSubText light>
              Enter your email for further instructions.
            </ContentLoginSubText>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <FormInput
                name="email"
                type="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
              <Button fontBig primary disabled={loading} type="submit">
                Recover
              </Button>
            </Form>
            <br />
              
          </ContentLogin>
        </Container>
      </InfoSec>
    </>
  );
};

export default PasswordOlvidadoSection;
