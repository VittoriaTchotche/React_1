import { useContext } from "react";

export function Hello() {
  const language = useContext(LanguageContext);

  return <h2>{language === "en" ? "Hello world!" : "Ciaone!"}</h2>;
}
