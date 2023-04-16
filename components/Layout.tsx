import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
