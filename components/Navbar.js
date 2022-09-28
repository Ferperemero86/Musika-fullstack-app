import { useContext, useState, useEffect } from "react";
import Link from "next/link";
//import { useUser } from "../authentication/hooks";

import { UserContext } from "../contexts/UserContext";

export default function Navbar(props) {
  //const [userLoggedIn, setUserLoggedIn] = useState(false);
  const { user, setUser } = useContext(UserContext);

  console.log("VALUEee", user);

  async function handleLogout() {
    await fetch("/api/logout");
    setUser(() => false);
    //mutate({ user: null });
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {user.user ? (
            <>
              <li>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <a role="button" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/signup">
                  <a>Sign up</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          max-width: 42rem;
          margin: 0 auto;
          padding: 0.2rem 1.25rem;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:first-child {
          margin-left: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
          cursor: pointer;
        }
        header {
          color: #fff;
          background-color: #333;
        }
      `}</style>
    </header>
  );
}