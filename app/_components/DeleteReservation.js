"use client";

import SpinnerMini from "@/app/_components/SpinnerMini";
import { deleteReservation } from "@/app/_lib/action";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";

function DeleteReservation({ bookingId, onDelete }) {
  // step 1
  const [isPending, startTransition] = useTransition();

  // step 2
  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      // step 3 - called the server action inside the startTransition function.
      startTransition(() => () => onDelete(bookingId));
  }

  return (
    <button
      // step 4
      onClick={handleDelete}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
}

export default DeleteReservation;
