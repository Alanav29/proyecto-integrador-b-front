import GeneralButton from "../general/buttons/GeneralButton";
import { Link } from "react-router-dom";
import "../../styles/home/phrase.css";

const Phrase = () => {
  return (
    <main>
      <section className="mx-2 mx-sm-4" style={{ color: "black" }}>
        <div className="container">
          <h1 className="display-6 text-center">Alfonso Ferro</h1>
        </div>
      </section>
      <section style={{ textAlign: "center" }}>
        <div className="container">
          <h5 className="font-weight-bold">
            "Mi estilo de arte abstracto se centra en el color, el movimiento y
            la técnica que utilizo para transmitirlo. Con frecuencia, podrás
            descubrir formas del mundo real dentro de mis obras".
          </h5>
        </div>
        <Link to={"/AboutUs"}>
          <GeneralButton
            buttonText={"Conoce al artista"}
            buttonColorClass={"btn btn-dark my-4 fs-5 scale-up-center"}
          />
        </Link>
      </section>
    </main>
  );
};

export default Phrase;
