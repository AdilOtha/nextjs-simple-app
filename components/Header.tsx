import React from "react";
import headerStyles from "../styles/Header.module.css";

const Nav: React.FC = () => {
  return (
    <>
      <div>
        <h1 className={headerStyles.title}>
          <span>WebDev</span> News
        </h1>
      </div>
      <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
    </>
  );
};

export default Nav;
