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
    <nav className="pl-4 fixed bg-alabaster max-w-6xl w-full top-0 z-30 flex items-center justify-between h-24 border-4 border-stone-950 border-t-0">
      <Link href="/" className="flex flex-row items-center gap-2">
        <Image src="/assets/logo.svg" alt="logo" width={56} height={56} />
        <div className="flex flex-col -skew-y-6 -mt-1">
          <p className="-mb-3.5 text-2xl font-bold">Shrimp</p>
          <p className="text-3xl font-bold">Screen</p>
        </div>
      </Link>
      <div className="h-full flex text-xl">
        {isAdmin && (
          <Link href="/admin" className="topbar-btn">
            <Image
              src="/assets/profile.svg"
              alt="admin"
              width={30}
              height={30}
            />
            <p>admin</p>
          </Link>
        )}
        <SignedOut>
          <SignInButton>
            <div className="topbar-btn">
              <Image
                src="/assets/login.svg"
                alt="login"
                width={30}
                height={30}
              />
              <p className="font-bold">log in</p>
            </div>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex font-bold items-center h-full">
            <Link href={`/profile/${user_id}`} className="topbar-btn">
              <Image
                src="/assets/profile.svg"
                alt="login"
                width={30}
                height={30}
              />
              <p>profile</p>
            </Link>

            <SignOutButton>
              <div className="topbar-btn gap-2.5">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={34}
                  height={34}
                ></Image>
                <p>log out</p>
              </div>
            </SignOutButton>
          </div>
        </SignedIn>
      </div>
      {/* </div> */}
    </nav>
  );
}
