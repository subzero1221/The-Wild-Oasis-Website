function SelectGuestsNum({ maxCapacity, numGuests }) {
  return (
    <select
      name="numGuests"
      id="numGuests"
      className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
      required
      defaultValue={numGuests}
    >
      <option value="" key="">
        Select number of guests...
      </option>
      {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
        <option value={x} key={x}>
          {x} {x === 1 ? "guest" : "guests"}
        </option>
      ))}
    </select>
  );
}

export default SelectGuestsNum;
