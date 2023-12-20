import LoginForm from "../../components/logIn/LogInForm.jsx";
import "../../styles/contact/contact.css";
import "../../styles/logIn/logIn.css";

const LogIn = () => {
  return (
    <div className="d-flex pt-4 justify-content-center" id="contact-page">
      <section id="contact-form-container" className="p-4 bg-white mx-3">
        <LoginForm />
      </section>
    </div>
  );
};

export default LogIn;
