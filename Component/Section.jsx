import Card from "./Card";
import "./section.css";

const Section = ({ name, discribtion, images }) => {
  return (
    <div className="sec-con">
      <h2>{name}</h2>
      <p>{discribtion}</p>
      <div className="sec-card-con">
        {images.map((img, i) => {
          return (
            <Card
              key={i}
              titel={img.titel}
              discribtion={img.disc}
              link={img.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section;
