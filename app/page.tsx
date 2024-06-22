"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dancingScript } from "@/components/ui/fonts";

export default function Home() {
  return (
    <section className="flex flex-col flex-1 justify-center text-slate-200 items-center w-full h-full">
      <h1
        className={`${dancingScript.className} text-slate-200 font-bold xl:text-[100px] text-[25px]`}
      >
        BLESSING KODZE
      </h1>
      <h2
        className="xl:text-3xl text-[15px]
        "
      >
        Undergrad Student & Software Engineer
      </h2>
      <div className="xl:max-w-[600px] max-w-[300px] sm:p-2 md:p-4">
        <div className="text-center text-wrap pt-6">
          <p className="text-md font-bold">
            Welcome to my personal website, where I share my journey and
            projects in the world of technology.
          </p>
        </div>
      </div>
    </section>
  );
}
