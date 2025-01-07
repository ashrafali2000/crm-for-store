"use client";
import { useState } from "react";
import AddNotes from "./AddNotes";

const Notesapp = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="w-full overflow-x-auto">
      <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Notes App
          </p>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-500 focus:outline-none rounded-md"
            >
              <p className="text-sm font-medium leading-none text-white">
                Add Notes
              </p>
            </button>
          </div>
        </div>
      </div>

      {showModal && <AddNotes setShowModal={setShowModal} />}
      <div className="relative w-[70%] mx-auto mt-10">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 :text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-5 pl-10 text-sm outline-none text-gray-900 border rounded-md shadow-md bg-gray-50 focus:border-indigo-600"
          placeholder="Find Notes..."
          required
        />
        <button
          type="submit"
          className="text-white absolute right-3 bottom-3 bg-indigo-600  hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
        >
          Search
        </button>
      </div>
      <div className="mx-auto container pt-10 px-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          <div className="rounded">
            <div className="w-full h-[320px] flex flex-col justify-between  bg-white rounded-md border shadow-md mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-800  font-bold mb-3">
                  Khizar Wakeel:
                </h4>
                <div className="h-[200px] overflow-y-auto mb-4">
                  <p className="text-gray-800 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Alias, nesciunt! Sapiente possimus facilis, unde labore
                    dignissimos in ut ipsum repudiandae, provident, natus
                    consectetur obcaecati molestias corrupti impedit mollitia!
                    Quae, corrupti!
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-gray-800 ">
                  <button className="text-blue-500 hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                  <button className="text-red-500 hover:text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-1 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notesapp;
