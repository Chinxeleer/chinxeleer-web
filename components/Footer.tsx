const ArrowIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};
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
            <ArrowIcon />
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
