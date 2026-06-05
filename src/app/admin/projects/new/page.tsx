import ProjectForm from "../_components/ProjectForm"

export const metadata = {
  title: "Add New Project | Admin CMS",
}

export default function NewProjectPage() {
  return (
    <div className=" space-y-6 pb-10">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Create New Project</h1>
        <p className="text-[#90a4cb] mt-1 text-sm">Fill in the details below to add a new project to your portfolio.</p>
      </div>

      <ProjectForm />
    </div>
  )
}
