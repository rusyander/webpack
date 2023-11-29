import React from "react";
import cls from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import { About } from "@/pages/About";

import ReactIcons from "../assets/react.svg";
import BankLogo from "../assets/MyBank.png";

export function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Platform {PLATFORM}</h1>
      <h1>Hello, world!</h1>
      <div className={cls.space}>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <br />
      <div className={cls.spaceImage}>
        {/* <img src={ReactIcons} alt="react" /> */}
        <ReactIcons
          width={100}
          height={100}
          //   style={{ color: "green" }}
          color="green"
        />
        <img src={BankLogo} alt="bank" />
      </div>

      <p>
        <button onClick={() => setCount(count + 1)} className={cls.button}>
          Click me
        </button>
        Clicked {count} times
      </p>
      <Outlet />
      <About />
    </div>
  );
}
