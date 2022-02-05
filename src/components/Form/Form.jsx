import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import styles from "./Form.module.css";
import { Link } from "react-router-dom";

const Form = () => {
  const [state, handleSubmit] = useForm("mdobeggr");
  if (state.succeeded) {
    return (
      <>
        <p>Gracias por tu inscripción.</p>
        <div>
          <button>
            <Link to="/">Click aquí para volver a la página principal.</Link>
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      {/* <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="card-img"
            alt="..."
          /> */}

      <div className={styles.container_form}>
        <h3 className="card-title text-center">
          FORMULARIO DE INSCRIPCIÓN 3DECOR
        </h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h6 htmlFor="email">Nombres y apellidos:</h6>
          <input id="name" type="name" name="Nombres y apellidos" />

          <h6 htmlFor="email">Profesión:</h6>
          <input id="name" type="name" name="Nombres y apellidos" />

          <h6 htmlFor="email">Correo electrónico:</h6>
          <input id="email" type="email" name="E-mail:" />

          <h6 htmlFor="email">Tipo de documento:</h6>
          <select name="document-type" required>
            <option
              id="document"
              type="select"
              name="document"
              value="Cédula ciudadanía"
            >
              Cédula de ciudadanía
            </option>
            <option
              id="document"
              type="select"
              name="document"
              value="Cédula extranjero"
            >
              Cédula de extranjero
            </option>
            <option
              id="document"
              type="select"
              name="document"
              value="Pasaporte"
            >
              Pasaporte
            </option>
          </select>

          <h6 htmlFor="email">Número de documento:</h6>
          <input id="number" type="document" name="Documento número: " />

          <h6 htmlFor="email">Edad:</h6>
          <input id="age" type="number" name="age" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br />
          <button
            className="btn btn-dark"
            type="submit"
            disabled={state.submitting}
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
