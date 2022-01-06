import { Button, Menu, Select, Typography } from "antd";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Login from "./Login";
import WelcomeMessage from "./WelcomeMessage";
const { Option } = Select;
export default function NavBar() {
  //context
  const {
    authInfo: { isAuthenticated },
    toggleAuth,
  } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  //state
  const [loginOpen, setLoginOpen] = useState(false);
  const [position, setPosition] = useState<string>("Full-stack developer");
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);
  const onPositionChange = (value: string) => {
    setPosition(value);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography.Title style={{ color: "white" }} level={3}>
          My movies
        </Typography.Title>
      </div>
      <Menu theme={theme} mode="horizontal">
        <Menu.Item key={1}>
          <Select
            style={{ width: 200 }}
            value={position}
            onChange={onPositionChange}
          >
            <Option key="Full-stack developer">Full-stack developer</Option>
            <Option key="Back-end developer">Back-end developer</Option>
            <Option key="Front-end developer">Front-end developer</Option>
          </Select>
        </Menu.Item>
        <Menu.Item key={3}>
          <WelcomeMessage position={position} />
        </Menu.Item>
        <Menu.Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography.Title level={3} style={{ color: "white" }}>
            {time.toUTCString()}
          </Typography.Title>
        </Menu.Item>
      </Menu>
      <div>
        <Button
          onClick={
            isAuthenticated
              ? toggleAuth.bind(this, "")
              : setLoginOpen.bind(this, true)
          }
        >
          {isAuthenticated ? "Logout" : "Login"}
        </Button>
        <Login isOpen={loginOpen} handleClose={setLoginOpen}></Login>
      </div>
    </div>
  );
}
