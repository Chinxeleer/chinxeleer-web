import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="fixed bg-inherit bottom-0 flex flex-col items-center z-20 text-slate-200 w-full space-x-4">
      <div className="z-10">
        <h1 className=" text-sm font-extrabold p-2">
          <a
            href="https://github.com/Chinxeleer"
            className="flex justify-center hover:text-slate-500 items-center transition-all"
          >
            <ArrowTopRightIcon />
            <p className="pl-2">github</p>
          </a>
        </h1>
      </div>
      <div className="flex">
        <h1 className="z-20 text-sm font-extrabold p-2">Blessing Kodze</h1>
        <h1 className="z-20 text-sm font-extrabold p-2">
          &copy; {new Date().getFullYear()}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
