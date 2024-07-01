import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Summary = () => {
  const formData = useSelector((state) => state.formData);

  return (
    <div className="bg-purple-100 flex flex-col items-center justify-center min-h-screen max-md:px-4">
      <div className="font-poppins w-1/2 max-xl:w-3/4 max-sm:w-full max-md:p-6 p-12 h-full bg-white text-gray-900 rounded-xl">
        <div className="flex justify-between text-purple-500 max-md:text-center max-md:flex-col">
          <h1 className="text-4xl text-center max-xl:text-xl font-bold mb-6 text-purple-600 max-sm:text-lg">
            Summary
          </h1>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="border-1 text-left max-md:text-xs table-auto max-md:table-fixed border-solid border-black">
            <tr>
              <th>Name</th>
              <td className="pl-6">{formData.name}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td className="pl-6">{formData.phone}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td className="pl-6">{formData.email}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td className="pl-6">{formData.date}</td>
            </tr>
            <tr>
              <th>LinkedIn</th>
              <td className="pl-6">
                <a
                  href={formData.linkedin}
                  className="text-purple-400 hover:text-purple-600"
                >
                  {formData.linkedin}
                </a>
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td className="pl-6">{formData.address}</td>
            </tr>
          </table>
        </div>
        <div className="mt-6">
          <Link
            to="/form"
            className="bg-purple-500 text-white px-6 py-2 max-sm:text-xs max-sm:px-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Summary;
