import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../Assets/2.jpg";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import ContactForm from "../Components/ContactForm";

function contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default contact;
