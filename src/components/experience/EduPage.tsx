import React from "react";
import SideBar from "./SideBar";
import University from "../home/University";
import Completion from "./Completion";

function EduPage({ title }: { title: string }) {
  return (
    <section>
      <SideBar title={title}>
        <div className="flex flex-col justify-center items-center lg:justify-end lg:items-end h-screen lg:py-96 lg:px-48">
          <University />
          <Completion />
        </div>
      </SideBar>
    </section>
  );
}

export default EduPage;
