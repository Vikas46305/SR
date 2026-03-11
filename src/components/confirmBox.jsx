import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../redux/studentSlice.js";

export default function Confirm({
  deleteTable,
  setDeleteTable,
  title = "Confirm Deletion",
  description = "Are you sure you want to delete this item? This action cannot be undone.",
  studentId,
}) {
  const handleDelete = () => {
    dispatch(deleteStudent(studentId));
    setDeleteTable(false);
  };

  const dispatch = useDispatch();

  return (
    <Dialog open={deleteTable} onOpenChange={setDeleteTable}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-red-600">{title}</DialogTitle>

          <DialogDescription className="mt-2">{description}</DialogDescription>
        </DialogHeader>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setDeleteTable(false)}
            className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
