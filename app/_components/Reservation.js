import ReservationForm from "@/app/_components/ReservationForm";
import DateSelector from "@/app/_components/DateSelector";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px] mb-10 text-accent-400">
      {" "}
      <DateSelector
        bookedDates={bookedDates}
        cabin={cabin}
        settings={settings}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
