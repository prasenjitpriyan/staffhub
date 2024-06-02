const Navbar = () => {
  return (
    <nav className="flex justify-center bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a className="text-4xl font-semibold" href="/">
            StaffHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
