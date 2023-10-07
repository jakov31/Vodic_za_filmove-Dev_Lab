import ButtonClassic from "../../components/ButtonClassic";
import LabelValue from "./Label-Value";
import PasswordLabelValue from "./PasswordLabelValue";
import UserContext from "../../UserContext";
import { useContext } from "react";

const UserProfile = () => {
  const ctx = useContext(UserContext);

  return (
    <div>
      <div className="flex justify-end">
        <ButtonClassic buttonText={"Log Out"} onClick={ctx.logout} />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2">
        <div className="card max-w-sm">
          <img
            className="w-full"
            src="https://robohash.org/beataesimiliqueomnis.png?size=50x50&set=set1"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">@username</div>
          </div>
        </div>
        <div>
          <LabelValue label={"Ime"} value="Janko" />
          <LabelValue label={"Prezime"} value="Todorovski" />
          <LabelValue label={"Email"} value="Janko@gmail.com" />
          <PasswordLabelValue value={"password"} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
