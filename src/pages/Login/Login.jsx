import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ButtonClassic from "../../components/ButtonClassic";
import InputForm from "../../components/InputForm";
import { logIn } from "../../services/apiRoutes";
import UserContext from "../../UserContext";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const ctx = useContext(UserContext);

  const loginDataHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const submitLoginHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await logIn(JSON.stringify(loginData));

      ctx.login(response.data.access);
      // ctx.setUserName(loginData.username);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="flex justify-center mt-[10%] mx-auto w-[90%]">
      <form onSubmit={submitLoginHandler} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3">
          <InputForm
            name={"username"}
            labelText={"Username"}
            placeholder="pero323"
            type={"username"}
            design={" md:w-1/2"}
            onChange={loginDataHandler}
          />
          <InputForm
            name={"password"}
            labelText={"Password"}
            placeholder={"******************"}
            type="password"
            design={" md:w-1/2"}
            onChange={loginDataHandler}
          />
        </div>
        <div className="flex items-center justify-between">
          <ButtonClassic buttonText={"Sign in"} type="submit" />
          <NavLink to={"/register"}>
            <button
              type="button"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              /or register now
            </button>
          </NavLink>
        </div>
        {error && <p className="text-red-600">Somethig is wrong, try again!</p>}
      </form>
    </div>
  );
};

export default Login;
