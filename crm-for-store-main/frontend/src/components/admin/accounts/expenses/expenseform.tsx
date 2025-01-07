interface Prop {
  setShowModal: (value: boolean) => void;
}
const ExpenseForm = ({ setShowModal }: Prop) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto bg-white fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative mx-auto w-full h-full">
        {/*content*/}
        <div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">Add Expense</h3>
            <button
              className="p-1 ml-auto border-0 text-black hover:opacity-50 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
          {/*body*/}

          {/* Client Form */}

          <form className="md:grid grid-cols-2 gap-x-2 justify-center md:mx-auto pt-10">
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="itemname"
                    >
                      Item Name
                    </label>
                    <input
                      name="itemname"
                      id="itemname"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your Item"
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
                      className="block text-sm font-bold mb-2 "
                      htmlFor="purchase"
                    >
                      Purchase From
                    </label>
                    <input
                      name="purchase"
                      id="purchase"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your purchase"
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
                      htmlFor="purchase"
                    >
                      Purchase Date
                    </label>
                    <input
                      name="purchaseDate"
                      id="purchase"
                      type="date"
                      className="bg-gray-50 border outline-none border-indigo-600 text-gray-900 text-sm rounded-md  block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
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
                      htmlFor="purchaseby"
                    >
                      Purchased By
                    </label>
                    <select
                      name="purchaseby"
                      id="purchaseby"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="High">Khizar Wakeel</option>
                      <option value="Low">Huzaifa Memon</option>
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
                      className="block text-sm font-bold mb-2 "
                      htmlFor="amount"
                    >
                      Amount
                    </label>
                    <input
                      name="amount"
                      id="amount"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your amount"
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
                      htmlFor="paidby"
                    >
                      Paid By
                    </label>
                    <select
                      name="paidby"
                      id="paidby"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="cash">Cash</option>
                      <option value="cheque">Cheque</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex p-6 justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" id="status">
                      Status
                    </label>
                    <select
                      name="status"
                      id="status"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
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
                      className="block text-sm font-bold mb-2 "
                      htmlFor="attachment"
                    >
                      Attachments
                    </label>
                    <input
                      name="attachment"
                      id="attachment"
                      type="file"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 relative p-6 flex justify-center pt-10">
              <div className="w-72 md:w-full">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <button className="bg-indigo-600 w-full   text-white hover:bg-indigo-500 font-normal py-2 px-4 rounded-md">
                      Create Expense
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

export default ExpenseForm;