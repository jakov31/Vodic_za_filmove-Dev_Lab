import { useEffect } from "react";
import { useState } from "react";

const AdminPageTabs = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  const setActiveTabHandler = (id) => {
    setActiveTab(id);
  };

  useEffect(() => {
    props.selectTabHandler(activeTab);
  }, [activeTab]);

  return (
    <div className="tabs ">
      <a
        // className="tab tab-bordered tab-active"
        className={`${"tab tab-bordered"} ${activeTab === 1 && "tab-active"}`}
        onClick={() => setActiveTabHandler(1)}
      >
        Shows
      </a>
      <a
        // className="tab tab-bordered"
        className={`${"tab tab-bordered"} ${activeTab === 2 && "tab-active"}`}
        onClick={() => setActiveTabHandler(2)}
      >
        Users
      </a>
    </div>
  );
};

export default AdminPageTabs;
