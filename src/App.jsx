import Contact from "../Component/Contact";
import Header from "../Component/Header";
import Me from "../Component/Me";
import Section from "../Component/Section";
import "./App.css";
import { useTranslation } from "react-i18next";
function App() {
  const { t } = useTranslation();
  const sections = t("projects", { returnObjects: true });
  return (
    <>
      <Header />
      <Me />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          alignItems: "center",
        }}
      >
        <Contact />

        {sections.map((section, i) => {
          return (
            <Section
              key={i}
              name={section.projectName}
              discribtion={section.projectDisc}
              images={section.projectImgs}
            />
          );
        })}
      </div>

      <p style={{ width: "80%", marginBlock: "8px", marginInline: "10%" }}>
        {t("thanks")}
      </p>
    </>
  );
}

export default App;
