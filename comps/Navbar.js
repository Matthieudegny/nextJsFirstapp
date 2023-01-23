import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image src="/next.svg" width={128} height={128} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  );
}

export default Navbar;
