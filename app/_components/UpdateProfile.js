"use client";

import { updateGuest } from "../_lib/actions.js";
import { useFormStatus } from "react-dom";

function UpdateProfile({ guest, children }) {
  const { fullName, email, nationality, nationalID, countryFlag } = guest;

  return (
    <form
      className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900"
      action={updateGuest}
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          defaultValue={fullName}
          name="fullName"
          disabled
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          name="email"
          disabled
          defaultValue={email}
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <Button />
      </div>
    </form>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="px-8 py-4 font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? "...Updating" : "Update profile"}
    </button>
  );
}

export default UpdateProfile;
