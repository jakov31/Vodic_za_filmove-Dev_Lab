import { NavLink } from "react-router-dom";
import ButtonClassic from "../../components/ButtonClassic";
import InputForm from "../../components/InputForm";
import CountryDropdown from "./CoutnryDropdown";

const SignIn = () => {
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("form submited");
  };

  return (
    <div className="flex justify-center mt-[10%]  mx-auto w-[90%]">
      <form onSubmit={submitFormHandler} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <InputForm
            labelText={"First Name"}
            placeholder="Petar"
            type={"text"}
            design={" md:w-1/2"}
          />

          <InputForm
            labelText={"Last Name"}
            placeholder="Petrovic"
            type={"text"}
            design={" md:w-1/2"}
          />

          <InputForm
            labelText={"Email"}
            type="email"
            placeholder={"aaaa@gmail.com"}
          />
          <InputForm
            labelText={"Password"}
            placeholder={"******************"}
            type="password"
            design={" md:w-1/2"}
          />

          <InputForm
            labelText={"Confirm password"}
            type="password"
            placeholder={"******************"}
            design={" md:w-1/2"}
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
