"use client";
import { useEffect, useState } from "react";
import Form from "@/components/admin/employees/all-employees/employeesForm";
import Link from "next/link";
import axios from "axios";

function AllEmployes() {
  const [data, setData] = useState([]);
  
  console.log("🚀 ~ file: employees.tsx:9 ~ AllEmployes ~ data:", data);
  const [show, setShow] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const months = [
    "Jan",
    "Feb,",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
  ];

  const date = new Date();

  const getDay = date.getDate();

  const getMonth = date.getMonth();
  const MonthName = months[getMonth];

  const getFullYear = date.getFullYear();

  const fullDate = `${getDay} ${MonthName} ${getFullYear}`;
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/employee");
      console.log(
        "🚀 ~ file: employees.tsx:37 ~ fetchData ~ response:",
        response.data.allEmployees
      );
      setData(response.data.allEmployees);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Employees
            </p>
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 rounded-md bg-indigo-700 hover:bg-indigo-600 focus:outline-none"
              >
                <p className="text-sm font-medium leading-none text-white">
                  Add Employee
                </p>
              </button>
            </div>
          </div>
        </div>
        {showModal && <Form setShowModal={setShowModal} />}
        <div className="p-10">
          <div className="bg-white px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto rounded-md shadow-md">
            <table className="w-full whitespace-nowrap overflow-x-auto">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-bold text text-center px-5">Name</th>
                  <th className="font-bold text-center px-5">Employee ID</th>
                  <th className="font-bold text-center px-5">Email</th>
                  <th className="font-bold text-center px-5">Mobile</th>
                  <th className="font-bold text-center px-5">Join Date</th>
                  <th className="font-bold text-center px-5">Role</th>
                  <th className="font-bold text-center px-5">Action</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {data.map((data: any, index: number) => {
                  return (
                    <tr
                      key={data._id}
                      className=" h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-400"
                    >
                      <td className="cursor-pointer">
                        <Link
                          href="/admin-dashboard/client/Cream"
                          className="font-medium"
                        >
                          {data?.username}
                        </Link>
                      </td>
                      <td className="px-5">
                        <p className="font-medium">{data?.employeeId}</p>
                      </td>
                      <td className="px-5">
                        <p className="font-medium">{data?.email}</p>
                      </td>
                      <td className="px-5">
                        <p className="font-medium">{data?.phone}</p>
                      </td>
                      <td className="px-5">
                        <p className="  font-medium">{data?.joiningDate}</p>
                      </td>
                      <td className="px-5">
                        <p className="  font-medium">{data?.designation}</p>
                      </td>
                      <td className="px-8">
                        {show == 0 ? (
                          <button
                            onClick={() => setShow(null)}
                            className="focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              className="rotate-90 transition-transform ease-in-out duration-500"
                            >
                              <path
                                d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        ) : (
                          <button
                            onClick={() => setShow(0)}
                            className="focus:outline-none "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              className="rotate-90"
                            >
                              <path
                                d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                                stroke="#A1A1AA"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        )}
                        {show === 0 && (
                          <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                            <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                              <p>Edit</p>
                            </div>
                            <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                              <p>Delete</p>
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllEmployes;
