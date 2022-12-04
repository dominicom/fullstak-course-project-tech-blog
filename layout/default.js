import Link from 'next/link';
import { Children } from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <div className="p-10 font-mono">
        <nav className="bg-blue-100 p-5 flex justify-center">
          <Link href="/">
            <div className="shadow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-50">
              Blog
            </div>
          </Link>
          <Link href="/about">
            <div className="shadow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-50">
              About
            </div>
          </Link>
        </nav>
      </div>
      
      <main>
        {children}
      </main>
      <footer className="bg-blue-400 p-5 text-gray-100 text-center">
        © {new Date().getFullYear()}
      </footer>
    </div>
  );
}