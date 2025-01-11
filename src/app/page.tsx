"use client"

import Skill from "@/components/home/Skill";
import Profile from "../components/home/Profile";
import Interview from "@/components/home/Interview";
import Exp from "@/components/home/Exp";
import RemoteControl from "@/components/RemoteControl";

export default function Home() {
  return (
    <main className="w-full">
      <section className="w-full flex justify-center items-center mt-48">
        <Profile />
      </section>
      <section className="w-full flex justify-center items-center mt-14">
        <Interview />
      </section>
      <section className="w-full flex justify-center items-center mt-14">
        <Exp />
      </section>
      <section className="w-full flex justify-center items-center mt-14">
        <Skill />
      </section>
      <RemoteControl />
    </main>
  );
}
