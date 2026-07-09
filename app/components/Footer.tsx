import { Star } from "./Illustrations";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative bg-[#1C1917] text-[#FFF6E9] border-t-4 border-[#1C1917] py-14">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <p className="font-display font-black text-4xl leading-none">
              Himanshu Kaushik<span className="text-[#B8E6C6]">*</span>
            </p>
            <p className="mt-3 text-sm font-semibold text-[#FFF6E9] opacity-70 max-w-xs">
              A cheerful software developer building calm, fast, human-first software.
            </p>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest mb-3 opacity-70">Wander</p>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <a href="#about" className="hover:text-[#B8E6C6]">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#B8E6C6]">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#B8E6C6]">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B8E6C6]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest mb-3 opacity-70">Elsewhere</p>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <a href="#" className="hover:text-[#F7C6D9]">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F7C6D9]">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#F7C6D9]">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="mailto:hello@himanshu.dev" className="hover:text-[#F7C6D9]">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#FFF6E9]/20 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs font-semibold opacity-70">© {new Date().getFullYear()} Himanshu Kaushik — crafted with ☕ & ❤️</p>
        </div>
      </div>
    </footer>
  );
}