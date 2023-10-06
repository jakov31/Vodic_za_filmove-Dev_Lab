import { useState } from "react";
import ButtonClassic from "../../components/ButtonClassic";
import InputForm from "../../components/InputForm";
import ContactUsImage from "./ContactUsImage";
import TextAreaContactUs from "./TextAreaContactUs";
const ContactUs = () => {
  const [contactUsData, setContackUsData] = useState({
    username: "",
    message: "",
  });

  const contactUsDataHandler = (e) => {
    const { name, value } = e.target;
    setContackUsData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const submitContactUsHandler = (e) => {
    e.preventDefault();
    console.log(contactUsData, "contactUsData");
    setContackUsData({ username: "", message: "" });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="py-6">We can't know unless you tell us!</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={submitContactUsHandler}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="@Mary233"
                className="input input-bordered"
                required
                name={"username"}
                onChange={contactUsDataHandler}
                value={contactUsData.username}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>

              <textarea
                name="message"
                className="textarea textarea-bordered h-24"
                placeholder="Your message to us"
                onChange={contactUsDataHandler}
                value={contactUsData.message}
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <ButtonClassic buttonText={"Send"} type={"submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
