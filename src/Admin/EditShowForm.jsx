import { useContext } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ButtonClassic from "../components/ButtonClassic";
import InputForm from "../components/InputForm";
import ShowsContext from "../Context/ShowsContext";

const EditShowForm = () => {
  const ctx = useContext(ShowsContext);

  const { id } = useParams();
  const navigate = useNavigate();

  console.log(ctx.movies, "filmovictx");

  const EditingItem = ctx.movies.filter(
    (item) => item.id.toString() === id.toString()
  );

  console.log(EditingItem[0], "editing");

  const [addShowData, setAddShowData] = useState({
    id: Math.random(),
    name: EditingItem[0].name,
    characteristics: EditingItem[0].characteristics,
    description: EditingItem[0].description,
    rating: EditingItem[0].rating,
    year: EditingItem[0].year,
    image: EditingItem[0].image,
    show_type: EditingItem[0].show_type,
  });

  const onChangeDataValue = (e) => {
    const { name, value } = e.target;
    setAddShowData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const submitAddMovieData = (e) => {
    e.preventDefault();
    console.log(addShowData, "data show edit");
    ctx.editShow(addShowData, EditingItem[0].id);
    navigate("/adminPage");
  };

  return (
    <form onSubmit={submitAddMovieData}>
      <InputForm
        name={"name"}
        labelText={"Name"}
        onChange={onChangeDataValue}
        value={addShowData.name}
      />
      <InputForm
        name={"type"}
        labelText={"Genre"}
        onChange={onChangeDataValue}
        value={addShowData.characteristics}
      />
      <InputForm
        name={"description"}
        labelText={"Description"}
        onChange={onChangeDataValue}
        value={addShowData.description}
      />
      {/* <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea> */}
      <InputForm
        name={"rating"}
        labelText={"Rating"}
        type={"number"}
        onChange={onChangeDataValue}
        value={addShowData.rating}
      />
      <InputForm
        name={"year"}
        labelText={"Year"}
        type={"number"}
        onChange={onChangeDataValue}
        value={addShowData.year}
      />
      <InputForm
        name={"show_type"}
        labelText={"Show Type"}
        type={"text"}
        onChange={onChangeDataValue}
        value={addShowData.show_type}
      />
      {/* <InputForm
        name={"image"}
        labelText={"Image"}
        type={"file"}
        onChange={onChangeDataValue}
        value={addShowData.image}
      /> */}
      {/* <input type={"file"} /> */}
      <ButtonClassic buttonText={"Save changes"} />
    </form>
  );
};

export default EditShowForm;
