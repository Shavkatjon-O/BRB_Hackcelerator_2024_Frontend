import LucideIcon from "@/components/LucideIcon"
import Link from 'next/link';

const HeaderSection = () => (
  <header className="bg-blue-900 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold flex items-center">
        <LucideIcon name="Home" className="w-8 h-8 inline mr-2" />
        YourBank
      </Link>
      <nav className="space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/features" className="hover:underline">Features</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
      <a href="/get-started" className="bg-yellow-500 text-blue-900 py-2 px-4 rounded-lg font-semibold">Get Started</a>
    </div>
  </header>
);

export default HeaderSection;
