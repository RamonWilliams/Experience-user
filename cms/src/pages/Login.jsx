import { useState, useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";

const Login = () => {

  let navigate = useNavigate();
  const { setJwt, setUser } = useContext(JwtContext);

  const [login, setLogin] = useState({});

  const sendlogin = () => {
    API.post("/user/login", login).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.userInDb));
      setJwt(res.data.token);
      setUser(res.data.userInDb);
      if (res.data.token) {
        navigate("/home");
      }
    });
  }

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  return (
    <section className="login">
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInput}
          />
        </div>
        <div>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInput}
          />
        </div>
        <button type="button" onClick={sendlogin}>Login</button>
      </form>
    </section>
  );
};

export default Login