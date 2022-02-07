import React from "react";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";
import Navbar from "../../components/Navbar/Navbar";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <img src="https://images.unsplash.com/photo-1482731215275-a1f151646268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="rounded mx-auto d-block" alt="..."/>
      <div className="card text-center">
        <div className="card-header">CURSO DE MUROS EN 3D </div>
        <div className="card-body">
          <h5 className="card-title">$250.000 -- 8 horas - CERTIFICADO -</h5>
          <p className="card-text">
            Nuestros cursos son 100% prácticos, con materiales incluídos. Duración: 1 día. Diligencia el formulario y te enviaremos el número de cuenta para que finalices tu inscripción. El cupo queda reservado con el 50% del valor y el día del curso podrás enviar el 50% restante.
            Este 20 de febrero 2022 en Acacias Meta, tendremos el curso de FABRICACIÓN DE MOLDES Y FABRICACIÓN DE PLACAS EN YESO EN 3D. Dos cursos por el precio de uno!
          </p>

          <Link to="/formulario" className="btn btn-dark">
            Inscríbete aquí
          </Link>
        </div>
        <div className="card-footer text-muted">Trae 5 personas y podrás acceder gratis</div>
      </div>
     


      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tema 1: Moldes en caucho de silicona:</h5>
              <p className="card-text">
                
                <ol>Clonar piezas</ol>
                <ol>Elaboración de una plantilla</ol>
                <ol>Encapsulamiento</ol>
                <ol>Tiempos de mezclado</ol>
                <ol>Costos y presupuesto</ol>
              </p>
              <Link to="/productos2" className="btn btn-dark">
                Ver moldes
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Tema 2: Fabricación de placas en yeso con figuras 3D
              </h5>
              <p className="card-text">
                <ol>Técnicas de mezclado, desmolde y secado</ol>
                <ol>Manejo de 3 tipos de moldes: caucho de silicona, fobra de vidrio y pvc</ol>
                <ol>Medición de cantidades en la producción</ol>
                <ol>Tiempos de producción</ol>
                <ol>Costos y presupuestos</ol>
                <ol>Tips de acabados y de instalación</ol>
              </p>
              <Link to="/productos" className="btn btn-dark">
                Ver placas
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Form />
      <Slider />
      <Categories />

      <Footer />
    </>
  );
};

export default About;
