import RegisterForm from "../../components/register/RegisterForm";
import "../../styles/register/register.css";

const Register = () => {
  return (
    <div className="d-flex pt-4 justify-content-center" id="register-page">
      <section id="register-form-container" className="p-4 bg-white mx-3">
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
