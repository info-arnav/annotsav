import { Link } from "react-router-dom";
const Login = () => {
  return (
    <form className="accountFormLogin">
      <h1> Log In</h1>
      <label htmlFor="LEmail">Email</label>
      <input placeholder="Your Account Email" name="LEmail" id="LEmail" />
      <label htmlFor="LPassword">Password</label>
      <input
        placeholder="Your account Password"
        name="LPassword"
        id="LPassword"
      />
      <button type="Submit" value="Login" className="submitLogin">
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

export default Login;
