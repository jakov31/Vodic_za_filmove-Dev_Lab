import { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonClassic from "../../components/ButtonClassic";
import InputForm from "../../components/InputForm";
import CountryDropdown from "./CoutnryDropdown";

const SignIn = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeDataValue = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      return;
    }

    console.log("form submited", registerData);
  };

  return (
    <div className="flex justify-center mt-[10%]  mx-auto w-[90%]">
      <form onSubmit={submitFormHandler} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <InputForm
            name={"firstName"}
            labelText={"First Name"}
            placeholder="Petar"
            type={"text"}
            design={" md:w-1/2"}
            onChange={onChangeDataValue}
          />

          <InputForm
            name={"lastName"}
            labelText={"Last Name"}
            placeholder="Petrovic"
            type={"text"}
            design={" md:w-1/2"}
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
            name={"confirmPassword"}
            labelText={"Confirm password"}
            type="password"
            placeholder={"******************"}
            design={" md:w-1/2"}
            onChange={onChangeDataValue}
          />
        </div>
        <CountryDropdown />
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
