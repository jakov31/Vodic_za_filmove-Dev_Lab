import { useState } from "react";
import ButtonClassic from "../../components/ButtonClassic";
import InputForm from "../../components/InputForm";
import ContactUsImage from "./ContactUsImage";
import TextAreaContactUs from "./TextAreaContactUs";
const ContactUs = () => {
  const [contactUsData, setContackUsData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactUsDataHandler = (e) => {
    const { name, value } = e.target;
    setContackUsData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const submitContactUsHandler = (e) => {
    e.preventDefault();
    console.log(contactUsData, "contactUsData");
    setContackUsData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div className="py-12 md:px-12">
          <div className="container mx-auto xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
                  <form onSubmit={submitContactUsHandler}>
                    <InputForm
                      labelText={"Your name"}
                      placeholder={"Maria"}
                      type={"text"}
                      name={"name"}
                      onChange={contactUsDataHandler}
                      value={contactUsData.name}
                    />
                    <InputForm
                      labelText={"Your email"}
                      placeholder={"maria@gmail.com"}
                      type={"email"}
                      name={"email"}
                      onChange={contactUsDataHandler}
                      value={contactUsData.email}
                    />

                    <TextAreaContactUs
                      onChange={contactUsDataHandler}
                      value={contactUsData.message}
                    />
                    <ButtonClassic buttonText={"Send"} type="submit" />
                  </form>
                </div>
              </div>
              <ContactUsImage />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactUs;
