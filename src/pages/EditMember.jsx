import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditMember = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/employees/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .put(`http://localhost:3000/employees/${id}`, data)
      .then((res) => {
        alert("dataupdated succesfully!");
        setData(res.data);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="mx-14 mt-10">
      <div className="mt-10 text-center font-bold text-2xl">Listed You</div>
      <div className="mt-3 text-center text-sm font-bold">
        Enables managers to create and manage work shifts, share files, and
        communicate with team members.
      </div>
      <div className="p-8">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              type="Name"
              name="name"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Full Name *"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
              type="email"
              name="email"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Email *"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="my-6 flex gap-4">
            <input
              type="Phone Number"
              name="phoneNumber"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Phone Number *"
              value={data.phoneNumber}
              onChange={(e) =>
                setData({ ...data, phoneNumber: e.target.value })
              }
            />
            <input
              type="Salary"
              name="salary"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Salary *"
              value={data.salary}
              onChange={(e) => setData({ ...data, salary: e.target.value })}
            />
          </div>
          <div className="">
            <input
              type="Avatar"
              name="avatar"
              className="mb-10 h-40 w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Put any image link here *"
              value={data.avatar}
              onChange={(e) => setData({ ...data, avatar: e.target.value })}
            />
          </div>
          <div className="flex justify-center gap-5">
            <Link
              to={"/"}
              className="cursor-pointer rounded-lg bg-blue-700 px-10 py-5 text-sm font-semibold text-white"
            >
              Go Home
            </Link>
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
            >
              Edit Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMember;
