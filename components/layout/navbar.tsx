export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-sm font-semibold tracking-[0.2em] text-white">
          DEVRAT SHANDILYA
        </div>

        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#writings" className="transition hover:text-white">
            Writings
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}