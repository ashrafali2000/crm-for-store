interface Prop {
  setShowModal: (value: boolean) => void;
}
const AddLeave = ({ setShowModal }: Prop) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto bg-white  fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative mx-auto w-full h-full">
        {/*content*/}
        <div className="border-0 relative flex flex-col w-full  outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">Add Leave Request</h3>
            <button
              className="p-1 ml-auto border-0 text-black hover:opacity-50 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
          {/*body*/}

          {/* Client Form */}

          <form className=" justify-center md:-auto">
            <div className="relative p-6 flex justify-center">
              <div className="w-[450px]">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block  text-sm font-bold mb-2"
                      htmlFor="leavetype"
                    >
                      Leave Type
                    </label>
                    <select
                      id="leavetype"
                      className="bg-gray-50 border border-indigo-600 text-gray-900 text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="US">Select Leave Type</option>
                      <option value="US">Casual Leave 12 Days</option>
                      <option value="US">Medical Leave</option>
                      <option value="US">Loss of Pay</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-[450px]">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="from"
                    >
                      From
                    </label>
                    <input
                      id="from"
                      type="date"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-[450px]">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="to"
                    >
                      To
                    </label>
                    <input
                      id="to"
                      type="date"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-[450px]">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="Number"
                    >
                      Number of Days
                    </label>
                    <input
                      id="Number"
                      type="number"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your Number of Days"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-[450px]">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="remaingLea"
                    >
                      Remaining Leaves
                    </label>
                    <input
                      id="remaingLea"
                      type="number"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your Remaining Leaves"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:p-6 px-6  flex justify-center">
              <div className="w-[450px]">
                <div className="w-full">
                  <label
                    id="message"
                    className="block mb-2 text-sm text-gray-900 :text-white  pt-5 font-bold"
                  >
                    Description
                  </label>
                  <textarea
                    rows={5}
                    id="message"
                    className="p-2.5 outline-none w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-indigo-600 placeholder-gray-400"
                    placeholder="Enter your message here!"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="relative pt-5 md:p-0 px-6 md:pb- flex justify-center">
              <div className="w-[450px]">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <button
                      onClick={() => {
                        alert("Form Submitted");
                      }}
                      className="bg-indigo-600 w-full   text-white hover:bg-blue-700 font-normal py-2 px-4 rounded-md"
                    >
                      Add Leave
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

export default AddLeave;
