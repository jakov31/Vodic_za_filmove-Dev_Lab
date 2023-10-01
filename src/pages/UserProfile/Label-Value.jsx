const LabelValue = ({ label, value }) => {
  return (
    <div className="mt-8 ml-5 md:mt-3">
      <h2 className="font-bold">{label}</h2>
      <p>{value}</p>
    </div>
  );
};

export default LabelValue;
