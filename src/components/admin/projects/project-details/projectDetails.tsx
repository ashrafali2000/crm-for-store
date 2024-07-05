"use client";
import { useState } from "react";
import EditProject from "./EditProject";
import AssignedLeader from "./AssignedLeader";
import AssignedUser from "./AssignedUser";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

const ProjectDetails = () => {
  const params = useParams();
  console.log(
    "🚀 ~ file: projectDetails.tsx:10 ~ ProjectDetails ~ params:",
    params.projectdetails
  );

  const project = useSelector((state: any) => state.project);
 
  const filteredProjects = project.filter(
    (projects: any) => projects.projectName === params.projectdetails
  );
  console.log(
    "🚀 ~ file: projectDetails.tsx:15 ~ filter ~ filter:",
    filteredProjects[0]
  );
  console.log("🚀 ~ file: leads.tsx:10 ~ project:", project);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [assignedLeader, setAssignedLeader] = useState<boolean>(false);
  const [assignedUser, setAssignedUser] = useState<boolean>(false);

  return (
    <div className="w-full overflow-x-auto">
      <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-md-tl-lg rounded-md-tr-lg">
        <div className="flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-md lg:text-2xl font-bold leading-normal text-gray-800">
            Project Details
          </p>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-md"
            >
              <p className="text-sm font-medium leading-none text-white">
                Edit Project
              </p>
            </button>
          </div>
        </div>
      </div>

      {showModal && <EditProject setShowModal={setShowModal} />}
      {assignedLeader && (
        <AssignedLeader setAssignedLeader={setAssignedLeader} />
      )}
      {assignedUser && <AssignedUser setAssignedUser={setAssignedUser} />}
      <div className="lg:grid grid-cols-4 gap-10 px-8 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <div className="col-span-3 p-6 bg-white shadow-md rounded-md ">
          <h1 className="font-bold text-lg">
            {filteredProjects[0].projectName}
          </h1>
          <p className="text-sm opacity-50">2 open tasks, 5 tasks completed</p>
          <p className="mt-5 text-sm">{filteredProjects[0].description}</p>
        </div>
        <div className="p-5 mt-8 lg:mt-0 bg-white rounded-md shadow-md">
          <h1 className="mb-4">Project Details</h1>
          <table className="min-w-full text-left text-sm font-light border">
            <thead className="border-b font-medium dark:border-neutral-500"></thead>
            <tbody>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-2 py-4 font-medium">
                  Cost
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-end">
                  ${filteredProjects[0].amount}
                </td>
              </tr>

              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-2 py-4 font-medium">
                  Start Date:
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-end">
                  {filteredProjects[0].startDate}
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-2 py-4 font-medium">
                  End Date
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-end">
                  {filteredProjects[0].endDate}
                </td>
              </tr>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-2 py-4 font-medium">
                  Priority
                </td>
                <td className="whitespace-nowrap px-2 py-4 text-end">
                  {filteredProjects[0].priority}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="lg:grid grid-cols-4 gap-10 px-8 md:px-10 pt-4 md:pt-7  overflow-y-auto ">
        <div className="col-span-3 bg-white p-6 shadow-md rounded-md">
          <h1 className="font-bold text-lg mb-5">Uploaded image files</h1>
          <div className="gap-x-3 rounded-md grid grid-cols-4">
            <img src="/mee.jpg" alt="" />
            <img src="/mee.jpg" alt="" />
            <img src="/mee.jpg" alt="" />
            <img src="/mee.jpg" alt="" />
          </div>
        </div>
        <div className="p-5 mt-8 lg:mt-0 bg-white shadow-md rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold leading-normal text-gray-800">
              Assigned Leader
            </p>
            <button
              onClick={() => setAssignedLeader(true)}
              className="inline-flex mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-md"
            >
              <p className="text-sm font-medium leading-none text-white">Add</p>
            </button>
          </div>
          {filteredProjects.map((leader: any, index: number) => {
            return (
              <>
                <div key={index} className="items-center flex mt-4 gap-x-4">
                  <div className="bg-gray-400 rounded-md-[50%] w-[38px] h-[38px] text-sm text-white font-extrabold flex items-center justify-center">
                    <span>{leader.projectLeader[0]}</span>
                  </div>
                  <div>
                    <h1 className="font-bold">Mr. {leader.projectLeader}</h1>
                    <h2 className="text-sm">Frontend Developer</h2>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="lg:grid grid-cols-4 gap-10 px-8 md:px-10 pt-4 md:pt-7 pb-5 mt-4 overflow-y-auto">
        <div className="col-span-3 bg-white p-6 shadow-md rounded-md">
          <h1 className="font-bold text-lg mb-5">Uploaded files</h1>
          <div className="bg-white">
            <div className="items-center flex gap-x-4">
              <div className="bg-gray-400 rounded-md-[50%] w-[38px] h-[38px] text-sm text-white font-extrabold flex items-center justify-center">
                <span>H</span>
              </div>
              <div>
                <h1 className="text-sm">
                  AHA Selfcare Mobile Application Test-Cases.xls
                </h1>
                <h2 className="text-xs opacity-50">
                  Richard Miles May 31st at 6:53 PM
                </h2>
                <h3 className="text-sm opacity-50">Size: 14.8Mb</h3>
              </div>
            </div>
            <div className="items-center flex gap-x-4 mt-4">
              <div className="bg-gray-400 rounded-md-[50%] w-[38px] h-[38px] text-sm text-white font-extrabold flex items-center justify-center">
                <span>H</span>
              </div>
              <div>
                <h1 className="text-sm">
                  AHA Selfcare Mobile Application Test-Cases.xls
                </h1>
                <h2 className="text-xs opacity-50">
                  Richard Miles May 31st at 6:53 PM
                </h2>
                <h3 className="text-sm opacity-50">Size: 14.8Mb</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 mt-8 lg:mt-0 bg-white rounded-md shadow-md">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold leading-normal text-gray-800">
              Assigned users
            </p>
            <button
              onClick={() => setAssignedUser(true)}
              className="inline-flex mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded-md"
            >
              <p className="text-sm font-medium leading-none text-white">Add</p>
            </button>
          </div>
          {filteredProjects.map((user: any, index: number) => {
            return (
              <>
                <div key={index} className="items-center flex mt-4 gap-x-4">
                  <div className="bg-gray-400 rounded-md-[50%] w-[38px] h-[38px] text-sm text-white font-extrabold flex items-center justify-center">
                    <span>{user.teamMember[0]}</span>
                  </div>
                  <div>
                    <h1 className="font-bold">Mr. {user.teamMember}</h1>
                    <h2 className="text-sm">Frontend Developer</h2>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
