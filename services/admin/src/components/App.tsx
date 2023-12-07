import cls from "./App.module.scss";
import { Outlet } from "react-router-dom";
import { deepMerge } from "@packages/shared/src/utils/deepMerge";

import { UserCard } from "@packages/shared/src/components/UserCard";

export function App() {
  deepMerge();
  return (
    <div>
      <h1>Admin module</h1>
      <Outlet />
      <UserCard username={"FROM ADMIN"} />
    </div>
  );
}
