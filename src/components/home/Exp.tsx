import React from "react";
import ExpBlock from "./ExpBlock";
import { APdata } from "@/data/ExpData";

function Exp() {
  const apData = APdata;
  return (
    <div className="w-full lg:w-2/3 lg:p-24 p-20 flex flex-col gap-4">
      <section>
        <article className="p-2">
          <p className="text-4xl font-bold">EXPERIENCE</p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 m-4">
            {apData.map((data) => (
              <a
                key={data.title}
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <ExpBlock data={data} />
                </div>
              </a>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default Exp;
