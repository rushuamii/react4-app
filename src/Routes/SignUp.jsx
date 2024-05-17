import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../Assets/sign up.jpg";
import Footer from "../Components/Footer";
import SignUpForm from "../Components/SignUpForm";

function SignUp() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="SignUp" />
      <SignUpForm />
      <Footer />
    </div>
  );
}
export default SignUp;
