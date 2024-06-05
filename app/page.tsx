import Hero from "@/components/Hero";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="flex flex-col min-w-[50px] gap-2">
        <Avatar className="h-20 w-20">
          <AvatarImage src={`profile.jpg`} alt="BK" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="text-center font-bold">Student</h2>
      </div>
      <Hero />
    </section>
  );
}
