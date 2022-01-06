import { Alert } from "antd";
import React, { useContext } from "react";
import { ProgressContext } from "../contexts/ProgressContext";

export default function Content() {
  const { lastTime, status } = useContext(ProgressContext);
  return (
    <div>
      <Alert
        style={{ textAlign: "center" }}
        message={`Last time working on this project: ${lastTime} - Status: ${status}}`}
      ></Alert>
    </div>
  );
}
