import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRecoil, SiTypescript  } from "react-icons/si";
import Badge from "../Badge";

function Skill() {
  const MySkill = [
    {
      icon: <SiTypescript />,
      content: "TypeScript"
    },
    {
      icon: <FaReact />,
      content: "React",
    },
    {
      icon: <TbBrandNextjs />,
      content: "Next.JS",
    },
    {
      icon: <RiTailwindCssFill />,
      content: "Tailwind",
    },
    {
      icon: <SiRecoil />,
      content: "Recoil",
    },
    {
      icon: <></>,
      content: "Zustand"
    }
  ];
  return (
    <div className="w-full lg:w-2/3 lg:p-24 p-20 flex flex-col gap-4">
      <section>
        <article className="p-2">
          <p className="text-4xl font-bold">SKILL</p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 m-4">
            {MySkill.map((skill) => (
              <div key={skill.content}>
                <Badge icon={skill.icon} content={skill.content} />
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default Skill;
