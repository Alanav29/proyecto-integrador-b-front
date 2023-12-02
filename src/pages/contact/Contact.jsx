import ContactForm from "../../components/contact/ContactForm";
import contactImg from "../../assets/img/general/htamalerosLogoSinFondo.png";

const Contact = () => {
  return (
    <main className="container">
      <section className="row justify-content-center">
        <ContactForm />
        <div className="col-6">
          <img className="img-fluid" src={contactImg} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Contact;
