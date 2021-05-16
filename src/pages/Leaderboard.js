import React, { useState } from "react";
import { Container } from "../globalStyles";
import { Table } from "react-bootstrap";

const Leadreboard = () => {
  const dataUsuarios = [
    { id: 1, name: "Mark", score: 400 },
    { id: 2, name: "Sebas", score: 300 },
    { id: 3, name: "Juan", score: 300 },
    { id: 4, name: "Esteban", score: 250 },
    { id: 5, name: "Chistian", score: 200 },
    { id: 6, name: "Adrian", score: 150 },
  ];

  const [data, setData] = useState(dataUsuarios);

  return (
    <>
      <Container>
        <div class="row justify-content-center">
          <Table
            striped
            bordered
            hover
            variant="dark"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.name}</td>
                  <td>{elemento.score}</td>
                </tr>
              ))}

              {/* {Array.from({ length: 20 }).map((_, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>Mark</td>
                  <td>200</td>
                  <td>
                    <button className="btn btn-primary">
                      <MdModeEdit />
                    </button>{" "}
                    {"   "}
                    <button className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))} */}

            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
};

export default Leadreboard;
