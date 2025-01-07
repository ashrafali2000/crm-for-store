interface Prop {
  setShowModal: (value: boolean) => void;
}
const AddNotes = ({ setShowModal }: Prop) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative mx-auto w-full h-full">
        {/*content*/}
        <div className="border-0 relative flex flex-col w-full h-screen  bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">Add Notes</h3>
            <button
              className="p-1 ml-auto border-0 text-black hover:opacity-50 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
          {/*body*/}

          {/* Client Form */}
          <form className=" justify-center md:mx-auto pt-20">
            <h2 className=" text-right pr-6 md:pr-6 relative font-normal pb-2">
              Characters left: 50
            </h2>
            <div className="relative flex justify-center px-6">
              <div className="w-[450px]">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <input
                      id="remaingLea"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder:font-bold placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Input Title..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex justify-center">
              <div className="w-[450px]">
                <div className="w-full">
                  <textarea
                    rows={8}
                    id="message"
                    className="p-2.5 outline-none w-full text-sm placeholder:font-bold text-gray-900 bg-gray-50 rounded-md border border-indigo-600 placeholder-gray-400"
                    placeholder="Write your notes here..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center px-6">
              <div className="w-[450px]">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <button
                      onClick={() => {
                        alert("Form Submitted");
                      }}
                      className="bg-indigo-600 w-full   text-white hover:bg-indigo-400 font-normal py-2 px-4 rounded-md"
                    >
                      Create
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

export default AddNotes;
