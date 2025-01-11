import React from "react";
import SideBar from "./SideBar";
import { APdata } from "@/data/ExpData";
import ExpBlock from "../home/ExpBlock";
import Link from "next/link";

function APPage({ title }: { title: string }) {
  const expData = APdata;

  return (
    <section>
      <SideBar title={title}>
        <div className="flex justify-center items-center lg:justify-end lg:items-end h-screen p-12 lg:py-96 lg:px-48">
          <div className="grid grid-cols-2 gap-8">
            {expData.map((data) => (
              <Link href={data.href} key={data.title}>
                <div>
                  <ExpBlock data={data} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SideBar>
    </section>
  );
}

export default APPage;
