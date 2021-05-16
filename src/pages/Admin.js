import React, { useState } from "react";
import { Container } from "../globalStyles";
import { Table } from "react-bootstrap";
import { MdModeEdit } from "react-icons/md";
import { FaTrash, FaCheck } from "react-icons/fa";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const Admin = () => {
  const dataUsuarios = [
    { id: 1, name: "Mark", score: 400 },
    { id: 2, name: "Sebas", score: 300 },
    { id: 3, name: "Juan", score: 300 },
    { id: 4, name: "Esteban", score: 250 },
    { id: 5, name: "Chistian", score: 200 },
    { id: 6, name: "Adrian", score: 150 },
  ];

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
                <th>Username</th>
                <th>Score</th>
                <th>Acciones</th>
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
                <h3>Editar usuario</h3>
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

                <label>usuario</label>
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
                Actualizar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setModalEditar(false)}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={modalEliminar}>
            <ModalBody>
              Estas seguro que quieres eliminar el usuario{" "}
              {usuarioSeleccionado && usuarioSeleccionado.name}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={() => eliminar()}>
                Si
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setModalEliminar(false)}
              >
                No
              </button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={modalInsertar}>
            <ModalHeader>
              <div>
                <h3>Insertar usuario</h3>
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

                <label>usuario</label>
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
                Incertar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => modalInsertar(false)}
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
