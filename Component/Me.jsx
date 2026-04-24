import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
const Me = () => {
  const { t } = useTranslation();
  const skills = t("me.skills", { returnObjects: true });
  console.log(skills);

  return (
    <div style={{ padding: "24px" }}>
      <h3>{t("name")}</h3>
      <p style={{ fontSize: "18px" }}>{t("me.disc")}</p>
      <br />
      <h3>{t("me.myskills")}</h3>
      <br />
      <ul>
        {skills.map((skill, i) => {
          return <li key={i}>{skill}</li>;
        })}
      </ul>
      <br />
      <br />
    </div>
  );
};

export default Me;
