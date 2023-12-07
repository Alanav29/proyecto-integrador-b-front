import "../../styles/aboutUs/cardTeamStyle.css";
import "../../styles/aboutUs/aboutUs.css";
import membersArray from "../../utils/aboutUs/membersInfo";
import CardTeamMember from "../../components/aboutUs/CardTeamMember";
import cuadroNosotros from "../../assets/img/general/cuadro1Gaby.jpg";
import teamLogoImg from "../../assets/img/general/htamalerosLogoSinFondo.png";

const AboutUs = () => {
  return (
    <main id="about-us-container">
      <section className="container my-5">
        <article className="row d-flex align-items-center row-cols-md-2 row-cols-1">
          <div className="col">
            <h2>Alfonso Ferro</h2>
            <p className="justify">
              Alfonso Ferro es un pintor consagrado de origen colombiano
              residente en México. Su estilo se caracteriza por la abstracción y
              fuerza de sus composiciones. Las pinturas se centran en el color,
              el movimiento y la técnica que utiliza. Con frecuencia, podrás
              descubrir paisajes escondidos o formas del mundo real dentro de
              las obras. Trabaja con colores vibrantes y experimenta con
              diferentes formatos, destacando la técnica del acrílico sobre
              lienzo.
            </p>
          </div>
          <div className="col d-flex align-items-center">
            <img className="img-fluid" src={cuadroNosotros} alt="" />
          </div>
        </article>
      </section>

      <section className="container my-5">
        <article className="row d-flex align-items-center flex-row-reverse row-cols-md-2 row-cols-1">
          <div className="col">
            <h2>Nuestro Equipo</h2>
            <p className="justify">
              Somos un equipo de desarrollo <em>Full-Stack</em> apasionado y
              comprometido con la misión de desplegar, mantener y procurar una
              página de <em>e-commerce</em> enfocada en la difusión y el aprecio
              por el arte pictórico. Este equipo, compuesto por talentosos
              profesionales no solo tiene la habilidad técnica necesaria sino
              también una profunda conexión con la creatividad y la expresión
              artística. <br />
              La motivación principal de este equipo es ir más allá de
              simplemente construir una plataforma funcional; aspiramos a crear
              un espacio digital que celebre la belleza única de cada obra de
              arte y fomente una conexión auténtica entre artistas y amantes del
              arte. Cada línea de código, cada elemento de diseño, está
              impulsado por el deseo de ofrecer una experiencia de usuario
              excepcional que destaque la riqueza y diversidad de la pintura.
            </p>
          </div>
          <div className="col d-flex align-items-center">
            <img className="img-fluid" src={teamLogoImg} alt="" />
          </div>
        </article>
      </section>

      <section>
        <h2 className="text-center">Conoce a nuestro equipo</h2>
        <div
          id="cards-container"
          className="d-flex flex-wrap justify-content-center mb-5"
        >
          {membersArray.map((member, index) => {
            return <CardTeamMember memberInfo={member} key={index} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
