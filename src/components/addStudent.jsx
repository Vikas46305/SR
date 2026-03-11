import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/studentSlice.js";

export default function AddStudent({ openDialog, setOpenDialog }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addStudent(data));
    reset();
    setOpenDialog(false);
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Student</DialogTitle>
          <DialogDescription>
            Fill in the student details below.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-4"
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded w-full"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded w-full"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Age"
              className="border p-2 rounded w-full"
              {...register("age", {
                valueAsNumber: true,
                required: "Age is required",
                min: { value: 5, message: "Age must be greater than 5" },
              })}
            />
            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white p-2 rounded cursor-pointer"
          >
            Add Student
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
