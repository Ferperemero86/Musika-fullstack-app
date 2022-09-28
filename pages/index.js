import { useEffect, useContext } from "react";
import styles from "../styles/pages/Home.module.scss";
import { fetcher } from "../authentication/hooks";
import useSWR from "swr";
import { UserContext } from "../contexts/UserContext";
import Router from "next/router";

export default function HomePage({ value }) {
  return (
    <div className="wrapper">
      <main className="content">
        <div className={styles.hero}>
          <h1 className="main-heading">Home</h1>
        </div>
      </main>
    </div>
  );
}

//export async function getStaticProps(ctx) {
//  const result = await fetch("http://localhost:3000/api/playlists");
//
//  const playlists = await result.json();
//
//  console.log("PLAYLISTS", playlists);
//
//  return {
//    props: { playlists },
//  };
//}
