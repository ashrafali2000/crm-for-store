import { ProjectState } from "@/redux/features/projectSlice";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import { addProject } from "@/redux/features/projectSlice";

import { useDispatch } from "react-redux";

interface Prop {
  setShowModal: (value: boolean) => void;
}
const ProjectForm = ({ setShowModal }: Prop) => {
  const dispatch = useDispatch<AppDispatch>();
  const [projects, setProjects] = useState<ProjectState>({
    projectName: "",
    client: "",
    startDate: "",
    endDate: "",
    amount: "",
    priority: "",
    projectLeader: "",
    teamMember: "",
    description: "",
    uploadFile: null,
  });
  console.log("🚀 ~ file: LeadForm.tsx:23 ~ LeadForm ~ leads:", projects);

  const handleClick = () => {
    dispatch(addProject(projects));
    setShowModal(false);
    setProjects({
    projectName: "",
    client: "",
    startDate: "",
    endDate: "",
    amount: "",
    priority: "",
    projectLeader: "",
    teamMember: "",
    description: "",
    uploadFile: null,
  })
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setProjects((prevProjects) => ({
      ...prevProjects,
      [name]: value,
    }));
  };
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative mx-auto w-full h-full">
        {/*content*/}
        <div className="border-0 relative flex flex-col w-full  bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-md">
            <h3 className="text-3xl font-semibold">Add Project</h3>
            <button
              className="p-1 ml-auto border-0 text-black hover:opacity-50 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
          {/*body*/}

          {/* Client Form */}

          <form className="md:grid grid-cols-2 gap-x-2 justify-center md:mx-auto">
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="username"
                    >
                      Project Name
                    </label>
                    <input
                      name="projectName"
                      onChange={handleChange}
                      id="username"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Project Name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block  text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Client
                    </label>
                    <select
                      value={projects.client}
                      name="client"
                      onChange={handleChange}
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="Global Technologies">
                        Global Technologies
                      </option>
                      <option value="Delta InfoTech">Delta InfoTech</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Start Date
                    </label>
                    <input
                      name="startDate"
                      onChange={handleChange}
                      id="username"
                      type="date"
                      className="bg-gray-50 border outline-none border-indigo-600 text-gray-900 text-sm rounded-md  block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Start date"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      End Date
                    </label>
                    <input
                      name="endDate"
                      onChange={handleChange}
                      id="username"
                      type="date"
                      className="bg-gray-50 border outline-none border-indigo-600 text-gray-900 text-sm rounded-md block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Start date"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block  text-sm font-bold mb-2"
                      id="username"
                    >
                      Amount
                    </label>
                    <input
                      name="amount"
                      onChange={handleChange}
                      type="text"
                      className=" border  border-indigo-600 text-gray-900 text-sm rounded-md block w-full outline-none p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Amount"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex p-6 justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      id="username"
                    >
                      Priority
                    </label>
                    <select
                      defaultValue="High"
                      name="priority"
                      onChange={handleChange}
                      id="countries"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="High">High</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block  text-sm font-bold mb-2"
                      id="username"
                    >
                      Add Project Leader
                    </label>
                    <select
                      defaultValue="Bilal"
                      name="projectLeader"
                      onChange={handleChange}
                      id="countries"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="Atta">Atta</option>
                      <option value="Bilal">Bilal</option>
                      <option value="Zubair">Zubair</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      id="username"
                    >
                      Team Leader
                    </label>
                    <img src="/user.png" className="w-12" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      id="username"
                    >
                      Add Team
                    </label>
                    <select
                      defaultValue="Bilal"
                      name="teamMember"
                      onChange={handleChange}
                      id="countries"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="Atta">Atta</option>
                      <option value="Bilal">Bilal</option>
                      <option value="Zubair">Zubair</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label className=" text-sm font-bold mb-2" id="username">
                      Team Members
                    </label>
                    <div className="flex">
                      <img src="/user.png" className="w-12" alt="" />
                      <img src="/user.png" className="w-12" alt="" />
                      <img src="/user.png" className="w-12" alt="" />
                      <img src="/user.png" className="w-12" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative md:col-span-2 p-6 pb-24 flex justify-center">
              <div className="w-72 md:w-full">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="username"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      onChange={handleChange}
                      id="message"
                      rows={5}
                      className="col-span-2 p-2.5 outline-none  text-sm w-full mx-auto text-gray-900 bg-gray-50 rounded-md border border-indigo-600  :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your message here!"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative md:col-span-2 p-6 flex justify-center mb-5">
              <div className="w-72 md:w-full">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="fileInput"
                    >
                      Upload Files
                    </label>
                    <input
                      name="uploadFile"
                      onChange={handleChange}
                      id="fileInput"
                      type="file"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Project Name"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative md:col-span-2 p-6 flex justify-center">
              <div className="w-72 md:w-full">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <button
                      onClick={handleClick}
                      className="bg-indigo-600 w-full   text-white hover:bg-blue-700 font-normal py-2 px-4 rounded-md"
                    >
                      Create Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
