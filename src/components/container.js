import "../styles/container.css";
import "../App.css";

const Container = ({ title, text }) => {
  return (
    <div className="my-container whiteText">
      <div className="containerWrapper blueBackground">
        <div className="container-title">{title}</div>
        <div className="container-text ">{text}</div>
      </div>
    </div>
  );
};

export default Container;
