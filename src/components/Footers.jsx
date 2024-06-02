const Footers = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="mt-10 py-10 items-center justify-between sm:flex">
          <p>© {currentYear} StaffHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
