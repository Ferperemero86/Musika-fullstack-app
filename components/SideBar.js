import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../contexts/UserContext";

import styles from "../styles/components/SideBar.module.scss";

export default function SideBar() {
  const { user } = useContext(UserContext);
  const userLoggedIn = user.user;

  if (!userLoggedIn) return null;
  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
          <li>
            <Link href="/search">Your Library</Link>
          </li>
          <hr className={styles.separator} />
          <li>
            <Link href="/newplaylist">Create Playlist</Link>
          </li>
          <li>
            <Link href="/favourites">Favorites</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
