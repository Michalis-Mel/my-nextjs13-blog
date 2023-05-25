import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-2xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Michael
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle  gap-8 text-white text-2xl lg:text-3xl">
          <Link
            className="text-white/80 hover:text-white"
            href="https://github.com/Michalis-Mel"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/80 hover:text-white"
            href="https://www.linkedin.com/in/mixalis-meliopoulos/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-white/80 hover:text-white"
            href="https://www.facebook.com/mixalis.meliopoulos/"
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link
            className="text-white/80 hover:text-white"
            href="https://www.instagram.com/mixalis__meliopoulos/"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </nav>
  );
}
