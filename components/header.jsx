import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-transparent p-2 px-20 flex items-center justify-between w-full shadow-md">
      <div className="text-2xl font-semibold">
        <span className="block text-sm font-normal">IIUM</span>
        <span>Caring Club</span>
      </div>
      <div className="flex gap-5">
        <Link
          href={""}
          className="font-semibold text-lg p-2 rounded-xl transition ease-in-out duration-150 hover:bg-neutral"
        >
          Home
        </Link>
        <Link
          href={""}
          className="font-semibold text-lg p-2 rounded-xl transition ease-in-out duration-150 hover:bg-neutral"
        >
          Our Programs
        </Link>
        <Link
          href={""}
          className="font-semibold text-lg p-2 rounded-xl transition ease-in-out duration-150 hover:bg-neutral"
        >
          About Us
        </Link>
      </div>
      <div className="flex gap-5">
        <button className="btn btn-accent">
          Get In Contact <FaPhoneVolume />
        </button>
        <button className="btn btn-primary">
          Donate <FaDonate />
        </button>
      </div>
    </header>
  );
}
