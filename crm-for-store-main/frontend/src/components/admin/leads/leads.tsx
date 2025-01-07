"use client";
import { useSelector } from "react-redux";
import { useState } from "react";
import LeadForm from "./LeadForm";
// import { useSelector } from "react-redux";

function Lead() {
  const [show, setShow] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const lead = useSelector((state: any) => state.lead);
  console.log("🚀 ~ file: leads.tsx:10 ~ lead:", lead);

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Leads
            </p>
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-md"
              >
                <p className="text-sm font-medium leading-none text-white">
                  Add Lead
                </p>
              </button>
            </div>
          </div>
        </div>
        {showModal && <LeadForm setShowModal={setShowModal} />}
        <div className="md:p-10 p-5">
          <div className="bg-white shadow-md rounded-md px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <table className="w-full whitespace-nowrap overflow-x-auto">
              <thead>
                <tr className="h-16 w-full text-lg leading-none text-gray-800">
                  <th className="font-bold text-start">Lead Name</th>
                  <th className="font-bold text-start p-2">Email</th>
                  <th className="font-bold text-start p-2">Phone</th>
                  <th className="font-bold text-start p-2">Country</th>
                  <th className="font-bold text-start p-2">Employee Name</th>

                  <th className="font-bold text-start">Status</th>
                  <th className="font-bold text-start">Action</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {lead.map((leads: any, index: number) => {
                  console.log("🚀 ~ file: leads.tsx:50 ~ Lead ~ leads:", leads);

                  return (
                    <tr
                      key={index}
                      className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-400"
                    >
                      <td className=" cursor-pointer">
                        <p className="font-medium">{leads.leadName}</p>
                      </td>
                      <td className="p-2">
                        <p className="font-medium">{leads.email}</p>
                      </td>
                      <td className="p-2">
                        <p className="font-medium">{leads.phone}</p>
                      </td>
                      <td className="p-2">
                        <p className="font-medium">{leads.country}</p>
                      </td>
                      <td className="p-2">
                        <p className="font-medium">{leads.employeeName}</p>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <select>
                            <option value="1">Active</option>
                            <option value="2">Inactive</option>
                          </select>
                        </div>
                      </td>
                      <td className="">
                        {show == index ? (
                          <button
                            onClick={() => setShow(null)}
                            className="focus:outline-none "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              className="rotate-90  "
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
                            onClick={() => setShow(index)}
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
                        {show == index && (
                          <div className="dropdown-content bg-white shadow w-28 absolute z-30 right-0 mr-7">
                            <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                              <p>Edit</p>
                            </div>
                            <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                              <p>Delete</p>
                            </div>
                            <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                              <p>Add to client</p>
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

export default Lead;
