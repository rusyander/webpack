import React from "react";
import cls from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import { About } from "@/pages/About";

export function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Hello, world!</h1>
      <div className={cls.space}>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
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
