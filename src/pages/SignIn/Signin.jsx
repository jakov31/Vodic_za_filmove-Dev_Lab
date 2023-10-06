import { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonClassic from "../../components/ButtonClassic";
import InputForm from "../../components/InputForm";
import { registration } from "../../services/apiRoutes";
import CountryDropdown from "./CoutnryDropdown";

const SignIn = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const onChangeDataValue = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.password2) {
      return;
    }

    const response = registration(JSON.stringify(registerData));

    console.log(response, "reg odg");

    console.log("form submited", registerData);
  };

  return (
    <div className="flex justify-center my-[10%]  mx-auto w-[90%]">
      <form onSubmit={submitFormHandler} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <InputForm
            name={"first_name"}
            labelText={"First Name"}
            placeholder="Petar"
            type={"text"}
            design={" md:w-1/2"}
            onChange={onChangeDataValue}
          />

          <InputForm
            name={"last_name"}
            labelText={"Last Name"}
            placeholder="Petrovic"
            type={"text"}
            design={" md:w-1/2"}
            onChange={onChangeDataValue}
          />

          <InputForm
            name={"username"}
            labelText={"Username"}
            type="username"
            placeholder={"pero334"}
            onChange={onChangeDataValue}
          />

          <InputForm
            name={"email"}
            labelText={"Email"}
            type="email"
            placeholder={"aaaa@gmail.com"}
            onChange={onChangeDataValue}
          />
          <InputForm
            name={"password"}
            labelText={"Password"}
            placeholder={"******************"}
            type="password"
            design={" md:w-1/2"}
            onChange={onChangeDataValue}
          />

          <InputForm
            name={"password2"}
            labelText={"Confirm password"}
            type="password"
            placeholder={"******************"}
            design={" md:w-1/2"}
            onChange={onChangeDataValue}
          />
        </div>
        {/* <CountryDropdown /> */}
        <ButtonClassic type={"submit"} buttonText="Register" />
        <NavLink to={"/login"}>
          <button
            type="button"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            /or log in
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default SignIn;
