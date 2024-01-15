import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <form className="accountFormLogin">
      <h1> Sign Up</h1>
      <label htmlFor="SEmail">Email</label>
      <input placeholder="Your Email" name="SEmail" id="SEmail" />
      <label htmlFor="SPassword">Password</label>
      <input placeholder="Your Password" name="SPassword" id="SPassword" />
      <button type="Submit" value="SignUp" className="submitSignUp">
        {" "}
        Submit{" "}
      </button>
      <Link to="/">
        <button value="Home" className="HomeButton">
          {" "}
          Home{" "}
        </button>
      </Link>
    </form>
  );
};

export default SignUp;
