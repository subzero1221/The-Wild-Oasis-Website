import SelectGuestsNum from "@/app/_components/SelectGuestsNum";
import { editReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import ClientButtton from "@/app/_components/ClientButton";

export default async function Page({ params }) {
  const reservationId = params.editId;
  const reservation = await getBooking(reservationId);
  const { maxCapacity } = await getCabin(reservation.cabinId);

  async function handleSubmit(formData) {
    "use server";

    await editReservation(formData, reservationId);
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <form
        className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900"
        action={handleSubmit}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <SelectGuestsNum
            maxCapacity={maxCapacity}
            numGuests={reservation.numGuests}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
            defaultValue={reservation.observations}
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <ClientButtton pendingLabel={"...Updating"}>
            Update Reservation
          </ClientButtton>
        </div>
      </form>
    </div>
  );
}
