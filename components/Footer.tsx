import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Footer = () => {
	return (
		<footer className="fixed bg-inherit bottom-0 flex flex-col items-center bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 w-full space-x-4">
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100 blur-lg z-10"></div>

			<div className="z-20">
				<h1 className="z-20 text-sm font-extrabold p-2">
					<a
						href="https://github.com/Chinxeleer"
						className="flex justify-center hover:text-slate-700 items-center transition-all"
					>
						<ArrowTopRightIcon />
						<p className="pl-2">github</p>
					</a>
				</h1>
			</div>
			<div className="flex">
				<h1 className="z-20 text-sm font-extrabold p-2">
					&copy; Blessing Kodze
				</h1>
				<h1 className="z-20 text-sm font-extrabold p-2">
					{new Date().getFullYear()}
				</h1>
			</div>
		</footer>
	);
};

export default Footer;
