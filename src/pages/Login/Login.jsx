import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ButtonClassic from "../../components/ButtonClassic";
import InputForm from "../../components/InputForm";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginDataHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const submitLoginHandler = (event) => {
    event.preventDefault();
    console.log("login", loginData);
  };

  return (
    <div className="flex justify-center mt-[10%] mx-auto w-[90%]">
      <form onSubmit={submitLoginHandler} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3">
          <InputForm
            name={"email"}
            labelText={"Email"}
            placeholder="aaaaa@gmail.com"
            type={"email"}
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
          {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button> */}
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
      </form>
    </div>
  );
};

export default Login;
