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
    console.log("auth", auth);
    setUser(auth);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
