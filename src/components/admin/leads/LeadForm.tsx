"use client";
import { addLead } from "@/redux/features/leadSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux/es/exports";
import { useState } from "react";

type LeadState = {
  leadName: string;
  email: string;
  phone: string;
  country: string;
  employeeName: string;
};
interface Prop {
  setShowModal: (value: boolean) => void;
}
const LeadForm = ({ setShowModal }: Prop) => {
  const dispatch = useDispatch<AppDispatch>();
  const [leads, setLeads] = useState<LeadState>({
    leadName: "",
    email: "",
    phone: "",
    country: "",
    employeeName:"",
  });
  console.log("🚀 ~ file: LeadForm.tsx:23 ~ LeadForm ~ leads:", leads);

  const handleClick = () => {
    dispatch(addLead(leads));
    setShowModal(false);
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setLeads((prevLeads) => ({
      ...prevLeads,
      [name]: value,
    }));
  };
  return (
    <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed bg-white inset-0 z-50 outline-none focus:outline-none">
      <div className="relative mx-auto w-full h-full">
        {/*content*/}
        <div className="border-0 relative flex flex-col w-full h-full   outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-md">
            <h3 className="text-3xl font-semibold">Add Leads</h3>
            <button
              className="p-1 ml-auto border-0 text-black hover:opacity-50 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
          {/*body*/}

          {/* Client Form */}

          <form className=" justify-center mx-auto w-full">
            <div className="relative p-6 flex justify-center pb-10">
              <div className="w-96">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="leadName"
                    >
                      Lead Name
                    </label>
                    <input
                      id="leadName"
                      onChange={handleChange}
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your name"
                      name="leadName"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center pb-10">
              <div className="w-96">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <input
                      id="Email"
                      onChange={handleChange}
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your email"
                      name="email"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center pb-10">
              <div className="w-96">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="Phone"
                    >
                      Phone
                    </label>
                    <input
                      id="username"
                      onChange={handleChange}
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your phone number"
                      name="phone"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center pb-10">
              <div className="w-96">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="Project"
                    >
                      Country
                    </label>
                    <input
                      onChange={handleChange}
                      id="username"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your Company"
                      name="country"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center pb-10">
              <div className="w-96">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="Project"
                    >
                      Employee Name
                    </label>
                    <input
                      onChange={handleChange}
                      id="username"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter your Company"
                      name="employeeName"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative p-6 flex justify-center pb-10">
              <div className="w-96">
                <div className="relative h-10 w-full">
                  <div>
                    <button
                      onClick={handleClick}
                      className="bg-indigo-600 w-full   text-white hover:bg-blue-700 font-normal py-2 px-4 rounded-md"
                    >
                      Add Lead
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

export default LeadForm;
