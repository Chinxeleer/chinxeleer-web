"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section>
      <div className="text-slate-200 w-[600px] font-normal">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="h-44 w-44">
            <AvatarImage src={`profile.jpg`} alt="BK" />
            <AvatarFallback>BK</AvatarFallback>
          </Avatar>
          <h2 className="text-center font-bold">Student</h2>
        </div>
        <p>
          {" "}
          {"I'm"} a dedicated{" "}
          <span className="text-orange-800 underline">student</span> with a
          passion for{" "}
          <span className="text-orange-800 underline">
            Computer Science and Applied Science
          </span>
          . I love using neoVim as my text editor of choice and have a deep
          appreciation for{" "}
          <span className="text-orange-800 underline">Rust</span> as my primary
          programming language. My technical toolkit also includes JavaScript,
          TypeScript, Python, and Dart. Additionally, I am currently expanding
          my skills by learning Next.js.{" "}
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <Button variant="outline" className="bg-slate-100 hover:bg-slate-50">
          Drop CV
        </Button>
      </div>
    </section>
  );
};

export default About;
