const Footer = () => {
  return (
    <footer className="flex divide-black divide-x justify-center item-center mb-10 space-x-4">
      <h1 className="font-mono px-2">blessingeleer@gmail.com</h1>
      <h1 className="font-mono px-2">{new Date().getFullYear()}</h1>
    </footer>
  );
};

export default Footer;
