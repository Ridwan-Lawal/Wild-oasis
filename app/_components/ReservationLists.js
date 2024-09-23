"use client";

import ReservationCard from "@/app/_components/ReservationCard";

import { useOptimistic } from "react";
import { deleteReservation } from "@/app/_lib/action";

export default function ResevationLists({ bookings }) {
  // optimistic mutate the UI
  const [
    // normal data controlled by optimistic (optimistic data)
    optimisticBookings,

    // setter function to  update the optimistic data upon click - for the UI
    optimisticDelete,
  ] = useOptimistic(
    // normal data from api
    bookings,

    // Update function to carryout mutation (in this case - to delete)
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    // delete the data optimistacally from the UI
    optimisticDelete(bookingId);

    // delete the data from supabase
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}
