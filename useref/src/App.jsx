import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { Hello } from "./Hello";

function App() {
  const [language, setLanguage] = useState("en");

  function handleLanguage() {
    setLanguage(language);
  }
  return (
    <div>
      <button onClick={() => handleLanguage("it")}>IT</button>
      <button onClick={() => handleLanguage("en")}>EN</button>
      <LanguageContext.Provider value="en">
        <React.StrictMode>
          <Hello />
          <FocusableInput />
        </React.StrictMode>
      </LanguageContext.Provider>
    </div>
  );
}
export default App;
