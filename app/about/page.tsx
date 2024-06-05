import React from "react";

const About = () => {
  return (
    <section>
      <div className="w-[600px]">
        <p>
          {" "}
          <span className="font-bold text-3xl">Hello!</span> {"I'm"} a dedicated
          {" "}<span className="text-orange-800 underline">student</span> with a
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
    </section>
  );
};

export default About;
