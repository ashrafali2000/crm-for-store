"use client";
import Link from "next/link";
import { useState } from "react";

const Attendance = () => {
  const [show, setShow] = useState<any>(null);
  return (
    <div className="w-full z">
      <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Attendance Sheet
          </p>
        </div>
      </div>
      <div className="p-10">
        <div className="bg-white px-4  pt-4 md:pt-7 pb-5 overflow-y-auto rounded-md shadow-md">
          <table className="w-full whitespace-nowrap overflow-x-auto">
            <thead>
              <tr className="h-16 text-sm leading-none text-gray-800">
                <th className="font-bold text-left ">Employee</th>
                <th className="font-bold text-left ">1</th>
                <th className="font-bold text-left ">2</th>
                <th className="font-bold text-left ">3</th>
                <th className="font-bold text-left ">4</th>
                <th className="font-bold text-left ">5</th>
                <th className="font-bold text-left ">6</th>
                <th className="font-bold text-left ">7</th>
                <th className="font-bold text-left ">8</th>
                <th className="font-bold text-left ">9</th>
                <th className="font-bold text-left ">10</th>
                <th className="font-bold text-left ">11</th>
                <th className="font-bold text-left ">12</th>
                <th className="font-bold text-left ">13</th>
                <th className="font-bold text-left ">14</th>
                <th className="font-bold text-left ">15</th>
                <th className="font-bold text-left ">16</th>
                <th className="font-bold text-left ">17</th>
                <th className="font-bold text-left ">18</th>
                <th className="font-bold text-left ">19</th>
                <th className="font-bold text-left ">20</th>
                <th className="font-bold text-left ">21</th>
                <th className="font-bold text-left ">22</th>
                <th className="font-bold text-left ">23</th>
                <th className="font-bold text-left ">24</th>
                <th className="font-bold text-left ">25</th>
                <th className="font-bold text-left ">26</th>
                <th className="font-bold text-left ">27</th>
                <th className="font-bold text-left ">28</th>
                <th className="font-bold text-left ">29</th>
                <th className="font-bold text-left ">30</th>
                <th className="font-bold text-left ">31</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className=" h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-400">
                <td className="">
                  Khizar Wakeel
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
                <td className="">
                  <img src="/check.png" className="w-4" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
