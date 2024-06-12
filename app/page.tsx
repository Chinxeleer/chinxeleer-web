'use client'
import Hero from "@/components/Hero";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
	return (
		<section className="flex flex-col flex-1 justify-center items-center w-full h-full">
			<div className="flex flex-col min-w-[50px] gap-2">
				<Avatar className="h-20 w-20">
					<AvatarImage src={`profile.jpg`} alt="BK" />
					<AvatarFallback>BK</AvatarFallback>
				</Avatar>
				<h2 className="text-center font-bold">Student</h2>
			</div>
			<Hero />
		</section>
	);
}
