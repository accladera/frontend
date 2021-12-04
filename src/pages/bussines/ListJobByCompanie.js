import React from "react";
import { Table, ButtonGroup, Button, Row, Container, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
    getListJobByCompanie,deleteJob,postJob
} from "services/BussinesService";
import {
  COMPANY_ID_List_Jobs,
  COMPANY_ID,
} from "navigation/CONSTANTS";
import { Link } from "react-router-dom";
import { MiInput, MiLabel, MiBoton } from './Componentes';
import { SelectorPais,SelectorCity,SelectorTypeContract,SelectorClassifierEnables} from 'components/system';
import PropTypes from 'prop-types';

export const ListJobByCompanie = (props) => {

  const [listaJob, setlistaJob] = useState([]);

  const { idCompanie } = props.match ? props.match.params : { idCompanie: 0 };

  // Modal Crear Trabajo
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [countryId, setCountryId] = useState(0);
  const [cityId, setCityId] = useState(0);
  const [typeContractId, setTypeContractId] = useState(0);

  // Moodle
  const [showModalJob, setShowModalJob] = useState(false);
  const CerrarShowModalJob = () => setShowModalJob(false);
  const AbrirShowModalJob = () => setShowModalJob(true);

  useEffect(() => {
    loadEmpleosByCompanie();
  }, []);

  const loadEmpleosByCompanie = () => {
    getListJobByCompanie(Number(idCompanie))
      .then((response) => {
        if (response) {
            setlistaJob(response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const eliminar = (id) => {
    if (confirm("¿Estás seguro que quieres eliminar esta Empleo?")) {
      fetchJobDELETE(id);
    } else {
      return;
    }
  };


  const storeJob = (e) => {
    e.preventDefault();
    const datos = {
      name,
      description,
      salary,
      cityId,
      countryId,
      typeContractId,
      companyId:idCompanie
      };

    postJob(datos)
    .then(() => {
        CerrarShowModalJob();
        loadEmpleosByCompanie();
    })
    .catch((err) => {
      console.log(err);
    });
    
       
}

  const openModalJob = () => {
    AbrirShowModalJob()
  };

  const fetchJobDELETE = (id) => {
    deleteJob(id)
      .then(() => {
        alert("Empresa eliminada");
        loadEmpleosByCompanie();
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
            openModalJob();
          }}
        >
          Crear Trabajo
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Salario</th>
              <th>Ciudad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaJob.map((item) => (
              <tr key={"tr-" + item.id}>
                <td>{item.name}</td>
                <td>
                  {(item.salary)}
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
                      Postulaciones
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
        show={showModalJob}
        onHide={CerrarShowModalJob}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Creacion Trabajo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={storeJob}>
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

              <MiLabel className="form-group">Salario:</MiLabel>
              <MiInput
                type="number"
                className="form-control"
                id="salary"
                value={salary}
                onChange={(event) => {
                  setSalary(event.target.value);
                }}
              />

              <SelectorPais required value={countryId} onChange={(e)=>{setCountryId(e.target.value)}}></SelectorPais>
              <SelectorCity parentToChild={countryId} required value={cityId} onChange={(e)=>{setCityId(e.target.value)}}></SelectorCity>
              
              <SelectorTypeContract required value={typeContractId} onChange={(e)=>{setTypeContractId(e.target.value)}}></SelectorTypeContract>

            </div>
            <MiBoton className="btn btn-primary">Crear Trabajo</MiBoton>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={CerrarShowModalJob}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

ListJobByCompanie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.array
  })
};