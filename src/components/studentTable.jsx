import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Delete, Pen } from "lucide-react";
import Confirm from "./confirmBox";
import { useState } from "react";
import EditStudent from "./EditStudent";

export default function StudentTable({ user }) {
  const [deleteTable, setDeleteTable] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  return (
    <div className="w-full flex justify-center md:p-6 p-1">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-4">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-center font-semibold">Name</TableHead>
              <TableHead className="text-center font-semibold">Email</TableHead>
              <TableHead className="text-center font-semibold">Age</TableHead>
              <TableHead className="text-end font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {user.map((user, index) => (
              <TableRow className="even:bg-gray-100" key={index}>
                <TableCell className="text-center">{user.name}</TableCell>
                <TableCell className="text-center">{user.email}</TableCell>
                <TableCell className="text-center">{user.age}</TableCell>
                <TableCell className="flex items-center justify-end gap-2">
                  <button
                    className=" cursor-pointer bg-green-600 p-2 rounded-full text-white"
                    onClick={() => {
                      setOpenEdit(true);
                      setSelectedStudentId(index);
                    }}
                  >
                    <Pen size={18} />
                  </button>
                  <button
                    className=" cursor-pointer p-2 bg-red-600 text-white rounded-full"
                    onClick={() => {
                      setDeleteTable(true);
                      setSelectedStudentId(index);
                    }}
                  >
                    <Delete size={18} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Confirm
          deleteTable={deleteTable}
          setDeleteTable={setDeleteTable}
          studentId={selectedStudentId}
        />
        <EditStudent
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
          studentId={selectedStudentId}
        />
      </div>
    </div>
  );
}
