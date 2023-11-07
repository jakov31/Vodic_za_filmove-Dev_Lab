import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ButtonClassic from "../components/ButtonClassic";
import InputForm from "../components/InputForm";
import ShowsContext from "../Context/ShowsContext";

const AddShowForm = () => {
  // const ctx = useContext(ShowsContext);

  // const { id } = useParams();

  // const EditingItem = ctx.movies.filter(
  //   (item) => item.id.toString() === id.toString()
  // );

  // console.log(EditingItem[0].id);

  const [addShowData, setAddShowData] = useState({
    name: "",
    type: "",
    description: "",
    rating: "",
    year: "",
    image: "",
  });

  const onChangeDataValue = (e) => {
    const { name, value } = e.target;
    setAddShowData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const submitAddMovieData = (e) => {
    e.preventDefault();
    console.log(addShowData);
  };

  return (
    <form onSubmit={submitAddMovieData}>
      <InputForm
        name={"name"}
        labelText={"Name"}
        onChange={onChangeDataValue}
      />
      <InputForm
        name={"type"}
        labelText={"Type"}
        onChange={onChangeDataValue}
      />
      <InputForm
        name={"description"}
        labelText={"Description"}
        onChange={onChangeDataValue}
      />
      {/* <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea> */}
      <InputForm
        name={"rating"}
        labelText={"Rating"}
        type={"number"}
        onChange={onChangeDataValue}
      />
      <InputForm
        name={"year"}
        labelText={"Year"}
        type={"number"}
        onChange={onChangeDataValue}
      />
      <InputForm
        name={"image"}
        labelText={"Image"}
        type={"file"}
        onChange={onChangeDataValue}
      />
      {/* <input type={"file"} /> */}
      <ButtonClassic buttonText={"Add"} />
    </form>
  );
};

export default AddShowForm;
