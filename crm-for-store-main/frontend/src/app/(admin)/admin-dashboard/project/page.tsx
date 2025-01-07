"use client";
import Card from "@/components/admin/projects/card";
import ProjectForm from "@/components/admin/projects/ProjectForm";
import { useState } from "react";
import { useSelector } from "react-redux";
const Page = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const project = useSelector((state: any) => state.project);
  console.log("🚀 ~ file: leads.tsx:10 ~ project:", project);
  return (
    <div className="">
      <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Projects
          </p>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            >
              <p className="text-sm font-medium leading-none text-white">
                Add Project
              </p>
            </button>
          </div>
        </div>
      </div>
      {showModal && <ProjectForm setShowModal={setShowModal} />}

      <div className="grid lg:grid-cols-3 px-8">
    {project.map((projects:any , index:number)=>{
      return (
        <>
            <Card
              projectName={projects.projectName}
              clientName={projects.client}
              description={projects.description}
            />
        </>
      );
    })
    
  }
  </div>
    </div>
  );
};

export default Page;
