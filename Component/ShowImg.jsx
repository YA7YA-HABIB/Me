import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const ShowImg = ({ src, fn }) => {
  return (
    <div id="showimgCon">
      <FontAwesomeIcon
        icon={faClose}
        onClick={() => {
          fn("");
        }}
        className="close"
        size="2x"
      />
      <img src={src} id="showimage" />
    </div>
  );
};

export default ShowImg;
