import Link from "next/link";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
export default function Topbar() {
  // TODO: Replace user_id with the actual user ID
  // TODO: Replace isAdmin with the actual user role
  const user_id = "user_id";
  const isAdmin = true;
  return (
    // max-w-6xl
    <nav className="fixed top-0 z-30 w-full h-16 px-6 sm:px-10 border-2 border-stone-950">
      <div className="max-w-6xl flex items-center justify-between mx-auto h-full">
        <Link href="/" className="flex flex-row items-center gap-1.5">
          <Image src="assets/logo.svg" alt="logo" width={50} height={50} />
          <div className="flex flex-col -skew-y-6 -mt-1">
            <p className="-mb-3.5 text-2xl font-bold">Shrimp</p>
            <p className="text-3xl font-bold">Screen</p>
          </div>
        </Link>
        <div className="h-full flex">
          {isAdmin && (
            <Link
              href="/admin"
              className="font-bold flex h-full px-3 gap-1.5 items-center button-hover hover:bg-tomato"
            >
              <Image
                src="/assets/profile.svg"
                alt="admin"
                width={24}
                height={24}
              />
              <p>Admin</p>
            </Link>
          )}
          <SignedOut>
            <SignInButton>
              <div className="flex h-full items-center px-3 cursor-pointer gap-2.5 button-hover hover:bg-tomato">
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
            <div className="flex font-bold items-center h-full">
              <Link
                href={`/profile/${user_id}`}
                className="flex h-full px-3 gap-1.5 items-center button-hover hover:bg-tomato"
              >
                <Image
                  src="/assets/profile.svg"
                  alt="login"
                  width={24}
                  height={24}
                />
                <p>Profile</p>
              </Link>

              <SignOutButton>
                <div className="flex items-center px-3 h-full cursor-pointer gap-2 button-hover hover:bg-tomato">
                  <Image
                    src="/assets/logout.svg"
                    alt="logout"
                    width={24}
                    height={24}
                  ></Image>
                  <p>Log out</p>
                </div>
              </SignOutButton>
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
