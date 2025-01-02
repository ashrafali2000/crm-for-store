"use client";
import { useState } from "react";
import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const [menu1Open, setMenu1Open] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("🚀 ~ file: layout.jsx:17 ~ toggleMenu1 ~ menu1Open:", menu1Open);

  return (
    <div className="w-full h-full bg-gray-200">
      <div className="flex flex-no-wrap">
        {/* Sidebar starts */}
        <div
          // id="Main"
          className="transform hidden showNav scroll-smooth overflow-y-auto xl:translate-x-0 ease-in-out transition duration-500 lg:flex justify-start items-start h-screen w-full custom-scrollbar sm:w-[320px] bg-gray-900 flex-col"
        >
          <div className="hidden lg:flex justify-start p-6 items-center gap-x-3">
            <img src="/logo.png" alt="" className="w-9 h-12" />
            <p className="text-2xl leading-6 text-white">Bawdicsoft</p>
          </div>
          <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
            <Link
              href="/admin-dashboard"
              className="focus:outline-none focus:text-indigo-400 text-left text-white w-full space-x-1"
            >
              <p className="text-sm leading-5 uppercase"> Dashboard</p>
            </Link>
          </div>
          <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
            <Link
              href="/admin-dashboard/notes-app"
              className="focus:outline-none focus:text-indigo-400 text-left text-white w-full space-x-1"
            >
              <p className="text-sm leading-5 uppercase"> Notes App</p>
            </Link>
          </div>
          <div className="mt-6 flex flex-col justify-start items-center px-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
            <button
              onClick={() => setMenu1Open(!menu1Open)}
              className="focus:outline-none focus:text-indigo-400 text-left text-white flex justify-between items-center w-full space-x-1"
            >
              <p className="text-sm leading-5  uppercase">Employees</p>
              <svg
                id="icon1"
                className={`transform ${menu1Open ? "" : "rotate-180"}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 15L12 9L6 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`flex justify-start flex-col w-full md:w-auto items-start pb-1 ${
                menu1Open ? "" : "hidden"
              }`}
            >
              <Link
                href="/admin-dashboard/all-employees"
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
              >
                <p className="text-base leading-4  ">All Employees</p>
              </Link>

              <Link
                href="/admin-dashboard/leave-request"
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
              >
                <p className="text-base leading-4">Leave Request</p>
              </Link>
              <Link
                href="/admin-dashboard/attendance"
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
              >
                <p className="text-base leading-4">Attendance </p>
              </Link>
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-start items-center px-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none focus:text-indigo-400 text-left text-white flex justify-between items-center w-full space-x-1"
            >
              <p className="text-sm leading-5  uppercase">Accounts</p>
              <svg
                id="icon1"
                className={`transform ${menuOpen ? "" : "rotate-180"}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 15L12 9L6 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`flex justify-start flex-col w-full md:w-auto items-start pb-1 ${
                menuOpen ? "" : "hidden"
              }`}
            >
              <Link
                href="/admin-dashboard/invoices"
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
              >
                <p className="text-base leading-4">Invoices</p>
              </Link>

              <Link
                href="/admin-dashboard/payments"
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
              >
                <p className="text-base leading-4">Payments</p>
              </Link>
              <Link
                href="/admin-dashboard/expenses"
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
              >
                <p className="text-base leading-4">Expenses</p>
              </Link>
              <Link
                href="/admin-dashboard/payroll"
                className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
              >
                <p className="text-base leading-4">Payroll</p>
              </Link>
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
            <Link
              href="/admin-dashboard/client"
              className="focus:outline-none focus:text-indigo-400 text-left text-white w-full space-x-1"
            >
              <p className="text-sm leading-5 uppercase"> Clients</p>
            </Link>
          </div>
          <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
            <Link
              href="/admin-dashboard/project"
              className="focus:outline-none focus:text-indigo-400 text-left text-white w-full space-x-1"
            >
              <p className="text-sm leading-5 uppercase">Projects</p>
            </Link>
          </div>

          <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
            <Link
              href="/admin-dashboard/leads"
              className="focus:outline-none focus:text-indigo-400 text-left text-white w-full space-x-1"
            >
              <p className="text-sm leading-5 uppercase">Leads</p>
            </Link>
          </div>
        </div>
        {/*Mobile responsive sidebar*/}
        <div
          className={
            show
              ? "w-full h-full absolute z-40 transform translate-x-0 "
              : "w-full h-full absolute z-40 transform -translate-x-full"
          }
          id="mobile-nav"
        >
          <div
            className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
            onClick={() => setShow(!show)}
          />

          <div className="absolute z-40 sm:relative w-64 md:w-96 h-[100vh] scroll-smooth overflow-y-auto shadow pb-4 bg-gray-900 lg:hidden transition duration-150 ease-in-out custom-scrollbar">
            <div className="flex justify-between items-center">
              <div className="lg:hidden flex justify-start p-6 items-center gap-x-3">
                <img src="/logo.png" alt="" className="w-9 h-12" />
                <p className="text-2xl leading-6 text-white">Bawdicsoft</p>
              </div>
              <div
                id="closeSideBar"
                className="flex items-center justify-center h-10 w-10"
                onClick={() => setShow(!show)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#FFF"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </div>
            </div>
            <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
              <Link
                href="/admin-dashboard"
                className="focus:outline-none focus:text-indigo-400 text-left text-white w-full space-x-1"
              >
                <p className="text-sm leading-5 uppercase"> Dashboard</p>
              </Link>
            </div>
            <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
              <Link
                href="/admin-dashboard/notes-app"
                className="focus:outline-none focus:text-indigo-400 text-left text-white w-full space-x-1"
              >
                <p className="text-sm leading-5 uppercase"> Notes App</p>
              </Link>
            </div>
            <div className="mt-6 flex flex-col justify-start items-center px-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
              <button
                onClick={() => setMenu1Open(!menu1Open)}
                className="focus:outline-none focus:text-indigo-400 text-left text-white flex justify-between items-center w-full space-x-1"
              >
                <p className="text-sm leading-5 uppercase">Employees</p>
                <svg
                  id="icon1"
                  className={`transform ${menu1Open ? "" : "rotate-180"}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`flex justify-start flex-col w-full md:w-auto items-start pb-1 ${
                  menu1Open ? "" : "hidden"
                }`}
              >
                <Link
                  href="/admin-dashboard/all-employees"
                  className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                >
                  <p className="text-base leading-4">All Employees</p>
                </Link>

                <Link
                  href="/admin-dashboard/leave-request"
                  className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                  <p className="text-base leading-4">Leave Request</p>
                </Link>
                <Link
                  href="/admin-dashboard/attendance"
                  className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                >
                  <p className="text-base leading-4">Attendance</p>
                </Link>
              </div>
            </div>
            <div className="mt-6 flex flex-col justify-start items-center px-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none focus:text-indigo-400 text-left text-white flex justify-between items-center w-full space-x-1"
              >
                <p className="text-sm leading-5 uppercase">Accounts</p>
                <svg
                  id="icon1"
                  className={`transform ${menuOpen ? "" : "rotate-180"}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 15L12 9L6 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`flex justify-start flex-col w-full md:w-auto items-start pb-1 ${
                  menuOpen ? "" : "hidden"
                }`}
              >
                <Link
                  href="/admin-dashboard/invoices"
                  className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                >
                  <p className="text-base leading-4">Invoices</p>
                </Link>

                <Link
                  href="/admin-dashboard/payments"
                  className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
                >
                  <p className="text-base leading-4">Payments</p>
                </Link>
                <Link
                  href="/admin-dashboard/expenses"
                  className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                >
                  <p className="text-base leading-4">Expenses</p>
                </Link>
                <Link
                  href="/admin-dashboard/payroll"
                  className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
                >
                  <p className="text-base leading-4">Payroll</p>
                </Link>
              </div>
            </div>
            <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
              <Link
                href="/admin-dashboard/client"
                className="focus:outline-none focus:text-indigo-400 text-left text-white w-full space-x-1"
              >
                <p className="text-sm leading-5 uppercase"> Clients</p>
              </Link>
            </div>
            <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
              <Link
                href="/admin-dashboard/project"
                className="focus:outline-none focus:text-indigo-400 text-left text-white w-full space-x-1"
              >
                <p className="text-sm leading-5 uppercase">Projects</p>
              </Link>
            </div>

            <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
              <Link
                href="/admin-dashboard/leads"
                className="focus:outline-none focus:text-indigo-400 text-left text-white w-full space-x-1"
              >
                <p className="text-sm leading-5 uppercase">Leads</p>
              </Link>
            </div>
          </div>
        </div>
        {/*Mobile responsive sidebar*/}
        {/* Sidebar ends */}
        <div className="w-full">
          {/* Navigation starts */}
          <nav className="h-[10vh] flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
            <div className="hidden lg:flex w-full pr-6">
              <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                <div className="relative w-full"></div>
              </div>
              <div className="w-1/2 hidden lg:flex">
                <div className="w-full flex items-center pl-8 justify-end">
                  <div className="h-full w-20 flex items-center justify-center border-r border-l mr-4">
                    <div className="relative cursor-pointer text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bell"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                      </svg>
                      <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                    </div>
                  </div>

                  <div
                    className="flex items-center relative cursor-pointer"
                    onClick={() => setProfile(!profile)}
                  >
                    <div className="rounded-full">
                      {profile ? (
                        <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                          <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user"
                                width={18}
                                height={18}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={7} r={4} />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                              </svg>
                              <span className="text-sm ml-2">My Profile</span>
                            </div>
                          </li>
                          <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-logout"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                                <path d="M7 12h14l-3 -3m0 6l3 -3" />
                              </svg>
                              <Link href="/" className="text-sm ml-2">
                                Sign out
                              </Link>
                            </div>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                      <div className="relative">
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src="/122337346.jpg"
                          alt="avatar"
                        />
                        <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm mx-3">Ashraf</p>
                    <div className="cursor-pointer text-gray-600">
                      <svg
                        aria-haspopup="true"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chevron-down"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-gray-600 mr-8 visible lg:hidden relative"
              onClick={() => setShow(!show)}
            >
              {show ? (
                " "
              ) : (
                <svg
                  aria-label="Main Menu"
                  aria-haspopup="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu cursor-pointer"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={4} y1={8} x2={20} y2={8} />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              )}
            </div>
          </nav>
          {/* Navigation ends */}
          {/* Remove class [ h-64 ] when adding a card block */}
          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
          <div className="w-full h-[90vh] rounded">
            <div className="overflow-y-auto h-[90vh]">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
