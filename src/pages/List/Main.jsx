import { useState } from "react";
import ButtonClassic from "../../components/ButtonClassic";
import Cart from "./Cart";
import data from "./data";

const Main = ({ filter }) => {
  const [numberOfItems, setNumberOfItems] = useState(6);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {data
          .filter((item) => {
            return filter.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().startsWith(filter);
          })
          .slice(0, numberOfItems)
          .map((item) => (
            <Cart key={item.id} image={item.image} name={item.name} />
          ))}
      </div>
      <div className="flex justify-center">
        {/* <button
          className=" mt-[1rem] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            setNumberOfItems((prev) => prev + 6);
          }}
        >
          Load more...
        </button> */}
        <ButtonClassic
          onClick={() => {
            setNumberOfItems((prev) => prev + 6);
          }}
          buttonText="Load more..."
        />
      </div>
    </>
  );
};

export default Main;
