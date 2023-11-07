import { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ShowsContext from "../Context/ShowsContext";

const Table = ({ selectedTab }) => {
  const showsCtx = useContext(ShowsContext);
  //   let contentHeader = [];
  //   let contentBody = [];

  let content = {
    contentHeader: [],
    contentBody: [],
  };

  const tableContent = () => {
    if (selectedTab === 2) {
      content.contentHeader = [{ id: 1, name: "User name", type: "User type" }];

      content.contentBody = [
        { id: 1, name: "Homer", type: "admin" },
        { id: 2, name: "Onore", type: "user" },
      ];

      console.log("1");
      return content;
    } else {
      console.log("2");
      content.contentHeader = [
        { id: 2, name: "Show name", type: "Show type", genre: "Genre" },
      ];
      content.contentBody = showsCtx.movies;

      return content;
    }
  };

  tableContent();

  console.log(content.contentBody, "kontent");

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          {/* <tr>
            <th></th> */}
          {content.contentHeader.map((item) => {
            return (
              <tr key={item.id}>
                <th></th>
                <th>{item.name}</th>
                <th>{item.type}</th>
                {/* <th>Favorite Color</th> */}
                <th>{item.genre ? item.genre : ""}</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            );
          })}
          {/* <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr> */}
        </thead>
        <tbody>
          {/* row 1 */}
          {content.contentBody.map((item) => {
            return (
              <tr key={item.id}>
                <th>{content.contentBody.indexOf(item) + 1}</th>
                <td>{item.name}</td>
                <td>{item.show_type || item.type}</td>
                <td>{item.characteristics}</td>
                {selectedTab === 1 ? (
                  <td>
                    <Link to={`/edit/${item.id}`}>
                      <FiEdit
                        className="hover:cursor-pointer"
                        onClick={() => {
                          console.log("kliknuto edit");
                        }}
                      />
                    </Link>
                  </td>
                ) : (
                  <td>x</td>
                )}
                {selectedTab === 1 ? (
                  <td>
                    <RiDeleteBin2Fill
                      className="hover:cursor-pointer"
                      onClick={() => {
                        console.log("kliknuto delete");
                        showsCtx.removeShow(item.id);
                      }}
                    />
                  </td>
                ) : (
                  <td>x</td>
                )}
              </tr>
            );
          })}
          {/* <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>
              <FiEdit
                onClick={() => {
                  console.log("kliknuto edit");
                }}
              />
            </td>

            <td>
              <RiDeleteBin2Fill
                onClick={() => {
                  console.log("kliknuto delete");
                }}
              />
            </td>
          </tr> */}
          {/* row 2
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          {/* <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
