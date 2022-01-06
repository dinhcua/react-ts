import { Button } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ToggleThemeBtn() {
  console.log("sss");

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button
      style={{ position: "fixed", right: "3rem", bottom: "3rem" }}
      onClick={toggleTheme.bind(this, theme === "dark" ? "light" : "dark")}
    >
      toggle theme
    </Button>
  );
}
