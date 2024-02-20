import Link from "next/link";

// border-4 border-red-500
export default function Header() {
  return (
    <div className=""> 
      <nav className="flex items-start">
        <Link href="/" className='mr-4'>home</Link>
        <Link href="/projects" className='mr-4'>projects</Link>
        <Link href="/bottles" className='mr-4'>bottles</Link>
      </nav>
    </div>
  );
}
