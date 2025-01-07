const ProjectSummary = `This is base on E-commerce which is work on donation at bitcoins
right now working on landing page its and its 3D application.
Client response awaited for more correction and make better.`;

const ProjectOverviewData = [
  {
    Category: "Frontend",
    Status: "Active",
    Details: "Framework:\nNext js , Typescript , Tailwind",
    Comments: "Client response awaited for more correction and make better.",
  },
  {
    Category: "Backend",
    Status: "Not-Active",
    Details: "",
    Comments: "",
  },
];

const KeyRisksAndIssuesData = [
  {
    RiskIssueName: "Waiting for Client Response",
    Status: "",
    Owner: "",
    Description: "Client response awaited for more correction and make better.",
  },
];

const page = () => {
  // Project Overview Function

  const renderProjectOverview = () => {
    return (
      <table className="border-collapse border-2 border-slate-400 border-b-4 w-full">
        <thead>
          <tr>
            <th className="border-2 border-slate-400">CATEGORY</th>
            <th className="border-2 border-slate-400">STATUS</th>
            <th className="border-2 border-slate-400">DETAILS</th>
            <th className="border-2 border-slate-400">COMMENTS</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {ProjectOverviewData.map((item, index) => (
            <tr key={index}>
              <td className="border-2 border-slate-400">{item.Category}</td>
              <td className="border-2 border-slate-400">{item.Status}</td>
              <td className="border-2 border-slate-400">{item.Details}</td>
              <td className="border-2 border-slate-400">{item.Comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // Risks and Issues Function

  const renderKeyRisksAndIssues = () => {
    return (
      <table className="border-collapse border-2 border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border-2 border-slate-400">RISK / ISSUE NAME</th>
            <th className="border-2 border-slate-400">STATUS</th>
            <th className="border-2 border-slate-400">OWNER</th>
            <th className="border-2 border-slate-400">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {KeyRisksAndIssuesData.map((item, index) => (
            <tr key={index}>
              <td className="border-2 border-slate-400">
                {item.RiskIssueName}
              </td>
              <td className="border-2 border-slate-400">{item.Status}</td>
              <td className="border-2 border-slate-400">{item.Owner}</td>
              <td className="border-2 border-slate-400">{item.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <section className="py-10">
      {/* Project Status Report */}

      <div className="w-[80%] mx-auto pb-20 ">
        <h1 className="text-4xl pb-5 text-slate-500 font-bold uppercase">
          Project Status Report
        </h1>
        <div className="grid grid-cols-11 gap-0 text-center border-slate-400 border-b-4">
          <div className="border border-slate-400 col-span-2 p-2 font-bold">
            PROJECT NAME
          </div>
          <div className="border border-slate-400 col-span-4 p-2">Bit Cafe</div>
          <div className="border border-slate-400 col-span-2 p-2 font-bold">
            PROJECT NO.
          </div>
          <div className="border border-slate-400 col-span-3 p-2">CW-18</div>
          <div className="border border-slate-400 col-span-4 p-2 font-bold">
            Project Manager
          </div>
          <div className="border border-slate-400 col-span-3 p-2 font-bold">
            PERIOD COVERED
          </div>
          <div className="border border-slate-400 col-span-2 p-2 font-bold">
            DATE OF STATUS ENTRY
          </div>
          <div className="border border-slate-400 col-span-2 p-2 font-bold">
            PROJECTED DATE OF COMPLETION
          </div>
          <div className="border border-slate-400 col-span-4 p-2">M.Bilal</div>
          <div className="border border-slate-400 col-span-3 p-2">1 Month</div>
          <div className="border border-slate-400 col-span-2 p-2">
            31-July-23
          </div>
          <div className="border border-slate-400 col-span-2 p-2">
            31-Aug-23
          </div>
        </div>
      </div>

      {/* Project Summary Section */}

      <div className="w-[80%] mx-auto pt-5 pb-20">
        <h1 className="text-2xl uppercase">Project summary</h1>
        <div className="border border-slate-400 border-b-4 py-10 px-5 text-xl">
          <p>{ProjectSummary}</p>
        </div>
      </div>

      {/* Project Overview */}

      <div className="w-[80%] mx-auto pt-5">
        <h1 className="text-2xl uppercase">Project Overview</h1>
        {renderProjectOverview()}
      </div>

      {/* KEY RISKS AND ISSUES */}

      <div className="w-[80%] mx-auto pt-20">
        <h1 className="text-2xl uppercase">KEY RISKS AND ISSUES</h1>
        {renderKeyRisksAndIssues()}
      </div>
    </section>
  );
};

export default page;