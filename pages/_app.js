import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { Usercheck } from "../contexts/UserContext";
import { createContext, useContext } from "react";

import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Usercheck>
        <Navbar />
        <SideBar />
        <main>
          <div className="container">
            <Component {...pageProps} />
          </div>
        </main>
      </Usercheck>
    </>
  );
}
