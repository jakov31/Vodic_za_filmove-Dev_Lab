const StatisticBox = ({ title, numberInfo, description }) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">{title}</div>
        <div className="stat-value">{numberInfo}</div>
        <div className="stat-desc">{description}</div>
      </div>
    </div>
  );
};

export default StatisticBox;
