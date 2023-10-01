import { useState } from "react";

const PasswordLabelValue = ({ value }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <div className=" ml-5 mt-3">
      <h2 className="font-bold">Password</h2>
      <input
        onChange={() => {}}
        type={passwordVisible ? "password" : ""}
        value={value}
        disabled={passwordVisible}
      />
      <button
        onClick={() => {
          setPasswordVisible((prev) => !prev);
        }}
      >
        {passwordVisible ? "Show" : "Hide"} password
      </button>
    </div>
  );
};

export default PasswordLabelValue;
