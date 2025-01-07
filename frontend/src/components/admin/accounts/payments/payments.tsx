"use client";

import { useState } from "react";
import Link from "next/link";

function Payments() {
  const [show, setShow] = useState<any>(null);
  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Payments
            </p>
          </div>
        </div>
        <div className="md:p-10 p-8">
          <div className="bg-white shadow-md rounded-md px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto ">
            <table className="w-full whitespace-nowrap overflow-x-auto">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-bold text-left px-2">Invoice ID</th>
                  <th className="font-bold text-left px-2 ">Client</th>
                  <th className="font-bold text-left px-2">Payment Type</th>
                  <th className="font-bold text-left px-2">Paid Type</th>
                  <th className="font-bold text-left px-2">Paid Amount</th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className=" h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-400">
                  <td className="cursor-pointer pl-2">
                    <Link
                      href="/admin-dashboard/client/Cream"
                      className="font-medium"
                    >
                      #INV-0001
                    </Link>
                  </td>
                  <td className="p-2">
                    <p className="font-medium">Global Technologies</p>
                  </td>
                  <td className="p-2">
                    <p className="font-medium">Paypal</p>
                  </td>
                  <td className="p-2">
                    <p className="font-medium">	8 Aug 2017</p>
                  </td>
                  <td className="p-2">
                    <p className="font-medium">$500</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payments;