function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-zinc-200 z-50">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

                <a href="#home" className="text-sm font-semibold text-zinc-900 tracking-tight">
                    Ridam<span className="text-violet-600">.</span>
                </a>

                <ul className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
                    <li><a href="#about" className="hover:text-zinc-900 transition-colors">About</a></li>
                    <li><a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a></li>
                    <li><a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a></li>
                    <li><a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a></li>
                </ul>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium px-4 py-2 border border-zinc-300 rounded-lg text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
                >
                    Resume
                </a>

            </div>
        </nav>
    );
}

export default Navbar;