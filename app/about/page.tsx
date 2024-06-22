"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section>
      <div className="text-orange-400 xl:max-w-[600px] max-w-[300px] text-[12px] xl:text-[20px] text-wrap font-normal">
        <div className="flex flex-col items-center gap-4 mb-8">
          <Avatar className="h-[154px] w-[154px] ">
            <AvatarImage src={`profile.jpg`} alt="BK" />
            <AvatarFallback>BK</AvatarFallback>
          </Avatar>
          <h2 className="text-center font-bold">Student</h2>
        </div>
        <p className="text-[15px] xl:text-[25px] text-center mb-4">
          Hey there <span className="text-slate-400">Blessing Kodze</span> here
          a rustacean aka chinxeleer.
        </p>
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
        <p></p>
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
