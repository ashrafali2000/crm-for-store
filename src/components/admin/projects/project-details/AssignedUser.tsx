interface Prop {
  setAssignedUser: (value: boolean) => void;
}
const AssignedUser = ({ setAssignedUser }: Prop) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed bg-white inset-0 z-50 outline-none focus:outline-none">
      <div className="relative mx-auto w-full h-full">
        {/*content*/}
        <div className="border-0 relative flex flex-col w-full  outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-md">
            <h3 className="text-3xl font-semibold">Assigned User</h3>
            <button
              className="p-1 ml-auto border-0 text-black hover:opacity-50 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setAssignedUser(false)}
            >
              x
            </button>
          </div>
          {/*body*/}

          {/* Client Form */}

          <form className="md:w-[50%] w-full mx-auto p-5 md:pt-14">
            <h1 className="text-3xl font-medium mb-5">
              Assigned User to this project
            </h1>
            <div className="relative mb-10">
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
                className="block w-full p-5 pl-10 text-sm outline-none text-gray-900 border rounded-md bg-gray-50 focus:border-indigo-600 shadow-md :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                placeholder="Search a user to assign"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-3 bottom-3 bg-indigo-600  hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
              >
                Search
              </button>
            </div>
            <div className="bg-slate-100 p-2 flex items-center mb-5 rounded-md shadow-md">
              <img src="/user.png" className="w-12 rounded-full mr-1" alt="" />
              <div className="text-sm">
                <h3>Khizar Wakeel</h3>
                <h4 className="font-extralight">Web Developer</h4>
              </div>
            </div>
            <div className="bg-slate-100 p-2 flex items-center mb-5 rounded-md shadow-md">
              <img src="/user.png" className="w-12 rounded-full mr-1" alt="" />
              <div className="text-sm">
                <h3>Khizar Wakeel</h3>
                <h4 className="font-extralight">Web Developer</h4>
              </div>
            </div>
            <div className="bg-slate-100 p-2 flex items-center mb-10 rounded-md shadow-md">
              <img src="/user.png" className="w-12 rounded-full mr-1" alt="" />
              <div className="text-sm">
                <h3>Khizar Wakeel</h3>
                <h4 className="font-extralight">Web Developer</h4>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  alert("Form Submitted");
                }}
                className="bg-indigo-600 justify-center w-full text-white hover:bg-indigo-500 font-normal py-2 px-4 rounded-md"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignedUser;
