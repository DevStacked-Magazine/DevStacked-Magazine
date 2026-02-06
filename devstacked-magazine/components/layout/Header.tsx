import Navigation from "../layout/Navigation";
import Link from "next/link";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-28 text-white">
      <div className="">
        <Link href="/">Logo</Link>
      </div>
      <Navigation />
      <div>
        <Button>Get In Touch</Button>
      </div>
    </header>
  );
}
