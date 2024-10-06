import { UserProfile } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex justify-start">
      <div className="border-solid border-r-2 border-stone-950 bg-white">
        <UserProfile />
      </div>
      <div className="text-xl flex flex-col align-center w-full">
        <button className="flex-1">Tickets</button>
        <button className="flex-1">Account Settings</button>
      </div>
    </div>
  );
}
