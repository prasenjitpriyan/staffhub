import { Link } from "react-router-dom";

const AddMember = () => {
  return (
    <div className="mx-14 mt-10">
      <div className="mt-10 text-center font-bold text-2xl">Listed You</div>
      <div className="mt-3 text-center text-sm font-bold">
        Enables managers to create and manage work shifts, share files, and
        communicate with team members.
      </div>
      <div className="p-8">
        <div className="flex gap-4">
          <input
            type="Name"
            name="name"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Full Name *"
          />
          <input
            type="email"
            name="email"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Email *"
          />
        </div>
        <div className="my-6 flex gap-4">
          <input
            type="Phone Number"
            name="phone number"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Phone Number *"
          />
          <input
            type="Salary"
            name="salary"
            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Salary *"
          />
        </div>
        <div className="">
          <input
            type="Avatar"
            name="avatar"
            className="mb-10 h-40 w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Put any image link here *"
          />
        </div>
        <div className="flex justify-center gap-5">
          <Link
            to={"/"}
            className="cursor-pointer rounded-lg bg-blue-700 px-16 py-5 text-sm font-semibold text-white"
          >
            Go Home
          </Link>
          <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
            Book Appoinment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
