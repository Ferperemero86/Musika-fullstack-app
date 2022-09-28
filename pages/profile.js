import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import Router from "next/router";

export default function ProfilePage() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      Router.push("/login");
    }
  });
  return (
    <>
      <h1>Profile</h1>
    </>
  );
}
