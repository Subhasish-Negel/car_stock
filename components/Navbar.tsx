import { CustomButton } from "@/components";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex, justify-center items-center">
          <Image
          src="/logo.svg"
          alt="Car Hub Logo"
          height={18}
          width={118}
          className="object-contain"/>
        </Link>
        <CustomButton 
        title="Sign In"
        btnType="button"
        containerStyles="bg-white min-w-[130px] rounded-full text-blue-500"
        />
      </nav>
    </header>
  );
};

export default Navbar;
