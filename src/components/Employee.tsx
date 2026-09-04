import EditEmployee from "./EditEmployee";

interface EmployeeProps {
  name?: string;
  role?: string;
  experience?: string;
  image?: string;
  id?: number;
}

function Employee({ name, role, experience, image }: EmployeeProps) {
  return (
    <div className="flex w-full flex-col gap-2 m-2 p-8 sm:w-[420px] sm:flex-row sm:items-center border border-amber-50 shadow-lg rounded-xl px-12 sm:gap-6 sm:py-4">
      <img
        className="mx-auto rounded-full object-cover h-[100px] w-[100px] block h-24 sm:mx-0 sm:shrink-0"
        src={image || "/img/erin-lindford.jpg"}
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">{name}</p>
          <p className="font-medium text-gray-500">{role}</p>
          <p className="font-medium text-gray-500">{experience}</p>
        </div>

        <div>
          <EditEmployee name={name} role={role} />
        </div>
      </div>
    </div>
  );
}

export default Employee;
