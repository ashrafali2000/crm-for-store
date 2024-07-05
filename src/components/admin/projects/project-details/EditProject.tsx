interface Prop {
  setShowModal: (value: boolean) => void;
}
const EditProject = ({ setShowModal }: Prop) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative mx-auto w-full h-full">
        {/*content*/}
        <div className="border-0 relative flex flex-col w-full  bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-md">
            <h3 className="text-3xl font-semibold">Edit Project</h3>
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
                      Add Project Leader
                    </label>
                    <input
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
                      id="countries"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="US">Global Technologies</option>
                      <option value="US">Delta InfoTech</option>
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
                      type="text"
                      className=" border  border-indigo-600 text-gray-900 text-sm rounded-md block w-full outline-none p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Amount"
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
                      id="username"
                    >
                      Priority
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="US">High</option>
                      <option value="US">Low</option>
                      <option value="US">Medium</option>
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
                      id="countries"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="US">Atta</option>
                      <option value="US">Bilal</option>
                      <option value="US">Zubair</option>
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
                      id="countries"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="US">Atta</option>
                      <option value="US">Bilal</option>
                      <option value="US">Zubair</option>
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
                      Discription
                    </label>
                    <textarea
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
                      onClick={() => {
                        alert("Form Submitted");
                      }}
                      className="bg-indigo-600 w-full   text-white hover:bg-blue-700 font-normal py-2 px-4 rounded-md"
                    >
                      Edit Project
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

export default EditProject;