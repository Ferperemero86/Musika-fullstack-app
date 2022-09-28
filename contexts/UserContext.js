import Router from "next/router";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export function Usercheck({ children }) {
  const [user, setUser] = useState(false);

  useEffect(async () => {
    const res = await fetch("/api/user", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });

    const auth = await res.json();

    setUser(auth);
    console.log("USER IN AUTH", user);
    if (!user) {
      Router.push("/login");
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
