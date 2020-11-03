import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";

import classNames from "classnames/bind"; // easy to forget bind!
import styles_Nav from "./Nav.module.scss";

const cn_Nav = classNames.bind(styles_Nav);

type PropsNav = {};

function Nav({}: PropsNav) {
  const history = useHistory();

  const onClick_Link = useCallback(
    (
      event: React.ChangeEvent<
        HTMLDivElement | HTMLButtonElement | HTMLAnchorElement
      >,
      destination: string
    ) => {
      console.log(`going to ${destination}`);
      history.push(destination);
    },
    []
  );

  // button, input, hover (popup), nav, sidebar
  return (
    <nav className={cn_Nav("root")}>
      <div className={cn_Nav("left")}>
        <div
          className={cn_Nav("home")}
          onClick={(event) => onClick_Link(event, "/")}
        >
          {" "}
          Home{" "}
        </div>
      </div>

      <div className={cn_Nav("middle")}>
        <div> Style S </div>
      </div>

      <div className={cn_Nav("right")}>
        <div> designer </div>
      </div>
    </nav>
  );
}

Nav.defaultProps = {};

export default Nav;
