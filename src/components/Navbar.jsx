import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link className="text-4xl font-semibold" to="/">
            StaffHub
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
