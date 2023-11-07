import StatisticBox from "./StatisticBox";

const Statistic = () => {
  return (
    <div className="flex justify-around flex-wrap">
      <div className="mt-2">
        <StatisticBox
          title={"Total Page Views"}
          numberInfo={"12 345"}
          description={"33% more than last month"}
        />
      </div>
      <div className="mt-2">
        <StatisticBox
          title={"New comments"}
          numberInfo={"125"}
          description={"13% more than last month"}
        />
      </div>
      <div className="mt-2">
        <StatisticBox
          title={"New ratings"}
          numberInfo={"1 251"}
          description={"7% more than last month"}
        />
      </div>
    </div>
  );
};

export default Statistic;
