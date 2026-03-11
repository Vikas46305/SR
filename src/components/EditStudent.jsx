import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../redux/studentSlice";
import { useEffect } from "react";

export default function EditStudent({ openEdit, setOpenEdit, studentId }) {
  const dispatch = useDispatch();

  const student = useSelector((state) =>
    state.user.users.find((_, index) => index === studentId),
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (student) {
      reset({
        name: student.name,
        email: student.email,
        age: student.age,
      });
    }
  }, [student, reset]);

  const onSubmit = (data) => {
    dispatch(updateStudent({ studentId, ...data }));
    setOpenEdit(false);
  };

  return (
    <Dialog open={openEdit} onOpenChange={setOpenEdit}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Student</DialogTitle>
          <DialogDescription>
            Update the student details below.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "Minimum 3 characters" },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="number"
            placeholder="Age"
            className="border p-2 rounded"
            {...register("age", {
              valueAsNumber: true,
              required: "Age is required",
              min: { value: 5, message: "Minimum age is 5" },
            })}
          />
          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age.message}</p>
          )}

          <button
            type="submit"
            className="bg-indigo-600 text-white p-2 rounded mt-2 cursor-pointer"
          >
            Update Student
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
