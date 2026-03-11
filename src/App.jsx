import { Plus } from "lucide-react";
import StudentTable from "./components/studentTable";
import AddStudent from "./components/AddStudent";
import { useState } from "react";
import { useSelector } from "react-redux";
import { exportToExcel } from "./utils/exportToExcel";

export default function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const { users } = useSelector((state) => state.user);

  return (
    <div className="bg-gray-200 h-screen">
      <div className="md:w-2/3 m-auto p-3">
        <h1 className="text-center bg-indigo-800 text-white p-2 rounded text-xl font-semibold">
          Student Management
        </h1>

        <div className="flex max-md:flex-col gap-3 items-center justify-between m-5">
          <button
            onClick={() => exportToExcel(users)}
            className="flex items-center gap-3 bg-green-100 border border-black px-8 py-2 rounded cursor-pointer text-green-800 font-semibold"
          >
            <img src="./excel.png" alt="Excel logo" className="h-7 w-7" />
            <p>Export to Excel</p>
          </button>

          <button
            onClick={() => setOpenDialog(true)}
            className="flex items-center gap-2 cursor-pointer px-8 py-2.5 rounded bg-green-800 text-white"
          >
            <Plus /> <p>Add Student</p>
          </button>
        </div>

        {users.length !== 0 ? (
          <StudentTable user={users} />
        ) : (
          <h1 className="text-center text-xl font-semibold">No data found</h1>
        )}
        <AddStudent openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </div>
    </div>
  );
}
