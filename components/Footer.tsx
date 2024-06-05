const Footer = () => {
  return (
    <footer className="fixed bg-inherit bottom-0 flex bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 w-full  justify-center item-center space-x-4">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100 blur-lg z-10"></div>
      <h1 className="z-20 text-sm font-extrabold p-2">&copy; Blessing Kodze</h1>
      <h1 className="z-20 text-sm font-extrabold p-2">
        {new Date().getFullYear()}
      </h1>
    </footer>
  );
};

export default Footer;
