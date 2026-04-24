import { useState } from "react";
import "./Card.css";
import { useTranslation } from "react-i18next";
import ShowImg from "./ShowImg";

const Card = ({ titel, discribtion, link }) => {
  const [showimg, setshowimg] = useState("");
  const { t } = useTranslation();
  return (
    <div>
      <div className="card-con">
        <h4>{titel}</h4>
        <p style={{ fontSize: 13 }}>{discribtion}</p>
        <p style={{ fontSize: 12 }}>{t("card.ms")}</p>
      </div>

      <img
        src={link}
        className="image"
        onClick={() => {
          setshowimg(link);
        }}
      />

      {showimg && <ShowImg src={showimg} fn={setshowimg} />}
    </div>
  );
};

export default Card;
