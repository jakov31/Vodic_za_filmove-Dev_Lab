import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonClassic from "../components/ButtonClassic";
import AdminPageTabs from "./AdminPageTabs";
import Statistic from "./Statistic";
import Table from "./Table";

const AdminPage = () => {
  const [selectedTab, setSelectedTab] = useState();

  const selectTabHandler = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Statistic />
      <AdminPageTabs selectTabHandler={selectTabHandler} />
      {/* <AddShowForm /> */}
      <Table selectedTab={selectedTab} />
      {selectedTab === 1 && (
        <Link to={"/new"}>
          <ButtonClassic
            // buttonText={`${"+Add "} ${selectedTab === 2 ? "user" : "show"}`}
            buttonText={"+Add show"}
          />
        </Link>
      )}
    </div>
  );
};

export default AdminPage;
