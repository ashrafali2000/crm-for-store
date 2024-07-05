import { addEmployee } from "@/redux/features/employeeSlice";
import { AppDispatch } from "@/redux/store";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { EmployeeState } from "@/redux/features/employeeSlice";
interface Prop {
  setShowModal: (value: boolean) => void;
}
const EmployeeForm = ({ setShowModal }: Prop) => {
  const dispatch = useDispatch<AppDispatch>();

  const [employees, setEmployees] = useState<EmployeeState>({
    username: "",
    email: "",
    phone: "",
    password: "",
    employeeId: 0,
    joiningDate: "",
    designation: "",
    employeeSalary: 0,
  });
  console.log(
    "🚀 ~ file: employeesForm.tsx:23 ~ EmployeeForm ~ employees:",
    employees
  );
  const handleClick = async () => {
    dispatch(addEmployee(employees));

    try {
      // Make a POST request to your MongoDB API
      const response = await axios.post("/api/employee", employees);

      // Handle the response as needed (e.g., show success message)
      console.log("POST request response:", response.data);
    } catch (error) {
      // Handle errors (e.g., show error message)
      console.error("Error posting data:", error);
    }

    setShowModal(false);
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setEmployees((prevEmployees) => ({
      ...prevEmployees,
      [name]: value,
    }));
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto bg-white fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative mx-auto w-full h-full">
        {/*content*/}
        <div className="border-0 relative flex flex-col w-full h-full*  outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">Add Employee</h3>
            <button
              className="p-1 ml-auto border-0 text-black hover:opacity-50 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
          {/*body*/}

          {/* Client Form */}

          <form
            onSubmit={(e: any) => e.preventDefault()}
            className="md:grid grid-cols-2 gap-x-2 justify-center md:mx-auto"
          >
            <div className="relative p-6 flex justify-center">
              <div className="w-72">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2 "
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      value={employees.username}
                      name="username"
                      onChange={handleChange}
                      id="username"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter username"
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
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      value={employees.email}
                      onChange={handleChange}
                      id="Email"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter Email"
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
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      value={employees.password}
                      name="password"
                      onChange={handleChange}
                      id="password"
                      type="password"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter Password"
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
                      htmlFor="employeeId"
                    >
                      Employee ID
                    </label>
                    <input
                      value={employees.employeeId}
                      name="employeeId"
                      onChange={handleChange}
                      id="employeeId"
                      type="number"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter Employee Id"
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
                      htmlFor="joiningDate"
                    >
                      Joining Date
                    </label>
                    <input
                      value={employees.joiningDate}
                      name="joiningDate"
                      onChange={handleChange}
                      id="joiningDate"
                      type="date"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter Joining Date"
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
                      htmlFor="Phone"
                    >
                      Phone
                    </label>
                    <input
                      value={employees.phone}
                      name="phone"
                      onChange={handleChange}
                      id="Phone"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter Phone Number"
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
                      htmlFor="Phone"
                    >
                      Designation
                    </label>
                    <input
                      value={employees.designation}
                      name="designation"
                      onChange={handleChange}
                      id="Phone"
                      type="text"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter Designation"
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
                      htmlFor="employeeSalary"
                    >
                      Employee Salary
                    </label>
                    <input
                      value={employees.employeeSalary}
                      name="employeeSalary"
                      onChange={handleChange}
                      id="employeeSalary"
                      type="number"
                      className=" border outline-none border-indigo-600  text-sm rounded-md  focus:border-indigo-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 placeholder-gray-800 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Enter Employee Salary"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 relative p-6 flex justify-center pt-10">
              <div className="w-72 md:w-full">
                <div className="relative h-10 w-full">
                  <div className="mb-4">
                    <button
                      onClick={handleClick}
                      className="bg-indigo-600 w-full   text-white hover:bg-blue-700 font-normal py-2 px-4 rounded-md"
                    >
                      Create Employee
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

export default EmployeeForm;
