import "../../styles/about-us/cardTeamStyle.css";
import membersArray from "../../utils/about-us/members-info";
import htamalerosLogoImg from "../../assets/img/general/htamalerosLogoSinFondo.png";
import CardTeamMember from "../../components/about-us/CardTeamMember";

const AboutUs = () => {
	return (
		<>
			<main>
				<section
					className="container d-flex justify-content-center py-0 py-md-5"
					id="brand-description-container"
				>
					<article className="row row-cols-md-2 row-cols-1">
						<div className="col d-flex flex-column justify-content-center">
							<h2>Alfonso Ferro</h2>
							<p className="justify">
								Alfonso Ferro es un pintor consagrado de origen colombiano
								residente en México. Su estilo se caracteriza por la abstracción
								y fuerza de sus composiciones. Las pinturas se centran en el
								color, el movimiento y la técnica que utiliza. Con frecuencia,
								podrás descubrir paisajes escondidos o formas del mundo real
								dentro de las obras. Trabaja con colores vibrantes y experimenta
								con diferentes formatos, destacando la técnica del acrílico
								sobre lienzo.
							</p>
						</div>
						<div className="col">
							<img
								className="img-fluid rounded-4"
								src="../assets/img/cuadro1Gaby.jpg"
								alt="Cuadro del artista Alonso Ferro con formato horizontal donde destacan los colores amarillos, grises y verdes"
							/>
						</div>
					</article>
				</section>
				<section
					className="container d-flex justify-content-center py-5"
					id="brand-description-container"
				>
					<article className="row row-cols-md-2 row-cols-1">
						<div className="col d-flex flex-column justify-content-center order-md-last">
							<h2>Nuestro Equipo</h2>
							<p className="justify">
								Somos un equipo de desarrollo <em>Full-Stack</em> apasionado y
								comprometido con la misión de desplegar, mantener y procurar una
								página de <em>e-commerce</em> enfocada en la difusión y el
								aprecio por el arte pictórico. Este equipo, compuesto por
								talentosos profesionales no solo tiene la habilidad técnica
								necesaria sino también una profunda conexión con la creatividad
								y la expresión artística. <br />
								La motivación principal de este equipo es ir más allá de
								simplemente construir una plataforma funcional; aspiramos a
								crear un espacio digital que celebre la belleza única de cada
								obra de arte y fomente una conexión auténtica entre artistas y
								amantes del arte. Cada línea de código, cada elemento de diseño,
								está impulsado por el deseo de ofrecer una experiencia de
								usuario excepcional que destaque la riqueza y diversidad de la
								pintura.
							</p>
						</div>
						<div className="col p-5">
							<img
								className="img-fluid rounded-4"
								src={htamalerosLogoImg}
								alt="Lootipo del equipo de desarrolo para este proyecto llamado htamaleros"
							/>
						</div>
					</article>
				</section>
				<h2 className="text-center">Conoce a nuestro equipo</h2>
				<section
					id="cards-container"
					className="d-flex flex-wrap justify-content-center mb-5"
				>
					{membersArray.map((member, index) => {
						return <CardTeamMember memberInfo={member} key={index} />;
					})}
				</section>
			</main>
		</>
	);
};

export default AboutUs;
