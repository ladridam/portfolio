import { FaGithub, FaLinkedin } from "react-icons/fa6";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/ladridam", icon: <FaGithub size={14} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ridam-rabi-das-a21315317/", icon: <FaLinkedin size={14} /> },
];

function Footer() {
    return (
        <footer className="bg-[#0d1f3c] text-white">

            {/* Main panel */}
            <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

                {/* Left — identity + contact */}
                <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-blue-300 mb-3">
                        Portfolio
                    </p>
                    <h2 className="text-2xl font-bold tracking-tight mb-6">
                        Ridam Rabi Das
                    </h2>

                    <div className="space-y-1.5 text-sm text-blue-100 mb-8">
                        <p>Siliguri, West Bengal, India</p>
                        <p><a className="hover:text-white transition-colors">Inspiria Knowledge Campus</a></p>
                        <a
                            href="mailto:ridamrabidas@yahoo.com"
                            className="block hover:text-white transition-colors"
                        >
                            ridamrabidas@yahoo.com
                        </a>
                    </div>

                    <div className="flex gap-5">
                        {socialLinks.map(({ label, href, icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
                            >
                                {icon}
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right — nav + resume */}
                <div className="md:border-l md:border-blue-900 md:pl-12">
                    <p className="text-xs font-medium uppercase tracking-widest text-blue-300 mb-5">
                        Quick Links
                    </p>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {navLinks.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="text-sm text-blue-100 hover:text-white transition-colors"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-100 hover:text-white transition-colors"
                            >
                                Resume ↗
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/ladridam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-100 hover:text-white transition-colors"
                            >
                                GitHub ↗
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Copyright bar */}
            <div className="border-t border-blue-900">
                <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-blue-300">© 2026 Ridam Rabi Das</p>
                    <p className="text-xs text-blue-300">Designed & built by Ridam</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;