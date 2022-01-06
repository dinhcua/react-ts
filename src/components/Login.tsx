import { Input, Modal } from "antd";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AuthContext } from "../contexts/AuthContext";

interface ILoginProps {
  isOpen: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}
const Login = ({ isOpen, handleClose }: ILoginProps) => {
  //context

  const { toggleAuth } = useContext(AuthContext);

  const handleOk = () => {
    onLoginSubmit();
    handleClose(false);
  };

  const [username, setUsername] = useState("");

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const onLoginSubmit = () => {
    toggleAuth(username);
    setUsername("");
  };
  return (
    <Modal
      title="Login"
      visible={isOpen}
      onOk={handleOk}
      onCancel={handleClose.bind(this, false)}
    >
      <p>Username</p>
      <Input
        onChange={onUsernameChange}
        placeholder="Enter your username"
        value={username}
      ></Input>
    </Modal>
  );
};

export default Login;
