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
    <section className="flex-initial">
      <div>
        {adminSidebarLinks.map((link: AdminSidebarLink) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`button-hover hover:bg-tomato flex py-1.5 px-2 gap-1.5 ${
                isActive && "bg-tomato"
              }`}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
