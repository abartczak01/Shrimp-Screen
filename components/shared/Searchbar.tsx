"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  routeType: string;
}

function Searchbar({ routeType }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // query after 0.3s of no input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

  return (
    // TODO: add search icon
    <div className="flex items-center gap-4 w-full ">
      <Image
        src="/assets/tickets.svg"
        alt="search"
        width={24}
        height={24}
        className="object-contain"
      />
      <input
        className="px-4 py-2 w-full focus:outline-none"
        id="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`${
          routeType !== "admin/browse-films"
            ? "Search screenings"
            : "Search films"
        }`}
      />
    </div>
  );
}

export default Searchbar;
