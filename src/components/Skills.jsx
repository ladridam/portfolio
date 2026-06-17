const skillGroups = [
    {
        label: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "Java", "C"],
    },
    {
        label: "Web & Tooling",
        skills: ["React", "Tailwind CSS", "Vite", "HTML / CSS", "Chrome Extensions", "Manifest V3"],
    },
    {
        label: "AI & Automation",
        skills: ["Gemini API", "LLM Integration", "Prompt Engineering", "AI Workflows", "AI Tool Research"],
    },
    {
        label: "Platforms & Tools",
        skills: ["Git", "GitHub", "Figma", "Vercel", "Render", "Ubuntu Linux"],
    },
    {
        label: "Concepts",
        skills: ["REST APIs", "Responsive Design", "WCAG Accessibility", "User-Centered Design", "Version Control"],
    },
];

function Skills() {
    return (
        <section id="skills" className="scroll-mt-24">
            <div className="max-w-5xl mx-auto px-6 py-24">

                <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
                    Skills
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 mb-12">
                    What I work with
                </h2>

                <div className="space-y-6">
                    {skillGroups.map((group) => (
                        <div key={group.label} className="grid md:grid-cols-4 gap-4 items-start">
                            <p className="text-sm font-medium text-zinc-400 pt-1">{group.label}</p>
                            <div className="md:col-span-3 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm text-zinc-700 border border-zinc-200 rounded-md px-3 py-1.5 bg-white hover:border-zinc-400 transition-colors"
                                    >
                                        {skill}
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

export default Skills;