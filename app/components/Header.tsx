import Link from "next/link";

function Header() {
  return (
    <div className="fixed top-0 z-1 flex w-full px-4 pt-4">
      <Link href="/" className="flex-1">
        <h2 className="">/Home</h2>
      </Link>
      <div className="flex space-x-4 text-sm uppercase">
        <Link href="/work" className="hover:underline">
          Work
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
