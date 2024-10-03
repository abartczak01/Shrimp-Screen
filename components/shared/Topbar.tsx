import Link from "next/link";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
export default function Topbar() {
  // TODO: Replace user_id with the actual user ID
  const user_id = "user_id";
  return (
    // max-w-6xl
    <nav className="bg-tomato px-6 py-2 sm:px-10 fixed top-0 z-30 w-full">
      <div className="max-w-6xl flex items-center justify-between mx-auto">
        <Link href="/" className="flex flex-row items-center gap-1.5">
          <Image src="assets/logo.svg" alt="logo" width={50} height={50} />
          <div className="flex flex-col -skew-y-6 -mt-1">
            <p className="-mb-3.5 text-2xl font-bold">Shrimp</p>
            <p className="text-3xl font-bold">Screen</p>
          </div>
        </Link>
        <div className="flex flex-row gap-1">
          <SignedOut>
            <SignInButton>
              <div className="flex cursor-pointer gap-2.5">
                <Image
                  src="/assets/login.svg"
                  alt="login"
                  width={24}
                  height={24}
                />
                <p className="font-bold">Log In</p>
              </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logo.svg"
                  alt="logout"
                  width={24}
                  height={24}
                ></Image>
              </div>
            </SignOutButton>
            {/* <Link href={`/profile/${user_id}`}>My Tickets</Link>
          <UserButton /> */}
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
