import NavbarButton from "../Components/NavbarButton";
import AboutUs from "../Components/AboutUs";
import Team from "../Components/Team";
import ContactUs from "../Components/ContactUs";
const Home = () => {
  return (
    <>
      <div className="navbar">
        <NavbarButton Name="AboutUs" refName="aboutus" />
        <NavbarButton Name="Team" refName="team" />
        <NavbarButton Name="ContactUs" refName="contactus" />
        <NavbarButton Name="Login" refName="login" />
        <NavbarButton Name="SignUp" refName="signup" />
      </div>
      <div className="hero" />
      <AboutUs />
      <Team />
      <ContactUs />
    </>
  );
};
export default Home;
