const projects = [
    {
        name: "QueryBridge",
        tagline: "AI-Powered Search Enhancement Extension",
        description:
            "A Chrome extension that uses Gemini 2.5 Flash to transform vague search queries into precise, context-aware alternatives — before you even hit search. Handles secure API key storage, clean browser integration, and user interaction flows via Manifest V3 architecture.",
        stack: ["JavaScript", "Chrome Extensions API", "Gemini API", "Manifest V3", "HTML / CSS"],
        github: "https://github.com/ladridam/QueryBridge",
        live: null,
        year: "2026",
    },
    {
        name: "Encore",
        tagline: "Mentorship Platform for Retirees · Designathon",
        description:
            "Built at a Designathon — a platform connecting retirees with meaningful mentorship opportunities. Accessibility-first throughout: WCAG-compliant high-contrast typography, Radix UI primitives for reliable screen-reader support, and a visual hierarchy tuned for an elderly audience.",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI"],
        github: "https://github.com/ladridam/encore",
        live: "https://encore-seven.vercel.app/",
        year: "2026",
    },
];

function Projects() {
    return (
        <section id="projects" className="bg-zinc-50 scroll-mt-24">
            <div className="max-w-5xl mx-auto px-6 py-24">

                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
                    Projects
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-12">
                    Things I've built
                </h2>

                <div className="space-y-6">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="border border-zinc-200 bg-white rounded-xl p-8 hover:border-zinc-400 transition-colors"
                        >
                            {/* Header row */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-xl font-bold text-zinc-900">{project.name}</h3>
                                        <span className="text-xs text-zinc-400 font-medium">{project.year}</span>
                                    </div>
                                    <p className="text-sm font-medium text-zinc-500">{project.tagline}</p>
                                </div>

                                <div className="flex gap-2 shrink-0">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-zinc-600 border border-zinc-200 rounded-lg px-3 py-1.5 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
                                    >
                                        GitHub ↗
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-white bg-zinc-900 rounded-lg px-3 py-1.5 hover:bg-[#ad2831] transition-colors"
                                        >
                                            Live ↗
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs text-zinc-500 border border-zinc-100 bg-zinc-50 rounded-md px-2.5 py-1"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Projects;