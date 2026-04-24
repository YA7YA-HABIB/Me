import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="ContactCon">
        <ul>
          <li>
            <a href="mailto:yahya5712tyuu@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/963939730486" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yahya_habib7" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/yahya.habib.1650" target="_blank">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </li>
        </ul>
      </div>

      <p style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faArrowAltCircleDown}
          style={{ marginInlineEnd: "8px" }}
        />
        {t("me.projects")}
      </p>
      <br />
      <br />
    </>
  );
};

export default Contact;
