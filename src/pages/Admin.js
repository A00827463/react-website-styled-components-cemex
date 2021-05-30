import React, { useState, useEffect } from "react";
import { Container } from "../globalStyles";
import { Table } from "react-bootstrap";
import { MdModeEdit } from "react-icons/md";
import { FaTrash, FaCheck } from "react-icons/fa";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const Admin = () => {
  const dataUsuarios = [
    { id: 1, name: "Mark", score: 400 },
    // { id: 2, name: "Sebas", score: 300 },
    // { id: 3, name: "Juan", score: 300 },
    // { id: 4, name: "Esteban", score: 250 },
    // { id: 5, name: "Chistian", score: 200 },
    // { id: 6, name: "Adrian", score: 150 },
  ];

  useEffect(() => {
    fetch("/users", {
      method: "POST",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        jsonRes.recordset.map(user => dataUsuarios.push({id: user.UserID, name: user.Name, score: user.Score}))
      });
  });

  const [data, setData] = useState(dataUsuarios);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: "",
    name: "",
    score: "",
  });

  const seleccionarUsuario = (elemento, caso) => {
    setUsuarioSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = () => {
    var dataNueva = data;
    dataNueva.map((usuario) => {
      if (usuario.id === usuarioSeleccionado.id) {
        usuario.name = usuarioSeleccionado.name;
        usuario.score = usuarioSeleccionado.score;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  };

  const eliminar = () => {
    setData(data.filter((usuario) => usuario.id !== usuarioSeleccionado.id));
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setUsuarioSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    var valorInsertar = usuarioSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  };

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
                <th>Name</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elemento) => (
                <tr>
                  <td>{elemento.id}</td>
                  <td>{elemento.name}</td>
                  <td>{elemento.score}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => seleccionarUsuario(elemento, "Tareas")}
                    >
                      <FaCheck />
                    </button>
                    {" "}
                    <button
                      className="btn btn-primary"
                      onClick={() => seleccionarUsuario(elemento, "Editar")}
                    >
                      <MdModeEdit />
                    </button>
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => seleccionarUsuario(elemento, "Eliminar")}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">
                  <button
                    className="btn btn-success w-100"
                    onClick={() => abrirModalInsertar()}
                  >
                    Insertar
                  </button>
                </td>
              </tr>
            </tfoot>
          </Table>

          <Modal isOpen={modalEditar}>
            <ModalHeader>
              <div>
                <h3>Edit User</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>ID</label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  name="id"
                  value={usuarioSeleccionado && usuarioSeleccionado.id}
                />
                <br />

                <label>Username</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={usuarioSeleccionado && usuarioSeleccionado.name}
                  onChange={handleChange}
                />
                <br />

                <label>Score</label>
                <input
                  className="form-control"
                  type="text"
                  name="score"
                  value={usuarioSeleccionado && usuarioSeleccionado.score}
                  onChange={handleChange}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={() => editar()}>
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setModalEditar(false)}
              >
                Cancel
              </button>
            </ModalFooter>
          </Modal>


          <Modal isOpen={modalEliminar}>
            <ModalBody>
              Are you shure you wish to delete user {" "}
              {usuarioSeleccionado && usuarioSeleccionado.name}
              ?
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={() => eliminar()}>
                Delete
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setModalEliminar(false)}
              >
                Cancel
              </button>
            </ModalFooter>
          </Modal>


          <Modal isOpen={modalInsertar}>
            <ModalHeader>
              <div>
                <h3>Create New User</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>ID</label>
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  name="id"
                  value={data[data.length - 1].id + 1}
                />
                <br />

                <label>Username</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={usuarioSeleccionado ? usuarioSeleccionado.name : ""}
                  onChange={handleChange}
                />
                <br />

                <label>Score</label>
                <input
                  className="form-control"
                  type="text"
                  name="score"
                  value={usuarioSeleccionado ? usuarioSeleccionado.score : ""}
                  onChange={handleChange}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={() => insertar()}>
                Insertar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setModalInsertar(false)}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </Container>
    </>
  );
};

export default Admin;
