import { useEffect, useState } from "react";
import NavBar from "./widgets/NavBar/NavBar";
import Main from "./widgets/Main/Main";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
  document.body.style.backgroundColor = darkMode ? "#000" : "#fff";

  if (darkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  localStorage.setItem("theme", darkMode ? "dark" : "light");
}, [darkMode]);

  return (
    <>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main />
    </>
  );
};

export default App;