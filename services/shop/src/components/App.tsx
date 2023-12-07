import cls from "./App.module.scss";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div>
      <h1>Shop module</h1>
      <Outlet />
    </div>
  );
}
