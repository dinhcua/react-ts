import { MenuTheme } from "antd";
import { ReactNode, useState } from "react";
import { createContext } from "react";

interface ThemeContextProps {
  children: ReactNode;
}
interface ThemeContextDefault {
  theme: MenuTheme;
  toggleTheme: (theme: MenuTheme) => void;
}
const themeContextDefaultData = {
  theme: "dark" as MenuTheme,
  toggleTheme: () => null,
};
export const ThemeContext = createContext<ThemeContextDefault>(
  themeContextDefaultData
);
const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState<MenuTheme>(themeContextDefaultData.theme);
  const toggleTheme = (theme: MenuTheme) => setTheme(theme);
  const themeContextDynamicData = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={themeContextDynamicData}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
