import React from "react";
import { Table, ButtonGroup, Button, Row, Container, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  getListBussinesByUser,
  deleteCompanie,postBusiness
} from "services/BussinesService";
import {
  COMPANY_ID_List_Jobs,
  COMPANY_ID,
} from "navigation/CONSTANTS";
import { Link } from "react-router-dom";
import { MiInput, MiLabel, MiBoton } from './Componentes';
import { SelectorPais,SelectorCity,SelectorClassifierEnables} from 'components/system';

export const ListCompanyByUser = () => {

  const [listaCompanies, setListaCompanies] = useState([]);
  const idUsuario = localStorage.getItem("userId");

  //const [nameCity, setNameCity] = useState("");
  //const [nameCountry, setNameCountry] = useState("");

  // Modal Crear Compañia
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [emailCompanies, setEmailCompanies] = useState("");
  const [cityId, setCityId] = useState(0);
  const [countryId, setCountryId] = useState(0);

  // Moodle
  const [showModalCompanie, setShowModalCompanie] = useState(false);
  const CerrarShowModalCompanie = () => setShowModalCompanie(false);
  const AbrirShowModalCompanie = () => setShowModalCompanie(true);

  useEffect(() => {
    loadEmpleos();
  }, []);

  const loadEmpleos = () => {
    getListBussinesByUser(Number(idUsuario))
      .then((response) => {
        if (response) {
          setListaCompanies(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const eliminar = (id) => {
    if (confirm("¿Estás seguro que quieres eliminar esta Empresa?")) {
      fetchCompaniesDELETE(id);
    } else {
      return;
    }
  };


  const storeCompanie = (e) => {
    e.preventDefault();
    const datos = {
      name,
      description,
      emailCompanies,
      cityId,
      countryId,
      user_id:idUsuario
      };

    postBusiness(datos)
    .then(() => {
      CerrarShowModalCompanie();
      loadEmpleos();
    })
    .catch((err) => {
      console.log(err);
    });
    
       
}

  const openModalCompanie = () => {
    AbrirShowModalCompanie()
  };

  const fetchCompaniesDELETE = (id) => {
    deleteCompanie(id)
      .then(() => {
        alert("Empresa eliminada");
        loadEmpleos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Row>
        <Button
          variant="secondary"
          onClick={() => {
            openModalCompanie();
          }}
        >
          Crear Compañia
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Pais</th>
              <th>Ciudad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaCompanies.map((item) => (
              <tr key={"tr-" + item.id}>
                <td>{item.name}</td>
                <td>
                <SelectorClassifierEnables TypeClassifier="country" value={item.city_Country}></SelectorClassifierEnables>
                </td>
                <td>
                <SelectorClassifierEnables TypeClassifier="city" value={item.city_id}></SelectorClassifierEnables>
                </td>

                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Link
                      className="btn btn-primary"
                      to={COMPANY_ID_List_Jobs(item.id)}
                    >
                      Ver empleos
                    </Link>
                    <Link className="btn btn-primary" to={COMPANY_ID(item.id)}>
                      Editar
                    </Link>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        eliminar(item.id);
                      }}
                    >
                      Eleminar
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>

      <Modal
        show={showModalCompanie}
        onHide={CerrarShowModalCompanie}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Creacion Compañia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={storeCompanie}>
            <div className="form-group mt-5">

              <MiLabel className="form-group">Nombre:</MiLabel>

              <MiInput
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />

              <MiLabel className="form-group">Descripcion:</MiLabel>
              <MiInput
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />

              <MiLabel className="form-group">Email:</MiLabel>
              <MiInput
                type="Email"
                className="form-control"
                id="emailCompanies"
                value={emailCompanies}
                onChange={(event) => {
                  setEmailCompanies(event.target.value);
                }}
              />

              <SelectorPais required value={countryId} onChange={(e)=>{setCountryId(e.target.value)}}></SelectorPais>
              <SelectorCity parentToChild={countryId} required value={cityId} onChange={(e)=>{setCityId(e.target.value)}}></SelectorCity>

            </div>
            <MiBoton className="btn btn-primary">Crear Compañia</MiBoton>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={CerrarShowModalCompanie}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
