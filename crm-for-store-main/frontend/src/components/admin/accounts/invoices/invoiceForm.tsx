interface Prop {
  setShowModal: (value: boolean) => void;
}
const InvoiceForm = ({ setShowModal }: Prop) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto bg-white fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative mx-auto w-full h-full">
        <div className="border-0 relative flex flex-col w-full outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t px-6">
            <h3 className="text-3xl font-semibold">Create Invoice</h3>
            <button
              className="p-1 ml-auto border-0 text-black hover:opacity-50 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
          <form className="md:grid grid-cols-4 w-full justify-center md:mx-auto pt-5">
            <div className="relative flex p-6 justify-center">
              <div className="w-full">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="client"
                    >
                      Client
                    </label>
                    <select
                      name="client"
                      id="client"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="Khizar">Khizar Wakeel</option>
                      <option value="Huzaifa">Huzaifa Memon</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex p-6 justify-center">
              <div className="w-full">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="project"
                    >
                      Project
                    </label>
                    <select
                      name="project"
                      id="project"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="Khizar">Office Management</option>
                      <option value="Huzaifa">Project Management</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-full">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="text"
                      className="bg-gray-50 border outline-none border-indigo-600 placeholder:text-gray-900 text-gray-900 text-sm rounded-md  block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex p-6 justify-center">
              <div className="w-full">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="project"
                    >
                      Tax
                    </label>
                    <select
                      name="project"
                      id="project"
                      className="bg-gray-50 border border-indigo-700 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-indigo-600 block w-full p-2.5 outline-none"
                    >
                      <option value="Khizar">Select Tax</option>
                      <option value="Huzaifa">VAT</option>
                      <option value="Khizar">GST</option>
                      <option value="Huzaifa">No Tax</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className=" px-6  flex justify-center">
              <div className="w-full">
                <div className="w-full">
                  <label
                    id="address"
                    className="block mb-2 text-sm text-gray-900 :text-white  pt-5 font-bold"
                  >
                    Client Address
                  </label>
                  <textarea
                    rows={5}
                    id="address"
                    className="p-2.5 outline-none w-full text-sm placeholder:text-gray-900 text-gray-900 bg-gray-50 rounded-md border border-indigo-600 placeholder-gray-400"
                    placeholder="Enter your address!"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className=" px-6  flex justify-center">
              <div className="w-full">
                <div className="w-full">
                  <label
                    id="billaddress"
                    className="block mb-2 text-sm text-gray-900 :text-white  pt-5 font-bold"
                  >
                    Billing Address
                  </label>
                  <textarea
                    rows={5}
                    id="billaddress"
                    className="p-2.5 outline-none w-full text-sm placeholder:text-gray-900 text-gray-900 bg-gray-50 rounded-md border border-indigo-600 placeholder-gray-400"
                    placeholder="Enter your bill address"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-full">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="invoiceDate"
                    >
                      Invoice Date
                    </label>
                    <input
                      name="invoiceDate"
                      id="invoiceDate"
                      type="Date"
                      className="bg-gray-50 border outline-none border-indigo-600 text-gray-900 text-sm rounded-md  block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center">
              <div className="w-full">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="dueDate"
                    >
                      Due Date
                    </label>
                    <input
                      name="dueDate"
                      id="dueDate"
                      type="Date"
                      className="bg-gray-50 border outline-none border-indigo-600 text-gray-900 text-sm rounded-md  block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="p-6">
            <div className="bg-white pt-4 md:pt-7 pb-5 overflow-y-auto ">
              <table className="w-full whitespace-nowrap overflow-x-auto">
                <thead>
                  <tr className="h-16 w-full text-sm leading-none text-gray-800">
                    <th className="font-bold text-left px-2">#</th>
                    <th className="font-bold text-left px-2 ">Item</th>
                    <th className="font-bold text-left px-2">Description</th>
                    <th className="font-bold text-left px-2">Unit Cost</th>
                    <th className="font-bold text-left px-2">Qty</th>
                    <th className="font-bold text-left px-2">Amount</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  <tr className=" h-24 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-400">
                    <td className="pl-2">
                      <p>1</p>
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        className="border border-teal-950 p-4"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        className="border border-teal-950 w-80 p-4"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        className="border border-teal-950 p-4 w-28"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        className="border border-teal-950 p-4 w-32"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        className="border border-teal-950 p-4"
                      />
                    </td>
                    <td>
                      <button>Add</button>
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid lg:justify-end p-6 lg:w-full">
            <div className="flex justify-between text-sm py-5 border-b-2 border-gray-400 mb-5">
              <p>Total</p>
              <p>0</p>
            </div>
            <div className="flex justify-between text-sm items-center py-5 border-b-2 border-gray-400 mb-5">
              <p>Tax</p>
              <input
                type="text"
                className="border border-indigo-600 lg:p-3 p-1 text-right outline-none"
              />
            </div>
            <div className="flex gap-x-2 justify-between text-sm items-center py-5 border-b-2 border-gray-400 mb-5">
              <p>Discounts %</p>
              <input
                type="text"
                className="border border-indigo-600 lg:p-3 p-1 outline-none"
              />
            </div>
            <div className="flex justify-between text-sm py-5 border-b-2 border-gray-400 font-bold">
              <p>Grand Total</p>
              <p>$ 0.00</p>
            </div>
          </div>
          <div className="p-6 flex justify-center">
            <div className="w-full">
              <div className="w-full">
                <label
                  id="address"
                  className="block mb-2 text-sm text-gray-900 :text-white  pt-5 font-bold"
                >
                  Other Information
                </label>
                <textarea
                  rows={5}
                  id="address"
                  className="p-2.5 outline-none w-full text-sm placeholder:text-gray-900 text-gray-900 bg-gray-50 rounded-md border border-indigo-600 placeholder-gray-400"
                  placeholder="Enter your other information!"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-x-7 p-6">
            <button className="bg-indigo-600 hover:bg-indigo-500 w-96 text-white font-bold py-2 px-4 rounded-md">
              Save & Send
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-500 w-40 text-white font-bold py-2 px-4 rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
