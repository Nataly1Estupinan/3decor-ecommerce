
import styles from "./ContactForm.module.css";
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("meqnaplp");
  if (state.succeeded) {
    return <p>Mensaje enviado.!</p>;
  }

  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Escríbenos</h1>
      <div className={styles.Desc}>
          Puedes enviarnos un mensaje si así lo deseas, con mucho gusto lo responderemos.
       </div>
        

      <form className={styles.form} onSubmit={handleSubmit}>
        <h6 htmlFor="email">Tu nombre:</h6>
        <input id="name" type="name" name="Nombres y apellidos" />

        <h6 htmlFor="email">Correo electrónico:</h6>
        <input id="email" type="email" name="E-mail:" />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <h6 htmlFor="message">Mensaje</h6>
        <input id="message" type="message" name="message:" />
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
    
  );
}

export default ContactForm;
