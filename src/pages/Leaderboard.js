import React from "react";
import { Container } from "../globalStyles";
import { Table } from "react-bootstrap";

const Leaderboard = () => {
  return (
    <>
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }).map((_, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>Mark</td>
                <td>200</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Leaderboard;
