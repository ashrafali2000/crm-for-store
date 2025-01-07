"use client";
import Link from "next/link";
import { useState } from "react";
import AddLeave from "./AddLeave";

const LeaveRequest = () => {
  const [show, setShow] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="w-full overflow-x-auto">
      <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Leave Request
          </p>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            >
              <p className="text-sm font-medium leading-none text-white">
                Add Leave
              </p>
            </button>
          </div>
        </div>
      </div>
      {showModal && <AddLeave setShowModal={setShowModal} />}
      <div className="p-10">
        <div className="bg-white px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto rounded-md shadow-md">
          <table className="w-full whitespace-nowrap overflow-x-auto">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-bold text-center">Employee</th>
                <th className="font-bold text-center px-4 ">Leave Type</th>
                <th className="font-bold text-center  px-4">From</th>
                <th className="font-bold text-center  px-4">To</th>
                <th className="font-bold text-center  px-4">No of Days</th>
                <th className="font-bold text-center  px-4">Reason</th>
                <th className="font-bold text-center  px-4">Status</th>
                <th className="font-bold text-center  px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className=" h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-400">
                <td className="">
                  <p className="font-medium">John Doe</p>
                </td>
                <td className="px-4">
                  <p className="text-sm font-medium  text-gray-800">
                    Casual Leave
                  </p>
                </td>
                <td className="px-4">
                  <p className="text-sm text-gray-800 mt-2">5 May 2017</p>
                </td>
                <td className="px-4">
                  <p className="text-sm leading-3 text-gray-800 mt-2">
                    6 May 2017
                  </p>
                </td>
                <td className="px-4">
                  <p className="text-sm leading-3 text-gray-800 mt-2">2 Days</p>
                </td>
                <td className="px-4">
                  <p className="text-sm leading-3 text-gray-800 mt-2">
                    Going to Lahore
                  </p>
                </td>
                <td className="px-4">
                  <div className="flex items-center">
                    <select>
                      <option value="1">New</option>
                      <option value="2">Pending</option>
                      <option selected value="2">
                        Approved
                      </option>
                      <option value="2">Declined</option>
                    </select>
                  </div>
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
                  {show == 0 && (
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;
