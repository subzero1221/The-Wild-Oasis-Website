import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";
//import { unstable_cache as noStore } from "next/cache";

async function CabinList({ filter }) {
  // noStore();
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayed;

  if (filter === "all") displayed = cabins;
  if (filter === "small")
    displayed = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayed = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displayed = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {displayed.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
