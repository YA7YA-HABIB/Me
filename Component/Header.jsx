import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAfrica,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const Header = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const changeLang = () => {
    if (i18n.language == "en") {
      i18n.changeLanguage("ar");
      localStorage.setItem("ln", "ar");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("ln", "en");
    }
  };

  return (
    <header>
      <h1>{t("name")}</h1>

      <FontAwesomeIcon
        icon={i18n.language == "en" ? faEarthAmerica : faEarthAfrica}
        size="2x"
        className="lang"
        onClick={changeLang}
      />
    </header>
  );
};

export default Header;
