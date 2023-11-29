import React from "react";
import { MainNav } from "./main-nav";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-16 -mt-2 shadow-lg border bottom-0 w-64">
      <MainNav className="mx-5 px-1" />
    </div>
  );
};

export default Sidebar;
