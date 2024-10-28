"use client";
import { adminSidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type AdminSidebarLink = {
  imgUrl: string;
  route: string;
  label: string;
};

export default function AdminSidebar() {
  // TODO: type for link
  const pathname = usePathname();
  return (
    <section className="flex-initial text-xl">
      <div>
        {adminSidebarLinks.map((link: AdminSidebarLink) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`button-hover font-bold hover:bg-tomato flex py-4 px-8 gap-1.5 ${
                isActive && "bg-tomato text-white"
              }`}
            >
              {/* <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              /> */}
              <p>{link.label.toLowerCase()}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
