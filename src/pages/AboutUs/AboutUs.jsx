import AboutUsSinglePersonCard from "./AboutUsSinglePersonCard";

const AboutUs = () => {
  return (
    <div>
      <AboutUsSinglePersonCard
        name={"Jakov Janjušević"}
        description={"Frontend Developer | React JS"}
        gitHubLink={"https://github.com/jakov31"}
        image={"./assets/Jakov.jpg"}
      />
      <AboutUsSinglePersonCard
        name={"Željko Bolević"}
        description={"Backend Developer | Django"}
        gitHubLink={"https://github.com/zeljko001"}
        image={"./assets/Željko.jpg"}
      />
      <AboutUsSinglePersonCard
        name={"Predrag Radićević"}
        description={"Frontend Developer | React JS"}
        gitHubLink={"https://github.com/Djaponijum"}
        image={"./assets/Pedja.jpg"}
      />
    </div>
  );
};

export default AboutUs;
