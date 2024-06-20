"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { dancingScript } from "@/components/ui/fonts";

export default function Home() {
  return (
    <section className="flex flex-col flex-1 justify-center text-slate-200 items-center w-full h-full">
      <h1 className={`${dancingScript.className} text-slate-200 font-bold text-[100px]`}>
        BLESSING KODZE
      </h1>
      <h2 className="text-3xl
        ">Undergrad Student & Software Engineer</h2>
      <div className="max-w-[600px] sm:p-2 md:p-4">
        <div className="text-center pt-6">
          <p className="text-md font-bold">
            Welcome to my personal website, where I share my journey and
            projects in the world of technology.
          </p>
        </div>
      </div>
    </section>
  );
}
