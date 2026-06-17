import { FaGithub, FaLinkedin } from "react-icons/fa6";

function EmailIcon() {
    return (
        <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
        </svg>
    );
}

const links = [
    {
        label: "Email",
        value: "ridamrabidas@yahoo.com",
        href: "mailto:ridamrabidas@yahoo.com",
        icon: <EmailIcon />,
        external: false,
    },
    {
        label: "GitHub",
        value: "ladridam",
        href: "https://github.com/ladridam",
        icon: <FaGithub size={20} className="text-zinc-500" />,
        external: true,
    },
    {
        label: "LinkedIn",
        value: "ridam-rabi-das",
        href: "https://www.linkedin.com/in/ridam-rabi-das-a21315317/",
        icon: <FaLinkedin size={20} className="text-zinc-500" />,
        external: true,
    },
];

function Contact() {
    return (
        <section id="contact" className="scroll-mt-24">
            <div className="max-w-5xl mx-auto px-6 py-24">

                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
                    Contact
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-4">
                    Let's talk
                </h2>
                <p className="text-base text-zinc-600 mb-12 max-w-lg">
                    Open to internship opportunities in AI, web development, and product engineering.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                    {links.map(({ label, value, href, icon, external }) => (
                        <a
                            key={label}
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-4 border border-zinc-200 rounded-xl p-5 hover:border-zinc-900 transition-colors group"
                        >
                            <div className="w-10 h-10 border border-zinc-200 rounded-lg flex items-center justify-center shrink-0 group-hover:border-zinc-400 transition-colors">
                                {icon}
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-0.5">
                                    {label}
                                </p>
                                <p className="text-sm font-medium text-zinc-700 truncate">{value}</p>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Contact;