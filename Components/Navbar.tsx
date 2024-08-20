// Components/Navbar.tsx
'use client'
import { NAV_LINKS } from "@/Constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation"; // Import useRouter hook
import {UserButton} from "@clerk/nextjs";

const Navbar = () => {
  const router = useRouter(); // Initialize useRouter hook

  const handleSignUpClick = () => {
    router.push("/sign-up"); // Navigate to /sign-up route
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-4">
      <Link href="/">
        <h1 style={{
          fontSize: '35px',
          fontWeight: 'bold',
          color: 'seagreen',
          textDecoration: 'none',
          margin: 0,
          padding: 0,
        }}>TravEasy</h1>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        )))}
      </ul>

      <div className="lg:flexCenter hidden">
        {/* Pass handleSignUpClick as onClick prop */}
        <Button
          type="button"
          title="Sign-up"
          icon="/user.svg"
          variant="btn_dark_green"
          onClick={handleSignUpClick}
        />
      </div>
      
      <UserButton afterSignOutUrl="/"/>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar;
