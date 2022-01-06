import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
interface WelcomeMessageProps {
  position: string;
  country?: string;
}
export default function WelcomeMessage({
  position,
  country = "Vietnam",
}: WelcomeMessageProps) {
  const {
    authInfo: { username },
  } = useContext(AuthContext);
  return (
    <div>
      Welcome {username} {position} from {country}
    </div>
  );
}
