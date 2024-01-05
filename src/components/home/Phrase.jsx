import GeneralButton from '../general/buttons/GeneralButton';
import { Link } from 'react-router-dom';
import '../../styles/home/phrase.css';


const Phrase = () => {

	return (
        <main>
			<section className="mx-2 mx-sm-4">
                <div class="container">
				    <h1 class="display-6 text-center container-name">Alfonso Ferro</h1>
                </div>
			</section>
			<section style={{textAlign: 'center'}}>
				<div class="container">
					<h5 class="font-weight-bold container">
					    "Mi estilo de arte abstracto se centra en el color, el movimiento y la técnica que utilizo para transmitirlo. Con frecuencia, podrás descubrir formas del mundo real dentro de mis obras".
				    </h5>
				</div>
                <Link to={"/AboutUs"}>
                    <GeneralButton buttonText={"Conoce al artista"} buttonColorClass={"bg-black text-white"}/>
                </Link>
			</section>
        </main>
	);
};

export default Phrase;